import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSetAtom } from 'jotai';
import { StatusBar } from 'expo-status-bar';

import { MoodButton } from '../../components/MoodButton';
import { selectedMoodAtom, recommendedPlacesAtom } from '../../store/moodStore';
import { MOODS, PLACES } from '../../data/moodData';
import { Mood } from '../../types/mood';

export default function HomeScreen() {
  const router = useRouter();
  const setSelectedMood = useSetAtom(selectedMoodAtom);
  const setRecommendedPlaces = useSetAtom(recommendedPlacesAtom);

  // Hantera humörval
  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood.id);

    // Filtrera platser som matchar humöret
    const matchingPlaces = PLACES.filter(place =>
      place.moodMatch.includes(mood.id)
    );

    setRecommendedPlaces(matchingPlaces);

    // Navigera till resultatskärmen
    router.push('/results');
  };

