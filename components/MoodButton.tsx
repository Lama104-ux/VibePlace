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

