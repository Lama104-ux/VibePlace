// Animerad knapp för att välja humör med "breathing" effekt
import React, { useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Mood } from '../types/mood';

interface Props {
    mood: Mood;
    isSelected: boolean;
    onPress: (mood: Mood) => void;
}

export const MoodButton: React.FC<Props> = ({ mood, isSelected, onPress }) => {
    // Shared values för animationer
    const scale = useSharedValue(1);
    const breathingScale = useSharedValue(1);

    // Starta "breathing" animationen när komponenten laddas
    useEffect(() => {
        breathingScale.value = withRepeat(
            withTiming(1.05, { duration: 2000 }),
            -1,
            true
        );
    }, []);

    // Animerad stil för knappen
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: scale.value * breathingScale.value }
            ],
        };
    });

    // Animerad stil för vald knapp
    const selectedStyle = useAnimatedStyle(() => {
        return {
            opacity: isSelected ? 1 : 0.7,
            transform: [
                { scale: isSelected ? 1.1 : 1 }
            ],
        };
    });

    const handlePress = () => {
        // Haptic feedback
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

        // Spring animation när man trycker
        scale.value = withSpring(0.95, { duration: 100 }, () => {
            scale.value = withSpring(1, { duration: 200 });
        });

        // Kör onPress callback
        runOnJS(onPress)(mood);
    };

    // Skapa gradient-färger baserat på humörfärg
    const gradientColors: [string, string] = [
        mood.color,
        mood.color + '80',
    ];

    return (
        <Animated.View style={[animatedStyle, selectedStyle]}>
            <TouchableOpacity
                style={styles.button}
                onPress={handlePress}
                activeOpacity={0.8}
            >
                <LinearGradient
                    colors={gradientColors}
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Text style={styles.emoji}>{mood.emoji}</Text>
                    <Text style={styles.name}>{mood.name}</Text>
                    <Text style={styles.description}>{mood.description}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 160,
        height: 120,
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    emoji: {
        fontSize: 32,
        marginBottom: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 2,
    },
    description: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        opacity: 0.9,
    },
});