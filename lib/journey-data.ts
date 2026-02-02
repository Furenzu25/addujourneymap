// Journey Map Data Configuration
// Add your images to public/images/year1, year2, year3, year4 folders
// Then update this file with your image filenames and captions

export interface JourneyImage {
  id: string;
  src: string;
  caption: string;
  lens?: 'places' | 'events' | 'values' | 'becoming' | 'people';
}

export interface YearData {
  year: number;
  title: string;
  description: string;
  images: JourneyImage[];
}

export interface ReflectionEntry {
  id: string;
  lens: 'places' | 'events' | 'values' | 'becoming' | 'people';
  title: string;
  content: string;
}

// Your personal information
export const personalInfo = {
  name: "Jan Florenz R. Tenebroso",
  program: "BS Computer Science",
  batch: "2022-2026",
};

// Configure your journey images here
export const journeyData: YearData[] = [
  {
    year: 1,
    title: "🌱 Year 1: Beginnings",
    description: "My first steps into the Ateneo community. Moments of discovery and new friendships.",
    images: [
      { id: "1-1", src: "/images/year1/1st year.jpg", caption: "Cafe hangout with friends after a stressful day at school - learning that sometimes you just need to step away and breathe", lens: "places" },
      { id: "1-2", src: "/images/year1/1st_year_2nd.jpg", caption: "A special place that holds memories - one of my close friend's favorite spots to visit and eat at", lens: "places" },
    ],
  },
  {
    year: 2,
    title: "🌿 Year 2: Growth",
    description: "Finding my footing. Experiences that shaped my values and perspectives.",
    images: [
      { id: "2-1", src: "/images/year2/2nd year.jpg", caption: "A funny memory of me sleeping during class - the reality of surviving college life", lens: "becoming" },
      { id: "2-2", src: "/images/year2/2nd year palaro.jpg", caption: "Our first gold medal in CS Palaro! Together with Glenn, Ria, Karl, Tristan, and our upperclassmen Yvan and Ethan", lens: "events" },
    ],
  },
  {
    year: 3,
    title: "🌳 Year 3: Flourishing",
    description: "My voice is growing. Moments of leadership and deepening connections.",
    images: [
      { id: "3-1", src: "/images/year3/3rd year psits.jpg", caption: "PSITS Mindanao Tournament - we had a blast despite losing. A huge learning experience that taught us to enjoy the journey", lens: "events" },
      { id: "3-2", src: "/images/year3/3rd year palaro.jpg", caption: "Palarong Atenista - we had fun even though we only got 2nd place. The competition brought us closer together", lens: "events" },
    ],
  },
  {
    year: 4,
    title: "🦅 Year 4: Soaring",
    description: "Reflection and gratitude. Celebrating how far I've come and where I'm heading.",
    images: [
      { id: "4-1", src: "/images/year4/4th year.jpg", caption: "Crocodile Park adventure with friends - a memorable get-together where we just had a ton of fun being together", lens: "people" },
      { id: "4-2", src: "/images/year4/4th_year palarong atenista championship.jpg", caption: "Palarong Atenista Champions! We finally won the championship - all those years of competing together paid off", lens: "events" },
      { id: "4-3", src: "/images/year4/4th_year_class_picture.jpg", caption: "Class picture - we took time to capture this moment together, knowing these faces shaped my college journey", lens: "people" },
    ],
  },
];

// Configure your reflections here
export const reflections: ReflectionEntry[] = [
  {
    id: "r1",
    lens: "people",
    title: "The Friends Who Became Family",
    content: "Looking back at my four years at AdDU, I realize that friendship was the thread that wove everything together. Glenn, Ria, Karl, Tristan, Yvan, Ethan - these names aren't just teammates; they're the people who made every victory sweeter and every defeat bearable. From our first gold medal in 2nd year to our championship in 4th year, we grew together not just as competitors, but as a family. College would have been just about survival without them - instead, it became an adventure.",
  },
  {
    id: "r2",
    lens: "events",
    title: "The Spirit of Competition",
    content: "Palarong Atenista became more than just a competition - it became a marker of my growth at AdDU. From winning our first gold medal in 2nd year, to accepting 2nd place gracefully in 3rd year, to finally claiming the championship in 4th year. Each competition taught me something: that winning feels amazing, but losing together builds character. The PSITS Mindanao Tournament reminded me that sometimes the experience matters more than the outcome. We lost, but we had a blast - and that's a lesson I'll carry forward.",
  },
  {
    id: "r3",
    lens: "places",
    title: "Cafes and Comfort Zones",
    content: "Some of my most meaningful moments at AdDU didn't happen inside classrooms - they happened in cafes after stressful days, in favorite food spots that held memories of close friends. These places became my sanctuaries, reminding me that taking breaks isn't weakness but wisdom. Every visit to that cafe, every meal at that special spot, was a small act of self-care that helped me survive the pressures of college life.",
  },
  {
    id: "r4",
    lens: "becoming",
    title: "Learning to Balance",
    content: "That photo of me sleeping in class isn't just a funny memory - it's a reminder of the real struggle of balancing academics, competition, friendships, and personal well-being. College pushed me to my limits, and sometimes my body just gave out. But through those moments, I learned that being a student isn't about being perfect; it's about showing up, doing your best, and knowing when to rest. I became more compassionate with myself over these four years.",
  },
  {
    id: "r5",
    lens: "values",
    title: "Magis Through Competition",
    content: "The Ignatian value of Magis - striving for the greater - took on new meaning through my competitive journey at AdDU. It wasn't about being better than others; it was about pushing ourselves to be better than we were yesterday. When we won the championship in 4th year, it wasn't just about the medal - it was about all the practice, all the failures, all the times we chose to keep going. Magis taught me that excellence is a journey, not a destination.",
  },
  {
    id: "r6",
    lens: "people",
    title: "Gratitude for My Batchmates",
    content: "Taking our class picture in 4th year made me realize how much these faces meant to me. Each person in that photo played a role in my journey - study partners during exam season, companions during immersions, fellow survivors of college life. We took time to capture that moment because we knew it was precious. These are the people who witnessed my transformation, and for that, I am deeply grateful.",
  },
  {
    id: "r7",
    lens: "becoming",
    title: "From Freshman to Graduate",
    content: "My AdDU journey was ultimately about friendship, competition, and survival - but more than that, it was about becoming. The nervous freshman who walked into campus four years ago is not the same person writing this reflection today. Through every cafe hangout, every Palaro match, every sleepless night, and every shared laugh, I was slowly becoming more myself. AdDU didn't just give me a degree; it gave me lifelong friends, unforgettable memories, and a clearer sense of who I am and who I want to be.",
  },
];

// Lens configurations for display
export const lensConfig = {
  places: {
    title: 'Places',
    icon: '📍',
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/30',
    description: 'Spaces that awakened deep emotions and meaningful thoughts',
  },
  events: {
    title: 'Events & Activities',
    icon: '🎯',
    color: 'from-secondary/20 to-secondary/5',
    borderColor: 'border-secondary/30',
    description: 'Breakthroughs, struggles, immersions, or quiet turning points',
  },
  values: {
    title: 'Ignatian Values',
    icon: '✨',
    color: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
    description: 'Magis, Cura Personalis, Discernment, AMDG, and more',
  },
  becoming: {
    title: 'Moments of Becoming',
    icon: '🦋',
    color: 'from-purple-500/20 to-purple-500/5',
    borderColor: 'border-purple-500/30',
    description: 'When you felt yourself growing more compassionate and aware',
  },
  people: {
    title: 'People of Gratitude',
    icon: '❤️',
    color: 'from-pink-500/20 to-pink-500/5',
    borderColor: 'border-pink-500/30',
    description: 'Mentors, friends, communities who played a significant role',
  },
};
