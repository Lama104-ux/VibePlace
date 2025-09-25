import { Mood, Place } from '../types/mood';

export const MOODS: Mood[] = [
    {
        id: 'sad',
        name: 'Sorgsen',
        emoji: '😢',
        color: '#4A90E2',
        description: 'Behöver lugn och tröst'
    },
    {
        id: 'happy',
        name: 'Glad',
        emoji: '😊',
        color: '#F5A623',
        description: 'Full av energi och glädje'
    },
    {
        id: 'stressed',
        name: 'Stressad',
        emoji: '😤',
        color: '#D0021B',
        description: 'Behöver koppla av'
    },
    {
        id: 'tired',
        name: 'Trött',
        emoji: '😴',
        color: '#7ED321',
        description: 'Behöver vila och återhämta sig'
    },
    {
        id: 'thoughtful',
        name: 'Tänkande',
        emoji: '💭',
        color: '#9013FE',
        description: 'Vill reflektera och fundera'
    },
    {
        id: 'angry',
        name: 'Arg',
        emoji: '🔥',
        color: '#FF6B6B',
        description: 'Behöver släppa ut energi'
    }
];

