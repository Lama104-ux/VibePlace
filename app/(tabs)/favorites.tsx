import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { PlaceCard } from '../../components/PlaceCard';
import { useFavorites } from '../../hooks/useFavorites';
import { Place, MoodType } from '../../types/mood';
import { MOODS } from '../../data/moodData';

export default function FavoritesScreen() {
    const router = useRouter();
    const { favorites } = useFavorites();

    const handlePlacePress = (place: Place) => {
        router.push(`/place/${place.id}`);
    };

    // Gruppera favoriter efter humör
    const favoritesByMood = favorites.reduce((acc, place) => {
        place.moodMatch.forEach(mood => {
            if (!acc[mood]) {
                acc[mood] = [];
            }
            if (!acc[mood].some(p => p.id === place.id)) {
                acc[mood].push(place);
            }
        });
        return acc;
    }, {} as Record<MoodType, Place[]>);

    // Få alla humör som har favoriter
    const moodsWithFavorites = Object.keys(favoritesByMood) as MoodType[];
