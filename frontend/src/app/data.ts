// ---------------------------------------------------------------------------
// Site content for TechnoCop Energy Co. (TECHNOPLUS LED Solar Light)
// Sourced from the company brochure. Update image paths in src/assets and
// point the `image` fields below at your own hosted assets before going live.
// ---------------------------------------------------------------------------

export interface NavLink {
  name: string;
  path: string;
}

export interface CompanyInfo {
  name: string;
  brand: string;
  tagline: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  phones: string[];
  emails: string[];
  website: string;
  workingHours: string;
  workingDays: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroImage: string;
  features: { title: string; description: string }[];
  wattageOptions: string[];
  keySpecs: SpecItem[];
  applications: string[];
}

export interface OtherProduct {
  name: string;
  type: string;
  points: string[];
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface ProjectEntry {
  title: string;
  location: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Faq {
  question: string;
  answer: string;
}

// ---------------------------------------------------------------------------
// Company details
// ---------------------------------------------------------------------------

export const company: CompanyInfo = {
  name: 'TechnoCop Energy Co.',
  brand: 'TechnoPlus LED Solar Light',
  tagline: 'Energizing Lives for a Better Tomorrow',
  addressLine1: '61, SSGT Industrial Area',
  addressLine2: 'Lal Kuan, Ghaziabad – 201001',
  addressLine3: 'Uttar Pradesh, India',
  phones: ['+91 9643123309', '+91 9910381309'],
  emails: ['info@technocopenergyco.in', 'sales@technocopenergyco.in'],
  website: 'www.technocopenergyco.in',
  workingHours: '9:30 AM to 6:30 PM',
  workingDays: 'Monday – Saturday',
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Projects & Clients', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

// ---------------------------------------------------------------------------
// Trust bar / feature strip (from cover page)
// ---------------------------------------------------------------------------

export const trustFeatures: { title: string; icon: string }[] = [
  { title: 'Solar Powered', icon: 'sun' },
  { title: 'Energy Efficient', icon: 'bolt' },
  { title: 'Reliable & Durable', icon: 'shield' },
  { title: 'Eco Friendly', icon: 'leaf' },
];

// ---------------------------------------------------------------------------
// About / mission / vision / core values
// ---------------------------------------------------------------------------

export const aboutParagraphs: string[] = [
  'TechnoCop Energy Co. is a trusted manufacturer and supplier of innovative LED Solar Lighting and Renewable Energy Solutions in India. We are committed to delivering energy-efficient, eco-friendly, and high-performance lighting systems that meet the growing needs of residential, commercial, industrial, and government sectors.',
  'With extensive experience in solar technology, we offer a comprehensive range of products including Solar Street Lights, Integrated Solar Street Lights, Semi-Integrated Solar Street Lights, High Mast Lights, Solar Flood Lights, Solar Water Pumping Systems, and customized energy solutions.',
  'Our products are manufactured using premium-quality components and advanced technology to ensure maximum efficiency, long service life, and reliable performance in all weather conditions. Every solution is designed to reduce electricity costs while supporting a cleaner and greener future.',
  'At TechnoCop Energy Co., customer satisfaction is our highest priority. We focus on delivering superior quality, timely project execution, technical excellence, and dependable after-sales support to build long-term partnerships with our clients.',
];

export const mission =
  'To provide innovative, reliable, and energy-efficient solar lighting solutions that contribute to sustainable development while delivering exceptional value and customer satisfaction.';

export const missionPillars = [
  { title: 'Innovate', description: 'Continuously innovate to deliver advanced and efficient solutions.' },
  { title: 'Deliver', description: 'Deliver high-quality products with reliability and performance.' },
  { title: 'Commit', description: 'Commit to sustainability and environmental responsibility.' },
  { title: 'Support', description: 'Provide exceptional support and build long-term relationships.' },
];

export const vision =
  "To become one of India's most trusted and leading renewable energy companies by delivering world-class solar products and solutions that create a cleaner, smarter, and energy-independent future for generations to come.";

export const visionPoints = ['Sustainable Planet', 'Growth with Innovation', 'Smart Energy Solutions', 'Better Life for Everyone'];

export const coreValues: string[] = [
  'Quality Assurance',
  'Innovation & Technology',
  'Customer Satisfaction',
  'Sustainable Energy',
  'Reliable Performance',
  'Nationwide Service Support',
];

export const whyChooseUs: WhyChooseUsItem[] = [
  { title: 'Premium Quality Products', description: 'We use high-grade materials and advanced technology to ensure maximum performance and durability.' },
  { title: 'Advanced Solar Technology', description: 'Our products are designed with the latest technology to deliver higher efficiency and better energy output.' },
  { title: 'Energy Efficient Solutions', description: 'Our solutions help you reduce electricity bills and support a cleaner, greener environment.' },
  { title: 'Professional Technical Support', description: 'Our expert team is always ready to assist you with the best solutions and after-sales support.' },
  { title: 'Customized Project Solutions', description: 'We understand your requirements and provide tailored solutions for every project.' },
  { title: 'Trusted Service & Warranty', description: 'We offer reliable service and warranty to give you complete peace of mind.' },
];

// ---------------------------------------------------------------------------
// Product categories (each gets its own routed detail page)
// ---------------------------------------------------------------------------

export const productCategories: ProductCategory[] = [
  {
    slug: 'solar-street-lights',
    name: 'Solar Street Lights',
    shortName: 'Solar Street Lights',
    tagline: 'Smart Lighting for a Sustainable World',
    description:
      'Our Solar Street Lights are designed to deliver high performance, energy efficiency and unmatched reliability for all outdoor lighting applications.',
    heroImage: 'https://images.unsplash.com/photo-1740805276608-ef60e2e468ba?auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'Solar Powered', description: 'Harnesses solar energy to reduce electricity cost and carbon footprint.' },
      { title: 'High Brightness', description: 'High efficiency LEDs for superior illumination and wider coverage.' },
      { title: 'Long Life Battery', description: 'Advanced Li-ion / LiFePO4 batteries ensure longer backup and durability.' },
      { title: 'Durable & Reliable', description: 'Rugged design with weatherproof construction for all climatic conditions.' },
      { title: 'Easy Installation', description: 'Quick and hassle-free installation with low maintenance.' },
    ],
    wattageOptions: ['12W – 20W', '30W – 60W', '70W – 100W', '120W – 200W'],
    keySpecs: [
      { label: 'Solar Panel', value: 'Monocrystalline / Polycrystalline (High Efficiency)' },
      { label: 'LED Chip', value: 'High Efficiency SMD LED (130–150 lm/W)' },
      { label: 'Body Material', value: 'Aluminium Pressure Die Cast' },
      { label: 'Battery', value: 'Li-ion / LiFePO4 (High Capacity)' },
      { label: 'Color Temperature', value: '3000K / 4000K / 5700K / 6500K' },
      { label: 'Backup Time', value: '2–3 Nights (Full Charge)' },
      { label: 'Controller', value: 'MPPT / PWM Smart Controller (Overcharge & Overdischarge Protection)' },
      { label: 'IP Rating', value: 'IP65 / IP66 (Weatherproof)' },
      { label: 'Mounting Height', value: '6 Meter to 12 Meter (Customizable)' },
    ],
    applications: ['Highways', 'Residential Areas', 'Parks & Gardens', 'Industrial Areas', 'Campus & Institutions', 'Rural & Remote Areas'],
  },
  {
    slug: 'semi-integrated-solar-street-lights',
    name: 'Semi-Integrated Solar Street Lights',
    shortName: 'Semi-Integrated Lights',
    tagline: 'Smart. Reliable. Sustainable.',
    description:
      "Our Semi-Integrated Solar Street Lights use inbuilt Li-ion / LiFePO4 batteries to store the electrical energy generated by PV modules during the daylight and use the electrical energy during the night to light up the LEDs. These can be customized as per the user's need.",
    heroImage: 'https://images.unsplash.com/photo-1605872223371-0790b8b67dae?auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'Built-in Battery', description: 'Inbuilt Li-ion / LiFePO4 battery for efficient energy storage.' },
      { title: 'Easy Installation', description: 'Simple mounting with minimal wiring and low maintenance.' },
      { title: 'Durable Design', description: 'Aluminium pressure die cast housing for superior strength and longevity.' },
      { title: 'High Performance', description: 'High efficiency LEDs for maximum illumination and energy saving.' },
      { title: 'Long Life', description: 'Advanced battery technology for extended backup and reliability.' },
      { title: 'Eco Friendly', description: 'Clean and green energy solution for a sustainable future.' },
    ],
    wattageOptions: ['12W – 20W', '30W – 60W', '70W – 100W', '120W – 200W'],
    keySpecs: [
      { label: 'Solar Panel', value: 'Monocrystalline / Polycrystalline (High Efficiency)' },
      { label: 'LED Chip', value: 'High Efficiency SMD LED (130–150 lm/W)' },
      { label: 'Housing', value: 'Aluminium Pressure Die Cast' },
      { label: 'Battery', value: 'Li-ion / LiFePO4 (9.6Ah to 30Ah)' },
      { label: 'Color Temperature', value: '3000K / 4000K / 5700K / 6500K' },
      { label: 'Backup Time', value: '2–3 Nights (Full Charge)' },
      { label: 'Controller', value: 'MPPT / PWM Smart Controller (Overcharge & Overdischarge Protection)' },
      { label: 'IP Rating', value: 'IP65 / IP67 (Weatherproof)' },
      { label: 'Mounting Height', value: '6 Meter to 12 Meter (Customizable)' },
    ],
    applications: ['Roads & Highways', 'Residential Areas', 'Parks & Gardens', 'Industrial Areas', 'Schools & Colleges', 'Rural Areas'],
  },
  {
    slug: 'integrated-solar-street-lights',
    name: 'Integrated Solar Street Lights',
    shortName: 'Integrated Lights',
    tagline: 'All-in-One Solution for Smart & Sustainable Lighting',
    description:
      'Our Integrated Solar Street Lights are an all-in-one lighting solution with solar panel, LED, battery and smart controller built into a single compact unit. They are easy to install, wire-free and designed for maximum efficiency, durability and performance.',
    heroImage: 'https://images.unsplash.com/photo-1688124968558-974cf707348b?auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'All-in-One Design', description: 'Solar panel, battery, LED & controller integrated in a single unit.' },
      { title: 'Easy Installation', description: 'No wiring or external components required. Just mount and use.' },
      { title: 'High Battery Capacity', description: 'Built-in LiFePO4 battery for longer backup and enhanced cycle life.' },
      { title: 'High Brightness LED', description: 'High efficiency LEDs for superior illumination and wider coverage.' },
      { title: 'Weather Resistant', description: 'IP65 / IP67 rated design for reliable performance in all weather conditions.' },
      { title: 'Eco Friendly', description: 'Zero electricity cost and zero emission – a green future solution.' },
    ],
    wattageOptions: ['20W – 40W', '50W – 80W', '100W – 120W', '150W – 200W'],
    keySpecs: [
      { label: 'Solar Panel', value: 'Monocrystalline / Polycrystalline (High Efficiency)' },
      { label: 'LED Chip', value: 'High Efficiency SMD LED (130–150 lm/W)' },
      { label: 'Body Material', value: 'Aluminium Alloy (Corrosion Resistant)' },
      { label: 'Battery', value: 'LiFePO4 Battery (12.8V / 6Ah to 30Ah)' },
      { label: 'Color Temperature', value: '3000K / 4000K / 5700K / 6500K' },
      { label: 'Backup Time', value: '2–3 Nights (Full Charge)' },
      { label: 'Controller', value: 'MPPT Smart Controller (Overcharge & Overdischarge Protection)' },
      { label: 'IP Rating', value: 'IP65 / IP67 (Weatherproof)' },
      { label: 'Mounting Height', value: '6 Meter to 12 Meter (Customizable)' },
    ],
    applications: ['Roads & Highways', 'Residential Areas', 'Parks & Gardens', 'Industrial Areas', 'Schools & Colleges', 'Rural & Remote Areas'],
  },
  {
    slug: 'high-mast-lights',
    name: 'High Mast Lights',
    shortName: 'High Mast Lights',
    tagline: 'Powerful Lighting for Large Areas',
    description:
      'Our High Mast Lights are designed to deliver high intensity, uniform and glare-free illumination for large outdoor areas. Built with robust materials and advanced LED technology, they ensure excellent performance, low maintenance and long service life.',
    heroImage: 'https://images.unsplash.com/photo-1693164586646-f3f877aec626?auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'High Intensity Illumination', description: 'Powerful LEDs deliver high lumen output for wide and uniform light distribution.' },
      { title: 'Durable & Robust Design', description: 'Heavy duty pole and corrosion resistant body ensure long lasting performance.' },
      { title: 'Energy Efficient', description: 'High efficiency LEDs reduce power consumption and operating cost.' },
      { title: 'Weather Resistant', description: 'Designed to withstand harsh weather conditions. IP66 / IP67 rated.' },
      { title: 'Low Maintenance', description: 'Reliable components and quality materials ensure minimal maintenance.' },
      { title: 'Eco Friendly', description: 'Environment friendly lighting solution with zero harmful emissions.' },
    ],
    wattageOptions: ['8 Lights', '12 Lights', '16 Lights', '20 Lights'],
    keySpecs: [
      { label: 'LED Chip', value: 'High Efficiency SMD LED (130–150 lm/W)' },
      { label: 'Pole Height', value: '12 Meter to 30 Meter (Customizable)' },
      { label: 'Protection Rating', value: 'IP66 / IP67 (Weatherproof)' },
      { label: 'Lumen Output', value: 'Up to 210 lm/W' },
      { label: 'Color Temperature', value: '3000K / 4000K / 5700K / 6500K' },
      { label: 'Life Span', value: '50,000+ Hours' },
      { label: 'Input Voltage', value: '100–277V AC, 50/60Hz' },
      { label: 'Pole Material', value: 'High Tensile GI / MS Steel (Hot Dip Galvanized)' },
      { label: 'Finish', value: 'Anti Corrosion Powder Coated Finish' },
      { label: 'CRI', value: '>70' },
      { label: 'Operating Temperature', value: '-20°C to +50°C' },
      { label: 'Surge Protection', value: '4KV / 6KV / 10KV' },
    ],
    applications: ['Ports & Terminals', 'Airports', 'Stadiums & Sports Complex', 'Industrial Areas', 'Highways & Toll Plazas', 'Railway Yards', 'Large Parking Areas', 'Public Places & Commercial Areas'],
  },
  {
    slug: 'solar-flood-lights',
    name: 'Solar Flood Lights',
    shortName: 'Solar Flood Lights',
    tagline: 'Powerful Illumination. Zero Electricity Cost.',
    description:
      'Our Solar Flood Lights are high performance outdoor lighting solutions designed to deliver powerful, uniform and reliable illumination for large areas. Powered by solar energy, these lights are easy to install, cost effective and environment friendly.',
    heroImage: 'https://images.unsplash.com/photo-1722962416153-ed769a7471dd?auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'High Brightness', description: 'High efficiency LED chips provide superior brightness with wide beam angle.' },
      { title: 'Long Backup', description: 'High capacity LiFePO4 battery ensures long backup and enhanced performance.' },
      { title: 'Durable & Reliable', description: 'Rugged die-cast aluminium body with IP66 rating for all weather protection.' },
      { title: 'Easy Installation', description: 'Comes with adjustable bracket and wireless remote for easy operation.' },
      { title: 'Eco Friendly', description: 'Runs completely on solar energy with zero electricity cost and no harmful emissions.' },
    ],
    wattageOptions: ['30W', '60W', '100W', '150W', '200W'],
    keySpecs: [
      { label: 'LED Chip', value: 'High Efficiency SMD LED (130–150 lm/W)' },
      { label: 'Material', value: 'Aluminium Pressure Die Cast' },
      { label: 'Working Time', value: '10–14 Hours' },
      { label: 'Lumen Output', value: 'Up to 210 lm/W' },
      { label: 'IP Rating', value: 'IP66 (Weatherproof)' },
      { label: 'Operating Temperature', value: '-20°C to +50°C' },
      { label: 'Solar Panel', value: 'High Efficiency Mono/Poly Crystalline' },
      { label: 'Color Temperature', value: '3000K / 4000K / 5700K / 6500K' },
      { label: 'Warranty', value: '2 Years / 5 Years' },
      { label: 'Battery', value: 'LiFePO4 Battery (12.8V / High Capacity)' },
      { label: 'Charging Time', value: '6–8 Hours (Direct Sunlight)' },
      { label: 'Remote Control', value: 'On / Off, Timer, Brightness Mode' },
    ],
    applications: ['Buildings & Facades', 'Parks & Gardens', 'Billboards & Sign Boards', 'Stadiums & Playgrounds', 'Warehouses & Factories', 'Construction Sites', 'Parking Areas', 'Farm Houses & Open Areas'],
  },
  {
    slug: 'solar-water-pumping-systems',
    name: 'Solar Water Pumping Systems',
    shortName: 'Solar Water Pumps',
    tagline: 'Reliable Solar Water Solutions for Agriculture, Industry & Communities',
    description:
      'Harness the power of the sun for a sustainable and cost-effective water supply. Our Solar Water Pumping Systems deliver clean, reliable and energy-efficient pumping solutions for a greener tomorrow.',
    heroImage: 'https://images.unsplash.com/photo-1692369584496-3216a88f94c1?auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: '100% Solar Energy', description: 'Clean, renewable and free energy from the sun.' },
      { title: 'Low Operating Cost', description: 'Drastic reduction in electricity cost.' },
      { title: 'Eco Friendly', description: 'Zero carbon emissions, 100% green solution.' },
      { title: 'Low Maintenance', description: 'Durable and reliable with long service life.' },
      { title: 'Reliable Water Supply', description: 'Consistent water flow for all your needs.' },
      { title: 'Energy Efficient', description: 'High performance with maximum output.' },
    ],
    wattageOptions: ['Solar AC Water Pumping System', 'Solar DC Water Pumping System'],
    keySpecs: [
      { label: 'Technology', value: 'Advanced permanent magnet brushless technology' },
      { label: 'Performance', value: 'High efficiency and reliable performance' },
      { label: 'Electrical Design', value: 'High efficiency electrical design (low operation cost)' },
      { label: 'Voltage Range', value: 'Suitable for wide voltage range' },
      { label: 'Motor Head Standard', value: 'As per IS 9283:2013' },
      { label: 'Pump Compatibility', value: 'Compatible with submersible pump sets as per IS 8034:2002' },
      { label: 'Performance Test Approval', value: 'MNRE, UL & TUV' },
      { label: 'How It Works', value: 'Solar Panels → Pump Controller (MPPT/AC/DC) → Water Pumping → Clean Water for Use' },
    ],
    applications: ['Agriculture & Irrigation', 'Dairy Farms', 'Drinking Water Supply', 'Rural & Remote Areas', 'Industrial Use', 'Parks & Gardens', 'Community Projects'],
  },
];

export const solarPumpTypes = [
  {
    title: 'Solar AC Water Pumping System',
    points: [
      'Suitable for AC submersible / surface pumps',
      'Ideal for large-scale agriculture and industries',
      'Low maintenance & high reliability',
      'Smart control with advanced pump management',
    ],
  },
  {
    title: 'Solar DC Water Pumping System',
    points: [
      'Suitable for DC submersible / surface pumps',
      'Perfect for small scale irrigation and domestic use',
      'High efficiency with MPPT technology',
      'Easy installation & minimal maintenance',
    ],
  },
];

// ---------------------------------------------------------------------------
// Other solar products (single overview page — not individually routed)
// ---------------------------------------------------------------------------

export const otherProducts: OtherProduct[] = [
  {
    name: 'All-in-One Solar Street Lights',
    type: 'Outdoor Lighting',
    points: ['Integrated design with inbuilt solar panel & battery', 'Easy installation & maintenance', 'Smart light control & motion sensor', 'Ideal for streets, roads & pathways'],
  },
  {
    name: 'Solar Lanterns & Garden Lights',
    type: 'Outdoor Lighting',
    points: ['Elegant & durable design', 'Perfect for gardens, parks & landscapes', 'Auto on/off with dusk to dawn operation'],
  },
  {
    name: 'Solar Flood Lights',
    type: 'Outdoor Lighting',
    points: ['High brightness & wide coverage', 'IP66 weatherproof body', 'Ideal for compounds, signage, buildings & security lighting'],
  },
  {
    name: 'Solar Home Lighting Systems',
    type: 'Home & Off-Grid Power',
    points: ['Complete home lighting solution', 'Powers lights, fans & mobile charging', 'Safe, reliable & cost effective', 'Ideal for rural & off-grid areas'],
  },
  {
    name: 'Solar Inverters & Power Systems',
    type: 'Power Electronics',
    points: ['Pure sine wave output', 'High efficiency & overload protection', 'Compatible with various battery types', 'For homes, offices & industries'],
  },
  {
    name: 'Solar Charge Controllers',
    type: 'Power Electronics',
    points: ['MPPT & PWM technology', 'Protects battery from overcharge & deep discharge', 'Enhances system efficiency & battery life'],
  },
  {
    name: 'Solar Batteries (LiFePO4 / SMF / GEL)',
    type: 'Energy Storage',
    points: ['Long cycle life & maintenance free', 'High capacity & fast charging', 'Safe, stable & efficient performance'],
  },
  {
    name: 'Solar Water Heaters',
    type: 'Thermal Systems',
    points: ['Energy efficient & eco friendly', 'Hot water for homes, hotels & industries', 'Reduces electricity cost'],
  },
];

export const solarProductBenefits: string[] = [
  'Reduce Electricity Bills',
  'Clean & Renewable Energy',
  'Reliable & Durable',
  'Low Maintenance & Easy Installation',
  'Environment Friendly',
  'Long Term Savings',
];

// ---------------------------------------------------------------------------
// Clients, projects, stats, commitment
// ---------------------------------------------------------------------------

export const clients: string[] = [
  'NHPC', 'NTPC', 'BHEL', 'PWD (Public Works Department)', 'Smart City Mission',
  'IndianOil', 'HP (Hindustan Petroleum)', 'GAIL', 'CEAT', 'DLF',
  'Adani', 'TATA', 'Jindal Steel & Power', 'Vedanta', 'Reliance Industries',
];

export const projects: ProjectEntry[] = [
  { title: 'Solar Street Light Project', location: 'Ghaziabad, Uttar Pradesh' },
  { title: 'High Mast Light Project', location: 'Jaipur, Rajasthan' },
  { title: 'Integrated Solar Street Light Project', location: 'Pune, Maharashtra' },
  { title: 'High Mast Light Project', location: 'Vadodara, Gujarat' },
  { title: 'Semi-Integrated Solar Street Light Project', location: 'Bhopal, Madhya Pradesh' },
  { title: 'Solar Street Light Project', location: 'Lucknow, Uttar Pradesh' },
  { title: 'High Mast Light Project', location: 'Raipur, Chhattisgarh' },
  { title: 'Solar Street Light Project', location: 'Shimla, Himachal Pradesh' },
];

export const stats: StatItem[] = [
  { value: '1000+', label: 'Happy Clients Across India' },
  { value: '5000+', label: 'Projects Completed Successfully' },
  { value: '20+', label: 'States Covered Pan India' },
  { value: '8+', label: 'Years of Excellence and Trust' },
  { value: '100%', label: 'Quality & Reliability Assured' },
];

export const commitmentItems: string[] = [
  'Quality Products',
  'Timely Delivery',
  'Cost Effective Solutions',
  'Expert Support',
  'After Sales Service',
  'Long Term Partnership',
];

// ---------------------------------------------------------------------------
// Process — general workflow for how enquiries turn into installed projects
// ---------------------------------------------------------------------------

export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { title: 'Requirement', description: 'Share your site details, wattage needs, and project scale with our team.' },
  { title: 'Consultation', description: 'Our technical team recommends the right product and configuration for your site.' },
  { title: 'Customization', description: 'Wattage, mounting height, battery capacity, and pole design tailored to your project.' },
  { title: 'Manufacturing', description: 'Products built with premium components for maximum efficiency and durability.' },
  { title: 'Installation', description: 'Professional installation support at your site, anywhere across India.' },
  { title: 'After-Sales Support', description: 'Ongoing technical support and warranty service for long-term reliability.' },
];

// ---------------------------------------------------------------------------
// FAQs — drawn from the spec sheets (backup time, IP rating, warranty, etc.)
// ---------------------------------------------------------------------------

export const faqs: Faq[] = [
  {
    question: 'How long does the battery backup last on a full charge?',
    answer: 'Our solar street lights, high mast lights and flood lights are designed for 2–3 nights of backup on a full charge, so performance is not affected by a few cloudy days.',
  },
  {
    question: 'Are the lights weatherproof?',
    answer: 'Yes. Our products carry an IP65, IP66 or IP67 rating depending on the model, meaning they are built to perform reliably through rain, dust and extreme temperatures ranging from -20°C to +50°C.',
  },
  {
    question: 'What is the difference between Integrated and Semi-Integrated solar street lights?',
    answer: 'Integrated lights combine the solar panel, battery, LED and controller into a single compact unit that is completely wire-free. Semi-Integrated lights use a separate solar panel connected to an inbuilt battery unit, offering more flexibility in panel positioning.',
  },
  {
    question: 'What warranty do you offer?',
    answer: 'Warranty coverage varies by product — for example, our Solar Flood Lights carry a 2 to 5 year warranty. Our team can confirm the exact warranty terms for the specific product and wattage you need.',
  },
  {
    question: 'Do you offer customized solutions for large projects?',
    answer: 'Yes, we provide customized project solutions across wattages, mounting heights and pole configurations for highways, industrial areas, campuses, and government and PSU projects nationwide.',
  },
];