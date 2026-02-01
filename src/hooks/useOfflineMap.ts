import { useState, useCallback } from 'react';
import Mapbox from '@rnmapbox/maps';

export const useOfflineMap = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const downloadLondon = useCallback(async (citySelectedArray: any) => {
        
        if (!citySelectedArray || !citySelectedArray.bounds) return;
        setIsLoading(true);
        setError(null);

        try {
            // 1. Check if it exists so we don't waste data/storage
            const packs = await Mapbox.offlineManager.getPacks();

            if (packs.find((p) => p.name === 'LondonTour')) {
                console.log('London map is already offline.');
                setProgress(100);
                setIsLoading(false);
                return;
            }
            Mapbox.offlineManager.setTileCountLimit(5000);

            // 3. Start the download
            await Mapbox.offlineManager.createPack(
            {
                name: 'LondonTour',
                styleURL: "mapbox://styles/vicrego/cmkkzon37000901s8ev408spz",
                minZoom: 13,
                maxZoom: 15,
                bounds: [
                    citySelectedArray.bounds.ne,
                    citySelectedArray.bounds.sw
                ],
            },
            // Progress Callback
            (pack, status) => {
                const percent = Math.round(status.percentage);
                setProgress(percent);
                if (status.percentage === 100) setIsLoading(false);

            },
            // Error Callback
            (pack, err: any) => {
                console.error("Offline pack error", err);
                setError(err);
                setIsLoading(false);
            }
        );
        } catch (e: any) {
            setError(e?.message);
            setIsLoading(false);
        }
    }, []);

  return { downloadLondon, progress, isLoading, error };
};