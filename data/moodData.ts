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

    // TRÖTT - 5 vilsamma platser
    {
        id: 'tired1',
        name: 'Stadsparken',
        description: 'Bekväma bänkar under träd för vila och återhämtning',
        type: 'Park',
        moodMatch: ['tired'],
        address: '503 38 Borås',
        image: 'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=400&auto=format&fit=crop'
    },
    {
        id: 'tired2',
        name: 'Divine Presse Café',
        description: 'Sköna fåtöljer och lugn miljö för avkoppling',
        type: 'Kafé',
        moodMatch: ['tired'],
        address: 'Sandgärdsgatan 21, 503 34 Borås',
        image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&auto=format&fit=crop'
    },
    {
        id: 'tired3',
        name: 'Stadsbiblioteket',
        description: 'Tysta, bekväma platser att vila och läsa',
        type: 'Bibliotek',
        moodMatch: ['tired'],
        address: 'P A Halls Terrass, 503 42 Borås',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&auto=format&fit=crop'
    },
    {
        id: 'tired4',
        name: 'Borås Konstmuseum',
        description: 'Lugna utställningslokaler att vandra i sakta tempo',
        type: 'Museum',
        moodMatch: ['tired'],
        address: 'P A Halls Terrass 2, 504 56 Borås',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&auto=format&fit=crop'
    },
    {
        id: 'tired5',
        name: 'Ramnasjön runt',
        description: 'Lugn promenad för återhämtning vid vattnet',
        type: 'Promenadstråk',
        moodMatch: ['tired'],
        address: 'Ramnavägen 37, 504 39 Borås',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop'
    },

    // TÄNKANDE - 5 inspirerande platser
    {
        id: 'thoughtful1',
        name: 'Abecita Konstmuseum',
        description: 'Inspirerande konst för reflektion och kreativitet',
        type: 'Konstmuseum',
        moodMatch: ['thoughtful'],
        address: 'Herrljungagatan 15, 506 30 Borås',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&auto=format&fit=crop'
    },
    {
        id: 'thoughtful2',
        name: 'Kulturhuset',
        description: 'Ta plats i en stillsam hörna för eftertanke',
        type: 'Kulturhus',
        moodMatch: ['thoughtful'],
        address: 'P A Halls Terrass, 503 42 Borås',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop'
    },
    {
        id: 'thoughtful3',
        name: 'Ramnaparken',
        description: 'Bland äldre byggnader och historia för reflektion',
        type: 'Historisk park',
        moodMatch: ['thoughtful'],
        address: 'Parkgatan 29, 504 39 Borås',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&auto=format&fit=crop'
    },
    {
        id: 'thoughtful4',
        name: 'Sandwalls park',
        description: 'Mindre park perfekt för ensamma promenader',
        type: 'Park',
        moodMatch: ['thoughtful'],
        address: '503 35 Borås',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop'
    },
    {
        id: 'thoughtful5',
        name: 'Högskolan Borås campus',
        description: 'Intellektuell miljö som stimulerar tankar och lärande',
        type: 'Högskola',
        moodMatch: ['thoughtful'],
        address: 'Allégatan 1, 503 32 Borås',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&auto=format&fit=crop'
    },

    // ARG - 5 aktiva platser
    {
        id: 'angry1',
        name: 'Ryda Sportcenter',
        description: 'Gym för att träna ut frustrationen med kraftträning',
        type: 'Sportcenter',
        moodMatch: ['angry'],
        address: 'Almenäsvägen 14, 506 32 Borås',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop'
    },
    {
        id: 'angry2',
        name: 'Borås Bowlinghall',
        description: 'Fysisk aktivitet för att släppa ut spänning',
        type: 'Bowlinghall',
        moodMatch: ['angry'],
        address: 'Bockasjögatan 2, 504 30 Borås',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&auto=format&fit=crop'
    },
    {
        id: 'angry3',
        name: 'Boulehallen',
        description: 'Koncentrerad sport för fokusering bort från ilska',
        type: 'Sporthall',
        moodMatch: ['angry'],
        address: 'Ålgårdsvägen 30, 506 30 Borås',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop'
    },
    {
        id: 'angry4',
        name: 'Borås Arena',
        description: 'Skrika av sig känslorna på en match med publik',
        type: 'Arena',
        moodMatch: ['angry'],
        address: 'Ålgårdsvägen 16, 506 30 Borås',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&auto=format&fit=crop'
    },
    {
        id: 'angry5',
        name: 'Kypesjön',
        description: 'Stora skogsstigar runt sjön för energisk vandring',
        type: 'Naturområde',
        moodMatch: ['angry'],
        address: '506 38 Borås',
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&auto=format&fit=crop'
    }
];
