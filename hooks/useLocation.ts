// Hook för att hantera användarens GPS-position
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { useSetAtom } from 'jotai';
import { userLocationAtom } from '../store/moodStore';
import { UserLocation } from '../types/mood';

export const useLocation = () => {
    const [location, setLocation] = useState<UserLocation | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const setUserLocation = useSetAtom(userLocationAtom);

    const getCurrentLocation = async () => {
        setLoading(true);
        try {
            // Be om tillstånd att använda GPS
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            // Hämta nuvarande position/ Använd watch position funktion på expo.bara byt de här två rader !
            let currentLocation = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });

            const userLoc: UserLocation = {
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                accuracy: currentLocation.coords.accuracy || undefined,
            };

            setLocation(userLoc);
            setUserLocation(userLoc); // Uppdatera global state
            setErrorMsg(null);
        } catch (error) {
            setErrorMsg('Error getting location');
            console.error('Location error:', error);
        } finally {
            setLoading(false);
        }
    };

    // Beräkna avståndet mellan två punkter (i kilometer)
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
        const R = 6371; // Jordens radie i km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    return {
        location,
        errorMsg,
        loading,
        getCurrentLocation,
        calculateDistance,
    };
};