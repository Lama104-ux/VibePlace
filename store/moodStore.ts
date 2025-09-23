// Här använder jag Jotai för att hantera data som behövs i hela appen

import { atom } from 'jotai';
import { MoodType, Place, UserLocation } from '../types/mood';

// Atom för vilket humör användaren har valt
export const selectedMoodAtom = atom<MoodType | null>(null);

// Atom för användarens nuvarande position
export const userLocationAtom = atom<UserLocation | null>(null);

