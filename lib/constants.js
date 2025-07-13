// Navigation Items
export const navbarItems = [
  { id: 1, path: "#features", label: "Features" },
  { id: 2, path: "#pricing", label: "Pricing" },
  { id: 3, path: "#about", label: "About" },
  { id: 4, path: "#contact", label: "Contact" },
];

// Resources Dropdown Items
export const resourcesItems = [
  {
    id: 1,
    path: "#docs",
    label: "Documentation",
    icon: "BookOpen",
    description: "Complete API documentation and guides",
  },
  {
    id: 2,
    path: "#api",
    label: "API Reference",
    icon: "Code",
    description: "Detailed API endpoints and examples",
  },
  {
    id: 3,
    path: "#sdk",
    label: "SDK Downloads",
    icon: "Package",
    description: "SDK packages for various platforms",
  },
  {
    id: 4,
    path: "#community",
    label: "Community",
    icon: "Users",
    description: "Join our developer community",
  },
];

// Hero Section Data
export const heroData = {
  badge: {
    icon: "Star",
    text: "Trusted by 500+ EV fleets worldwide",
  },
  title: {
    line1: "Secure Your EV",
    line2: "With AI-Powered",
    line3: "Cybersecurity",
  },
  subtitle:
    "Protect your electric vehicles from cyber threats with our advanced AI-powered security platform. Real-time monitoring, threat detection, and automated response.",
  ctaButtons: [
    {
      id: 1,
      text: "Start Free Trial",
      variant: "primary",
      icon: "ArrowRight",
      path: "#signup",
    },
    {
      id: 2,
      text: "Watch Demo",
      variant: "outline",
      icon: "Play",
      path: "#demo",
    },
  ],
  stats: [
    {
      id: 1,
      icon: "Shield",
      value: "99.9%",
      label: "Threat Detection Rate",
    },
    {
      id: 2,
      icon: "TrendingUp",
      value: "500+",
      label: "Protected Fleets",
    },
    {
      id: 3,
      icon: "Users",
      value: "50K+",
      label: "Vehicles Secured",
    },
    {
      id: 4,
      icon: "Globe",
      value: "24/7",
      label: "Global Monitoring",
    },
  ],
  floatingIcons: [
    {
      id: 1,
      icon: "Shield",
      position: { top: "top-20", left: "left-10" },
      color: "text-blue-500/20 dark:text-blue-400/20",
      animation: { duration: 6, y: [0, -20, 0], rotate: [0, 5, 0] },
    },
    {
      id: 2,
      icon: "Zap",
      position: { top: "top-40", right: "right-20" },
      color: "text-purple-500/20 dark:text-purple-400/20",
      animation: { duration: 8, y: [0, 20, 0], rotate: [0, -5, 0] },
    },
    {
      id: 3,
      icon: "Globe",
      position: { bottom: "bottom-40", left: "left-20" },
      color: "text-green-500/20 dark:text-green-400/20",
      animation: { duration: 7, y: [0, -15, 0], rotate: [0, 3, 0] },
    },
  ],
};

// Features Section Data
export const featuresData = {
  header: {
    badge: {
      icon: "Sparkles",
      text: "Advanced Protection",
    },
    title: "Next-Generation EV Security",
    subtitle:
      "Our comprehensive suite of AI-powered tools protects every aspect of your electric vehicle ecosystem with military-grade precision",
  },
  features: [
    {
      id: 1,
      icon: "Shield",
      title: "Real-Time EV Threat Detection",
      description:
        "Instantly detect anomalies in driving behavior, charging activity, or firmware.",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      id: 2,
      icon: "Zap",
      title: "Pulse-Level Monitoring",
      description:
        "Analyze CAN signals, OTA packets, charger handshakes — and block threats at the root.",
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-600/20 to-pink-600/20",
    },
    {
      id: 3,
      icon: "Lock",
      title: "Charging Station Protection",
      description:
        "Prevent spoofing and unauthorized data extraction during public charging.",
      color: "from-green-500 to-emerald-500",
      gradient: "from-green-600/20 to-emerald-600/20",
    },
    {
      id: 4,
      icon: "Radio",
      title: "Secure OTA Updates",
      description:
        "AI-inspected OTA delivery with rollback capability and firmware integrity scans.",
      color: "from-orange-500 to-red-500",
      gradient: "from-orange-600/20 to-red-600/20",
    },
    {
      id: 5,
      icon: "Brain",
      title: "AI-Powered Behavioral Intelligence",
      description:
        "Advanced ML models learn from fleet activity and adapt to new threat patterns.",
      color: "from-indigo-500 to-purple-500",
      gradient: "from-indigo-600/20 to-purple-600/20",
    },
    {
      id: 6,
      icon: "BarChart3",
      title: "Fleet Dashboard + Alerts",
      description:
        "Powerful dashboards for fleet operators, with real-time alerts and insights.",
      color: "from-teal-500 to-blue-500",
      gradient: "from-teal-600/20 to-blue-600/20",
    },
  ],
  specialFeatures: {
    header: {
      badge: {
        icon: "CheckCircle",
        text: "Enterprise Features",
      },
      title: "What Makes PulseGuard Special?",
    },
    items: [
      {
        id: 1,
        icon: "RefreshCw",
        text: "Adaptive AI trained on real CAN and V2G data",
      },
      {
        id: 2,
        icon: "Puzzle",
        text: "Plug-and-play SDK for easy integration with EVs",
      },
      {
        id: 3,
        icon: "FileText",
        text: "Fleet-grade reporting with SOC, SIEM & cloud integrations",
      },
      {
        id: 4,
        icon: "ShieldCheck",
        text: "Compliance-focused (ISO/SAE 21434, UNECE WP.29)",
      },
      {
        id: 5,
        icon: "FlaskConical",
        text: "LLM-generated incident reports + summaries",
      },
    ],
  },
  pulseIQ: {
    title: "PulseIQ™ Scoring",
    subtitle: "Dynamic cybersecurity health score",
    score: 94,
    maxScore: 100,
    status: "Excellent security posture",
    icon: "Zap",
  },
};

// Pricing Section Data
export const pricingData = {
  header: {
    badge: {
      icon: "Star",
      text: "Flexible Pricing",
    },
    title: "Choose Your Protection Level",
    subtitle:
      "Scale your EV cybersecurity as your fleet grows. All plans include our core AI-powered threat detection and real-time monitoring.",
  },
  plans: [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small fleets and individual EV owners",
      monthlyPrice: 59,
      annualPrice: 49,
      icon: "Shield",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-600/20 to-cyan-600/20",
      popular: false,
      features: [
        "Real-time threat detection",
        "Basic CAN bus monitoring",
        "Email alerts",
        "Mobile app access",
        "5 vehicles included",
        "Standard support",
      ],
    },
    {
      id: 2,
      name: "Professional",
      description: "Advanced protection for growing EV fleets",
      monthlyPrice: 179,
      annualPrice: 149,
      icon: "Zap",
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-600/20 to-pink-600/20",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced AI behavioral analysis",
        "Charging station protection",
        "OTA update security",
        "25 vehicles included",
        "Priority support",
        "Custom integrations",
        "Fleet dashboard",
      ],
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Complete security suite for large organizations",
      monthlyPrice: 479,
      annualPrice: 399,
      icon: "Crown",
      color: "from-orange-500 to-red-500",
      gradient: "from-orange-600/20 to-red-600/20",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited vehicles",
        "Custom AI models",
        "SOC integration",
        "24/7 dedicated support",
        "Compliance reporting",
        "White-label options",
        "API access",
        "Custom training",
      ],
    },
  ],
  additionalInfo: {
    title: "All Plans Include",
    icon: "Sparkles",
    items: [
      { id: 1, text: "30-day free trial", icon: "Check" },
      { id: 2, text: "No setup fees", icon: "Check" },
      { id: 3, text: "Cancel anytime", icon: "Check" },
    ],
  },
};

// Theme Configuration
export const themeConfig = {
  light: {
    primary: "light",
    icon: "Sun",
    iconColor: "text-amber-500",
    bgGlow: "bg-amber-500/10",
  },
  dark: {
    primary: "dark",
    icon: "Moon",
    iconColor: "text-blue-400",
    bgGlow: "bg-blue-500/20",
  },
};

// Animation Configurations
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 },
  },
  stagger: {
    staggerChildren: 0.1,
    delayChildren: 0.2,
  },
};

// Sparkles Configuration
export const sparklesConfig = {
  hero: {
    id: "tsparticleshero",
    background: "transparent",
    minSize: 0.6,
    maxSize: 1.4,
    particleDensity: 100,
    particleColor: "#888888",
  },
  features: {
    id: "tsparticlesfeatures",
    background: "transparent",
    minSize: 0.6,
    maxSize: 1.4,
    particleDensity: 100,
    particleColor: "#888888",
  },
  pricing: {
    id: "tsparticlespricing",
    background: "transparent",
    minSize: 0.6,
    maxSize: 1.4,
    particleDensity: 100,
    particleColor: "#888888",
  },
};
