export interface Program {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  tagline: string;
  description: string;
  duration: string;
  intensity: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  sessionsPerWeek: string;
  groupSize: string;
  trainerType: string;
  pexelsSearchTerm: string; // for stock photo
  imagePath: string; // local path after download
  benefits: Benefit[];
  realDataStats: RealStat[];
  bestFor: string[];
  programHighlights: string[];
  available: ("In-Studio" | "Online" | "Home Visit")[];
  featured: boolean;
  /** Highlight as #1 / most demanded program across marketing surfaces */
  isMostPopular?: boolean;
  slug: string;
}

export interface Benefit {
  icon: string;
  title: string;
  value: string;
  description: string;
}

export interface RealStat {
  metric: string;
  value: string;
  timeframe: string;
  source: string;
}

export const programs: Program[] = [
  // ════════════════════════════════════════
  // CATEGORY 1: STRENGTH & MUSCLE
  // ════════════════════════════════════════
  {
    id: "strength-training",
    name: "Strength Training",
    category: "Strength & Muscle",
    categoryId: "strength",
    tagline: "Build raw power. Sculpt your physique. Dominate every lift.",
    description:
      "PowerFit's Strength Training program is built on progressive overload principles used by elite athletes worldwide. Our certified trainers design personalized lifting programs targeting all major muscle groups — whether your goal is raw strength, muscle hypertrophy, or a lean athletic physique.",
    duration: "60 min/session",
    intensity: "All Levels",
    sessionsPerWeek: "3–5x",
    groupSize: "1-on-1 or small group (max 6)",
    trainerType: "Certified Strength & Conditioning Coach",
    pexelsSearchTerm: "man lifting heavy barbell dark gym",
    imagePath: "https://plus.unsplash.com/premium_photo-1661301079739-1ed4a315e4c8?q=80&w=991&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "💪", title: "Muscle Mass", value: "+12%", description: "Avg lean muscle gain in 60 days" },
      { icon: "🔥", title: "Fat Burn", value: "+18%", description: "Increase in resting metabolic rate" },
      { icon: "🦴", title: "Bone Density", value: "+4%", description: "Improvement in 6-month members" },
      { icon: "⚡", title: "Strength Gain", value: "2.1x", description: "Average 1RM increase in 90 days" },
    ],
    realDataStats: [
      { metric: "Avg. muscle gain", value: "3.8 kg", timeframe: "60 days", source: "10K+ PowerFit members" },
      { metric: "Members who hit new PR", value: "89%", timeframe: "within 45 days", source: "PowerFit tracker" },
      { metric: "Drop in body fat %", value: "2.4%", timeframe: "90 days", source: "InBody scans" },
    ],
    bestFor: ["Muscle building", "Athletic performance", "Body recomposition"],
    programHighlights: [
      "Personalized lifting plan",
      "Form correction & technique coaching",
      "Progressive overload tracking",
      "Monthly strength assessment",
      "Nutrition guidance",
    ],
    available: ["In-Studio", "Online"],
    featured: true,
    slug: "strength-training",
  },
  {
    id: "crossfit",
    name: "CrossFit",
    category: "Strength & Muscle",
    categoryId: "strength",
    tagline: "Constantly varied. Maximum intensity.",
    description:
      "CrossFit at PowerFit is the most intense, results-driven program we offer. WODs (Workouts of the Day) combine Olympic lifting, gymnastics, and metabolic conditioning into one brutal, beautiful session. Community-driven. Competition-ready.",
    duration: "45–60 min/session",
    intensity: "Intermediate",
    sessionsPerWeek: "4–6x",
    groupSize: "Group (max 12)",
    trainerType: "CrossFit L2 Certified Coach",
    pexelsSearchTerm: "crossfit box workout rope barbell dark",
    imagePath: "https://plus.unsplash.com/premium_photo-1661402412078-9af01b0be72f?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🔥", title: "Calorie Burn", value: "800+", description: "Cal burned per session on avg" },
      { icon: "💪", title: "Full Body", value: "100%", description: "Muscle groups activated per WOD" },
      { icon: "❤️", title: "Cardio", value: "+31%", description: "VO2 max improvement in 3 months" },
      { icon: "🏆", title: "Retention", value: "91%", description: "Members who continue past 30 days" },
    ],
    realDataStats: [
      { metric: "Avg. calories burned/session", value: "820 kcal", timeframe: "per session", source: "Heart rate monitors" },
      { metric: "Body fat reduction", value: "4.1%", timeframe: "90 days", source: "PowerFit InBody" },
      { metric: "Community satisfaction", value: "4.9/5", timeframe: "ongoing", source: "Member surveys" },
    ],
    bestFor: ["Athletes", "Weight loss", "Endurance building", "Community training"],
    programHighlights: [
      "Daily WOD programming",
      "Olympic lifting coaching",
      "Gymnastics skill work",
      "Benchmark testing",
      "CrossFit Open prep",
    ],
    available: ["In-Studio"],
    featured: true,
    slug: "crossfit",
  },
  {
    id: "muscle-gain",
    name: "Muscle Gain Program",
    category: "Strength & Muscle",
    categoryId: "strength",
    tagline: "Scientific bulking. Zero guesswork. Maximum hypertrophy.",
    description:
      "The PowerFit Muscle Gain Program is a precision-engineered hypertrophy system for those who want to build serious muscle mass. Combines progressive overload training with targeted nutrition protocols — including protein timing, caloric surplus planning, and recovery optimization.",
    duration: "75 min/session",
    intensity: "Intermediate",
    sessionsPerWeek: "4–6x",
    groupSize: "1-on-1 or pair training",
    trainerType: "Certified Bodybuilding & Hypertrophy Coach",
    pexelsSearchTerm: "muscular man gym flexing dark lighting bicep curl",
    imagePath: "https://plus.unsplash.com/premium_photo-1682435545493-db423e4ace01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "💪", title: "Muscle Gain", value: "+6.1kg", description: "Lean mass gained in 120 days" },
      { icon: "📏", title: "Size", value: "+2.8\"", description: "Average arm circumference gain" },
      { icon: "⚡", title: "Strength", value: "+34%", description: "1RM improvement in 90 days" },
      { icon: "🧬", title: "Testosterone", value: "+18%", description: "Natural T-level optimization" },
    ],
    realDataStats: [
      { metric: "Lean muscle gained", value: "6.1 kg", timeframe: "120 days", source: "InBody scans, PowerFit members" },
      { metric: "Bench press 1RM improvement", value: "34%", timeframe: "90 days", source: "Strength tracking system" },
      { metric: "Members satisfied with results", value: "94%", timeframe: "at program end", source: "Exit surveys" },
    ],
    bestFor: ["Skinny-fat transformation", "Competitive bodybuilding", "Sports performance"],
    programHighlights: [
      "Periodized hypertrophy programming",
      "Caloric surplus + macro tracking",
      "Protein timing & supplement guidance",
      "Monthly body composition scans",
      "Posing & aesthetics coaching (optional)",
    ],
    available: ["In-Studio", "Online"],
    featured: false,
    slug: "muscle-gain",
  },
  {
    id: "calisthenics",
    name: "Calisthenics",
    category: "Strength & Muscle",
    categoryId: "strength",
    tagline: "Master your bodyweight. Build superhuman strength. Zero equipment needed.",
    description:
      "Calisthenics at PowerFit is India's most searched and fastest-growing fitness program — the ancient art of bodyweight mastery reimagined for the modern athlete. No barbells. No machines. Just your body, gravity, and a certified coach who will take you from your first push-up to handstands, muscle-ups, and the human flag. Calisthenics builds functional strength, lean muscle, and body control that gym machines simply cannot replicate. Practiced by street workout athletes, gymnasts, and military personnel worldwide — and now available at PowerFit Jaipur.",
    duration: "60 min/session",
    intensity: "All Levels",
    sessionsPerWeek: "3–5x",
    groupSize: "Small group (max 8) or 1-on-1",
    trainerType: "Certified Calisthenics & Street Workout Coach",
    pexelsSearchTerm: "calisthenics street workout bodyweight pull up bar dark",
    imagePath: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=870&auto=format&fit=crop",
    benefits: [
      { icon: "🤸", title: "Body Control", value: "100%", description: "Full neuromuscular mastery in 90 days" },
      { icon: "💪", title: "Functional Strength", value: "+38%", description: "Real-world strength vs gym-machine users" },
      { icon: "🔥", title: "Fat Loss", value: "7.1kg", description: "Average lost in 90 days" },
      { icon: "🧬", title: "Muscle Density", value: "+22%", description: "Dense lean muscle vs bulky gym mass" },
    ],
    realDataStats: [
      { metric: "Avg. fat loss in 90 days", value: "7.1 kg", timeframe: "90 days", source: "10K+ PowerFit members" },
      { metric: "Members achieving first muscle-up", value: "78%", timeframe: "within 60 days", source: "PowerFit skill tracker" },
      { metric: "Functional strength vs gym-only training", value: "38% higher", timeframe: "at 6 months", source: "Performance assessments" },
    ],
    bestFor: [
      "Beginners with zero equipment",
      "Athletes wanting real functional strength",
      "Fat loss with muscle retention",
      "Skill-based fitness goals",
      "Travel-friendly training",
      "People bored of traditional gym",
    ],
    programHighlights: [
      "Progression from zero to advanced skills",
      "Pull-ups, dips, handstands, muscle-ups",
      "Planche, front lever, human flag progressions",
      "Flexibility & mobility integrated",
      "Online & outdoor training options",
      "Zero equipment needed — train anywhere",
      "Skill badge progression system",
    ],
    available: ["In-Studio", "Online", "Home Visit"],
    featured: true,
    isMostPopular: true,
    slug: "calisthenics",
  },


  // ════════════════════════════════════════
  // CATEGORY 2: CARDIO & ENDURANCE
  // ════════════════════════════════════════
  {
    id: "hiit",
    name: "HIIT Training",
    category: "Cardio & Endurance",
    categoryId: "cardio",
    tagline: "Maximum results. Minimum time. Science-backed intensity.",
    description:
      "High-Intensity Interval Training at PowerFit follows the latest sports science — alternating explosive effort bursts with strategic recovery windows. HIIT is the most time-efficient fat-burning protocol proven by research. 30 minutes of HIIT outperforms 60 minutes of steady cardio for fat loss.",
    duration: "30–45 min/session",
    intensity: "Intermediate",
    sessionsPerWeek: "3–4x",
    groupSize: "Group (max 15)",
    trainerType: "HIIT & Metabolic Conditioning Coach",
    pexelsSearchTerm: "hiit workout woman sprinting gym dark",
    imagePath: "https://plus.unsplash.com/premium_photo-1661906824628-3ac1f6c4ce1c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🔥", title: "Afterburn", value: "14hrs", description: "EPOC effect post-session" },
      { icon: "⚡", title: "Fat Loss", value: "2.3x", description: "vs steady-state cardio" },
      { icon: "❤️", title: "Heart Health", value: "-11bpm", description: "Avg resting HR drop in 3 months" },
      { icon: "⏱️", title: "Time Efficient", value: "30min", description: "Equivalent to 60min cardio" },
    ],
    realDataStats: [
      { metric: "Avg. weight lost", value: "6.2 kg", timeframe: "60 days", source: "10K+ PowerFit members" },
      { metric: "Resting heart rate improvement", value: "11 BPM", timeframe: "90 days", source: "Fitness assessments" },
      { metric: "Members reporting more energy", value: "88%", timeframe: "after 30 days", source: "Member surveys" },
    ],
    bestFor: ["Fat burning","Cardiovascular health", "Athletic conditioning"],
    programHighlights: [
      "Tabata & EMOM protocols",
      "Heart rate zone training",
      "Metabolic circuit design",
      "Weekly progress tracking",
      "Modifications for all fitness levels",
    ],
    available: ["In-Studio", "Online"],
    featured: true,
    slug: "hiit",
  },
  {
    id: "functional-fitness",
    name: "Functional Fitness",
    category: "Cardio & Endurance",
    categoryId: "cardio",
    tagline: "Move better. Live stronger. Train for real life.",
    description:
      "Functional Fitness trains your body for the movements it was built to do — pushing, pulling, squatting, hinging, carrying, rotating. This program dramatically improves daily life performance, reduces injury risk, and builds the kind of strength that actually transfers outside the gym.",
    duration: "50 min/session",
    intensity: "All Levels",
    sessionsPerWeek: "3–4x",
    groupSize: "Small group (max 8)",
    trainerType: "Functional Movement Specialist (FMS Certified)",
    pexelsSearchTerm: "functional fitness kettlebell battle rope gym",
    imagePath: "https://images.unsplash.com/photo-1758875570256-6510adffb1de?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🦵", title: "Mobility", value: "+34%", description: "Joint range of motion improvement" },
      { icon: "🛡️", title: "Injury Prevention", value: "-67%", description: "Reduction in gym injuries reported" },
      { icon: "⚖️", title: "Balance", value: "+28%", description: "Stability score improvement" },
      { icon: "🏃", title: "Daily Life", value: "93%", description: "Report easier daily movement" },
    ],
    realDataStats: [
      { metric: "Injury rate reduction", value: "67%", timeframe: "6 months", source: "PowerFit trainer reports" },
      { metric: "Posture improvement reported", value: "81%", timeframe: "60 days", source: "Member surveys" },
      { metric: "Back pain reduction", value: "74%", timeframe: "90 days", source: "Member health forms" },
    ],
    bestFor: ["Desk workers", "Seniors", "Post-injury recovery", "Athletes (cross-training)"],
    programHighlights: [
      "FMS movement screening",
      "Corrective exercise protocol",
      "Kettlebell & resistance band work",
      "Core stability training",
      "Mobility & flexibility integration",
    ],
    available: ["In-Studio", "Online", "Home Visit"],
    featured: false,
    slug: "functional-fitness",
  },
  {
    id: "weight-loss",
    name: "Weight Loss Program",
    category: "Cardio & Endurance",
    categoryId: "cardio",
    tagline: "India's most data-backed fat loss system. Real results. No gimmicks.",
    description:
      "PowerFit's Weight Loss Program is a structured 90-day system combining optimal exercise programming with evidence-based nutrition coaching. Not a crash diet. Not a quick fix. A sustainable lifestyle transformation backed by results from 10,000+ members across our studios.",
    duration: "60 min/session + nutrition coaching",
    intensity: "All Levels",
    sessionsPerWeek: "4–5x",
    groupSize: "1-on-1 coaching + group sessions",
    trainerType: "Personal Trainer + Certified Nutritionist",
    pexelsSearchTerm: "weight loss transformation fitness before after gym woman",
    imagePath: "https://plus.unsplash.com/premium_photo-1663050690913-6122361733c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "⚖️", title: "Weight Loss", value: "8.3kg", description: "Avg lost in 90 days" },
      { icon: "📉", title: "Body Fat", value: "-5.2%", description: "Body fat % reduction in 90 days" },
      { icon: "💚", title: "Sustained", value: "78%", description: "Keep weight off at 6 months" },
      { icon: "🩺", title: "Metabolic Health", value: "+22%", description: "Metabolism improvement" },
    ],
    realDataStats: [
      { metric: "Average weight lost", value: "8.3 kg", timeframe: "90 days", source: "10,000+ PowerFit members" },
      { metric: "Body fat % drop", value: "5.2%", timeframe: "90 days", source: "InBody composition scans" },
      { metric: "Members who maintain loss", value: "78%", timeframe: "at 6 months", source: "Follow-up assessments" },
    ],
    bestFor: ["Obesity / overweight", "Post-pregnancy weight", "Metabolic syndrome"],
    programHighlights: [
      "Weekly weigh-in & body composition scan",
      "Custom calorie-deficit meal plan",
      "Mixed cardio + strength protocol",
      "Habit & mindset coaching",
      "90-day transformation challenge with prizes",
    ],
    available: ["In-Studio", "Online"],
    featured: true,
    slug: "weight-loss",
  },

  // ════════════════════════════════════════
  // CATEGORY 3: MIND & BODY
  // ════════════════════════════════════════
  {
    id: "yoga",
    name: "Yoga",
    category: "Mind & Body",
    categoryId: "mind-body",
    tagline: "Ancient wisdom. Modern results. Total transformation.",
    description:
      "PowerFit Yoga isn't just stretching — it's a complete system for body, mind, and breath. Our certified yoga instructors teach Hatha, Vinyasa, and Power Yoga tracks, with modifications for every body type and fitness level. Practiced by 340 million people globally for a reason.",
    duration: "60 min/session",
    intensity: "All Levels",
    sessionsPerWeek: "3–7x",
    groupSize: "Group (max 20)",
    trainerType: "RYT-200 Certified Yoga Instructor",
    pexelsSearchTerm: "yoga class dark studio woman warrior pose",
    imagePath: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "😴", title: "Sleep Quality", value: "+94%", description: "Members report better sleep" },
      { icon: "🧠", title: "Stress Reduction", value: "-38%", description: "Cortisol level reduction" },
      { icon: "🤸", title: "Flexibility", value: "+41%", description: "Hamstring flexibility in 30 days" },
      { icon: "❤️", title: "Blood Pressure", value: "-8mmHg", description: "Average systolic BP improvement" },
    ],
    realDataStats: [
      { metric: "Sleep improvement", value: "94%", timeframe: "30 days", source: "PowerFit member surveys" },
      { metric: "Stress reduction (self-reported)", value: "38%", timeframe: "45 days", source: "Wellbeing assessments" },
      { metric: "Flexibility gain", value: "41%", timeframe: "30 days", source: "Trainer flexibility tests" },
    ],
    bestFor: ["Stress management", "Flexibility", "Active recovery", "Mental clarity"],
    programHighlights: [
      "Hatha, Vinyasa & Power Yoga tracks",
      "Pranayama (breathwork)",
      "Meditation integration",
      "Pregnancy yoga available",
      "Alignment & injury prevention focus",
    ],
    available: ["In-Studio", "Online"],
    featured: true,
    slug: "yoga",
  },
  {
    id: "zumba",
    name: "Zumba",
    category: "Mind & Body",
    categoryId: "mind-body",
    tagline: "Dance like nobody's watching. Burn like everyone is.",
    description:
      'Zumba at PowerFit is the most fun you\'ll ever have burning calories. Combining Latin and international music with easy-to-follow dance moves, Zumba disguises an intense cardio workout as a party. Perfect for people who hate "working out" but love moving.',
    duration: "45–60 min/session",
    intensity: "All Levels",
    sessionsPerWeek: "2–5x",
    groupSize: "Group (max 25)",
    trainerType: "Licensed Zumba Instructor (SYNC Certified)",
    pexelsSearchTerm: "zumba dance class group fitness studio energy",
    imagePath: "https://plus.unsplash.com/premium_photo-1694558053087-61c4ead81c99?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🔥", title: "Calorie Burn", value: "600+", description: "Calories per 60-min session" },
      { icon: "😊", title: "Mood Boost", value: "97%", description: "Feel happier after class" },
      { icon: "🩺", title: "Consistency", value: "3.2x", description: "Better attendance vs traditional gym" },
      { icon: "💃", title: "Coordination", value: "+29%", description: "Motor coordination improvement" },
    ],
    realDataStats: [
      { metric: "Avg. calories burned", value: "620 kcal", timeframe: "per session", source: "HR monitor data" },
      { metric: "Mood improvement", value: "97%", timeframe: "immediately after", source: "Post-class surveys" },
      { metric: "Long-term adherence", value: "3.2x better", timeframe: "vs weight training", source: "PowerFit attendance data" },
    ],
    bestFor: ["Women's fitness", "Weight loss", "Social exercisers", "Dance lovers"],
    programHighlights: [
      "Salsa, Merengue, Reggaeton rhythms",
      "No dance experience needed",
      "Zumba Gold (seniors) available",
      "Aqua Zumba on request",
      "Monthly themed classes",
    ],
    available: ["In-Studio", "Online"],
    featured: true,
    slug: "zumba",
  },
  {
    id: "meditation",
    name: "Meditation",
    category: "Mind & Body",
    categoryId: "mind-body",
    tagline: "Silence the noise. Sharpen the mind. Unleash your best self.",
    description:
      "PowerFit Meditation is a structured, science-backed mindfulness program that goes far beyond 'just sitting still.' Our certified meditation coaches guide you through proven techniques — breathwork, body scan, visualization, and mantra — that rewire your stress response, sharpen focus, and build the mental resilience that makes every other fitness goal easier to achieve.",
    duration: "30–45 min/session",
    intensity: "All Levels",
    sessionsPerWeek: "3–7x",
    groupSize: "Group (max 15) or 1-on-1",
    trainerType: "Certified Meditation & Mindfulness Coach (MBSR Trained)",
    pexelsSearchTerm: "meditation dark studio candle lotus pose calm",
    imagePath: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🧠", title: "Cortisol Drop", value: "-32%", description: "Stress hormone reduction in 8 weeks" },
      { icon: "😴", title: "Sleep Quality", value: "+61%", description: "Deep sleep improvement in 30 days" },
      { icon: "🎯", title: "Focus", value: "+40%", description: "Concentration span improvement" },
      { icon: "❤️", title: "Blood Pressure", value: "-6mmHg", description: "Avg systolic BP drop in 60 days" },
    ],
    realDataStats: [
      { metric: "Cortisol (stress hormone) reduction", value: "32%", timeframe: "8 weeks", source: "Saliva cortisol tests, PowerFit wellness cohort" },
      { metric: "Sleep quality improvement", value: "61%", timeframe: "30 days", source: "Member sleep tracking surveys" },
      { metric: "Anxiety score reduction (GAD-7)", value: "44%", timeframe: "60 days", source: "Validated anxiety assessments, 10K+ members" },
    ],
    bestFor: ["Stress & anxiety", "Insomnia & Sleep issues", "Professionals"],
    programHighlights: [
      "MBSR (Mindfulness-Based Stress Reduction) protocol",
      "Pranayama & breathwork techniques",
      "Body scan & progressive muscle relaxation",
      "Visualization & sports performance meditation",
      "Guided mantra & transcendental techniques",
      "Daily 10-min home practice plan included",
    ],
    available: ["In-Studio", "Online", "Home Visit"],
    featured: false,
    slug: "meditation",
  },

  // ════════════════════════════════════════
  // CATEGORY 4: SPECIALTY PROGRAMS
  // ════════════════════════════════════════
  {
    id: "womens-fitness",
    name: "Women's Fitness",
    category: "Specialty",
    categoryId: "specialty",
    tagline: "Built for women. By women. No compromises.",
    description:
      "PowerFit Women's Fitness is a dedicated program designed around female physiology, hormonal cycles, and real women's goals — not a scaled-down men's program. Female trainers available. Safe, supportive, results-focused environment where women thrive.",
    duration: "55 min/session",
    intensity: "All Levels",
    sessionsPerWeek: "3–5x",
    groupSize: "Women-only group (max 12)",
    trainerType: "Female-certified trainer (Women's Fitness Specialist)",
    pexelsSearchTerm: "women gym workout dark studio strong fit",
    imagePath: "https://plus.unsplash.com/premium_photo-1726663353359-9e8aa19dea55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🌸", title: "Hormonal Balance", value: "71%", description: "Report improved cycle regularity" },
      { icon: "💃", title: "Body Confidence", value: "96%", description: "Feel more confident in 45 days" },
      { icon: "🔥", title: "Toning", value: "+19%", description: "Muscle definition improvement" },
      { icon: "🧠", title: "Mental Health", value: "-41%", description: "Reduction in anxiety scores" },
    ],
    realDataStats: [
      { metric: "PCOS symptom improvement", value: "68%", timeframe: "90 days", source: "Member health tracking" },
      { metric: "Body confidence increase", value: "96%", timeframe: "45 days", source: "Self-assessment surveys" },
      { metric: "Anxiety reduction", value: "41%", timeframe: "60 days", source: "Wellbeing questionnaires" },
    ],
    bestFor: ["PCOS management", "Post-pregnancy recovery", "Menopause fitness"],
    programHighlights: [
      "Cycle-syncing workout adjustments",
      "Female-only batch options",
      "Pre/post-natal modifications",
      "Nutrition for hormonal health",
      "Body positivity culture",
    ],
    available: ["In-Studio", "Online"],
    featured: true,
    slug: "womens-fitness",
  },
  {
    id: "kickboxing-martial-arts",
    name: "Kickboxing & Martial Arts",
    category: "Specialty",
    categoryId: "specialty",
    tagline: "Fight fit. Self-defense ready. Mentally unbreakable.",
    description:
      "Offered at the Rajasthan Kickboxing Academy at PowerFit Mansarovar, this program combines traditional martial arts discipline with modern fitness science. Learn to defend yourself while achieving the leanest, most athletic body of your life. Suitable for all ages from 8 years.",
    duration: "60 min/session",
    intensity: "All Levels",
    sessionsPerWeek: "3–5x",
    groupSize: "Group (age-segregated batches)",
    trainerType: "National-level Kickboxing Coach",
    pexelsSearchTerm: "kickboxing martial arts training dark gym punch bag",
    imagePath: "https://images.unsplash.com/photo-1617630121381-f913e06bd3dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🥊", title: "Reflexes", value: "+44%", description: "Reaction time improvement" },
      { icon: "🔥", title: "Calorie Burn", value: "900+", description: "Per 60-min session" },
      { icon: "🛡️", title: "Self-Defense", value: "100%", description: "Practical skills in 30 days" },
      { icon: "🧠", title: "Discipline", value: "89%", description: "Report improved focus at work/school" },
    ],
    realDataStats: [
      { metric: "Calories per session", value: "900+ kcal", timeframe: "per session", source: "HR monitors" },
      { metric: "Reaction time improvement", value: "44%", timeframe: "60 days", source: "Trainer assessments" },
      { metric: "Kids focus improvement (parent-reported)", value: "89%", timeframe: "45 days", source: "Parent surveys" },
    ],
    bestFor: ["Self-defense", "Extreme fat burn", "Kids & teens", "Competitive fighters"],
    programHighlights: [
      "Kickboxing, Karate & MMA basics",
      "Heavy bag & padwork",
      "Sparring (advanced batches)",
      "Kids' martial arts (age 8–16)",
      "Competition prep available",
    ],
    available: ["In-Studio"],
    featured: true,
    slug: "kickboxing-martial-arts",
  },
  {
    id: "senior-fitness",
    name: "Senior Fitness",
    category: "Specialty",
    categoryId: "specialty",
    tagline: "Age is not a barrier. Fitness is for life.",
    description:
      "PowerFit Senior Fitness is a low-impact, high-results program for adults 50+. Designed to combat the natural effects of aging — muscle loss, joint stiffness, balance issues, and metabolic slowdown — using safe, evidence-based exercise protocols. Feel 20 years younger in 60 days.",
    duration: "45 min/session",
    intensity: "Beginner",
    sessionsPerWeek: "3–4x",
    groupSize: "Small group (max 8) + 1-on-1 available",
    trainerType: "Senior Fitness Specialist (SFS Certified)",
    pexelsSearchTerm: "senior fitness elderly man woman gym yoga",
    imagePath: "https://plus.unsplash.com/premium_photo-1663102809165-d479171a3e6d?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🦴", title: "Bone Density", value: "+6%", description: "Improvement in 6 months" },
      { icon: "⚖️", title: "Balance", value: "+52%", description: "Fall risk reduction" },
      { icon: "🧠", title: "Cognition", value: "+23%", description: "Memory & focus improvement" },
      { icon: "🩺", title: "Joint Pain", value: "-61%", description: "Reduction in chronic joint pain" },
    ],
    realDataStats: [
      { metric: "Fall risk reduction", value: "52%", timeframe: "3 months", source: "Clinical balance tests" },
      { metric: "Joint pain reduction", value: "61%", timeframe: "90 days", source: "Pain scale assessments" },
      { metric: "Energy level improvement", value: "84%", timeframe: "45 days", source: "Member surveys" },
    ],
    bestFor: ["Arthritis", "Post-surgery recovery", "Diabetes & BP Control", "Longevity"],
    programHighlights: [
      "Chair yoga & seated exercises",
      "Resistance band training",
      "Balance & coordination drills",
      "Joint mobility protocols",
      "Regular doctor coordination",
    ],
    available: ["In-Studio", "Home Visit", "Online"],
    featured: false,
    slug: "senior-fitness",
  },
  {
    id: "kids-fitness",
    name: "Kids Fitness",
    category: "Specialty",
    categoryId: "specialty",
    tagline: "Strong kids. Sharp minds. Confident futures.",
    description:
      "PowerFit Kids Fitness is a structured, age-appropriate program for children aged 6–16 that builds strength, coordination, discipline, and confidence through fun, safe, and scientifically designed exercise. Not just play — real fitness programming adapted for growing bodies, delivered by certified youth fitness coaches.",
    duration: "45 min/session",
    intensity: "Beginner",
    sessionsPerWeek: "2–4x",
    groupSize: "Age-segregated groups (max 10 per batch)",
    trainerType: "Certified Youth Fitness Coach (NASM-YFS)",
    pexelsSearchTerm: "kids fitness class children gym sports training fun",
    imagePath: "https://images.unsplash.com/photo-1607031767898-5f319512ff1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "🦴", title: "Bone Strength", value: "+11%", description: "Bone density growth vs inactive peers" },
      { icon: "🧠", title: "Focus in School", value: "+37%", description: "Academic concentration improvement" },
      { icon: "😊", title: "Confidence", value: "94%", description: "Parents report higher self-esteem" },
      { icon: "⚡", title: "Energy", value: "2.4x", description: "More active throughout the day" },
    ],
    realDataStats: [
      { metric: "Academic performance improvement", value: "37%", timeframe: "1 school term", source: "Parent feedback surveys" },
      { metric: "BMI normalization in overweight kids", value: "61%", timeframe: "90 days", source: "PowerFit health records" },
      { metric: "Parents reporting better discipline", value: "89%", timeframe: "60 days", source: "Parent surveys" },
    ],
    bestFor: ["Ages 6–16", "Overweight", "Sports preparation", "ADHD & focus"],
    programHighlights: [
      "Age-segregated batches (6–10 yrs & 11–16 yrs)",
      "Bodyweight & resistance exercises (no heavy weights)",
      "Sports-specific conditioning",
      "Nutrition awareness sessions",
      "Monthly fitness badge reward system",
      "Parent progress report every 4 weeks",
    ],
    available: ["In-Studio"],
    featured: false,
    slug: "kids-fitness",
  },

  // ════════════════════════════════════════
  // CATEGORY 5: ONLINE
  // ════════════════════════════════════════
  {
    id: "online",
    name: "Online Coaching",
    category: "Online",
    categoryId: "online",
    tagline: "PowerFit quality. Your location. Your schedule.",
    description:
      "Can't make it to a studio? PowerFit's Online Coaching brings certified trainers to your screen. Live 1-on-1 sessions, custom workout plans, nutrition tracking, and weekly check-ins — everything a studio program offers, delivered entirely online. Train from anywhere in India.",
    duration: "45–60 min/session (live)",
    intensity: "All Levels",
    sessionsPerWeek: "3–5x",
    groupSize: "1-on-1 live sessions",
    trainerType: "Certified Personal Trainer (online delivery)",
    pexelsSearchTerm: "online fitness coaching home workout laptop video call",
    imagePath: "https://plus.unsplash.com/premium_photo-1681486769203-0765d881a4e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      { icon: "📍", title: "Location Free", value: "100%", description: "Train from anywhere in India" },
      { icon: "📅", title: "Flexible", value: "24/7", description: "Schedule sessions around your life" },
      { icon: "💰", title: "Cost", value: "40%", description: "Less than in-studio equivalent" },
      { icon: "📊", title: "Results", value: "91%", description: "Comparable results to in-studio" },
    ],
    realDataStats: [
      { metric: "Results vs in-studio", value: "91% comparable", timeframe: "90 days", source: "PowerFit outcome tracking" },
      { metric: "Client satisfaction", value: "4.8/5", timeframe: "ongoing", source: "Post-session ratings" },
      { metric: "Members from outside Rajasthan", value: "34%", timeframe: "of online clients", source: "PowerFit CRM" },
    ],
    bestFor: ["People outside Jaipur/Sikar", "Busy professionals", "Travel-heavy lifestyles", "Shy beginners", "Corporate wellness"],
    programHighlights: [
      "Live 1-on-1 video sessions",
      "Custom app-based workout plan",
      "WhatsApp daily check-in",
      "Nutrition & meal plan",
      "Monthly progress video review",
    ],
    available: ["Online"],
    featured: true,
    slug: "online-coaching",
  },
];

export const programCategories = [
  { id: "strength", label: "Strength & Fitness", icon: "🏋️", color: "#E8000E", count: 4 },
  { id: "cardio", label: "Cardio & Endurance", icon: "⚡", color: "#FF6B00", count: 3 },
  { id: "mind-body", label: "Mind & Body", icon: "🧘", color: "#7C3AED", count: 3 },
  { id: "specialty", label: "Specialty", icon: "🥊", color: "#DC2626", count: 4 },
  { id: "online", label: "Online", icon: "💻", color: "#2563EB", count: 1 },
];

