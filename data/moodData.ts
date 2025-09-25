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

export const PLACES: Place[] = [
    // SORGSEN - 5 lugna platser
    {
        id: 'sad1',
        name: 'Stadsbiblioteket Borås',
        description: 'Tyst, lugn miljö för reflektion med många läshörn',
        type: 'Bibliotek',
        moodMatch: ['sad'],
        address: 'P A Halls Terrass, 503 42 Borås',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop'
    },
    {
        id: 'sad2',
        name: 'Rya Åsar Naturreservat',
        description: 'Skog och stigar för ensamhet och frid bland naturen',
        type: 'Naturreservat',
        moodMatch: ['sad'],
        address: 'Björbobacken 7, 504 68 Borås',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&auto=format&fit=crop'
    },
    {
        id: 'sad3',
        name: 'Café Viskan Knalleland',
        description: 'Mysig atmosfär vid ån, perfekt för lugna tankar',
        type: 'Kafé',
        moodMatch: ['sad'],
        address: 'Södra Strandgatan 6, 503 35 Borås',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&auto=format&fit=crop'
    },
    {
        id: 'sad4',
        name: 'Ramnaparken',
        description: 'Lugna promenadstigar bland träd för reflektion',
        type: 'Park',
        moodMatch: ['sad'],
        address: 'Parkgatan 29, 504 39 Borås',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop'
    },
    {
        id: 'sad5',
        name: 'Annelundsparken',
        description: 'Enskilda gångar bland stora träd för stillhet',
        type: 'Park',
        moodMatch: ['sad'],
        address: 'Annelunds parkväg, 503 36 Borås',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop'
    },

