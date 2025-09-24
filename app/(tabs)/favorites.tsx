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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Mina Favoriter</Text>
                <Text style={styles.subtitle}>
                    {favorites.length} sparade platser
                </Text>
            </View>

            {favorites.length === 0 ? (
                // Tom skärm när inga favoriter finns
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyIcon}>💔</Text>
                    <Text style={styles.emptyTitle}>Inga favoriter än</Text>
                    <Text style={styles.emptyText}>
                        Utforska platser baserat på ditt humör och spara dina favoriter genom att trycka på hjärtat
                    </Text>
                    <TouchableOpacity
                        style={styles.exploreButton}
                        onPress={() => router.push('/')}
                    >
                        <Text style={styles.exploreButtonText}>Utforska platser</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                // Lista med favoriter grupperade efter humör
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {moodsWithFavorites.map((moodId) => {
                        const mood = MOODS.find(m => m.id === moodId);
                        const places = favoritesByMood[moodId];

                        if (!mood) return null;

                        return (
                            <View key={moodId} style={styles.moodSection}>
                                {/* Humör header */}
                                <View style={styles.moodHeader}>
                                    <Text style={styles.moodEmoji}>{mood.emoji}</Text>
                                    <View style={styles.moodInfo}>
                                        <Text style={styles.moodName}>{mood.name}</Text>
                                        <Text style={styles.moodCount}>
                                            {places.length} {places.length === 1 ? 'plats' : 'platser'}
                                        </Text>
                                    </View>
                                </View>

                                {/* Platser för detta humör */}
                                {places.map((place, index) => (
                                    <PlaceCard
                                        key={`${moodId}-${place.id}`}
                                        place={place}
                                        index={index}
                                        onPress={handlePlacePress}
                                    />
                                ))}
                            </View>
                        );
                    })}
                </ScrollView>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 12,
        textAlign: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 30,
    },
    exploreButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 25,
    },
    exploreButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },

});