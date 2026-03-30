export type CategoryThemeId = "strength" | "cardio" | "mind-body" | "specialty";

export type ThemeFaqItem = { q: string; a: string };

export interface CategoryTheme {
  id: CategoryThemeId;
  label: string;
  accent: string;
  accentDim: string;
  accentGlow: string;
  bgTexture: string;
  heroTagline: string;
  heroHeadline: string;
  heroSub: string;
  heroImage: string;
  icon: string;
  animationStyle: "slam" | "pulse" | "float" | "strike";
  particleStyle: string;
  programs: string[];
  whatsappText: string;
  metaTitle: string;
  metaDesc: string;
  faqItems: ThemeFaqItem[];
}

export const categoryThemes: Record<CategoryThemeId, CategoryTheme> = {
  strength: {
    id: "strength",
    label: "Strength & Fitness",
    accent: "#E8000E",
    accentDim: "#7f0007",
    accentGlow: "rgba(232,0,14,0.25)",
    bgTexture: "iron-plates",
    heroTagline: "Iron. Sweat. Power.",
    heroHeadline: "Build The Strongest Version of Yourself.",
    heroSub:
      "Three elite programs. One goal — maximum strength, maximum muscle, zero guesswork. Backed by real data from 10,000+ members.",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    icon: "🏋️",
    animationStyle: "slam",
    particleStyle: "sparks",
    programs: ["strength-training", "crossfit", "muscle-gain"],
    whatsappText: "Hi! I want to know more about Strength & Fitness programs at PowerFit.",
    metaTitle: "Strength Training, CrossFit & Muscle Gain Programs in Jaipur | PowerFit India",
    metaDesc:
      "Join PowerFit's Strength & Fitness programs — Strength Training, CrossFit & Muscle Gain. Real results: avg 3.8kg muscle in 60 days. Studios in Jaipur & Sikar.",
    faqItems: [
      {
        q: "Do I need prior experience for Strength Training?",
        a: "No. Our Strength Training program has beginner, intermediate, and advanced tracks. Your trainer assesses your level in session one and designs a program accordingly.",
      },
      {
        q: "What is the difference between Strength Training and Muscle Gain programs?",
        a: "Strength Training focuses on increasing your 1RM (maximum lift) and overall power. Muscle Gain (hypertrophy) focuses on increasing muscle size through volume-based training and nutrition surplus. Both build muscle — the goal and method differ.",
      },
      {
        q: "Is CrossFit safe for beginners?",
        a: "Yes, with the right coaching. Our CrossFit L2 certified coaches scale every WOD to your fitness level. We run beginner onboarding sessions before you join regular classes.",
      },
      {
        q: "How fast will I see results?",
        a: "Most members report visible strength gains within 3–4 weeks. Our data shows 89% of members hit a new personal record within 45 days.",
      },
      {
        q: "Can I combine Strength Training with other programs?",
        a: "Yes. Many members combine Strength with Functional Fitness or HIIT. Your trainer will help design a weekly schedule that doesn't lead to overtraining.",
      },
    ],
  },

  cardio: {
    id: "cardio",
    label: "Cardio & Endurance",
    accent: "#FF6B00",
    accentDim: "#7a3300",
    accentGlow: "rgba(255,107,0,0.25)",
    bgTexture: "pulse-waves",
    heroTagline: "Burn. Breathe. Break Records.",
    heroHeadline: "Torch Fat. Build Endurance. Feel Unstoppable.",
    heroSub:
      "Three science-backed programs designed for maximum calorie burn, fat loss, and cardiovascular performance. Average 8.3kg lost in 90 days across 10,000+ members.",
    heroImage: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1374&auto=format&fit=crop",
    icon: "⚡",
    animationStyle: "pulse",
    particleStyle: "flames",
    programs: ["hiit", "functional-fitness", "weight-loss"],
    whatsappText: "Hi! I want to know more about Cardio & Endurance programs at PowerFit.",
    metaTitle: "HIIT, Functional Fitness & Weight Loss Programs in Jaipur | PowerFit India",
    metaDesc:
      "PowerFit's Cardio & Endurance programs — HIIT, Functional Fitness & Weight Loss. Avg 8.3kg lost in 90 days. Studios in Jaipur & Sikar. Free trial available.",
    faqItems: [
      {
        q: "How many calories does a HIIT session burn?",
        a: "Our members average 600–820 kcal per 30–45 min HIIT session based on heart rate monitor data. The afterburn effect (EPOC) continues burning calories for up to 14 hours post-session.",
      },
      {
        q: "What makes the Weight Loss Program different from just doing cardio?",
        a: "The Weight Loss Program combines optimal exercise programming with certified nutritionist coaching, weekly InBody body composition scans, habit coaching, and accountability check-ins. Cardio alone rarely produces sustainable fat loss — this program addresses all factors.",
      },
      {
        q: "Is Functional Fitness suitable for people with back pain or old injuries?",
        a: "Yes — it's often prescribed for exactly this. Our FMS-certified coaches conduct a movement screening first and design corrective exercise protocols around your specific limitations.",
      },
      {
        q: "How is the 8.3kg weight loss statistic calculated?",
        a: "It's the average across 10,000+ PowerFit members who completed the full 90-day Weight Loss Program, measured via InBody composition scans at start and end. Individual results vary based on consistency, nutrition, and starting point.",
      },
      {
        q: "Can I do HIIT if I'm overweight or a beginner?",
        a: "Yes. Every HIIT session has modifications. Our coaches provide low-impact alternatives for all exercises so that participants of every fitness level can join and progressively build intensity.",
      },
    ],
  },

  "mind-body": {
    id: "mind-body",
    label: "Mind & Body",
    accent: "#7C3AED",
    accentDim: "#3b1a7a",
    accentGlow: "rgba(124,58,237,0.25)",
    bgTexture: "mandala-geometry",
    heroTagline: "Breathe. Flow. Transform.",
    heroHeadline: "Fitness Is Not Just Physical. Train Your Mind Too.",
    heroSub:
      "Yoga, Zumba, and Meditation — three programs that work on your body, mind, and energy together. 94% of members report better sleep within 30 days.",
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop",
    icon: "🧘",
    animationStyle: "float",
    particleStyle: "orbs",
    programs: ["yoga", "zumba", "meditation"],
    whatsappText: "Hi! I want to know more about Mind & Body programs (Yoga/Zumba/Meditation) at PowerFit.",
    metaTitle: "Yoga, Zumba & Meditation Classes in Jaipur & Sikar | PowerFit India",
    metaDesc:
      "Join PowerFit's Mind & Body programs — Yoga, Zumba & Meditation. 94% report better sleep, 38% stress reduction. Studios in Jaipur & Sikar + Online. Free class available.",
    faqItems: [
      {
        q: "Do I need any prior yoga or fitness experience?",
        a: "Absolutely not. All three programs — Yoga, Zumba, and Meditation — welcome complete beginners. Our instructors provide modifications and guidance from session one.",
      },
      {
        q: "Can Meditation really improve physical fitness?",
        a: "Yes. Research shows meditation reduces cortisol (the stress hormone that causes fat storage) by 32%, improves sleep quality by 61%, and enhances athletic performance through visualization and focus training.",
      },
      {
        q: "Is Zumba effective for weight loss?",
        a: "Yes. Members burn 600–620 kcal per session on average. More importantly, Zumba has 3.2x better long-term attendance than traditional gym programs — consistency is the #1 driver of weight loss results.",
      },
      {
        q: "Are online versions of Yoga and Meditation as effective?",
        a: "For most goals — yes. Our online Mind & Body programs are conducted live, not recorded, so you get real-time correction and guidance. 88% of online members report equivalent results to in-studio.",
      },
      {
        q: "Is there a women-only Yoga batch?",
        a: "Yes. We offer female-only Yoga batches at our Jaipur studios. WhatsApp us to check the current schedule and availability.",
      },
    ],
  },

  specialty: {
    id: "specialty",
    label: "Specialty Programs",
    accent: "#DC2626",
    accentDim: "#6b0000",
    accentGlow: "rgba(220,38,38,0.25)",
    bgTexture: "diagonal-slashes",
    heroTagline: "Specialized. Certified. Transformative.",
    heroHeadline: "Not Every Goal Fits a Standard Program. Yours Doesn't Have To.",
    heroSub:
      "Four specialized programs for women, seniors, kids, and combat sports athletes — each built around the unique physiology, psychology, and goals of that audience.",
    heroImage: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop",
    icon: "🥊",
    animationStyle: "strike",
    particleStyle: "shockwave",
    programs: ["womens-fitness", "senior-fitness", "kids-fitness", "kickboxing-martial-arts"],
    whatsappText: "Hi! I want to know more about Specialty programs at PowerFit.",
    metaTitle: "Women's Fitness, Senior Fitness, Kids Fitness & Kickboxing in Jaipur | PowerFit India",
    metaDesc:
      "PowerFit Specialty Programs — Women's Fitness, Senior Fitness (50+), Kids Fitness (age 6–16) & Kickboxing. Expert coaches, real results. Studios in Jaipur & Sikar.",
    faqItems: [
      {
        q: "What age groups does Kids Fitness cater to?",
        a: "Ages 6–16, split into two age-segregated batches: 6–10 years and 11–16 years. Each batch has programs designed specifically for that developmental stage.",
      },
      {
        q: "Is Women's Fitness only for experienced gym-goers?",
        a: "No. It's designed for all levels — beginners welcome. Many members join Women's Fitness as their first-ever gym program precisely because of the safe, supportive, women-only environment.",
      },
      {
        q: "Can seniors with medical conditions join the Senior Fitness program?",
        a: "Yes, with doctor clearance. Our Senior Fitness coaches coordinate with your physician and design sessions around your specific conditions. We have members managing diabetes, arthritis, hypertension, and post-surgery recovery.",
      },
      {
        q: "Is Kickboxing available for kids?",
        a: "Yes. The Rajasthan Kickboxing Academy at PowerFit Mansarovar offers Kickboxing & Martial Arts for ages 8+. Kids and adults train in separate batches.",
      },
      {
        q: "Do you offer a Women's Fitness trial class?",
        a: "Yes — all programs including Women's Fitness offer a free trial class. WhatsApp us to book your slot at a Jaipur or Sikar studio.",
      },
    ],
  },
};

