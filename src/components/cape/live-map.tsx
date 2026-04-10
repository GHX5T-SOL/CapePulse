"use client";

import { useEffect, useMemo, useState } from "react";
import L from "leaflet";
import "leaflet.heat";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { heatZones } from "@/lib/site-data";

type HeatLayerFactory = typeof L & {
  heatLayer: (latlngs: Array<[number, number, number]>, options?: Record<string, unknown>) => L.Layer;
};

function HeatOverlay() {
  const map = useMap();
  const heatData = useMemo(
    () => heatZones.map((zone) => [zone.coordinates[0], zone.coordinates[1], zone.intensity] as [number, number, number]),
    []
  );

  useEffect(() => {
    const heatLayer = (L as HeatLayerFactory).heatLayer(heatData, {
      radius: 40,
      blur: 28,
      maxZoom: 14,
      gradient: {
        0.2: "#7FE4C3",
        0.45: "#00A3E6",
        0.7: "#FFB547",
        1: "#FF6B4A",
      },
    });

    heatLayer.addTo(map);

    return () => {
      heatLayer.remove();
    };
  }, [heatData, map]);

  return null;
}

const markerIcon = L.divIcon({
  className: "capepulse-live-icon",
  html: '<div class="map-pulse"></div>',
  iconAnchor: [8, 8],
});

export function LiveMap({ condensed = false }: { condensed?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="chapter-card h-[24rem] animate-pulse bg-white/30" />;
  }

  return (
    <div className={condensed ? "h-[24rem] overflow-hidden rounded-[2rem]" : "h-[38rem] overflow-hidden rounded-[2.2rem]"}>
      <MapContainer center={[-33.9249, 18.4241]} className="h-full w-full" scrollWheelZoom={false} zoom={11.1}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HeatOverlay />
        {heatZones.map((zone) => (
          <Marker key={zone.id} icon={markerIcon} position={zone.coordinates}>
            <Popup>
              <div className="space-y-1">
                <p className="font-semibold">{zone.name}</p>
                <p className="text-sm text-slate-600">{zone.headline}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{zone.activeNow} active now</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
