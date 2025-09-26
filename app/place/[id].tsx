import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PLACES, MOODS } from '../../data/moodData';
import { useFavorites } from '../../hooks/useFavorites';

export default function PlaceDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { toggleFavorite, isFavorite } = useFavorites();

    // Hitta platsen baserat på ID
    const place = PLACES.find(p => p.id === id);

    if (!place) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar style="dark" />
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Plats hittades inte</Text>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.backButtonText}>Tillbaka</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    const isPlaceFavorite = isFavorite(place.id);

    const handleFavoritePress = () => {
        toggleFavorite(place);
    };

    // Hitta humörnamn för varje mood ID
    const getMoodNames = (moodIds: string[]): string => {
        return moodIds.map(moodId => {
            const mood = MOODS.find(m => m.id === moodId);
            return mood ? mood.name : moodId;
        }).join(', ');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            <ScrollView style={styles.scrollView}>
                {/* Huvudbild */}
                <Image
                    source={{ uri: place.image }}
                    style={styles.heroImage}
                    resizeMode="cover"
                />

