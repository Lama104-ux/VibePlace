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

    // GLAD - 5 livliga platser
    {
        id: 'happy1',
        name: 'Knalleland',
        description: 'Nöjespark för ren glädje och skratt',
        type: 'Nöjespark',
        moodMatch: ['happy'],
        address: 'Bergslenagatan 45, 506 30 Borås',
        image: 'https://images.unsplash.com/photo-1594736797933-d0f6b2703fb8?w=400&auto=format&fit=crop'
    },
    {
        id: 'happy2',
        name: 'Stora torget',
        description: 'Liv och rörelse, särskilt vid marknader och evenemang',
        type: 'Torg',
        moodMatch: ['happy'],
        address: 'Torggatan, 503 34 Borås',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&auto=format&fit=crop'
    },
    {
        id: 'happy3',
        name: 'Borås Centrum/Stora Torget',
        description: 'Livlig stadskärna med folk och aktivitet',
        type: 'Stadskärna',
        moodMatch: ['happy'],
        address: 'Torggatan, 503 34 Borås',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&auto=format&fit=crop'
    },
    {
        id: 'happy4',
        name: 'Textilmuseet',
        description: 'Kreativ och inspirerande miljö med interaktiva utställningar',
        type: 'Museum',
        moodMatch: ['happy'],
        address: 'Skaraborgsvägen 3, 506 30 Borås',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format&fit=crop'
    },
    {
        id: 'happy5',
        name: 'Navet Kulturhus',
        description: 'Evenemang, musik och social atmosfär för alla åldrar',
        type: 'Kulturhus',
        moodMatch: ['happy'],
        address: 'Skaraborgsvägen 1A, 506 30 Borås',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop'
    },

    // STRESSAD - 5 avkopplande platser
    {
        id: 'stressed1',
        name: 'Rya Åsar utsiktsplats',
        description: 'Öppen vy över staden för perspektiv och klarhet',
        type: 'Utsiktsplats',
        moodMatch: ['stressed'],
        address: 'Björbobacken 7, 504 68 Borås',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop'
    },
    {
        id: 'stressed2',
        name: 'Djurparken Borås',
        description: 'Stora ytor och lugna djur för avslappning',
        type: 'Djurpark',
        moodMatch: ['stressed'],
        address: 'Alidelundsgatan 11, 506 31 Borås',
        image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&auto=format&fit=crop'
    },
    {
        id: 'stressed3',
        name: 'Stadsparksbadet',
        description: 'Energisk miljö för motion och glädje i vattnet',
        type: 'Simhall',
        moodMatch: ['stressed'],
        address: 'Sven Eriksonsgatan 29, 503 38 Borås',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop'
    },
    {
        id: 'stressed4',
        name: 'Nordic Wellness gym Borås city',
        description: 'Träna bort stress med professionell utrustning',
        type: 'Gym',
        moodMatch: ['stressed'],
        address: 'Österlånggatan 74, 503 37 Borås',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop'
    },
    {
        id: 'stressed5',
        name: 'Borås Simarena',
        description: 'Simma och koppla bort tankarna i lugnt vatten',
        type: 'Simarena',
        moodMatch: ['stressed'],
        address: 'Alidelundsgatan 12, 506 31 Borås',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&auto=format&fit=crop'
    },

