<<<<<<< HEAD
=======
// =======================
// IMAGE IMPORTS (LOCAL)
// =======================

// Destinations
import krugerImg from "../assets/images/kruger.jpg";
import blydeImg from "../assets/images/blyde.jpg";
import godsWindowImg from "../assets/images/gods-window.jpg";
import sabieSandImg from "../assets/images/sabie-sand.jpg";

// Animal sightings
import lionImg from "../assets/images/lion.jpg";
import elephantImg from "../assets/images/elephant.jpg";
import leopardImg from "../assets/images/leopard.jpg";
import buffaloImg from "../assets/images/buffalo.jpg";
import rhinoImg from "../assets/images/rhino.jpg";

// =======================
// DESTINATIONS
// =======================

>>>>>>> 1b59ad4 (Initial commit)
export const destinations = [
  {
    id: "kruger",
    name: "Kruger National Park",
    country: "South Africa",
<<<<<<< HEAD
    description: "One of Africa's largest game reserves with high density of wild animals including the Big 5. Experience incredible wildlife sightings, guided safaris, and authentic African bush experiences.",
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
=======
    description:
      "One of Africa's largest game reserves with high density of wild animals including the Big 5. Experience incredible wildlife sightings, guided safaris, and authentic African bush experiences.",
    imageUrl: krugerImg,
>>>>>>> 1b59ad4 (Initial commit)
    rating: 4.8,
    category: "Wildlife & Nature",
    avgCost: "R2,500 - R8,000",
    bestTime: "May - September",
<<<<<<< HEAD
    activities: ["Game Drives", "Bird Watching", "Bush Walks", "Photography", "Camping", "Night Safaris"],
=======
    activities: [
      "Game Drives",
      "Bird Watching",
      "Bush Walks",
      "Photography",
      "Camping",
      "Night Safaris"
    ],
>>>>>>> 1b59ad4 (Initial commit)
    hasAnimalTracking: true,
    views: 15420,
    scans: 3245,
    emailsSent: 876
  },
  {
    id: "blyde",
    name: "Blyde River Canyon",
    country: "South Africa",
<<<<<<< HEAD
    description: "A spectacular natural landmark with dramatic scenery, waterfalls, and panoramic views. The third largest canyon in the world offers breathtaking landscapes and outdoor adventures.",
    imageUrl: "https://images.unsplash.com/photo-1574784912348-5c1d915b0f6c?w=800",
=======
    description:
      "A spectacular natural landmark with dramatic scenery, waterfalls, and panoramic views. The third largest canyon in the world offers breathtaking landscapes and outdoor adventures.",
    imageUrl: blydeImg,
>>>>>>> 1b59ad4 (Initial commit)
    rating: 4.7,
    category: "Nature & Scenery",
    avgCost: "R1,200 - R4,000",
    bestTime: "March - October",
<<<<<<< HEAD
    activities: ["Hiking", "Boat Trips", "Photography", "Viewpoints", "Nature Walks", "Waterfall Visits"],
=======
    activities: [
      "Hiking",
      "Boat Trips",
      "Photography",
      "Viewpoints",
      "Nature Walks",
      "Waterfall Visits"
    ],
>>>>>>> 1b59ad4 (Initial commit)
    hasAnimalTracking: false,
    views: 8920,
    scans: 1876,
    emailsSent: 543
  },
  {
    id: "godswindow",
    name: "God's Window",
    country: "South Africa",
<<<<<<< HEAD
    description: "A breathtaking viewpoint offering panoramic vistas of the Lowveld landscape. On clear days, you can see all the way to Mozambique from this spectacular cliff edge.",
    imageUrl: "https://images.unsplash.com/photo-1589553416267-f4c27ee2f8e0?w=800",
=======
    description:
      "A breathtaking viewpoint offering panoramic vistas of the Lowveld landscape. On clear days, you can see all the way to Mozambique from this spectacular cliff edge.",
    imageUrl: godsWindowImg,
>>>>>>> 1b59ad4 (Initial commit)
    rating: 4.6,
    category: "Nature & Scenery",
    avgCost: "R800 - R2,500",
    bestTime: "April - October",
    activities: ["Viewpoints", "Photography", "Hiking", "Nature Walks"],
    hasAnimalTracking: false,
    views: 7650,
    scans: 1543,
    emailsSent: 321
  },
  {
    id: "sabiesands",
    name: "Sabie Sand Game Reserve",
    country: "South Africa",
<<<<<<< HEAD
    description: "Luxury private game reserve sharing unfenced borders with Kruger National Park. Exclusive safari experiences with premium accommodation and guided tours.",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
=======
    description:
      "Luxury private game reserve sharing unfenced borders with Kruger National Park. Exclusive safari experiences with premium accommodation and guided tours.",
    imageUrl: sabieSandImg,
>>>>>>> 1b59ad4 (Initial commit)
    rating: 4.9,
    category: "Wildlife & Luxury",
    avgCost: "R5,000 - R15,000",
    bestTime: "May - October",
<<<<<<< HEAD
    activities: ["Private Game Drives", "Luxury Lodging", "Spa Treatments", "Gourmet Dining", "Walking Safaris"],
=======
    activities: [
      "Private Game Drives",
      "Luxury Lodging",
      "Spa Treatments",
      "Gourmet Dining",
      "Walking Safaris"
    ],
>>>>>>> 1b59ad4 (Initial commit)
    hasAnimalTracking: true,
    views: 11200,
    scans: 2876,
    emailsSent: 654
  }
];

<<<<<<< HEAD
=======
// =======================
// ANIMAL SIGHTINGS
// =======================

>>>>>>> 1b59ad4 (Initial commit)
export const animalSightings = [
  {
    id: "a1",
    species: "African Lion",
    location: "Skukuza Rest Camp Area",
    gate: "Paul Kruger Gate",
    time: "45 minutes ago",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400",
=======
    image: lionImg,
>>>>>>> 1b59ad4 (Initial commit)
    status: "recent",
    coordinates: { lat: -24.9947, lng: 31.5972 },
    count: 3,
    confidence: 95
  },
  {
    id: "a2",
    species: "African Elephant",
    location: "Lower Sabie River",
    gate: "Crocodile Bridge",
    time: "2 hours ago",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400",
=======
    image: elephantImg,
>>>>>>> 1b59ad4 (Initial commit)
    status: "active",
    coordinates: { lat: -25.1256, lng: 31.9853 },
    count: 12,
    confidence: 98
  },
  {
    id: "a3",
    species: "Leopard",
    location: "Timbavati Area",
    gate: "Orpen Gate",
    time: "3 hours ago",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
=======
    image: leopardImg,
>>>>>>> 1b59ad4 (Initial commit)
    status: "active",
    coordinates: { lat: -24.5678, lng: 31.4567 },
    count: 1,
    confidence: 92
  },
  {
    id: "a4",
    species: "Cape Buffalo",
    location: "Satara Camp Vicinity",
    gate: "Orpen Gate",
    time: "1 hour ago",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=400",
=======
    image: buffaloImg,
>>>>>>> 1b59ad4 (Initial commit)
    status: "recent",
    coordinates: { lat: -24.3923, lng: 31.7754 },
    count: 28,
    confidence: 96
  },
  {
    id: "a5",
    species: "White Rhinoceros",
    location: "Pretoriuskop Waterhole",
    gate: "Numbi Gate",
    time: "4 hours ago",
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1514433121568-eeca4a036b10?w=400",
=======
    image: rhinoImg,
>>>>>>> 1b59ad4 (Initial commit)
    status: "historical",
    coordinates: { lat: -25.1667, lng: 31.2667 },
    count: 2,
    confidence: 94
  }
];

<<<<<<< HEAD
=======
// =======================
// KRUGER GATES
// =======================

>>>>>>> 1b59ad4 (Initial commit)
export const krugerGates = [
  "Paul Kruger Gate",
  "Numbi Gate",
  "Phabeni Gate",
  "Malelane Gate",
  "Crocodile Bridge",
  "Orpen Gate",
  "Phalaborwa Gate",
  "Punda Maria Gate"
];

<<<<<<< HEAD
=======
// =======================
// FLIGHTS
// =======================

>>>>>>> 1b59ad4 (Initial commit)
export const flights = [
  {
    id: "f1",
    flightNumber: "SA345",
    airline: "South African Airways",
    origin: "Johannesburg (JNB)",
    originCode: "JNB",
    destination: "Nelspruit (MQP)",
    destinationCode: "MQP",
    departureTime: "08:15",
    arrivalTime: "09:30",
    duration: "1h 15m",
    status: "On Time",
    gate: "A12",
    price: "R1,850"
  },
  {
    id: "f2",
    flightNumber: "FA208",
    airline: "FlySafair",
    origin: "Cape Town (CPT)",
    originCode: "CPT",
    destination: "Nelspruit (MQP)",
    destinationCode: "MQP",
    departureTime: "11:45",
    arrivalTime: "14:00",
    duration: "2h 15m",
    status: "On Time",
    gate: "B07",
    price: "R2,150"
  }
];

<<<<<<< HEAD
export const analyticsData = {
  totalInteractions: 45890,
  totalScans: 12450,
  totalEmails: 3450,
  avgEngagementTime: "4m 23s",
  deviceStatus: {
    online: 18,
    offline: 2,
    maintenance: 1
  },
  dailyInteractions: [
    { date: "Mon", value: 4230 },
    { date: "Tue", value: 5870 },
    { date: "Wed", value: 6540 },
    { date: "Thu", value: 5120 },
    { date: "Fri", value: 7890 },
    { date: "Sat", value: 9230 },
    { date: "Sun", value: 7120 }
  ],
  topDestinations: [
    { name: "Kruger National Park", percentage: 42 },
    { name: "Blyde River Canyon", percentage: 23 },
    { name: "God's Window", percentage: 15 },
    { name: "Sabie Sand Reserve", percentage: 12 },
    { name: "Other", percentage: 8 }
  ]
};

export const devices = [
  {
    id: "d1",
    name: "Kiosk T1-A",
    type: "interactive",
    location: "Terminal 1 Arrivals",
    terminal: "T1",
    status: "online",
    lastActive: "2024-01-15T08:23:45Z",
    interactions: 12450
  },
  {
    id: "d2",
    name: "Signage T2-D",
    type: "digital",
    location: "Terminal 2 Departures",
    terminal: "T2",
    status: "online",
    lastActive: "2024-01-15T08:15:22Z",
    interactions: 8760
  },
  {
    id: "d3",
    name: "Kiosk T1-D",
    type: "interactive",
    location: "Terminal 1 Departures",
    terminal: "T1",
    status: "maintenance",
    lastActive: "2024-01-14T16:45:33Z",
    interactions: 9870
  },
  {
    id: "d4",
    name: "Signage T2-A",
    type: "digital",
    location: "Terminal 2 Arrivals",
    terminal: "T2",
    status: "offline",
    lastActive: "2024-01-13T12:30:15Z",
    interactions: 5430
  }
];

export const campaigns = [
  {
    id: "c1",
    name: "Summer Kruger Promotion",
    advertiser: "Kruger National Park",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    status: "active",
    impressions: 125000,
    clicks: 12500
  },
  {
    id: "c2",
    name: "Blyde Canyon Adventure",
    advertiser: "Mpumalanga Tourism",
    startDate: "2024-02-15",
    endDate: "2024-05-15",
    status: "scheduled",
    impressions: 0,
    clicks: 0
  },
  {
    id: "c3",
    name: "Luxury Safari Experience",
    advertiser: "Sabie Sand Reserve",
    startDate: "2023-11-01",
    endDate: "2024-01-31",
    status: "paused",
    impressions: 89000,
    clicks: 7800
  }
];

export const users = [
  {
    id: "u1",
    name: "Sarah Johnson",
    email: "sarah@gatewaydiscoveries.com",
    role: "Administrator",
    status: "active"
  },
  {
    id: "u2",
    name: "Mike Peterson",
    email: "mike@kruger.co.za",
    role: "Advertiser",
    status: "active"
  },
  {
    id: "u3",
    name: "David Wilson",
    email: "david@mpumalanga.gov.za",
    role: "Advertiser",
    status: "inactive"
  }
];
=======
// =======================
// ACCOMMODATIONS (UNCHANGED – USING LINKS)
// =======================
>>>>>>> 1b59ad4 (Initial commit)

export const accommodations = [
  {
    id: "acc1",
    name: "Singita Lebombo Lodge",
    type: "lodge",
    location: "Kruger National Park",
<<<<<<< HEAD
    description: "Luxury lodge perched on the cliffs overlooking the N'wanetsi River with stunning views and exclusive safari experiences.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    rating: 4.9,
    pricePerNight: "R12,500",
    amenities: ["Swimming Pool", "Spa", "Fine Dining", "Game Drives", "WiFi", "Air Conditioning"],
=======
    description:
      "Luxury lodge perched on the cliffs overlooking the N'wanetsi River with stunning views and exclusive safari experiences.",
    imageUrl: krugerImg,
    rating: 4.9,
    pricePerNight: "R12,500",
    amenities: [
      "Swimming Pool",
      "Spa",
      "Fine Dining",
      "Game Drives",
      "WiFi",
      "Air Conditioning"
    ],
>>>>>>> 1b59ad4 (Initial commit)
    contact: {
      phone: "+27 13 735 5500",
      email: "reservations@singita.com",
      website: "singita.com"
    }
  },
  {
    id: "acc2",
    name: "Jock Safari Lodge",
    type: "lodge",
    location: "Kruger National Park",
<<<<<<< HEAD
    description: "Historic safari lodge offering authentic African experiences with professional guides and luxurious accommodations.",
    imageUrl: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
    rating: 4.7,
    pricePerNight: "R8,200",
    amenities: ["Swimming Pool", "Restaurant", "Bar", "Game Drives", "Bush Walks", "Spa"],
=======
    description:
      "Historic safari lodge offering authentic African experiences with professional guides and luxurious accommodations.",
    imageUrl: sabieSandImg,
    rating: 4.7,
    pricePerNight: "R8,200",
    amenities: [
      "Swimming Pool",
      "Restaurant",
      "Bar",
      "Game Drives",
      "Bush Walks",
      "Spa"
    ],
>>>>>>> 1b59ad4 (Initial commit)
    contact: {
      phone: "+27 13 781 9900",
      email: "info@jocksafarilodge.com",
      website: "jocksafarilodge.com"
    }
  }
];
<<<<<<< HEAD
=======

// =======================
// CAMPAIGNS
// =======================

export const campaigns = [
  {
    id: "c1",
    name: "Safari Summer Special",
    status: "active",
    startDate: "2025-12-01",
    endDate: "2026-02-28",
    target: "5000",
    reached: "3245",
    description: "Special summer campaign for Kruger National Park visits"
  },
  {
    id: "c2",
    name: "Blyde River Adventure",
    status: "scheduled",
    startDate: "2026-02-01",
    endDate: "2026-04-30",
    target: "3000",
    reached: "0",
    description: "Adventure campaign for Blyde River Canyon"
  }
];

// =======================
// USERS
// =======================

export const users = [
  {
    id: "u1",
    name: "John Smith",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    joinDate: "2025-01-15"
  },
  {
    id: "u2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Manager",
    status: "active",
    joinDate: "2025-02-20"
  },
  {
    id: "u3",
    name: "Mike Brown",
    email: "mike@example.com",
    role: "Editor",
    status: "inactive",
    joinDate: "2024-12-10"
  }
];

// =======================
// ANALYTICS DATA
// =======================

export const analyticsData = [
  {
    month: "January",
    views: 4200,
    interactions: 2400,
    conversions: 850,
    engagement: 65
  },
  {
    month: "February",
    views: 5100,
    interactions: 3200,
    conversions: 1050,
    engagement: 72
  },
  {
    month: "March",
    views: 4800,
    interactions: 2800,
    conversions: 920,
    engagement: 68
  },
  {
    month: "April",
    views: 6200,
    interactions: 4100,
    conversions: 1200,
    engagement: 75
  },
  {
    month: "May",
    views: 7100,
    interactions: 5200,
    conversions: 1450,
    engagement: 82
  },
  {
    month: "June",
    views: 6800,
    interactions: 4900,
    conversions: 1380,
    engagement: 80
  }
];

// =======================
// DEVICES
// =======================

export const devices = [
  {
    id: "d1",
    name: "Mobile",
    percentage: 58,
    color: "#3b82f6"
  },
  {
    id: "d2",
    name: "Desktop",
    percentage: 32,
    color: "#8b5cf6"
  },
  {
    id: "d3",
    name: "Tablet",
    percentage: 10,
    color: "#ec4899"
  }
];
>>>>>>> 1b59ad4 (Initial commit)
