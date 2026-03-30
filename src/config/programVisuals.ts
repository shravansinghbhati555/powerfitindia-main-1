export interface ProgramTestimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export interface ProgramVisual {
  heroVideo: string | null;
  heroVideoPoster?: string;
  heroBg: string;
  galleryImages: { url: string; alt: string }[];
  bgParticle: string;
  accentAnimation: string;
  colorOverlay: string;
  journeyMilestones: { day: number; title: string; desc: string; icon: string }[];
  trainerProfile: {
    title: string;
    certifications: string[];
    philosophy: string;
    yearsExp: string;
    photoUrl?: string;
  };
  membershipPlans: {
    name: string;
    sessions: string;
    features: string[];
    highlighted: boolean;
    badge?: string;
  }[];
  programFAQ: { q: string; a: string }[];
  testimonials: ProgramTestimonial[];
  aiSeoContext: string;
}

export const programVisuals: Record<string, ProgramVisual> = {

    'strength-training': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=870', alt: 'Strength training barbell at PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=870', alt: 'PowerFit strength coach guiding member' },
        { url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=869', alt: 'Deadlift session PowerFit gym' },
        { url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=870', alt: 'Bench press strength training PowerFit' },
      ],
      bgParticle: 'sparks',       // CSS animation class
      accentAnimation: 'slam',
      colorOverlay: 'from-red-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Strength Assessment',      desc: 'Baseline 1RM test across 5 key lifts. Starting point documented.', icon: '📋' },
        { day: 7,   title: 'Program Designed',          desc: 'Custom 12-week progressive overload program built for your body.', icon: '📐' },
        { day: 14,  title: 'First Form Milestone',      desc: 'Technique locked in. Coach signs off on your movement patterns.', icon: '✅' },
        { day: 30,  title: 'First PR Hit',              desc: '89% of members hit a new personal record by Day 30.', icon: '🏆' },
        { day: 60,  title: 'Visible Muscle Change',     desc: 'Average 3.8kg lean muscle added. InBody scan confirms progress.', icon: '💪' },
        { day: 90,  title: 'Phase 2 Unlocked',          desc: 'Advanced programming begins. Strength is now a lifestyle.', icon: '🔓' },
      ],
      trainerProfile: {
        title: 'Certified Strength & Conditioning Coach',
        certifications: ['NSCA-CSCS', 'CrossFit L1', 'CPR/AED Certified'],
        philosophy: 'Strength is the foundation of all fitness. Every program I design is built on progressive overload, proper mechanics, and data — not guesswork.',
        yearsExp: '5+ years',
      },
      membershipPlans: [
        { name: 'Starter', sessions: '3x/week', features: ['Group sessions', 'Basic program', 'WhatsApp support'], highlighted: false },
        { name: 'Pro', sessions: '5x/week', features: ['Small group (max 6)', 'Custom program', 'Monthly InBody scan', 'Nutrition guidance', 'Priority scheduling'], highlighted: true, badge: 'MOST POPULAR' },
        { name: 'Elite', sessions: 'Unlimited + 1-on-1', features: ['Personal training', 'Daily programming', 'Weekly body scan', 'Supplement guidance', 'Dedicated coach'], highlighted: false },
      ],
      programFAQ: [
        { q: 'How heavy should I start lifting?', a: 'Your coach determines this after your Day 1 assessment. Most beginners start lighter than expected — proper form is the priority before load.' },
        { q: 'Will Strength Training make me look bulky?', a: 'Not unless you want it to. Strength Training builds lean, functional muscle. Without a significant caloric surplus, you get definition and tone — not bulk.' },
        { q: 'How often should I rest?', a: 'Your program includes built-in rest days. Most members train 3–5 days/week with strategic recovery. Overtraining is a real risk our coaches actively prevent.' },
        { q: 'What equipment is used?', a: 'Barbells, dumbbells, cable machines, squat racks, benches, and functional equipment like kettlebells and resistance bands. All available at every PowerFit studio.' },
        { q: 'Can I join if I have a previous injury?', a: 'Yes, with clearance from your doctor. Our coaches design around limitations and often help rehabilitate old injuries through proper strength work.' },
      ],
    },
  
    'crossfit': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=870', alt: 'CrossFit WOD at PowerFit gym Jaipur' },
        { url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=869', alt: 'CrossFit rope climb PowerFit' },
        { url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=869', alt: 'Box jumps CrossFit PowerFit' },
        { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=870', alt: 'CrossFit group class PowerFit Mansarovar' },
      ],
      bgParticle: 'explosion',
      accentAnimation: 'slam',
      colorOverlay: 'from-red-950/80',
      journeyMilestones: [
        { day: 1,   title: 'CrossFit Fundamentals',    desc: 'Movement patterns, scaling options, and WOD structure explained.', icon: '📚' },
        { day: 7,   title: 'First Full WOD',            desc: 'You complete your first Workout of the Day. Scaled to your level.', icon: '💥' },
        { day: 14,  title: 'Olympic Lift Basics',       desc: 'Clean, jerk, and snatch fundamentals introduced with empty bar.', icon: '🏋️' },
        { day: 30,  title: 'Benchmark WOD',             desc: 'First benchmark WOD completed. Your baseline is now on the board.', icon: '📊' },
        { day: 60,  title: 'Rx Movements Unlocked',     desc: '4.1% avg body fat reduction. Starting to hit Rx weights.', icon: '🔥' },
        { day: 90,  title: 'Community Athlete',         desc: 'You\'re no longer a beginner. You\'re a CrossFitter.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'CrossFit L2 Certified Head Coach',
        certifications: ['CrossFit L2', 'Olympic Weightlifting Coach', 'Gymnastics Foundations'],
        philosophy: 'Every WOD is scalable. Every athlete is capable. The only thing between you and results is showing up and trusting the process.',
        yearsExp: '6+ years',
      },
      membershipPlans: [
        { name: 'Foundations', sessions: '3x/week', features: ['Beginner-only class', 'Movement coaching', 'WOD scaling guidance'], highlighted: false },
        { name: 'Athlete', sessions: '5x/week', features: ['All WOD classes', 'Olympic lift coaching', 'Benchmark tracking', 'Competition prep lite'], highlighted: true, badge: 'MOST CHOSEN' },
        { name: 'Competitor', sessions: 'Unlimited', features: ['All classes + open gym', 'Competition programming', 'Video form review', 'CrossFit Open registration support'], highlighted: false },
      ],
      programFAQ: [
        { q: 'Is CrossFit safe?', a: 'Yes — with qualified coaching. Our L2 certified coaches scale every WOD so that beginners and advanced athletes train safely side by side.' },
        { q: 'What is a WOD?', a: 'WOD stands for Workout of the Day. It\'s a structured training session that combines different movements — typically a strength component and a conditioning metcon — programmed fresh each day.' },
        { q: 'How is CrossFit different from regular gym training?', a: 'CrossFit uses constantly varied functional movements performed at high intensity. Instead of isolated machine exercises, you train compound movements that translate to real athletic performance.' },
        { q: 'Can overweight people do CrossFit?', a: 'Absolutely. Every movement is scalable. Many members begin their weight loss journey with CrossFit and it\'s highly effective — 4.1% average body fat reduction in 90 days.' },
        { q: 'Is there a community aspect?', a: 'Yes — it\'s one of CrossFit\'s greatest strengths. Our members have a 91% retention rate partly because of the tight-knit group culture that PowerFit CrossFit has built.' },
      ],
    },
  
    'muscle-gain': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=870', alt: 'Muscle gain program PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=870', alt: 'Hypertrophy training PowerFit' },
        { url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=870', alt: 'Dumbbell curls muscle building PowerFit' },
        { url: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a04?q=80&w=869', alt: 'Back training muscle gain program' },
      ],
      bgParticle: 'sparks',
      accentAnimation: 'slam',
      colorOverlay: 'from-red-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Body Composition Scan',    desc: 'InBody scan: baseline muscle mass, fat %, hydration documented.', icon: '📊' },
        { day: 3,   title: 'Nutrition Plan Delivered', desc: 'Custom caloric surplus plan with macro targets set by nutritionist.', icon: '🥩' },
        { day: 7,   title: 'Phase 1 Begins',           desc: 'Foundation hypertrophy block: 4x per week, 8–12 rep ranges.', icon: '🏋️' },
        { day: 30,  title: 'Pump Phase',               desc: 'First visible size changes. Scale weight increasing lean.', icon: '💪' },
        { day: 60,  title: 'Mid-Program Scan',         desc: 'InBody rescan. Average +3.2kg lean mass at this point.', icon: '📈' },
        { day: 120, title: 'Final Scan & Reveal',      desc: 'Average 6.1kg lean muscle gained. New program phase designed.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'Certified Bodybuilding & Hypertrophy Coach',
        certifications: ['NASM-CPT', 'Precision Nutrition L1', 'Advanced Hypertrophy Specialist'],
        philosophy: 'Building muscle is a science, not a mystery. The right stimulus, the right nutrition, the right recovery — repeat. I make sure all three are dialed in.',
        yearsExp: '7+ years',
      },
      membershipPlans: [
        { name: 'Build', sessions: '4x/week', features: ['Hypertrophy program', 'Basic nutrition guide', 'Monthly scan'], highlighted: false },
        { name: 'Bulk Pro', sessions: '5x/week', features: ['Custom periodized program', 'Full nutrition coaching', 'Bi-weekly InBody scans', 'Supplement protocol', 'WhatsApp daily check-in'], highlighted: true, badge: 'BEST VALUE' },
        { name: 'Physique', sessions: 'Unlimited', features: ['1-on-1 coaching', 'Daily programming', 'Weekly scans', 'Competition prep', 'Posing coaching'], highlighted: false },
      ],
      programFAQ: [
        { q: 'How much protein do I need to build muscle?', a: 'Our nutritionist will calculate your exact targets. General guideline: 1.6–2.2g per kg of bodyweight. Your meal plan will make hitting this easy.' },
        { q: 'Should I do cardio while on the Muscle Gain program?', a: 'Minimal cardio is recommended — enough to support cardiovascular health (2x/week, 20 min low-intensity) without eating into your muscle-building caloric surplus.' },
        { q: 'What if I gain fat while bulking?', a: 'Some fat gain during a caloric surplus is normal and expected. Your coach monitors your scan data every 2 weeks and adjusts calories to keep the muscle-to-fat gain ratio optimal.' },
        { q: 'Is the 6.1kg muscle gain stat realistic for me?', a: 'It\'s an average across all members over 120 days. Beginners often gain more (8–10kg), advanced lifters less (3–4kg). Your coach will set realistic expectations after your assessment.' },
        { q: 'Do I need supplements?', a: 'Basic protein supplementation helps — but it\'s optional. Your coach will advise based on your food intake and budget. We never push supplements — food first, always.' },
      ],
    },
  
    'hiit': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=870', alt: 'HIIT training class PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=870', alt: 'Jump squats HIIT workout PowerFit' },
        { url: 'https://images.unsplash.com/photo-1583454155184-870a1f63aebc?q=80&w=870', alt: 'Burpees HIIT session PowerFit gym' },
        { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=870', alt: 'HIIT group class energy PowerFit' },
      ],
      bgParticle: 'flames',
      accentAnimation: 'pulse',
      colorOverlay: 'from-orange-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Fitness Baseline',         desc: 'VO2 max estimate, resting heart rate, and work capacity tested.', icon: '❤️' },
        { day: 7,   title: 'Heart Rate Zones Set',     desc: 'Your personal zones 1–5 calculated. Heart rate monitor recommended.', icon: '📡' },
        { day: 14,  title: 'First Full Protocol',      desc: 'Completing full 30-min session without modification.', icon: '⚡' },
        { day: 30,  title: 'Afterburn Activated',      desc: 'Members report 14-hr EPOC effect felt clearly. Energy up.', icon: '🔥' },
        { day: 60,  title: 'Fat Loss Milestone',       desc: 'Average 6.2kg lost at this point. Resting HR dropping.', icon: '📉' },
        { day: 90,  title: 'Cardio Machine',           desc: '11 BPM resting HR reduction avg. VO2 max significantly improved.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'HIIT & Metabolic Conditioning Coach',
        certifications: ['ACE-CPT', 'HIIT Specialist Certification', 'Nutrition Coach Level 1'],
        philosophy: 'You don\'t need hours in the gym. You need the right intensity for the right duration. HIIT is the most honest workout you\'ll ever do.',
        yearsExp: '4+ years',
      },
      membershipPlans: [
        { name: 'Burn', sessions: '3x/week', features: ['Group HIIT classes', 'Basic tracking', 'Weekly schedule'], highlighted: false },
        { name: 'Torch', sessions: '5x/week', features: ['All HIIT classes', 'Heart rate monitor session', 'Nutrition guide', 'Progress tracking app', 'WhatsApp coach access'], highlighted: true, badge: 'MOST POPULAR' },
        { name: 'Inferno', sessions: 'Unlimited', features: ['Unlimited classes', 'Personal HIIT programming', 'Daily check-in', 'Full nutrition coaching', 'Monthly body composition'], highlighted: false },
      ],
      programFAQ: [
        { q: 'How often should I do HIIT per week?', a: 'Our coaches recommend 3–4 sessions maximum per week. More is not better with HIIT — adequate recovery between sessions is essential for both results and injury prevention.' },
        { q: 'I\'m not very fit. Can I still do HIIT?', a: 'Yes. Our HIIT classes have beginner modifications for every exercise. The intensity is relative to YOUR capacity — a beginner working at their 80% and an athlete at their 80% are both doing HIIT.' },
        { q: 'Why is HIIT better than running on a treadmill for fat loss?', a: 'HIIT creates an EPOC (Excess Post-Exercise Oxygen Consumption) effect that burns calories for 14+ hours after your workout. Steady-state cardio doesn\'t. Our data shows 2.3x better fat loss results vs standard cardio.' },
        { q: 'Do I need any equipment for HIIT?', a: 'In-studio: no personal equipment needed — everything is provided. Online: a mat and your bodyweight is enough to start. We scale equipment requirements per session.' },
        { q: 'Can HIIT improve heart health?', a: 'Yes, significantly. Our members average an 11 BPM resting heart rate reduction in 90 days. Resting heart rate is one of the strongest indicators of cardiovascular health.' },
      ],
    },
  
    'functional-fitness': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=870', alt: 'Functional fitness kettlebell PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=869', alt: 'Battle ropes functional training PowerFit' },
        { url: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=871', alt: 'TRX suspension training PowerFit gym' },
        { url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=869', alt: 'Functional movement training PowerFit Sikar' },
      ],
      bgParticle: 'waves',
      accentAnimation: 'pulse',
      colorOverlay: 'from-orange-950/80',
      journeyMilestones: [
        { day: 1,   title: 'FMS Screening',            desc: 'Functional Movement Screen — 7 movement patterns assessed for limitations.', icon: '🔍' },
        { day: 7,   title: 'Corrective Plan',          desc: 'Personalized corrective exercise protocol for your specific weaknesses.', icon: '🗺️' },
        { day: 21,  title: 'Pain Reduction',           desc: '74% of members report back pain reduction by Week 3.', icon: '🩹' },
        { day: 45,  title: 'Mobility Milestone',       desc: '34% average joint ROM improvement. Movement feels effortless.', icon: '🤸' },
        { day: 60,  title: 'Performance Transfer',     desc: 'Daily life activities — carrying, climbing, bending — noticeably easier.', icon: '🏃' },
        { day: 90,  title: 'Movement Mastery',         desc: '67% injury rate reduction confirmed. Foundation for any fitness goal.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'FMS Certified Functional Movement Specialist',
        certifications: ['FMS Level 2', 'NASM-Corrective Exercise Specialist', 'Kettlebell Specialist (RKC)'],
        philosophy: 'The gym should make your life outside the gym better. If your training isn\'t transferring to real life — climbing stairs, carrying groceries, playing with your kids — we\'re doing it wrong.',
        yearsExp: '6+ years',
      },
      membershipPlans: [
        { name: 'Move', sessions: '3x/week', features: ['FMS screening', 'Group functional classes', 'Basic corrective plan'], highlighted: false },
        { name: 'Perform', sessions: '4x/week', features: ['Full corrective protocol', 'Kettlebell & TRX access', 'Mobility programming', 'Weekly progress check', 'Home exercise plan'], highlighted: true, badge: 'RECOMMENDED' },
        { name: 'Thrive', sessions: 'Unlimited + Home Visits', features: ['Personal functional coaching', 'Home visit available', 'Full corrective + performance plan', 'Physiotherapy coordination'], highlighted: false },
      ],
      programFAQ: [
        { q: 'What is the Functional Movement Screen (FMS)?', a: 'The FMS is a 7-movement assessment that identifies asymmetries, limitations, and injury risks in your movement patterns. It takes 15 minutes and tells us exactly where to focus your program.' },
        { q: 'Is Functional Fitness good for desk workers with back pain?', a: 'It\'s one of the best programs for this. 74% of our members with chronic back pain report significant reduction within 90 days. We address the root cause — weak core, tight hips, poor posture — not just symptoms.' },
        { q: 'How is this different from regular strength training?', a: 'Functional Fitness trains movement patterns (push, pull, hinge, squat, carry, rotate) rather than isolated muscles. The goal is movement quality and real-life performance, not just muscle size.' },
        { q: 'Can I do Functional Fitness at home?', a: 'Yes — our Home Visit option brings the coach to you. We also design bodyweight and resistance band programs for home practice between studio sessions.' },
        { q: 'Is it suitable for older adults?', a: 'Functional Fitness is ideal for older adults. The emphasis on balance, mobility, and injury prevention directly addresses the challenges of aging. Many members in their 50s–70s do this program.' },
      ],
    },
  
    'weight-loss': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?q=80&w=1388',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=870', alt: 'Weight loss program workout PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=870', alt: 'Nutrition coaching weight loss PowerFit' },
        { url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=870', alt: 'Cardio training fat loss PowerFit gym' },
        { url: 'https://images.unsplash.com/photo-1616279969965-a60e574bef9b?q=80&w=870', alt: 'Body composition scan InBody PowerFit' },
      ],
      bgParticle: 'flames',
      accentAnimation: 'pulse',
      colorOverlay: 'from-orange-950/80',
      journeyMilestones: [
        { day: 1,   title: 'InBody Scan Day 1',        desc: 'Full body composition baseline — weight, fat%, muscle mass, visceral fat.', icon: '📊' },
        { day: 3,   title: 'Nutrition Plan',            desc: 'Certified nutritionist creates your custom calorie-deficit meal plan.', icon: '🥗' },
        { day: 7,   title: 'Workout Plan Starts',      desc: 'Mixed cardio + strength protocol — 4–5 sessions/week.', icon: '🏃' },
        { day: 30,  title: 'First Milestone Scan',     desc: 'Average 2.8kg lost by Day 30. Metabolism beginning to shift.', icon: '📉' },
        { day: 60,  title: 'Halfway Point',            desc: 'Average 5.1kg lost. Visible transformation. Energy significantly higher.', icon: '⭐' },
        { day: 90,  title: 'Final Scan & Results',     desc: 'Average 8.3kg lost. 5.2% body fat reduction. Transformation documented.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'Personal Trainer + Certified Nutritionist',
        certifications: ['NASM-CPT', 'Precision Nutrition L2', 'Behavior Change Specialist'],
        philosophy: 'Sustainable fat loss is 70% nutrition, 30% training, and 100% mindset. I coach all three because one without the others doesn\'t work long-term.',
        yearsExp: '8+ years',
      },
      membershipPlans: [
        { name: 'Slim', sessions: '4x/week', features: ['Group fat-loss classes', 'Basic nutrition guide', 'Monthly weigh-in'], highlighted: false },
        { name: 'Transform', sessions: '5x/week', features: ['Custom workout program', 'Full nutrition coaching', 'Weekly InBody scans', 'WhatsApp accountability', '90-day challenge entry'], highlighted: true, badge: 'BEST RESULTS' },
        { name: 'Total Transformation', sessions: 'Unlimited + 1-on-1', features: ['Personal training', 'Daily nutrition tracking', 'Twice-weekly scans', 'Mindset coaching', 'Guaranteed results*'], highlighted: false },
      ],
      programFAQ: [
        { q: 'Is 8.3kg in 90 days safe?', a: 'Yes. It\'s approximately 0.65kg per week — well within the medically safe range of 0.5–1kg/week. Our program never uses crash diets or extreme restriction. The approach is sustainable by design.' },
        { q: 'Do I need to follow a strict diet?', a: 'Not "strict" — structured. Our nutritionist creates a practical plan around Indian food that fits your life. No weird foods, no complete restrictions. Consistency over perfection.' },
        { q: 'What if I have PCOS or thyroid issues?', a: 'We have extensive experience with both. Our nutritionist and trainer coordinate programs specifically for hormonal weight conditions. 68% of our PCOS members report symptom improvement alongside fat loss.' },
        { q: 'Will I regain the weight after the 90 days?', a: '78% of our members maintain their weight loss at 6-month follow-up. The program builds habits, not dependency. You learn how to eat and train sustainably for life.' },
        { q: 'Is online weight loss coaching effective?', a: 'Yes. Our online weight loss members get the same nutrition coaching, InBody scan analysis (via photos and submitted data), and WhatsApp accountability as in-studio members — with 91% comparable results.' },
      ],
    },
  
    'yoga': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=870', alt: 'Yoga class at PowerFit studio Jaipur' },
        { url: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=870', alt: 'Warrior pose yoga PowerFit' },
        { url: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=886', alt: 'Meditation and yoga PowerFit mind body' },
        { url: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=870', alt: 'Vinyasa yoga flow PowerFit Mansarovar' },
      ],
      bgParticle: 'orbs',
      accentAnimation: 'float',
      colorOverlay: 'from-purple-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Intake & Assessment',      desc: 'Flexibility test, injury history, lifestyle assessment. Track assigned.', icon: '📋' },
        { day: 7,   title: 'Foundation Postures',      desc: 'Sun salutations, standing poses, breathing basics. Body opening.', icon: '🌅' },
        { day: 14,  title: 'First Sleep Shift',        desc: '67% of members report better sleep quality in Week 2.', icon: '😴' },
        { day: 30,  title: 'Flexibility Milestone',    desc: '41% average hamstring flexibility improvement. Visible posture change.', icon: '🤸' },
        { day: 45,  title: 'Stress Transformation',    desc: '38% cortisol reduction measured. Mind-body connection established.', icon: '🧘' },
        { day: 90,  title: 'Yoga as Lifestyle',        desc: '94% report yoga is now a non-negotiable part of daily life.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'RYT-200 Certified Yoga Instructor',
        certifications: ['Yoga Alliance RYT-200', 'Prenatal Yoga Certified', 'Pranayama & Meditation Specialist'],
        philosophy: 'Yoga is not about touching your toes. It\'s about what you learn on the way down. Every body is a yoga body — I meet you exactly where you are.',
        yearsExp: '9+ years',
      },
      membershipPlans: [
        { name: 'Hatha', sessions: '3x/week', features: ['Beginner-friendly classes', 'Basic breathwork', 'Pose library access'], highlighted: false },
        { name: 'Vinyasa', sessions: '5x/week', features: ['All yoga tracks', 'Pranayama sessions', 'Meditation integration', 'Props & aids included', 'WhatsApp support'], highlighted: true, badge: 'MOST POPULAR' },
        { name: 'Power Yogi', sessions: 'Unlimited', features: ['All tracks + Power Yoga', '1-on-1 alignment sessions', 'Prenatal track if needed', 'Online home practice plan', 'Dedicated instructor'], highlighted: false },
      ],
      programFAQ: [
        { q: 'I\'m completely inflexible. Can I still do yoga?', a: 'Inflexibility is exactly why you should start yoga — not a reason to wait. Every pose has modifications. Our instructors teach to where your body is today, not where you think it should be.' },
        { q: 'Which yoga style is best for weight loss?', a: 'Power Yoga and Vinyasa burn the most calories (200–400 per session). However, all yoga styles reduce cortisol, which is one of the primary drivers of abdominal fat storage.' },
        { q: 'Do you offer pregnancy yoga?', a: 'Yes. Our RYT-200 instructor is prenatal yoga certified. We offer dedicated pregnancy yoga in the Vinyasa and Power Yogi plans — modified poses, breathwork for labor, and safe sequencing.' },
        { q: 'Is yoga a real workout or just stretching?', a: 'Power Yoga and Vinyasa are genuine cardiovascular and strength workouts. Advanced yoga poses require significant upper body, core, and leg strength. It\'s far more than stretching.' },
        { q: 'Can men benefit from yoga?', a: 'Enormously — particularly for flexibility, injury prevention, recovery, and mental clarity. Many PowerFit male members combine yoga with strength training for optimal results.' },
      ],
    },
  
    'zumba': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=870', alt: 'Zumba dance class PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=870', alt: 'Zumba group energy PowerFit fitness studio' },
        { url: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=870', alt: 'Zumba workout fun PowerFit' },
        { url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=870', alt: 'Fitness dance class PowerFit Mansarovar' },
      ],
      bgParticle: 'confetti',
      accentAnimation: 'float',
      colorOverlay: 'from-purple-950/80',
      journeyMilestones: [
        { day: 1,   title: 'First Class',              desc: 'No experience needed. Follow along, have fun, don\'t worry about perfection.', icon: '💃' },
        { day: 7,   title: 'Rhythm Clicks',            desc: 'Your body starts to anticipate the beats. Movement becomes natural.', icon: '🎵' },
        { day: 14,  title: 'Mood Lift',                desc: '97% of members report significantly better mood after just 2 weeks.', icon: '😊' },
        { day: 30,  title: 'First Calorie Milestone',  desc: 'Avg 18,600 calories burned across the month. Body visibly changing.', icon: '🔥' },
        { day: 60,  title: 'Dance Confidence',         desc: 'You know the moves. You\'re helping newer members. You belong here.', icon: '⭐' },
        { day: 90,  title: 'Lifestyle Dancer',         desc: 'Avg 3.8kg lost. But more importantly — you actually enjoy working out.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'Licensed Zumba Instructor (SYNC Certified)',
        certifications: ['Zumba SYNC License', 'Zumba Gold Certified', 'Group Fitness Instructor (ACE)'],
        philosophy: 'I want you to leave every class feeling like you just came from the best party of your life — and only realize you burned 600 calories when you get home.',
        yearsExp: '5+ years',
      },
      membershipPlans: [
        { name: 'Dance', sessions: '2x/week', features: ['Weekend Zumba classes', 'Beginner-friendly', 'Community access'], highlighted: false },
        { name: 'Party Fit', sessions: '4x/week', features: ['All Zumba sessions', 'Themed monthly class', 'Zumba Gold access', 'Calorie tracking guidance'], highlighted: true, badge: 'FAN FAVOURITE' },
        { name: 'Fiesta', sessions: 'Unlimited', features: ['All classes any time', 'Zumba + any group program', 'Performance track', 'Monthly social event access'], highlighted: false },
      ],
      programFAQ: [
        { q: 'I have no dancing experience. Will I be able to keep up?', a: 'The first class is always the hardest — and everyone felt the same. Our instructors teach every move before the class dances it. After 2–3 sessions, your body finds the rhythm naturally.' },
        { q: 'Is Zumba effective for serious weight loss?', a: 'Yes. Our members burn 600–620 calories per session. More importantly, Zumba has 3.2x better long-term attendance than traditional programs — and consistency is the #1 factor in weight loss.' },
        { q: 'Are there any age restrictions for Zumba?', a: 'None. We have members from teens to 70s in our Zumba classes. Zumba Gold (slower pace, chair support available) is available for seniors. All ages and fitness levels welcome.' },
        { q: 'Can I do Zumba if I have joint pain?', a: 'Zumba is low-to-medium impact. Our instructors provide low-impact modifications for all jumping movements. Many members with knee or hip conditions enjoy Zumba comfortably.' },
        { q: 'Is online Zumba as fun as in-studio?', a: 'It\'s different but genuinely effective. Live online classes with the same instructors maintain the energy and real-time correction. Perfect for days you can\'t make it to the studio.' },
      ],
    },
  
    'meditation': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=870', alt: 'Meditation class PowerFit Jaipur studio' },
        { url: 'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?q=80&w=870', alt: 'Breathwork meditation session PowerFit' },
        { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=870', alt: 'Mindfulness meditation group PowerFit' },
        { url: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=870', alt: 'Guided meditation session PowerFit mind body' },
      ],
      bgParticle: 'orbs',
      accentAnimation: 'float',
      colorOverlay: 'from-purple-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Stress Assessment',        desc: 'GAD-7 anxiety questionnaire + lifestyle stress mapping completed.', icon: '📋' },
        { day: 3,   title: 'Breathwork Foundation',    desc: 'Box breathing, 4-7-8 technique, and diaphragmatic breathing learned.', icon: '🌬️' },
        { day: 7,   title: 'First Stillness',          desc: 'First session of 10-min focused attention meditation held without difficulty.', icon: '🕯️' },
        { day: 21,  title: 'Sleep Shift',              desc: '61% of members report deep sleep improvement by Week 3.', icon: '😴' },
        { day: 45,  title: 'Cortisol Drop',            desc: 'Stress hormone measurably reducing. Anxiety score down 44%.', icon: '📉' },
        { day: 90,  title: 'Mindful Life',             desc: 'Meditation now automatic. Response to stress fundamentally changed.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'Certified Meditation & Mindfulness Coach (MBSR Trained)',
        certifications: ['MBSR Certified (Jon Kabat-Zinn lineage)', 'Pranayama Teacher Training', 'Positive Psychology Coach'],
        philosophy: 'Meditation is the most underrated performance enhancer in fitness. The athletes who meditate recover faster, train harder, and quit less. I help people discover this for themselves.',
        yearsExp: '10+ years',
      },
      membershipPlans: [
        { name: 'Still', sessions: '3x/week', features: ['Group meditation sessions', 'Basic breathwork guide', 'Home practice audio'], highlighted: false },
        { name: 'Mindful', sessions: '5x/week', features: ['All sessions + online', 'MBSR 8-week protocol', 'Sleep meditation tracks', 'Daily home practice plan', 'WhatsApp coach access'], highlighted: true, badge: 'MOST TRANSFORMATIVE' },
        { name: 'Inner Mastery', sessions: 'Unlimited + 1-on-1', features: ['Personal coaching', 'Sports performance meditation', 'Trauma-informed approach', 'Home visit available', 'Advanced visualization work'], highlighted: false },
      ],
      programFAQ: [
        { q: 'I can\'t stop my thoughts. Can I still meditate?', a: 'This is the most common concern — and a complete misconception. Meditation is not about stopping thoughts. It\'s about changing your relationship to them. Your overactive mind is exactly why you should meditate.' },
        { q: 'How long before I feel results?', a: 'Most members notice better sleep within 2–3 weeks. Stress reduction is measurable by Week 4–5. The 32% cortisol reduction we see is typically measurable by Week 8.' },
        { q: 'Is this religious?', a: 'No. Our meditation program is entirely secular and evidence-based, drawing from MBSR (Mindfulness-Based Stress Reduction) — a medical protocol developed at the University of Massachusetts Medical School.' },
        { q: 'Can meditation help with anxiety and depression?', a: 'Research strongly supports meditation for anxiety management. Our GAD-7 assessments show 44% anxiety score reduction in 60 days. For depression, we coordinate with mental health professionals where appropriate.' },
        { q: 'How is this different from just using a meditation app?', a: 'Live coaching provides real-time guidance, personalized technique adjustment, accountability, and a structured progressive curriculum. Apps are good for daily maintenance but can\'t replace the depth of coached instruction.' },
      ],
    },
  
    'womens-fitness': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=870', alt: 'Women fitness class PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=870', alt: 'Women strength training PowerFit studio' },
        { url: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=870', alt: 'Female trainer PowerFit women program' },
        { url: 'https://images.unsplash.com/photo-1591291621060-e7426e9a1b24?q=80&w=870', alt: 'Women yoga fitness PowerFit Malviya Nagar' },
      ],
      bgParticle: 'petals',
      accentAnimation: 'float',
      colorOverlay: 'from-red-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Women\'s Health Assessment', desc: 'Hormonal cycle phase, health history, PCOS/thyroid status documented.', icon: '🌸' },
        { day: 7,   title: 'Cycle-Synced Program',     desc: 'Workout intensity aligned to your menstrual cycle phases.', icon: '📅' },
        { day: 21,  title: 'Hormonal Shift',           desc: '71% of members report improved cycle regularity by Week 3.', icon: '⚖️' },
        { day: 30,  title: 'Confidence Milestone',     desc: '96% feel more confident in their body and more energetic.', icon: '💫' },
        { day: 60,  title: 'Body Recomposition',       desc: '+19% muscle definition. Anxiety scores down 41%.', icon: '💪' },
        { day: 90,  title: 'Strength & Wellness',      desc: 'Not just fitter — hormonally healthier, mentally stronger.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'Women\'s Fitness Specialist (Female Trainer)',
        certifications: ['NASM Women\'s Fitness Specialist', 'Pre/Postnatal Fitness Certified', 'Nutrition for Hormonal Health'],
        philosophy: 'Women\'s bodies are not smaller male bodies. They need programs designed around female physiology, hormonal cycles, and real women\'s goals. That\'s all we do here.',
        yearsExp: '7+ years',
      },
      membershipPlans: [
        { name: 'Bloom', sessions: '3x/week', features: ['Women-only group classes', 'Basic nutrition guide', 'Cycle-aware scheduling'], highlighted: false },
        { name: 'Flourish', sessions: '5x/week', features: ['Custom cycle-synced program', 'Full nutrition coaching', 'PCOS/hormonal support', 'Monthly body composition', 'Female-only WhatsApp group'], highlighted: true, badge: 'MOST LOVED' },
        { name: 'Thrive', sessions: 'Unlimited + 1-on-1', features: ['Personal female trainer', 'Prenatal/postnatal track', 'Hormonal health nutrition', 'Weekly check-ins', 'Priority access all times'], highlighted: false },
      ],
      programFAQ: [
        { q: 'Is this program only for women?', a: 'Yes. All classes, trainers, and batch times in the Women\'s Fitness program are exclusively female. This creates a safe, judgment-free space that many women specifically seek out.' },
        { q: 'I have PCOS. Is this program suitable?', a: 'It\'s specifically designed for conditions like PCOS. Our trainer and nutritionist coordinate a program that works with your hormonal environment. 68% of our PCOS members report symptom improvement in 90 days.' },
        { q: 'I\'ve never been to a gym before. Will I feel out of place?', a: 'Never. The Women\'s Fitness program has the highest proportion of first-time gym members of any PowerFit program — because the female-only, supportive environment removes the intimidation of a regular gym.' },
        { q: 'What happens if my workout falls during my period?', a: 'Your program is cycle-synced. During menstruation, sessions are lower intensity — restorative yoga, light strength, breathwork. You never have to push through discomfort. Your cycle is part of your program design.' },
        { q: 'Is post-pregnancy training available?', a: 'Yes. We have a dedicated postnatal track that begins at 6 weeks postpartum (with doctor clearance). Diastasis recti screening, pelvic floor rehabilitation, and gradual strength return — all part of the program.' },
      ],
    },
  
    'senior-fitness': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=870', alt: 'Senior fitness class PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=870', alt: 'Elderly yoga fitness PowerFit studio' },
        { url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=870', alt: 'Senior balance training PowerFit gym' },
        { url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=870', alt: 'Senior strength resistance band PowerFit' },
      ],
      bgParticle: 'waves',
      accentAnimation: 'float',
      colorOverlay: 'from-red-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Medical Intake',           desc: 'Health history, current medications, doctor clearance reviewed.', icon: '🩺' },
        { day: 7,   title: 'Movement Baseline',        desc: 'Balance test, grip strength, flexibility, and mobility assessed.', icon: '📋' },
        { day: 21,  title: 'Joint Pain Relief',        desc: '61% of members report reduced chronic joint pain by Week 3.', icon: '🩹' },
        { day: 45,  title: 'Balance Improvement',      desc: 'Fall risk reduction measurable. 52% improvement in balance tests.', icon: '⚖️' },
        { day: 60,  title: 'Energy & Mood',            desc: '84% report significantly more energy and better mood daily.', icon: '⭐' },
        { day: 90,  title: 'Age Reversed',             desc: 'Bone density improving. Cognition +23%. Feeling 10–15 years younger.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'Senior Fitness Specialist (SFS Certified)',
        certifications: ['NASM Senior Fitness Specialist', 'ACE Certified Personal Trainer', 'Fall Prevention Specialist'],
        philosophy: 'The best exercise for a 60-year-old is the one they\'ll actually do consistently. I design programs that feel achievable, deliver real results, and make aging feel like an advantage.',
        yearsExp: '8+ years',
      },
      membershipPlans: [
        { name: 'Active', sessions: '3x/week', features: ['Senior-only group class', 'Chair yoga available', 'Basic nutrition guide'], highlighted: false },
        { name: 'Vitality', sessions: '4x/week', features: ['Personalized senior program', 'Balance & fall prevention', 'Joint mobility protocol', 'Doctor coordination', 'Home exercise guide'], highlighted: true, badge: 'MOST RECOMMENDED' },
        { name: 'Longevity', sessions: 'Unlimited + Home Visits', features: ['1-on-1 personal training', 'Home visit option', 'Chronic condition management', 'Physiotherapy coordination', 'Family progress updates'], highlighted: false },
      ],
      programFAQ: [
        { q: 'What age is the Senior Fitness program designed for?', a: 'Primarily adults 50 and above. However, anyone experiencing the physical challenges associated with aging — joint pain, declining balance, reduced energy — can benefit, regardless of exact age.' },
        { q: 'I have diabetes and hypertension. Can I join?', a: 'Yes, with doctor clearance. Our Senior Fitness coaches are trained to work with common chronic conditions. Exercise is actually one of the most effective management tools for both diabetes and hypertension.' },
        { q: 'How is Senior Fitness different from regular gym training?', a: 'Pace, exercise selection, rest periods, and intensity are all calibrated for older adults. We never use heavy free weights unsupported, avoid high-impact exercises, and emphasize functional movement, balance, and joint health.' },
        { q: 'Can I join if I\'ve recently had surgery or a health event?', a: 'With doctor clearance, yes. We have members recovering from hip replacements, cardiac events, and knee surgeries. Our coaches coordinate with your medical team for a safe return to activity.' },
        { q: 'Is there a Home Visit option?', a: 'Yes. Our Senior Fitness trainers offer in-home sessions for members who prefer not to travel or who need more intensive support. WhatsApp us to discuss home visit availability and pricing.' },
      ],
    },
  
    'kids-fitness': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=870', alt: 'Kids fitness class PowerFit Jaipur children' },
        { url: 'https://images.unsplash.com/photo-1587329310686-91414b8e3122?q=80&w=870', alt: 'Children sports training PowerFit gym' },
        { url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=869', alt: 'Kids athletic training PowerFit studio' },
        { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=870', alt: 'Youth fitness program PowerFit Rajasthan' },
      ],
      bgParticle: 'stars',
      accentAnimation: 'slam',
      colorOverlay: 'from-red-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Fun Assessment',           desc: 'Age-appropriate fitness test disguised as games. Baseline set.', icon: '🎮' },
        { day: 7,   title: 'Squad Formed',             desc: 'Age-matched batch. Kids find their training buddies.', icon: '👫' },
        { day: 14,  title: 'First Badge Earned',       desc: 'PowerFit badge reward system motivates consistency from Week 2.', icon: '🏅' },
        { day: 30,  title: 'Focus Shift',              desc: 'Parents report improved school concentration and discipline.', icon: '📚' },
        { day: 60,  title: 'Strength Visible',         desc: 'BMI normalizing in overweight kids. Confidence visibly growing.', icon: '💪' },
        { day: 90,  title: 'Athletic Foundation',      desc: 'Sports performance improved. Healthy habits established for life.', icon: '🏆' },
      ],
      trainerProfile: {
        title: 'Certified Youth Fitness Coach (NASM-YFS)',
        certifications: ['NASM Youth Fitness Specialist', 'Child CPR/First Aid', 'Sports Conditioning for Youth'],
        philosophy: 'A child who learns to love movement becomes an adult who lives longer. Every game we play, every badge we give, every high-five after a session is an investment in a lifetime of health.',
        yearsExp: '6+ years',
      },
      membershipPlans: [
        { name: 'Junior', sessions: '2x/week', features: ['Age-group classes', 'Fun fitness games', 'Monthly parent report'], highlighted: false },
        { name: 'Athlete', sessions: '3x/week', features: ['Structured programming', 'Sports-specific conditioning', 'Nutrition awareness', 'Badge reward system', 'Quarterly fitness test'], highlighted: true, badge: 'BEST FOR KIDS' },
        { name: 'Champion', sessions: '4x/week', features: ['Advanced sports prep', 'Individual attention', 'Competition training', 'Detailed monthly reports', 'Parent app updates'], highlighted: false },
      ],
      programFAQ: [
        { q: 'What age can children join Kids Fitness?', a: 'From age 6. We have two age-segregated batches: Junior (6–10 years) and Youth (11–16 years). Each batch uses age-appropriate exercises, coaching language, and intensity.' },
        { q: 'Are heavy weights used in Kids Fitness?', a: 'Never. Kids training uses bodyweight exercises, light resistance bands, medicine balls, agility equipment, and sports drills. Heavy free weights are not used until physical maturity.' },
        { q: 'My child is overweight. Will they feel embarrassed?', a: 'Our environment is strictly non-judgmental. All activities are designed so every child succeeds at their level. Our coaches are trained to build confidence, not compare performance.' },
        { q: 'Can Kids Fitness help with sports performance at school?', a: 'Yes, significantly. We focus on coordination, agility, speed, and foundational movement patterns that directly improve cricket, football, basketball, and athletics performance.' },
        { q: 'How do parents track progress?', a: 'You receive a detailed monthly progress report covering fitness improvements, attitude, attendance, and next-month goals. Quarterly parent meetings with the coach are included in the Athlete and Champion plans.' },
      ],
    },
  
    'kickboxing-martial-arts': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1472',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1566898979-b4f83a6c7bdb?q=80&w=870', alt: 'Kickboxing class Rajasthan Kickboxing Academy PowerFit Jaipur' },
        { url: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=870', alt: 'Martial arts training PowerFit Mansarovar' },
        { url: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=870', alt: 'Kickboxing punch bag training PowerFit' },
        { url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=870', alt: 'Kids martial arts Rajasthan Kickboxing Academy' },
      ],
      bgParticle: 'shockwave',
      accentAnimation: 'strike',
      colorOverlay: 'from-red-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Stance & Guard',           desc: 'Fighting stance, guard position, footwork basics. Foundation day.', icon: '🥊' },
        { day: 7,   title: 'First Combo',              desc: 'Jab-cross-hook combination. Heavy bag work begins.', icon: '💥' },
        { day: 14,  title: 'Reflex Training',          desc: 'Padwork with coach. Reaction time training begins.', icon: '⚡' },
        { day: 30,  title: 'Self Defense Ready',       desc: '100% of members have practical self-defense capability by Day 30.', icon: '🛡️' },
        { day: 60,  title: 'Sparring Eligible',        desc: '44% reflex improvement. Eligible for light sparring (advanced batch).', icon: '🏆' },
        { day: 90,  title: 'Fighter\'s Body',          desc: 'Avg 900+ cal/session. Leanest, most athletic body of your life.', icon: '🥇' },
      ],
      trainerProfile: {
        title: 'National-Level Kickboxing Coach, Rajasthan Kickboxing Academy',
        certifications: ['National Kickboxing Coach Certification', 'Martial Arts Instructor License', 'Sports First Aid & Safety'],
        philosophy: 'Martial arts gave me discipline, confidence, and a body I\'m proud of. I want every student — from age 8 to 80 — to experience that same transformation.',
        yearsExp: '12+ years competitive + coaching',
      },
      membershipPlans: [
        { name: 'Fighter', sessions: '3x/week', features: ['Group kickboxing classes', 'Bag & pad work', 'Basic combinations'], highlighted: false },
        { name: 'Warrior', sessions: '5x/week', features: ['All kickboxing sessions', 'Olympic-style sparring (optional)', 'Conditioning training', 'Flexibility & recovery', 'Self-defense curriculum'], highlighted: true, badge: 'MOST POWERFUL' },
        { name: 'Champion', sessions: 'Unlimited', features: ['Full competition training', 'Personal coaching', 'Video fight review', 'Competition registration support', 'Strength & conditioning integration'], highlighted: false },
      ],
      programFAQ: [
        { q: 'Do I need any martial arts experience to join?', a: 'Zero experience needed. We have complete beginner batches where everything starts from stance and basic punches. Experienced practitioners join the intermediate and advanced batches.' },
        { q: 'Is sparring mandatory?', a: 'Never. Sparring is entirely optional and only introduced when you choose and when your coach confirms you\'re ready. Many members train for years without sparring and get tremendous results from bag and pad work alone.' },
        { q: 'Is this available for my child?', a: 'Yes. The Rajasthan Kickboxing Academy has dedicated kids batches (age 8–16). Kids and adults train in completely separate sessions. Kids focus on fundamentals, discipline, coordination, and confidence.' },
        { q: 'Which martial arts styles are taught?', a: 'The primary focus is Kickboxing (K-1 and Muay Thai influence). We also integrate Karate basics, MMA ground fundamentals for self-defense, and Olympic-style boxing techniques.' },
        { q: 'Where is the Kickboxing Academy located?', a: 'The Rajasthan Kickboxing Academy is located at the 2nd Floor of PowerFit Gym, Deep Mansion, Sector 101, Mansarovar, Jaipur. Contact: +91 7597682600.' },
      ],
    },
  
    'online-coaching': {
      heroVideo: null,
      heroBg: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1470',
      galleryImages: [
        { url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=870', alt: 'Online fitness coaching session PowerFit India' },
        { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=870', alt: 'Home workout online coaching PowerFit' },
        { url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=870', alt: 'Virtual personal training PowerFit India' },
        { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=870', alt: 'Online nutrition coaching PowerFit' },
      ],
      bgParticle: 'digital-grid',
      accentAnimation: 'pulse',
      colorOverlay: 'from-blue-950/80',
      journeyMilestones: [
        { day: 1,   title: 'Virtual Assessment',       desc: 'Video call with your coach. Fitness test via phone camera. Goals set.', icon: '📱' },
        { day: 3,   title: 'Program Delivered',        desc: 'Custom app-based workout plan in your pocket. Nutrition plan sent.', icon: '📲' },
        { day: 7,   title: 'First Live Session',       desc: 'Real-time 1-on-1 video coaching. Form corrected live. Questions answered.', icon: '💻' },
        { day: 30,  title: 'Checkpoint',               desc: 'Progress photos, measurement update, program adjusted.', icon: '📊' },
        { day: 60,  title: 'Results Match In-Studio',  desc: '91% comparable results to in-studio confirmed at 60-day mark.', icon: '⭐' },
        { day: 90,  title: 'Anywhere Athlete',         desc: 'Traveling, relocating, busy — none of it stops your fitness anymore.', icon: '🌍' },
      ],
      trainerProfile: {
        title: 'Certified Personal Trainer (Online Delivery Specialist)',
        certifications: ['NASM-CPT', 'Online Coaching Certification', 'Precision Nutrition L1'],
        philosophy: 'Location is no longer an excuse. I\'ve coached clients from Jaipur to London to a hotel room in Dubai. The only thing that matters is consistency — and I make that easy.',
        yearsExp: '5+ years online + in-studio',
      },
      membershipPlans: [
        { name: 'Remote', sessions: '3x/week live', features: ['3 live video sessions', 'Basic program', 'WhatsApp support'], highlighted: false },
        { name: 'Pro Online', sessions: '5x/week live', features: ['5 live sessions/week', 'Custom nutrition plan', 'Daily WhatsApp check-in', 'Progress tracking app', 'Monthly video review'], highlighted: true, badge: 'MOST FLEXIBLE' },
        { name: 'VIP Online', sessions: 'Unlimited live + async', features: ['Unlimited sessions', 'Video form review (async)', 'Full nutrition coaching', 'Priority scheduling', 'Same-day response guarantee'], highlighted: false },
      ],
      programFAQ: [
        { q: 'What equipment do I need at home for online coaching?', a: 'We design your program around what you have. A pair of dumbbells and a mat is enough to start. We progressively introduce equipment as your program advances. No expensive home gym needed.' },
        { q: 'How does the coach correct my form online?', a: 'Via live video — the same way an in-person session works, just through your screen. You position your camera, do the exercise, and the coach gives real-time verbal and visual cues. Most form issues are correctable this way.' },
        { q: 'Is online coaching cheaper than in-studio?', a: 'Yes — typically 30–40% less than equivalent in-studio coaching. You save on commute time and travel too.' },
        { q: 'I live outside Jaipur/Rajasthan. Can I join?', a: 'Yes. Online coaching is available to anyone in India and internationally. 34% of our current online coaching members are from outside Rajasthan.' },
        { q: 'What if I miss a session?', a: 'No session is wasted. Missed live sessions can be rescheduled within the same week. Your program is always progressing — the coach adjusts load and volume if a session is missed.' },
      ],
    },
  }