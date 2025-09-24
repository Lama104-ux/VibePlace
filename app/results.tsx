import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAtom } from 'jotai';
import { StatusBar } from 'expo-status-bar';

import { PlaceCard } from '../components/PlaceCard';
import { selectedMoodAtom, filteredPlacesAtom } from '../store/moodStore';
import { MOODS } from '../data/moodData';
import { Place } from '../types/mood';

export default function ResultsScreen() {
    const router = useRouter();
    const [selectedMood] = useAtom(selectedMoodAtom);
    const [filteredPlaces] = useAtom(filteredPlacesAtom);

    // Hitta det valda humöret
    const currentMood = MOODS.find(mood => mood.id === selectedMood);

    // Om inget humör är valt, gå tillbaka till hem
    if (!selectedMood || !currentMood) {
        router.replace('/');
        return null;
    }

    const handlePlacePress = (place: Place) => {
        router.push(`/place/${place.id}`);
    };

    const handleBackPress = () => {
        router.back();
    };
