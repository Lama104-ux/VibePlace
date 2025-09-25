// Hook för att spara och hämta favoritplatser med SecureStore
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAtom } from 'jotai';
import { favoritePlacesAtom } from '../store/moodStore';
import { Place } from '../types/mood';

const FAVORITES_KEY = 'favorite_places';

export const useFavorites = () => {
    const [favorites, setFavorites] = useAtom(favoritePlacesAtom);

    // Ladda sparade favoriter när appen startar
    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const storedFavorites = await SecureStore.getItemAsync(FAVORITES_KEY);
            if (storedFavorites) {
                const parsedFavorites: Place[] = JSON.parse(storedFavorites);
                setFavorites(parsedFavorites);
            }
        } catch (error) {
            console.error('Error loading favorites:', error);
        }
    };

