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

