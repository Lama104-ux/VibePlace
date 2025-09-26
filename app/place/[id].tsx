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

                {/* Innehåll */}
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.titleSection}>
                            <Text style={styles.name}>{place.name}</Text>
                            <Text style={styles.type}>{place.type}</Text>
                            <Text style={styles.address}>{place.address}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.favoriteButton}
                            onPress={handleFavoritePress}
                        >
                            <Text style={styles.favoriteIcon}>
                                {isPlaceFavorite ? '❤️' : '🤍'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.description}>{place.description}</Text>

                    <View style={styles.infoSection}>
                        <Text style={styles.sectionTitle}>Information</Text>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Typ:</Text>
                            <Text style={styles.infoValue}>{place.type}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Adress:</Text>
                            <Text style={styles.infoValue}>{place.address}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Passar för humör:</Text>
                            <Text style={styles.infoValue}>
                                {getMoodNames(place.moodMatch)}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Tillbaka-knapp */}
            <TouchableOpacity
                style={styles.backButtonFloat}
                onPress={() => router.back()}
            >
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    scrollView: {
        flex: 1,
    },
    heroImage: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    titleSection: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    type: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '600',
        marginBottom: 4,
    },
    address: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
        lineHeight: 18,
    },
    favoriteButton: {
        padding: 8,
    },
    favoriteIcon: {
        fontSize: 28,
    },
    description: {
        fontSize: 16,
        color: '#333',
        lineHeight: 22,
        marginBottom: 24,
    },
    infoSection: {
        backgroundColor: '#f8f8f8',
        padding: 16,
        borderRadius: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
