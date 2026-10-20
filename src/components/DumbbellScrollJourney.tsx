import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Users,
  Dumbbell,
  ClipboardList,
  HeartPulse,
  Apple,
  TrendingUp,
  Activity,
  ArrowUpRight,
  Smartphone,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Zap,
  ShieldCheck,
  ChevronRight,
  X,
  Send,
  Flame,
  Award,
} from "lucide-react";

interface EcosystemNode {
  id: number;
  category: "app" | "training" | "facilities";
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  icon: LucideIcon;
  x: number; // percentage in canvas
  y: number; // percentage in canvas
  metric: string;
  highlight: string;
  details: {
    badge: string;
    description: string;
    features: string[];
    syncNote?: string;
  };
}

const nodes: EcosystemNode[] = [
  {
    id: 1,
    category: "app",
    title: "Member Mobile App",
    subtitle: "24/7 Trainer Sync & Chat",
    tag: "LIVE SYNC ⚡",
    tagColor: "border-red-500/40 bg-red-500/15 text-red-400",
    icon: Smartphone,
    x: 50,
    y: 11,
    metric: "Instant 1-on-1 Chat",
    highlight: "Daily check-ins, routine sync & video form reviews",
    details: {
      badge: "Flagship Digital Innovation",
      description:
        "The PowerFit Member App keeps you continuously connected to your dedicated personal trainer. Receive real-time workout adaptations, chat directly throughout the day, and log sets with automated biometric telemetry.",
      features: [
        "Direct 1-on-1 trainer chat & daily routine updates",
        "Video upload for instantaneous exercise form corrections",
        "Daily habit tracker (water intake, sleep, steps, recovery)",
        "Syncs with Apple Watch, Garmin, Whoop, and FitBit",
      ],
      syncNote:
        "Your trainer reviews your daily log every morning and customizes your gym session before you even step foot in the facility.",
    },
  },
  {
    id: 2,
    category: "training",
    title: "Elite Personal Trainers",
    subtitle: "1-on-1 Dedicated Coaching",
    tag: "CERTIFIED ELITE",
    tagColor: "border-amber-500/40 bg-amber-500/15 text-amber-400",
    icon: HeartPulse,
    x: 82,
    y: 18,
    metric: "120+ Coaches",
    highlight: "Floor guidance & continuous digital feedback",
    details: {
      badge: "Human Touch + Science",
      description:
        "Certified strength coaches and biomechanists who partner with you one-on-one. They don't just count reps — they monitor your progression curve, fatigue level, and lifestyle habits.",
      features: [
        "1-on-1 hands-on coaching and form adjustments on the floor",
        "Daily communication through the Member App",
        "Weekly strength benchmarks & periodized overload adjustments",
        "Injury prevention and biomechanical posture analysis",
      ],
      syncNote:
        "Connected directly to the Member App to view member food logs, exercise recordings, and fatigue markers in real time.",
    },
  },
  {
    id: 3,
    category: "training",
    title: "Smart Workout Engine",
    subtitle: "Periodized Training Splits",
    tag: "AI + COACH",
    tagColor: "border-red-500/40 bg-red-500/15 text-red-400",
    icon: ClipboardList,
    x: 88,
    y: 50,
    metric: "500+ Routines",
    highlight: "Progressive overload calibrated to your targets",
    details: {
      badge: "Personalized Programming",
      description:
        "Every training block is customized specifically for your physiological profile, training age, and aesthetic goals, updated seamlessly every week.",
      features: [
        "Hypertrophy, strength, conditioning, and functional splits",
        "Target weight and RPE recommendations for every set",
        "Auto-swap exercises based on gym equipment availability",
        "Deload week schedules calculated automatically to avoid burnout",
      ],
    },
  },
  {
    id: 4,
    category: "training",
    title: "Bio-Metrics & Progress",
    subtitle: "InBody Scans & PR Analytics",
    tag: "DATA DRIVEN",
    tagColor: "border-rose-500/40 bg-rose-500/15 text-rose-400",
    icon: TrendingUp,
    x: 82,
    y: 82,
    metric: "99.4% Success Rate",
    highlight: "Multi-frequency body composition & strength curves",
    details: {
      badge: "Precision Measurement",
      description:
        "Track visceral fat loss, skeletal muscle gains, and personal record progression with clinical accuracy through scheduled scans and telemetry.",
      features: [
        "Monthly 3D InBody body composition analysis",
        "Estimated 1RM curves for Bench, Squat, and Deadlift",
        "Interactive before & after transformation visualizer",
        "Reports automatically sent to your personal trainer",
      ],
    },
  },
  {
    id: 5,
    category: "facilities",
    title: "Recovery & Physio Zone",
    subtitle: "Sauna, Cryo & Mobility",
    tag: "HYPER-RECOVERY",
    tagColor: "border-cyan-500/40 bg-cyan-500/15 text-cyan-400",
    icon: Sparkles,
    x: 50,
    y: 89,
    metric: "Contrast Therapy",
    highlight: "Swedish sauna, cold plunge & guided release",
    details: {
      badge: "Restoration & Longevity",
      description:
        "Training breaks muscles down; recovery builds them back stronger. Our luxury thermal suite reduces inflammation and accelerates nervous system reset.",
      features: [
        "Traditional Finnish sauna & infrared recovery suite",
        "8°C filtered ice baths for active inflammation reduction",
        "Hyperice percussion massage guns and compression boots",
        "On-floor sports physiotherapist consultations",
      ],
    },
  },
  {
    id: 6,
    category: "facilities",
    title: "Precision Nutrition",
    subtitle: "Custom Macros & Meal Approval",
    tag: "DIETITIAN LED",
    tagColor: "border-emerald-500/40 bg-emerald-500/15 text-emerald-400",
    icon: Apple,
    x: 18,
    y: 82,
    metric: "Dynamic Macros",
    highlight: "Trainer meal approval & localized Indian diets",
    details: {
      badge: "Fuel Your Potential",
      description:
        "No starvation or generic templates. Enjoy tailored macro breakdowns with regional Indian foods and international recipes calibrated to your workout volume.",
      features: [
        "Customized calorie and protein breakdown for workout vs rest days",
        "Upload meal photos to get real-time trainer feedback in the app",
        "Supplement stack timing recommendations (Creatine, Whey, Electrolytes)",
        "Healthy dining-out and travel nutrition survival guides",
      ],
    },
  },
  {
    id: 7,
    category: "facilities",
    title: "Biomechanic Equipment",
    subtitle: "Hammer Strength & Eleiko",
    tag: "OLYMPIC GRADE",
    tagColor: "border-orange-500/40 bg-orange-500/15 text-orange-400",
    icon: Dumbbell,
    x: 12,
    y: 50,
    metric: "150+ Stations",
    highlight: "Converging planes & competition-calibrated gear",
    details: {
      badge: "Engineering Excellence",
      description:
        "Engineered with world-class ergonomics that match natural human movement arcs, delivering maximum muscle recruitment while eliminating joint strain.",
      features: [
        "Hammer Strength plate-loaded iso-lateral machines",
        "Eleiko competition powerlifting bars and bumper plates",
        "Multi-station dual adjustable pulley cable cross towers",
        "Specialty bars: Safety Squat Bar, Swiss Football Bar, Hex Trap Bar",
      ],
    },
  },
  {
    id: 8,
    category: "app",
    title: "Members Community",
    subtitle: "Tribe, Leaderboards & Events",
    tag: "15,000+ ATHLETES",
    tagColor: "border-purple-500/40 bg-purple-500/15 text-purple-400",
    icon: Users,
    x: 18,
    y: 18,
    metric: "Active Tribe",
    highlight: "Monthly PR challenges & digital club access",
    details: {
      badge: "Unrivaled Culture",
      description:
        "You never lift alone at PowerFit. Connect with workout partners, compete on branch leaderboards, and take part in community fitness throwdowns.",
      features: [
        "Contactless QR code gym turnstile access via Member App",
        "Monthly community strength and endurance leaderboards",
        "Workout buddy matching by fitness level and training schedule",
        "Quarterly guest workshops by international fitness champions",
      ],
    },
  },
];

// Connection lines from Central Hub (50, 50) to the 8 outer nodes
const hubConnections = [
  { nodeId: 1, x1: 50, y1: 43, x2: 50, y2: 19 }, // Hub to Member App (Top)
  { nodeId: 2, x1: 56, y1: 44, x2: 75, y2: 24 }, // Hub to Trainers (Top-Right)
  { nodeId: 3, x1: 58, y1: 50, x2: 79, y2: 50 }, // Hub to Workout Plans (Mid-Right)
  { nodeId: 4, x1: 56, y1: 56, x2: 75, y2: 76 }, // Hub to Progress (Bottom-Right)
  { nodeId: 5, x1: 50, y1: 57, x2: 50, y2: 81 }, // Hub to Recovery (Bottom)
  { nodeId: 6, x1: 44, y1: 56, x2: 25, y2: 76 }, // Hub to Nutrition (Bottom-Left)
  { nodeId: 7, x1: 42, y1: 50, x2: 21, y2: 50 }, // Hub to Equipment (Mid-Left)
  { nodeId: 8, x1: 44, y1: 44, x2: 25, y2: 24 }, // Hub to Community (Top-Left)
];

// Direct peer-to-peer connection: Member App <---> Personal Trainer & Member App <---> Community
const peerConnections = [
  {
    id: "app-trainer",
    sourceId: 1,
    targetId: 2,
    x1: 59,
    y1: 12,
    x2: 73,
    y2: 17,
    label: "24/7 Trainer Sync",
  },
  {
    id: "app-community",
    sourceId: 1,
    targetId: 8,
    x1: 41,
    y1: 12,
    x2: 27,
    y2: 17,
    label: "Digital Access",
  },
];

const mockChatMessages = [
  {
    id: 1,
    sender: "trainer",
    name: "Coach Rahul",
    avatar: "🏋️",
    time: "08:15 AM",
    text: "Morning Rohan! Reviewed your squat clip from yesterday. Your hip crease is hitting parallel cleanly now. Let's push working sets to 100kg today!",
  },
  {
    id: 2,
    sender: "member",
    name: "Rohan (You)",
    avatar: "👤",
    time: "08:18 AM",
    text: "Awesome coach! Felt great on the knees. I also logged my breakfast: 4 egg whites + oats, 32g protein.",
  },
  {
    id: 3,
    sender: "trainer",
    name: "Coach Rahul",
    avatar: "🏋️",
    time: "08:21 AM",
    text: "Perfect fueling! Remember to hit the sauna for 12 mins post-workout to speed up CNS recovery. See you on the floor at 5 PM! 💪",
  },
];

export default function DumbbellScrollJourney() {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [inspectNode, setInspectNode] = useState<EcosystemNode | null>(null);
  const [showTrainerAppModal, setShowTrainerAppModal] = useState<boolean>(false);
  const [simulatedChat, setSimulatedChat] = useState(mockChatMessages);
  const [newChatInput, setNewChatInput] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatInput.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "member",
      name: "You",
      avatar: "👤",
      time: "Just now",
      text: newChatInput,
    };

    setSimulatedChat((prev) => [...prev, userMsg]);
    setNewChatInput("");

    // Simulate instant trainer response
    setTimeout(() => {
      const responses = [
        "Logged and verified! Keep your hydration high throughout the rest of the day.",
        "Noted! I have updated your routine in your app dashboard for tomorrow.",
        "Great discipline! Your weekly adherence score is now at 98%. Keep it going!",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      setSimulatedChat((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "trainer",
          name: "Coach Rahul",
          avatar: "🏋️",
          time: "Just now",
          text: randomResponse,
        },
      ]);
    }, 900);
  };

  const activeNode = nodes.find((n) => n.id === activeNodeId);

  return (
    <section
      id="gym-ecosystem"
      className="section-dark relative overflow-hidden py-20 md:py-28"
    >
      {/* Background ambient lighting & radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.08] blur-[140px]" />
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-red-500/[0.04] blur-[110px]" />
        <div className="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-amber-500/[0.03] blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
      </div>

      <div className="section-container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
            <Activity size={15} />
            Unified Fitness Network
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {/* More Than a Gym. */}
            <span className="mt-2 block bg-gradient-to-r from-red-500 via-rose-400 to-amber-500 bg-clip-text text-transparent">
              A Complete Connected Ecosystem.
            </span>
          </h2>

          {/* <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base md:text-lg">
            Every component synchronizes seamlessly — from 24/7 personal trainer
            mobile connectivity and biometric tracking to olympic equipment and
            custom nutrition.
          </p> */}

          {/* Interactive Action & Filter Bar */}
          {/* <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${selectedCategory === "all"
                ? "border border-red-500 bg-red-500 text-white shadow-[0_0_18px_rgba(239,68,68,0.35)]"
                : "border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
            >
              All 8 Modules
            </button>

            <button
              onClick={() => setSelectedCategory("app")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${selectedCategory === "app"
                ? "border border-red-500 bg-red-500 text-white shadow-[0_0_18px_rgba(239,68,68,0.35)]"
                : "border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
            >
              <Smartphone size={13} />
              Member & Trainer App
            </button>

            <button
              onClick={() => setSelectedCategory("training")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${selectedCategory === "training"
                ? "border border-red-500 bg-red-500 text-white shadow-[0_0_18px_rgba(239,68,68,0.35)]"
                : "border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
            >
              <HeartPulse size={13} />
              Coaching & Progression
            </button>

            <button
              onClick={() => setSelectedCategory("facilities")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${selectedCategory === "facilities"
                ? "border border-red-500 bg-red-500 text-white shadow-[0_0_18px_rgba(239,68,68,0.35)]"
                : "border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
            >
              <Sparkles size={13} />
              Facilities & Fuel
            </button>

            <button
              onClick={() => setShowTrainerAppModal(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 transition-all duration-300 hover:border-amber-400 hover:bg-amber-500 hover:text-black shadow-[0_0_20px_rgba(245,158,11,0.15)]"
            >
              <Zap size={13} className="text-amber-400" />
              Live App Sync Demo
            </button>
          </div> */}
        </motion.div>

        {/* ============================================================== */}
        {/* DESKTOP INTERACTIVE ORBITAL ECOSYSTEM CANVAS (>= 1024px)       */}
        {/* ============================================================== */}
        <div className="relative mx-auto hidden h-[840px] w-full max-w-6xl lg:block">
          {/* SVG Connection Network with exact coordinates */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <defs>
              {/* Radial gradient for central hub lines */}
              <linearGradient
                id="hub-line-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f87171" stopOpacity="0.35" />
              </linearGradient>

              {/* Special gradient for Trainer <-> Member App peer line */}
              <linearGradient
                id="peer-line-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
              </linearGradient>

              {/* Filter glow for active connection */}
              <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Orbit guideline circles centered at (50, 50) */}
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeDasharray="2 3"
              strokeWidth="0.2"
            />
            <circle
              cx="50"
              cy="50"
              r="24"
              fill="none"
              stroke="rgba(239,68,68,0.06)"
              strokeDasharray="1.5 2.5"
              strokeWidth="0.2"
            />

            {/* 1. Hub to Nodes Connections */}
            {hubConnections.map((line) => {
              const isNodeActive = activeNodeId === line.nodeId;
              const nodeData = nodes.find((n) => n.id === line.nodeId);
              const matchesFilter =
                selectedCategory === "all" ||
                nodeData?.category === selectedCategory;

              return (
                <g key={`hub-line-${line.nodeId}`}>
                  {/* Base static line */}
                  <line
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke={
                      isNodeActive
                        ? "#ef4444"
                        : matchesFilter
                          ? "rgba(239,68,68,0.3)"
                          : "rgba(255,255,255,0.05)"
                    }
                    strokeWidth={isNodeActive ? "0.45" : "0.22"}
                    strokeDasharray={isNodeActive ? "none" : "1.2 1.2"}
                    filter={isNodeActive ? "url(#neon-glow)" : undefined}
                    className="transition-all duration-300"
                  />

                  {/* Flowing animated particle from center outward */}
                  {matchesFilter && (
                    <circle r={isNodeActive ? "0.6" : "0.4"} fill="#ef4444">
                      <animateMotion
                        dur={isNodeActive ? "1.8s" : `${2.8 + (line.nodeId % 3)}s`}
                        begin={`${line.nodeId * 0.3}s`}
                        repeatCount="indefinite"
                        path={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* 2. Special Peer Connections: Member App <---> Personal Trainer */}
            {peerConnections.map((peer) => {
              const isPeerActive =
                activeNodeId === peer.sourceId ||
                activeNodeId === peer.targetId ||
                selectedCategory === "app" ||
                selectedCategory === "training";

              return (
                <g key={peer.id}>
                  <line
                    x1={peer.x1}
                    y1={peer.y1}
                    x2={peer.x2}
                    y2={peer.y2}
                    stroke="url(#peer-line-grad)"
                    strokeWidth={isPeerActive ? "0.55" : "0.3"}
                    strokeDasharray="1.5 1.5"
                    filter={isPeerActive ? "url(#neon-glow)" : undefined}
                    className="transition-all duration-300"
                  />

                  {/* Bi-directional pulses for Member-Trainer App feedback */}
                  <circle r="0.5" fill="#f59e0b">
                    <animateMotion
                      dur="2.2s"
                      repeatCount="indefinite"
                      path={`M ${peer.x1} ${peer.y1} L ${peer.x2} ${peer.y2}`}
                    />
                  </circle>
                  <circle r="0.45" fill="#ef4444">
                    <animateMotion
                      dur="2.2s"
                      begin="1.1s"
                      repeatCount="indefinite"
                      path={`M ${peer.x2} ${peer.y2} L ${peer.x1} ${peer.y1}`}
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Central POWERFIT Hub at (50%, 50%) - Exact Center */}
          <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <div className="relative flex h-48 w-48 items-center justify-center">
              {/* Outer atmospheric aura */}
              <motion.div
                animate={{
                  scale: activeNodeId ? [1.1, 1.25, 1.1] : [1, 1.15, 1],
                  opacity: activeNodeId ? [0.4, 0.6, 0.4] : [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-red-600 blur-2xl"
              />

              {/* Counter-rotating decorative tech ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-dashed border-red-500/40"
              />

              {/* Secondary tick ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-3 rounded-full border border-dotted border-red-400/30"
              />

              {/* Central Metallic Core */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-red-500/70 bg-[#121214] p-3 shadow-[0_0_55px_rgba(239,68,68,0.35)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/15 text-red-500">
                  <Dumbbell size={28} className="text-red-500" />
                </div>

                <span className="mt-1 text-sm font-black tracking-[0.2em] text-white">
                  POWERFIT
                </span>

                {/* <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-red-400">
                  Central Hub
                </span> */}

                {/* <div className="mt-1.5 flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[8px] font-medium text-neutral-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  8 Modules Active
                </div> */}
              </motion.div>
            </div>

            {/* Dynamic Status Readout Badge */}
            {/* <motion.div
              key={activeNode ? activeNode.title : "default"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 flex items-center gap-2 rounded-full border border-red-500/30 bg-[#151518]/90 px-4 py-1.5 text-[11px] font-semibold text-neutral-300 shadow-lg backdrop-blur-md"
            > */}
            {/* <Zap size={13} className="text-amber-400" /> */}
            {/* {activeNode ? (
                <span className="text-red-400 font-bold">
                  Active: {activeNode.title}
                </span>
              ) : (
                <span>Hover or click any module to inspect</span>
              )} */}
            {/* </motion.div> */}
          </div>

          {/* Floating Pill for the Trainer <-> Member App Direct Sync */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowTrainerAppModal(true)}
            className="absolute left-[66%] top-[12%] z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-amber-500/60 bg-[#171310]/95 px-3 py-1 shadow-[0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-md transition-all hover:border-amber-400 hover:bg-[#201811]"
          > */}
          {/* <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              24/7 Trainer Sync
              <ArrowUpRight size={12} className="text-amber-400" />
            </div> */}
          {/* </motion.div> */}

          {/* 8 Interconnected Cards Distributed Generously */}
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isHovered = activeNodeId === node.id;
            const matchesFilter =
              selectedCategory === "all" || node.category === selectedCategory;

            return (
              <div
                key={node.id}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                }}
                className={`group absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${matchesFilter ? "opacity-100" : "opacity-35 pointer-events-none"
                  }`}
                onMouseEnter={() => setActiveNodeId(node.id)}
                onMouseLeave={() => setActiveNodeId(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.08,
                    type: "spring",
                    stiffness: 110,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  // onClick={() => setInspectNode(node)}
                  className={`relative w-[215px] cursor-pointer rounded-2xl border p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 ${isHovered
                    ? "border-red-500/80 bg-[#1c1414] shadow-[0_10px_35px_rgba(239,68,68,0.28)]"
                    : "border-white/10 bg-[#141416]/95 hover:border-red-500/50 hover:bg-[#1a1515]"
                    }`}
                >
                  {/* Top Badge & Micro Metric */}
                  <div className="mb-2.5 flex items-center justify-between">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${node.tagColor}`}
                    >
                      {node.tag}
                    </span>

                    <span className="text-[10px] font-medium text-neutral-400">
                      {node.metric}
                    </span>
                  </div>

                  {/* Icon & Arrow */}
                  <div className="mb-2.5 flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${isHovered
                        ? "border-red-500 bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                        : "border-red-500/30 bg-red-500/10 text-red-400 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white"
                        }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-neutral-400 transition-colors group-hover:bg-red-500/20 group-hover:text-red-400">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm font-bold leading-tight text-white group-hover:text-red-300">
                    {node.title}
                  </h3>

                  <p className="mt-1 text-xs leading-4 text-neutral-400">
                    {node.subtitle}
                  </p>

                  {/* Bottom micro-accent bar */}
                  <div
                    className={`mt-3 h-0.5 rounded-full transition-all duration-300 ${isHovered
                      ? "w-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                      : "w-8 bg-red-500/40 group-hover:w-full group-hover:bg-red-500"
                      }`}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET RESPONSIVE ECOSYSTEM (< 1024px)               */}
        {/* ============================================================== */}
        <div className="lg:hidden">
          {/* Mobile Central Hub Feature Showcase */}
          <div className="relative mx-auto mb-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-red-500/60 bg-[#121214] shadow-[0_0_40px_rgba(239,68,68,0.25)]"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-red-500/60"
              />
              <Dumbbell size={30} className="mb-1 text-red-500" />
              <span className="text-xs font-black tracking-widest text-white">
                POWERFIT
              </span>
              <span className="text-[8px] uppercase tracking-widest text-neutral-500">
                Central Hub
              </span>
            </motion.div>

            {/* Connecting line */}
            <div className="h-6 w-px bg-gradient-to-b from-red-500 to-transparent" />

            {/* Spotlight Banner: Member-Trainer 24/7 Connect */}
            <div
              // onClick={() => setShowTrainerAppModal(true)}
              className="mt-2 w-full max-w-md cursor-pointer rounded-2xl border border-amber-500/40 bg-gradient-to-r from-[#1c1410] to-[#161214] p-4 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                    <Smartphone size={19} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">
                        Member & Trainer Live Connect
                      </span>
                      <span className="rounded-full bg-amber-500/20 px-1.5 py-0.2 text-[9px] font-bold text-amber-300">
                        LIVE
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400">
                      Tap to open simulated chat & workout sync
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-amber-400" />
              </div>
            </div>
          </div>

          {/* Mobile Cards Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {nodes
              .filter(
                (n) =>
                  selectedCategory === "all" || n.category === selectedCategory
              )
              .map((node, index) => {
                const Icon = node.icon;

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    // onClick={() => setInspectNode(node)}
                    className="relative cursor-pointer rounded-2xl border border-white/10 bg-[#141416] p-4 transition-all active:scale-[0.98] hover:border-red-500/50"
                  >
                    <div className="mb-2.5 flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                        <Icon size={19} />
                      </div>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase ${node.tagColor}`}
                      >
                        {node.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white">
                      {node.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-400">
                      {node.subtitle}
                    </p>

                    <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-[11px] text-neutral-400">
                      <span>{node.metric}</span>
                      <span className="flex items-center gap-0.5 text-red-400 font-semibold">
                        Details <ChevronRight size={12} />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* Bottom Platform Statistics Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-[#121214]/80 p-4 backdrop-blur-xl sm:grid-cols-4 md:mt-16 md:p-6"
        > */}
        {/* <div className="flex flex-col items-center text-center p-2">
            <span className="text-2xl font-black text-white sm:text-3xl">
              24/7
            </span>
            <span className="mt-0.5 text-xs text-neutral-400">
              Trainer App Messaging
            </span>
          </div> */}

        {/* <div className="flex flex-col items-center text-center p-2 border-l border-white/5">
            <span className="text-2xl font-black text-red-500 sm:text-3xl">
              15,000+
            </span>
            <span className="mt-0.5 text-xs text-neutral-400">
              Active Member Tribe
            </span>
          </div> */}

        {/* <div className="flex flex-col items-center text-center p-2 border-l border-white/5">
            <span className="text-2xl font-black text-white sm:text-3xl">
              99.4%
            </span>
            <span className="mt-0.5 text-xs text-neutral-400">
              Goal Completion Rate
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-2 border-l border-white/5">
            <span className="text-2xl font-black text-amber-400 sm:text-3xl">
              8 in 1
            </span>
            <span className="mt-0.5 text-xs text-neutral-400">
              Unified Ecosystem
            </span>
          </div> */}
        {/* </motion.div> */}
      </div>

      {/* ============================================================== */}
      {/* MODAL 1: LIVE TRAINER-MEMBER APP INTERACTION SIMULATOR         */}
      {/* ============================================================== */}
      <AnimatePresence>
        {showTrainerAppModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // onClick={() => setShowTrainerAppModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#121215] shadow-2xl"
            >
              {/* App Mock Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#16161a] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-500">
                    <Smartphone size={20} />
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#16161a] bg-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      PowerFit Member Portal
                    </h4>
                    <p className="text-xs text-neutral-400 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Coach Rahul Sharma • Online
                    </p>
                  </div>
                </div>

                <button
                  // onClick={() => setShowTrainerAppModal(false)}
                  className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Habit & Routine Sync Bar */}
              <div className="grid grid-cols-3 gap-2 border-b border-white/5 bg-[#19191e] px-4 py-2.5 text-center text-xs">
                <div className="rounded-lg bg-black/30 p-1.5">
                  <span className="text-[10px] text-neutral-400">Daily Streak</span>
                  <p className="font-bold text-amber-400">🔥 19 Days</p>
                </div>
                <div className="rounded-lg bg-black/30 p-1.5">
                  <span className="text-[10px] text-neutral-400">Water Target</span>
                  <p className="font-bold text-cyan-400">💧 3.2L / 3.5L</p>
                </div>
                <div className="rounded-lg bg-black/30 p-1.5">
                  <span className="text-[10px] text-neutral-400">Protein Goal</span>
                  <p className="font-bold text-emerald-400">🍗 142g / 150g</p>
                </div>
              </div>

              {/* Chat Messages Log */}
              <div className="max-h-72 min-h-60 space-y-3 overflow-y-auto p-4 text-xs">
                {simulatedChat.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 ${msg.sender === "member" ? "justify-end" : "justify-start"
                      }`}
                  >
                    {msg.sender === "trainer" && (
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs">
                        {msg.avatar}
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${msg.sender === "member"
                        ? "bg-red-600 text-white"
                        : "bg-[#1f1f26] text-neutral-200 border border-white/5"
                        }`}
                    >
                      <div className="mb-1 flex items-center justify-between gap-4 text-[10px] opacity-75">
                        <span className="font-bold">{msg.name}</span>
                        <span>{msg.time}</span>
                      </div>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>

                    {msg.sender === "member" && (
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">
                        {msg.avatar}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="flex flex-wrap gap-1.5 border-t border-white/5 bg-[#141417] px-4 py-2">
                <span className="text-[10px] font-medium text-neutral-400 self-center mr-1">
                  Quick send:
                </span>
                <button
                  type="button"
                  // onClick={() =>
                  //   setNewChatInput("Uploaded today's Deadlift video for form check!")
                  // }
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-neutral-300 hover:border-red-500 hover:text-white"
                >
                  📹 Uploaded Deadlift video
                </button>
                <button
                  type="button"
                  // onClick={() =>
                  //   setNewChatInput("Completed all 4 working sets! Can we increase weight?")
                  // }
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-neutral-300 hover:border-red-500 hover:text-white"
                >
                  💪 Finished 4 sets
                </button>
              </div>

              {/* Interactive Chat Input */}
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2 border-t border-white/10 bg-[#16161a] p-3"
              >
                <input
                  type="text"
                  value={newChatInput}
                  onChange={(e) => setNewChatInput(e.target.value)}
                  placeholder="Message Coach Rahul..."
                  className="flex-1 rounded-xl border border-white/10 bg-[#0f0f12] px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500 text-white transition-transform hover:scale-105"
                >
                  <Send size={14} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* MODAL 2: INDIVIDUAL NODE INSPECTOR                            */}
      {/* ============================================================== */}
      <AnimatePresence>
        {inspectNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // onClick={() => setInspectNode(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#141418] p-6 shadow-2xl"
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-wider ${inspectNode.tagColor}`}
                >
                  {inspectNode.details.badge}
                </span>

                <button
                  // onClick={() => setInspectNode(null)}
                  className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title & Icon */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-500">
                  <inspectNode.icon size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {inspectNode.title}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {inspectNode.subtitle} • {inspectNode.metric}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-neutral-300">
                {inspectNode.details.description}
              </p>

              {/* Key Features Bullet List */}
              <div className="mt-5 space-y-2 rounded-2xl border border-white/5 bg-[#18181f] p-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Core Capabilities
                </h5>
                <ul className="space-y-1.5">
                  {inspectNode.details.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-neutral-300"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 flex-shrink-0 text-red-400"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trainer Connection Callout if present */}
              {inspectNode.details.syncNote && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
                  <Zap size={15} className="mt-0.5 flex-shrink-0 text-amber-400" />
                  <p>{inspectNode.details.syncNote}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-end gap-3">
                {inspectNode.id === 1 && (
                  <button
                    // onClick={() => {
                    //   setInspectNode(null);
                    //   setShowTrainerAppModal(true);
                    // }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-red-500 px-4 py-2 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
                  >
                    <Smartphone size={14} />
                    Open Live App Chat Demo
                  </button>
                )}
                <button
                  // onClick={() => setInspectNode(null)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-neutral-300 hover:bg-white/10 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section >
  );
}