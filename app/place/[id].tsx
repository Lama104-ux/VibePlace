import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PLACES, MOODS } from '../../data/moodData';
import { useFavorites } from '../../hooks/useFavorites';

export default function PlaceDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { toggleFavorite, isFavorite } = useFavorites();
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
    const openInMaps = () => {
        const address = encodeURIComponent(place.address);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
        
        Linking.openURL(googleMapsUrl).catch(err => 
            console.error('Kunde inte öppna Google Maps:', err)
        );
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
                        
                        {/* Klickbar adress */}
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Adress:</Text>
                            <TouchableOpacity onPress={openInMaps} style={styles.addressButton}>
                                <Text style={styles.addressLink}>
                                    {place.address}
                                </Text>
                                <Text style={styles.mapIcon}> 📍</Text>
                            </TouchableOpacity>
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
    infoRow: {
        flexDirection: 'row',
        marginBottom: 8,
        alignItems: 'flex-start',
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        width: 120,
        flexShrink: 0,
    },
    infoValue: {
        fontSize: 14,
        color: '#333',
        flex: 1,
        lineHeight: 18,
    },
       addressButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressLink: {
        fontSize: 14,
        color: '#007AFF',
        textDecorationLine: 'underline',
        flex: 1,
        lineHeight: 18,
    },
    mapIcon: {
        fontSize: 16,
        marginLeft: 4,
    },


    backButtonFloat: {
        position: 'absolute',
        top: 60,
        left: 20,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    backIcon: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});