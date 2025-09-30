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
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&auto=format&fit=crop'
    },
    {
        id: 'sad2',
        name: 'Rya Åsar Naturreservat',
        description: 'Skog och stigar för ensamhet och frid bland naturen',
        type: 'Naturreservat',
        moodMatch: ['sad'],
        address: 'Björbobacken 7, 504 68 Borås',
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&auto=format&fit=crop'
    },
    {
        id: 'sad3',
        name: 'Café Viskan Knalleland',
        description: 'Mysig atmosfär vid ån, perfekt för lugna tankar',
        type: 'Kafé',
        moodMatch: ['sad'],
        address: 'Södra Strandgatan 6, 503 35 Borås',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&auto=format&fit=crop'
    },
    {
        id: 'sad4',
        name: 'Ramnaparken',
        description: 'Lugna promenadstigar bland träd för reflektion',
        type: 'Park',
        moodMatch: ['sad'],
        address: 'Parkgatan 29, 504 39 Borås',
        image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&auto=format&fit=crop'
    },
    {
        id: 'sad5',
        name: 'Annelundsparken',
        description: 'Enskilda gångar bland stora träd för stillhet',
        type: 'Park',
        moodMatch: ['sad'],
        address: 'Annelunds parkväg, 503 36 Borås',
        image: 'https://plus.unsplash.com/premium_photo-1758279868295-77a268124635?w=400&auto=format&fit=crop'
    },

    // GLAD - 5 livliga platser
    {
        id: 'happy1',
        name: 'Knalleland',
        description: 'Nöjespark för ren glädje och skratt',
        type: 'Nöjespark',
        moodMatch: ['happy'],
        address: 'Bergslenagatan 45, 506 30 Borås',
       image: 'https://plus.unsplash.com/premium_photo-1700824490100-f82146b2441f?w=400&auto=format&fit=crop'
    },
    {
        id: 'happy2',
        name: 'Stora torget',
        description: 'Liv och rörelse, särskilt vid marknader och evenemang',
        type: 'Torg',
        moodMatch: ['happy'],
        address: 'Torggatan, 503 34 Borås',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format&fit=crop'
    },
    {
        id: 'happy3',
        name: 'Borås Centrum/Stora Torget',
        description: 'Livlig stadskärna med folk och aktivitet',
        type: 'Stadskärna',
        moodMatch: ['happy'],
        address: 'Torggatan, 503 34 Borås',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&auto=format&fit=crop'
    },
    {
        id: 'happy4',
        name: 'Textilmuseet',
        description: 'Kreativ och inspirerande miljö med interaktiva utställningar',
        type: 'Museum',
        moodMatch: ['happy'],
        address: 'Skaraborgsvägen 3, 506 30 Borås',
       image: 'https://images.unsplash.com/photo-1600603955515-773fe759de4e?w=400&auto=format&fit=crop'
    },
    {
        id: 'happy5',
        name: 'Navet Kulturhus',
        description: 'Evenemang, musik och social atmosfär för alla åldrar',
        type: 'Kulturhus',
        moodMatch: ['happy'],
        address: 'Skaraborgsvägen 1A, 506 30 Borås',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop'
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
        image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&auto=format&fit=crop'
    },
    {
        id: 'stressed3',
        name: 'Stadsparksbadet',
        description: 'Energisk miljö för motion och glädje i vattnet',
        type: 'Simhall',
        moodMatch: ['stressed'],
        address: 'Sven Eriksonsgatan 29, 503 38 Borås',
        image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&auto=format&fit=crop'
    },
    {
        id: 'stressed4',
        name: 'Nordic Wellness gym Borås city',
        description: 'Träna bort stress med professionell utrustning',
        type: 'Gym',
        moodMatch: ['stressed'],
        address: 'Österlånggatan 74, 503 37 Borås',
        image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&auto=format&fit=crop'
    },
    {
        id: 'stressed5',
        name: 'Borås Simarena',
        description: 'Simma och koppla bort tankarna i lugnt vatten',
        type: 'Simarena',
        moodMatch: ['stressed'],
        address: 'Alidelundsgatan 12, 506 31 Borås',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&auto=format&fit=crop'
    },

    // TRÖTT - 5 vilsamma platser
    {
        id: 'tired1',
        name: 'Stadsparken',
        description: 'Bekväma bänkar under träd för vila och återhämtning',
        type: 'Park',
        moodMatch: ['tired'],
        address: '503 38 Borås',
      image: 'https://images.unsplash.com/photo-1714386935945-d2d6c5797c45?w=400&auto=format&fit=crop'
    },
    {
        id: 'tired2',
        name: 'Divine Presse Café',
        description: 'Sköna fåtöljer och lugn miljö för avkoppling',
        type: 'Kafé',
        moodMatch: ['tired'],
        address: 'Sandgärdsgatan 21, 503 34 Borås',
        image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&auto=format&fit=crop'
    },
    {
        id: 'tired3',
        name: 'Stadsbiblioteket',
        description: 'Tysta, bekväma platser att vila och läsa',
        type: 'Bibliotek',
        moodMatch: ['tired'],
        address: 'P A Halls Terrass, 503 42 Borås',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&auto=format&fit=crop'
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
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&auto=format&fit=crop'
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
        image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=400&auto=format&fit=crop'
    },
    {
        id: 'thoughtful4',
        name: 'Sandwalls park',
        description: 'Mindre park perfekt för ensamma promenader',
        type: 'Park',
        moodMatch: ['thoughtful'],
        address: '503 35 Borås',
        image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&auto=format&fit=crop'
    },
    {
        id: 'thoughtful5',
        name: 'Högskolan Borås campus',
        description: 'Intellektuell miljö som stimulerar tankar och lärande',
        type: 'Högskola',
        moodMatch: ['thoughtful'],
        address: 'Allégatan 1, 503 32 Borås',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&auto=format&fit=crop'
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
        image: 'https://images.unsplash.com/photo-1608751613440-8880d1a0a1a0?w=400&auto=format&fit=crop'
    },
    {
        id: 'angry3',
        name: 'Boulehallen',
        description: 'Koncentrerad sport för fokusering bort från ilska',
        type: 'Sporthall',
        moodMatch: ['angry'],
        address: 'Ålgårdsvägen 30, 506 30 Borås',
   image: 'https://images.unsplash.com/photo-1609513677385-5d2b049d9431?w=400&auto=format&fit=crop'
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
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop'
    }
];