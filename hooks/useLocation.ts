import * as Location from 'expo-location';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { userLocationAtom } from '../store/moodStore';
import { UserLocation } from '../types/mood';

export const useLocation = () => {
    const [location, setLocation] = useState<UserLocation | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [subscription, setSubscription] = useState<Location.LocationSubscription | null>(null);
    const setUserLocation = useSetAtom(userLocationAtom);

    // Funktion för att hämta adress från koordinater med fallback till Google API
    const getAddressFromCoords = async (latitude: number, longitude: number) => {
        try {
      
            const result = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            if (result && result.length > 0) {
                const addr = result[0];
                
                const addressParts = [
                    addr.street,
                    addr.city || addr.district || addr.subregion,
                    addr.region,
                    addr.country
                ].filter(Boolean);
                
                const formattedAddress = addressParts.join(', ');
                
                // Om vi inte får någon bra adress, försök med fetch API istället
                if (!addr.city && !addr.country) {
                    await fetchAddressFromAPI(latitude, longitude);
                } else {
                    setAddress(formattedAddress);
                }
            } else {
                // Om Expo inte ger något resultat, använd API
                await fetchAddressFromAPI(latitude, longitude);
            }
        } catch (error) {
            console.error('Error getting address:', error);
            
            setAddress(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        }
    };

    // Alternativ metod Hämta adress från OpenStreetMap Nominatim api
    const fetchAddressFromAPI = async (latitude: number, longitude: number) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
                {
                    headers: {
                        'User-Agent': 'VibePlace App'
                    }
                }
            );
            
            const data = await response.json();
            
            if (data && data.address) {
                const addr = data.address;
                const addressParts = [
                    addr.road || addr.pedestrian,
                    addr.suburb || addr.neighbourhood,
                    addr.city || addr.town || addr.village,
                    addr.country
                ].filter(Boolean);
                
                setAddress(addressParts.join(', '));
            } else {
                // Om allt annat misslyckas, visa koordinater
                setAddress(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
            }
        } catch (error) {
            console.error('Error fetching from API:', error);
            setAddress(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        }
    };

    const getCurrentLocation = async () => {
        setLoading(true);
        try {
            // Be om tillstånd att använda GPS
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setLoading(false);
                return;
            }

            //  Hämta nuvarande position direkt för att visa den omedelbart
            const currentLocation = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });

            const userLoc: UserLocation = {
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                accuracy: currentLocation.coords.accuracy || undefined,
            };

            console.log('📍 Din position:', userLoc); 

            setLocation(userLoc);
            setUserLocation(userLoc);
            setErrorMsg(null);
            setLoading(false);

            await getAddressFromCoords(userLoc.latitude, userLoc.longitude);

            const locationSubscription = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 10000,
                    distanceInterval: 50, 
                },
                async (newLocation) => {
                    const updatedLoc: UserLocation = {
                        latitude: newLocation.coords.latitude,
                        longitude: newLocation.coords.longitude,
                        accuracy: newLocation.coords.accuracy || undefined,
                    };

                    setLocation(updatedLoc);
                    setUserLocation(updatedLoc);
                    
                   
                    await getAddressFromCoords(updatedLoc.latitude, updatedLoc.longitude);
                }
            );

            setSubscription(locationSubscription);
        } catch (error) {
            setErrorMsg('Error getting location');
            console.error('Location error:', error);
            setLoading(false);
        }
    };
      //för att spara batteri. 
    const stopWatching = () => {
        if (subscription) {
            subscription.remove();
            setSubscription(null);
        }
    };

    useEffect(() => {
        return () => {
            stopWatching();
        };
    }, []);


    return {
        location,
        address,
        errorMsg,
        loading,
        getCurrentLocation,
        stopWatching,
    };
};