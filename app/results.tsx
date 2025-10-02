import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAtom } from 'jotai';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PlaceCard } from '../components/PlaceCard';
import { MOODS } from '../data/moodData';
import { filteredPlacesAtom, selectedMoodAtom } from '../store/moodStore';
import { Place } from '../types/mood';

export default function ResultsScreen() {
    const router = useRouter();
    const [selectedMood] = useAtom(selectedMoodAtom);
    const [filteredPlaces] = useAtom(filteredPlacesAtom);
    const currentMood = MOODS.find(mood => mood.id === selectedMood);

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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeeeff',
        paddingVertical: 15,
        backgroundColor: '#fef3e2',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    backButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 44,
    },
    moodInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moodEmoji: {
        fontSize: 40,
        marginBottom: 4,
        textAlign: 'center',
    },
    moodName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
        textAlign: 'center',
    },
    moodDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    placeholder: {
        width: 44,
    },
    resultsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    resultsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
        textAlign: 'center',
    },
    resultsSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 60,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
});