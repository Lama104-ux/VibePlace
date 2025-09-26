import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Place } from '../types/mood';
import { useFavorites } from '../hooks/useFavorites';

interface Props {
    place: Place;
    index: number;
    onPress: (place: Place) => void;
}

export const PlaceCard: React.FC<Props> = ({ place, onPress }) => {
    const { toggleFavorite, isFavorite } = useFavorites();

    const handlePress = () => {
        onPress(place);
    };

    const handleFavoritePress = () => {
        toggleFavorite(place);
    };

    const isPlaceFavorite = isFavorite(place.id);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
            activeOpacity={0.7}
        >
            <View style={styles.card}>

                <Image
                    source={{ uri: place.image }}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{place.name}</Text>
                        <TouchableOpacity
                            style={styles.favoriteButton}
                            onPress={handleFavoritePress}
                        >
                            <Text style={styles.favoriteIcon}>
                                {isPlaceFavorite ? '❤️' : '🤍'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.type}>{place.type}</Text>
                    <Text style={styles.address}>{place.address}</Text>
                    <Text style={styles.description}>{place.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
    },
    content: {
        padding: 16,
    },
