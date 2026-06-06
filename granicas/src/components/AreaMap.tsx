"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

declare global {
  interface Window {
    google?: any;
    __gmapsPromise?: Promise<void>;
  }
}

function loadGoogleMaps(key: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.maps) return Promise.resolve();
  if (window.__gmapsPromise) return window.__gmapsPromise;
  window.__gmapsPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly&language=pl&region=PL`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.appendChild(s);
  });
  return window.__gmapsPromise;
}

// Lekki, jasny styl mapy (ukrywa POI/biznesy, łagodne kolory pod markę).
const MAP_STYLE = [
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  { featureType: "water", stylers: [{ color: "#cfe3df" }] },
  { featureType: "landscape", stylers: [{ color: "#f3f1e9" }] },
];

export default function AreaMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!KEY || !ref.current) return;
    let cancelled = false;

    loadGoogleMaps(KEY)
      .then(() => {
        if (cancelled || !ref.current) return;
        const g = window.google;
        const center = { lat: site.area.map.lat, lng: site.area.map.lng };

        const map = new g.maps.Map(ref.current, {
          center,
          zoom: 8,
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "cooperative",
          styles: MAP_STYLE,
        });

        const circle = new g.maps.Circle({
          map,
          center,
          radius: site.area.map.radiusKm * 1000,
          strokeColor: "#1f5c2e",
          strokeOpacity: 0.85,
          strokeWeight: 2,
          fillColor: "#1f5c2e",
          fillOpacity: 0.12,
        });

        new g.maps.Marker({ map, position: center, title: site.brand });

        const bounds = circle.getBounds();
        if (bounds) map.fitBounds(bounds, 16);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Brak klucza → schludny fallback (do czasu wklejenia klucza w .env.local).
  if (!KEY) {
    return (
      <div className="flex h-56 w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line bg-sage/60 p-6 text-center sm:h-72 sm:p-8 lg:h-80">
        <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <MapPin className="size-6" aria-hidden />
        </span>
        <p className="text-sm font-semibold text-foreground">
          Mapa zasięgu pojawi się po dodaniu klucza Google Maps
        </p>
        <p className="max-w-xs text-xs text-muted">
          Wklej klucz do{" "}
          <code className="rounded bg-surface px-1 py-0.5">.env.local</code>{" "}
          jako{" "}
          <code className="rounded bg-surface px-1 py-0.5">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          </code>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        className="h-56 w-full overflow-hidden rounded-xl border border-line shadow-sm sm:h-72 lg:h-80"
      />
      {error && (
        <p className="mt-2 text-sm text-muted">
          Nie udało się załadować mapy - sprawdź klucz Google Maps (Maps
          JavaScript API + billing).
        </p>
      )}
    </div>
  );
}
