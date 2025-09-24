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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            {/* Header med humörinformation */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={handleBackPress}
                    >
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>

                    <View style={styles.moodInfo}>
                        <Text style={[styles.moodEmoji, { color: currentMood.color }]}>
                            {currentMood.emoji}
                        </Text>
                        <Text style={styles.moodName}>Humör: {currentMood.name}</Text>
                        <Text style={styles.moodDescription}>{currentMood.description}</Text>
                    </View>

                    {/* Tom div för att centrera innehållet */}
                    <View style={styles.placeholder} />
                </View>
            </View>

            {/* Resultat */}
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsTitle}>
                    Rekommenderade platser för dig
                </Text>
                <Text style={styles.resultsSubtitle}>
                    {filteredPlaces.length} platser hittades
                </Text>
            </View>

            {/* Lista med platser */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {filteredPlaces.length > 0 ? (
                    filteredPlaces.map((place, index) => (
                        <PlaceCard
                            key={place.id}
                            place={place}
                            index={index}
                            onPress={handlePlacePress}
                        />
                    ))
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>
                            Inga platser hittades för detta humör
                        </Text>
                        <Text style={styles.emptySubtext}>
                            Prova ett annat humör eller kontrollera din internetanslutning
                        </Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
