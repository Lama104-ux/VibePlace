# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# -------------------------------------VibePlace - Humörbaserad Platsrekommendation------------------------------------------------------------------------

En React Native app som föreslår platser baserat på användarens nuvarande humör istället för att väder/plats bestämmer humöret.

## Projektbeskrivning

VibePlace vänder på det vanliga konceptet - istället för att kolla väder och platser för att bestämma humör, väljer användaren sitt humör FÖRST och appen föreslår platser som matchar känslan.

### Hur det fungerar

1. **Användaren väljer sitt humör**: Sorgsen, Glad, Stressad, Trött, Tänkande, eller Arg
2. **Appen föreslår platser** som matchar det valda humöret
3. **Visa platser på karta** med animerade markers
4. **Spara favoriter** för framtida snabb åtkomst

### Teknisk implementation

- **Frontend**: React Native med TypeScript
- **Navigation**: Expo Router för navigation mellan skärmar
- **State Management**: Jotai för global state hantering
- **Animationer**: React Native Reanimated för smooth animationer
- **Storage**: Expo SecureStore för att spara favoriter

## Hur man bygger och kör projektet

### Installation

1. Klona repositoriet:

```bash
git clone [din-repo-url]
cd VibePlace
```

2. Installera dependencies:

```bash
npm install
```

3. Starta utvecklingsservern:

```bash
npx expo start
```

4. Kör appen:

- Scanna QR-koden med Expo Go app på din telefon

### Bygga för produktion

```bash
# Android
npx expo build:android

# iOS
npx expo build:ios
```

## Uppfyllda krav

### ✅ React Native komponenter

1. **View** - Layout containers för alla skärmar och komponenter
2. **Text** - Visa humörval, platsnamn, beskrivningar och all text
3. **TouchableOpacity** - Interaktiva knappar för humörval och platsinteraktion
4. **ScrollView** - Scrollbar funktionalitet för platslistan och innehåll
5. **Image** - Visa ikoner för humör och bilder av platser (placeholder implementerat)

### ✅ Expo SDK komponenter

1. **expo-location** - Hämta användarens GPS-position
2. **expo-linear-gradient** - Färgade bakgrunder som matchar olika humörteman
3. **expo-haptics** - Haptisk feedback när användaren interagerar med knappar
4. **expo-secure-store** - Spara användarens favoritplatser säkert lokalt

### ✅ React Navigation

- **Expo Router** används för navigation mellan skärmar
- Tab navigation för huvudskärmar (Hem, Favoriter)
- Stack navigation för detaljskärmar (Resultat, Karta, Platsdetaljer)
- Modal presentations för immersiva upplevelser

### ✅ Git & GitHub

- Projekt använder Git för versionskontroll
- Publikt GitHub repository
- `.git` mappen finns i projektstrukturen
- Regelbundna commits under utveckling

### ✅ README.md fil

- Denna fil innehåller all nödvändig information
- Projektbeskrivning och funktionalitet
- Installations- och körningsinstruktioner
- Lista över alla uppfyllda krav

## Extra funktioner

### Animationer (React Native Reanimated används)

### State Management (Jotai)

- Global state för valt humör
- Användarposition hantering
- Favoritplatser synkronisering
- Rekommenderade platser caching

### Användarupplevelse

- Intuitivt humörval med visuell feedback
- Favoritfunktion med persistent storage

## Projektstruktur

VibePlace/
├── app/
│ ├── (tabs)/
│ │ ├── layout.tsx # Tab layout
│ │ ├── favorites.tsx # Favoritskärm
│ │ └── index.tsx # Hemskärm
│ ├── place/
│ │ └── [id].tsx # Dynamisk platsdetalj
│ ├── results.tsx # Resultatskärm
│ └── layout.tsx # Root layout
├── assets/ # Tillgångar
├── components/
│ ├── MoodButton.tsx # Animerad humörknapp
│ └── PlaceCard.tsx # Animerat platskort
├── constants/ # Konstanter
├── data/
│ └── moodData.ts # Statisk data för humör och platser
├── hooks/
│ ├── useFavorites.ts # Favorithantering
│ └── useLocation.ts # GPS
├── node_modules/ # Dependencies
├── scripts/ # Skript
├── store/
│ └── moodStore.ts # Jotai atoms för global state
├── types/
│ └── mood.ts # TypeScript interfaces
└── README.md # Denna fil
.....
.....
.....

## Utvecklad av

Detta projekt är utvecklat som en individuell laboration för kursen i React Native utveckling.

## Tekniska specifikationer

- **React Native**
- **TypeScript**
- **Expo SDK**
- **Jotai**
- **React Native Reanimated**
- **Expo Router**

---

_Denna app visar hur man kan kombinera moderna React Native teknologier för att skapa en interaktiv, animerad och användarvänlig mobilapplikation._
