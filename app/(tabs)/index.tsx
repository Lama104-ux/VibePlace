import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSetAtom } from 'jotai';
import { StatusBar } from 'expo-status-bar';

import { MoodButton } from '../../components/MoodButton';
import { selectedMoodAtom, recommendedPlacesAtom } from '../../store/moodStore';
import { useLocation } from '../../hooks/useLocation';
import { MOODS, PLACES } from '../../data/moodData';
import { Mood } from '../../types/mood';

export default function HomeScreen() {
  const router = useRouter();
  const setSelectedMood = useSetAtom(selectedMoodAtom);
  const setRecommendedPlaces = useSetAtom(recommendedPlacesAtom);
  const { getCurrentLocation, location, address, errorMsg, stopWatching } = useLocation();

  useEffect(() => {
    getCurrentLocation();
    
    return () => {
      stopWatching();
    };
  }, []);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood.id);


    const matchingPlaces = PLACES.filter(place =>
      place.moodMatch.includes(mood.id)
    );

    setRecommendedPlaces(matchingPlaces);

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

        {/* Visa användarens position status */}
        <View style={styles.locationStatus}>
          <Text style={styles.locationText}>
            {errorMsg
              ? `❌ ${errorMsg}`
              : address 
              ? `📍 ${address}` 
              : location
              ? '📍 Hämtar adress...'
              : '🔍 Söker din position...'
            }
          </Text>
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
     color: '#7c3aed',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  locationStatus: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});