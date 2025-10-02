// Här använder jag Jotai för att hantera data som behövs i hela appen
import { atom } from 'jotai';
import { MoodType, Place, UserLocation } from '../types/mood';

// Atom för vilket humör användaren har valt
export const selectedMoodAtom = atom<MoodType | null>(null);

export const userLocationAtom = atom<UserLocation | null>(null);
export const recommendedPlacesAtom = atom<Place[]>([]);
export const favoritePlacesAtom = atom<Place[]>([]);

// Atom för om appen laddar data
export const loadingAtom = atom<boolean>(false);

// Derived atom - hämtar platser som matchar valt humör
export const filteredPlacesAtom = atom((get) => {
    const selectedMood = get(selectedMoodAtom);
    const recommendedPlaces = get(recommendedPlacesAtom);

    if (!selectedMood) return [];

    return recommendedPlaces.filter(place =>
        place.moodMatch.includes(selectedMood)
    );
});