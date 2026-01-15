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
      "One of Africa's largest game reserves with high density of wild animals including the Big 5.",
    imageUrl: krugerImg,
    rating: 4.8,
    category: "Wildlife & Nature",
    activities: ["Game Drives", "Photography", "Safari Tours"],
    bookingUrl: "https://www.sanparks.org/parks/kruger"
  },
  {
    id: "blyde",
    name: "Blyde River Canyon",
    country: "South Africa",
    description:
      "One of the largest green canyons in the world with breathtaking scenery.",
    imageUrl: blydeImg,
    rating: 4.7,
    category: "Nature & Scenery",
    activities: ["Hiking", "Boat Trips", "Photography"],
    bookingUrl: "https://www.mpumalanga.com/attractions/blyde-river-canyon"
  },
  {
    id: "godswindow",
    name: "God's Window",
    country: "South Africa",
    description:
      "A breathtaking viewpoint offering panoramic views of the Lowveld.",
    imageUrl: godsWindowImg,
    rating: 4.6,
    category: "Viewpoints",
    activities: ["Photography", "Sightseeing"],
    bookingUrl: "https://www.mpumalanga.com/attractions/gods-window"
  },
  {
    id: "sabiesands",
    name: "Sabie Sand Game Reserve",
    country: "South Africa",
    description:
      "Luxury private game reserve with world-class safari experiences.",
    imageUrl: sabieSandImg,
    rating: 4.9,
    category: "Luxury Safari",
    activities: ["Private Game Drives", "Luxury Lodging"],
    bookingUrl: "https://www.sabiesands.com"
  }
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
    destination: "Nelspruit (MQP)",
    departureTime: "08:15",
    arrivalTime: "09:30",
    duration: "1h 15m",
    status: "On Time",
    gate: "A12",
    price: "R1,850",
    bookingUrl: "https://www.flysaa.com"
  },
  {
    id: "f2",
    flightNumber: "FA208",
    airline: "FlySafair",
    origin: "Cape Town (CPT)",
    destination: "Nelspruit (MQP)",
    departureTime: "11:45",
    arrivalTime: "14:00",
    duration: "2h 15m",
    status: "On Time",
    gate: "B07",
    price: "R2,150",
    bookingUrl: "https://www.flysafair.co.za"
  }
];

// =======================
// ANIMAL SIGHTINGS
// =======================

export const animalSightings = [
  {
    id: "a1",
    species: "African Lion",
    location: "Skukuza",
    image: lionImg,
    status: "recent"
  },
  {
    id: "a2",
    species: "African Elephant",
    location: "Lower Sabie",
    image: elephantImg,
    status: "active"
  },
  {
    id: "a3",
    species: "Leopard",
    location: "Timbavati",
    image: leopardImg,
    status: "active"
  },
  {
    id: "a4",
    species: "Cape Buffalo",
    location: "Satara",
    image: buffaloImg,
    status: "recent"
  },
  {
    id: "a5",
    species: "White Rhino",
    location: "Pretoriuskop",
    image: rhinoImg,
    status: "historical"
  }
];
// =======================
// DEVICES (Analytics Dashboard)
// =======================

export const devices = [
  {
    id: "d1",
    name: "Kiosk Terminal 1",
    location: "OR Tambo - Arrivals",
    status: "online",
    interactions: 3240,
  },
  {
    id: "d2",
    name: "Digital Signage Gate A3",
    location: "OR Tambo - Departures",
    status: "online",
    interactions: 2890,
  },
  {
    id: "d3",
    name: "Kiosk Terminal 2",
    location: "Cape Town Airport",
    status: "offline",
    interactions: 1450,
  },
  {
    id: "d4",
    name: "Signage Gate B7",
    location: "King Shaka Airport",
    status: "maintenance",
    interactions: 980,
  }
];

// =======================
// CAMPAIGNS (CMS)
// =======================

export const campaigns = [
  {
    id: "c1",
    title: "Explore Mpumalanga Summer Special",
    description: "Discounted safari packages for summer travelers.",
    status: "active",
    startDate: "2026-02-01",
    endDate: "2026-04-30"
  },
  {
    id: "c2",
    title: "Blyde Canyon Adventure Week",
    description: "Guided canyon hikes and river tours.",
    status: "upcoming",
    startDate: "2026-05-10",
    endDate: "2026-05-20"
  }
];
// =======================
// USERS (CMS)
// =======================

export const users = [
  {
    id: "u1",
    name: "Admin User",
    email: "admin@kruger.co.za",
    role: "admin",
    status: "active"
  },
  {
    id: "u2",
    name: "Staff Member",
    email: "staff@kruger.co.za",
    role: "staff",
    status: "active"
  },
  {
    id: "u3",
    name: "Content Editor",
    email: "editor@kruger.co.za",
    role: "editor",
    status: "inactive"
  }
];
// =======================
// ANALYTICS (CMS Dashboard)
// =======================

export const analyticsData = {
  totalVisitors: 12450,
  totalBookings: 1830,
  popularDestinations: [
    { name: "Blyde River Canyon", visits: 4200 },
    { name: "Kruger National Park", visits: 5100 },
    { name: "God's Window", visits: 2100 }
  ],
  monthlyTraffic: [
    { month: "Jan", visitors: 800 },
    { month: "Feb", visitors: 950 },
    { month: "Mar", visitors: 1100 },
    { month: "Apr", visitors: 1300 },
    { month: "May", visitors: 1500 },
    { month: "Jun", visitors: 1700 },
    { month: "Jul", visitors: 1850 },
    { month: "Aug", visitors: 1950 },
    { month: "Sep", visitors: 1800 },
    { month: "Oct", visitors: 1650 },
    { month: "Nov", visitors: 1400 },
    { month: "Dec", visitors: 1250 }
  ]
};
