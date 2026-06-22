export type ProgramLevel = "Beginner" | "Intermediate" | "Advanced";

export type V3Workout = {
  day: string;
  title: string;
  focus: string;
  duration: string;
  exercises: string[];
};

export type V3Program = {
  id: string;
  title: string;
  subtitle: string;
  level: ProgramLevel;
  duration: string;
  goal: string;
  description: string;
  sessionsPerWeek: number;
  estimatedCalories: string;
  equipment: string;
  highlights: string[];
  outcomes: string[];
  schedule: V3Workout[];
};

export const v3Programs: V3Program[] = [
  {
    id: "fat-loss-starter",
    title: "Fat Loss Starter",
    subtitle: "Simple beginner plan for weight loss and daily discipline.",
    level: "Beginner",
    duration: "4 Weeks",
    goal: "Fat loss, stamina, and habit building",
    description:
      "A beginner-friendly fitness program focused on bodyweight exercises, light cardio, and consistency. It is suitable for users who want to start training without complex equipment.",
    sessionsPerWeek: 4,
    estimatedCalories: "250-400 kcal/session",
    equipment: "No equipment required",
    highlights: [
      "Bodyweight workouts",
      "Beginner-friendly cardio",
      "Short daily sessions",
      "Simple weekly structure"
    ],
    outcomes: [
      "Improved workout habit",
      "Better stamina",
      "Basic strength improvement",
      "Weight loss support"
    ],
    schedule: [
      {
        day: "Day 1",
        title: "Full Body Burn",
        focus: "Strength + cardio",
        duration: "30 min",
        exercises: ["Jumping Jacks", "Bodyweight Squats", "Push-ups", "Mountain Climbers", "Plank"]
      },
      {
        day: "Day 2",
        title: "Low Impact Cardio",
        focus: "Fat burning",
        duration: "25 min",
        exercises: ["Brisk Walk", "Step Touch", "High Knees", "Standing Crunches", "Cool Down Stretch"]
      },
      {
        day: "Day 3",
        title: "Core Stability",
        focus: "Core strength",
        duration: "25 min",
        exercises: ["Plank", "Dead Bug", "Leg Raises", "Russian Twists", "Side Plank"]
      },
      {
        day: "Day 4",
        title: "Lower Body Conditioning",
        focus: "Legs + endurance",
        duration: "30 min",
        exercises: ["Squats", "Lunges", "Glute Bridges", "Calf Raises", "Wall Sit"]
      }
    ]
  },
  {
    id: "muscle-builder",
    title: "Muscle Builder",
    subtitle: "Progressive strength plan for lean muscle development.",
    level: "Intermediate",
    duration: "8 Weeks",
    goal: "Muscle gain and strength improvement",
    description:
      "A structured hypertrophy-based program for users who already have basic training experience and want to build muscle with progressive overload.",
    sessionsPerWeek: 5,
    estimatedCalories: "350-550 kcal/session",
    equipment: "Dumbbells or gym access recommended",
    highlights: [
      "Push-pull-leg structure",
      "Progressive overload",
      "Strength and hypertrophy mix",
      "Weekly volume tracking"
    ],
    outcomes: [
      "Better muscle definition",
      "Improved strength",
      "Higher training volume",
      "Consistent split routine"
    ],
    schedule: [
      {
        day: "Day 1",
        title: "Push Strength",
        focus: "Chest, shoulder, triceps",
        duration: "45 min",
        exercises: ["Bench Press", "Shoulder Press", "Incline Push-up", "Triceps Extension", "Lateral Raise"]
      },
      {
        day: "Day 2",
        title: "Pull Strength",
        focus: "Back and biceps",
        duration: "45 min",
        exercises: ["Lat Pulldown", "Seated Row", "Dumbbell Curl", "Face Pull", "Back Extension"]
      },
      {
        day: "Day 3",
        title: "Leg Builder",
        focus: "Legs and glutes",
        duration: "50 min",
        exercises: ["Squat", "Romanian Deadlift", "Leg Press", "Walking Lunges", "Calf Raise"]
      },
      {
        day: "Day 4",
        title: "Upper Volume",
        focus: "Upper body volume",
        duration: "45 min",
        exercises: ["Incline Press", "Cable Row", "Arnold Press", "Hammer Curl", "Dips"]
      },
      {
        day: "Day 5",
        title: "Conditioning Finisher",
        focus: "Cardio + core",
        duration: "30 min",
        exercises: ["Battle Rope", "Mountain Climbers", "Plank", "Bike Sprint", "Stretching"]
      }
    ]
  },
  {
    id: "mobility-yoga",
    title: "Mobility Yoga",
    subtitle: "Calm flexibility program for posture, recovery, and balance.",
    level: "Beginner",
    duration: "6 Weeks",
    goal: "Flexibility, posture, and recovery",
    description:
      "A low-impact mobility and yoga-inspired program for users who want to improve flexibility, reduce stiffness, and support recovery.",
    sessionsPerWeek: 3,
    estimatedCalories: "120-220 kcal/session",
    equipment: "Yoga mat recommended",
    highlights: [
      "Low impact training",
      "Mobility focused",
      "Stress reduction",
      "Good for recovery days"
    ],
    outcomes: [
      "Better flexibility",
      "Improved posture",
      "Reduced stiffness",
      "Better body control"
    ],
    schedule: [
      {
        day: "Day 1",
        title: "Full Body Mobility",
        focus: "General flexibility",
        duration: "30 min",
        exercises: ["Cat Cow", "World's Greatest Stretch", "Hip Opener", "Hamstring Stretch", "Child Pose"]
      },
      {
        day: "Day 2",
        title: "Posture Reset",
        focus: "Back and shoulder mobility",
        duration: "25 min",
        exercises: ["Thoracic Rotation", "Wall Angels", "Cobra Stretch", "Neck Mobility", "Chest Opener"]
      },
      {
        day: "Day 3",
        title: "Recovery Flow",
        focus: "Breathing and recovery",
        duration: "35 min",
        exercises: ["Sun Salutation", "Low Lunge", "Pigeon Pose", "Seated Forward Fold", "Breathing Drill"]
      }
    ]
  }
];

export function getProgramById(id: string | undefined) {
  return v3Programs.find((program) => program.id === id);
}