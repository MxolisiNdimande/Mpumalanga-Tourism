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

export const destinations = [
  {
    id: "kruger",
    name: "Kruger National Park",
    country: "South Africa",
    description:
      "One of Africa's largest game reserves with high density of wild animals including the Big 5. Experience incredible wildlife sightings, guided safaris, and authentic African bush experiences.",
    imageUrl: krugerImg,
    rating: 4.8,
    category: "Wildlife & Nature",
    avgCost: "R2,500 - R8,000",
    bestTime: "May - September",
    activities: [
      "Game Drives",
      "Bird Watching",
      "Bush Walks",
      "Photography",
      "Camping",
      "Night Safaris"
    ],
    hasAnimalTracking: true,
    views: 15420,
    scans: 3245,
    emailsSent: 876
  },
  {
    id: "blyde",
    name: "Blyde River Canyon",
    country: "South Africa",
    description:
      "A spectacular natural landmark with dramatic scenery, waterfalls, and panoramic views. The third largest canyon in the world offers breathtaking landscapes and outdoor adventures.",
    imageUrl: blydeImg,
    rating: 4.7,
    category: "Nature & Scenery",
    avgCost: "R1,200 - R4,000",
    bestTime: "March - October",
    activities: [
      "Hiking",
      "Boat Trips",
      "Photography",
      "Viewpoints",
      "Nature Walks",
      "Waterfall Visits"
    ],
    hasAnimalTracking: false,
    views: 8920,
    scans: 1876,
    emailsSent: 543
  },
  {
    id: "godswindow",
    name: "God's Window",
    country: "South Africa",
    description:
      "A breathtaking viewpoint offering panoramic vistas of the Lowveld landscape. On clear days, you can see all the way to Mozambique from this spectacular cliff edge.",
    imageUrl: godsWindowImg,
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
    description:
      "Luxury private game reserve sharing unfenced borders with Kruger National Park. Exclusive safari experiences with premium accommodation and guided tours.",
    imageUrl: sabieSandImg,
    rating: 4.9,
    category: "Wildlife & Luxury",
    avgCost: "R5,000 - R15,000",
    bestTime: "May - October",
    activities: [
      "Private Game Drives",
      "Luxury Lodging",
      "Spa Treatments",
      "Gourmet Dining",
      "Walking Safaris"
    ],
    hasAnimalTracking: true,
    views: 11200,
    scans: 2876,
    emailsSent: 654
  }
];

// =======================
// ANIMAL SIGHTINGS
// =======================

export const animalSightings = [
  {
    id: "a1",
    species: "African Lion",
    location: "Skukuza Rest Camp Area",
    gate: "Paul Kruger Gate",
    time: "45 minutes ago",
    image: lionImg,
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
    image: elephantImg,
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
    image: leopardImg,
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
    image: buffaloImg,
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
    image: rhinoImg,
    status: "historical",
    coordinates: { lat: -25.1667, lng: 31.2667 },
    count: 2,
    confidence: 94
  }
];

// =======================
// KRUGER GATES
// =======================

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

// =======================
// FLIGHTS
// =======================

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

// =======================
// ACCOMMODATIONS (UNCHANGED – USING LINKS)
// =======================

export const accommodations = [
  {
    id: "acc1",
    name: "Singita Lebombo Lodge",
    type: "lodge",
    location: "Kruger National Park",
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
    contact: {
      phone: "+27 13 781 9900",
      email: "info@jocksafarilodge.com",
      website: "jocksafarilodge.com"
    }
  }
];

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
