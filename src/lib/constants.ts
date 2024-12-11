import images from "./images";

export const CARDS_DATA = [
  {
    id: 1,
    title: "Effortless Workout Logging",
    img: images.img1,
    description:
      "Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision.",
  },
  {
    id: 2,
    title: "Accurate Rep Counting Accurate Rep Counting",
    img: images.img2,
    description:
      "Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance.",
  },

  {
    id: 3,
    title: "Calorie Calculation Made Easy",
    img: images.img3,
    description:
      "Calculate calories burned during your workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated.",
  },
  {
    id: 4,
    title: "Effortless Workout Logging",
    img: images.img1,
    description:
      "Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision.",
  },
  {
    id: 5,
    title: "Accurate Rep Counting Accurate Rep Counting",
    img: images.img2,
    description:
      "Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance.",
  },
];

export const ALTERNATE_STEPS = [
  {
    id: 1,
    title: "Click on Get Started",
    img: images.img4,
    description:
      "Start by opening the GymFluencer. The intuitive home screen gives you quick access to all features.",
  },
  {
    id: 2,
    title: "Log Your Exercises",
    img: images.img5,
    description:
      "Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs.",
  },
  {
    id: 3,
    title: "Count Your Reps",
    img: images.img6,
    description:
      "Count your reps with precision, ensuring every detail is logged. Stay informed on your progress.",
  },
  {
    id: 4,
    title: "Track Your Progress",
    img: images.img7,
    description:
      "Review your workout stats and progress over time to stay motivated and reach your fitness goals.",
  },
];

export const REVIEWS = [
  {
    id: 1,
    title: "Best Fitness App!",
    description:
      "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    rating: 3,
  },
  {
    id: 2,
    title: "So Easy to Use!",
    description:
      "I love how user-friendly the app is. Logging workouts has never been easier!",
    rating: 4,
  },
  {
    id: 3,
    title: "Incredible Progress Tracker!",
    description:
      "I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
    rating: 5,
  },
  {
    id: 4,
    title: "Best Fitness App!",
    description:
      "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    rating: 3,
  },
  {
    id: 5,
    title: "So Easy to Use!",
    description:
      "I love how user-friendly the app is. Logging workouts has never been easier!",
    rating: 4,
  },
  {
    id: 6,
    title: "Incredible Progress Tracker!",
    description:
      "I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
    rating: 5,
  },
];

export const ACCORDIANS = [
  {
    id: 1,
    title: "How do I log my workouts?",
    description:
      "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.",
  },
  {
    id: 2,
    title: "Can I track my calories burned?",
    description:
      "Yes, you can track calories burned through the application integrated tracking features.",
  },
  {
    id: 3,
    title: "Is this application suitable for beginners?",
    description:
      "Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels.",
  },
  {
    id: 4,
    title: "What features does the application offer?",
    description:
      "The app offers workout logging, rep counting, calorie tracking, and progress reviews.",
  },
];

export const CLIENTS = [
  { alt: "client1", logo: images.client1 },
  { alt: "client2", logo: images.client2 },
  { alt: "client3", logo: images.client3 },
  { alt: "client4", logo: images.client4 },
  { alt: "client5", logo: images.client5 },
];

export const PRICING_CARDS = [
  {
    planType: "Free Plan",
    price: "0",
    description: "Limited block trials  for teams",
    highlightFeature: "",
    features: [
      "Unlimited blocks for teams",
      "Unlimited file uploads",
      "30 day page history",
      "Invite 2 guests",
    ],
  },
  {
    planType: "Pro Plan",
    price: "12.99",
    description: "Billed annually. $17 billed monthly",
    highlightFeature: "Everything in free +",
    features: [
      "Unlimited blocks for teams",
      "Unlimited file uploads",
      "1 year day page history",
      "Invite 10 guests",
    ],
  },
];

export const PRICING_PLANS = { proplan: "Pro Plan", freeplan: "Free Plan" };
