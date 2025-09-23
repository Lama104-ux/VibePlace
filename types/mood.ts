// Här definierar jag vilka datatyper vår app använder
export type MoodType = 'sad' | 'happy' | 'stressed' | 'tired' | 'thoughtful' | 'angry';

export interface Mood {
    id: MoodType;
    name: string;
    emoji: string;
    color: string;
    description: string;
}

export interface Place {
    id: string;
    name: string;
    description: string;
    type: string;
    moodMatch: MoodType[];
    address: string;
    image: string;
    distance?: number;
    isFavorite?: boolean;
}

