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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>VibePlace</Text>
          <Text style={styles.subtitle}>
            Hur känner du dig just nu?
          </Text>
          <Text style={styles.description}>
            Välj ditt humör så föreslår vi platser som passar dig
          </Text>
        </View>

        <View style={styles.moodGrid}>
          {MOODS.map((mood) => (
            <MoodButton
              key={mood.id}
              mood={mood}
              isSelected={false}
              onPress={handleMoodSelect}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },

});