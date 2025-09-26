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


        };


    };