// =======================
// IMAGE PATHS (PUBLIC FOLDER)
// =======================

const krugerImg = "/images/kruger.jpg";
const blydeImg = "/images/blyde.jpg";
const godsWindowImg = "/images/gods-window.jpg";
const sabieSandImg = "/images/sabie-sand.jpg";

const lionImg = "/images/lion.jpg";
const elephantImg = "/images/elephant.jpg";
const leopardImg = "/images/leopard.jpg";
const buffaloImg = "/images/buffalo.jpg";
const rhinoImg = "/images/rhino.jpg";

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
    activities: ["Game Drives", "Photography", "Safari Tours"],
    bookingUrl: "https://www.sanparks.org/parks/kruger"
  },
  {
    id: "blyde",
    name: "Blyde River Canyon",
    country: "South Africa",
    description:
      "A spectacular natural landmark with dramatic scenery, waterfalls, and panoramic views.",
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
      "A breathtaking viewpoint offering panoramic vistas of the Lowveld landscape.",
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
      "Luxury private game reserve sharing unfenced borders with Kruger National Park.",
    imageUrl: sabieSandImg,
    rating: 4.9,
    category: "Wildlife & Luxury",
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
// ACCOMMODATIONS
// =======================

export const accommodations = [
  {
    id: "acc1",
    name: "Singita Lebombo Lodge",
    location: "Kruger National Park",
    description:
      "Luxury lodge perched on the cliffs overlooking the N'wanetsi River.",
    imageUrl: krugerImg,
    rating: 4.9,
    pricePerNight: "R12,500",
    bookingUrl: "https://singita.com"
  },
  {
    id: "acc2",
    name: "Jock Safari Lodge",
    location: "Kruger National Park",
    description:
      "Historic safari lodge offering authentic African experiences.",
    imageUrl: sabieSandImg,
    rating: 4.7,
    pricePerNight: "R8,200",
    bookingUrl: "https://jocksafarilodge.com"
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
// CMS DATA
// =======================

export const campaigns = [
  {
    id: "c1",
    title: "Explore Mpumalanga Summer Special",
    status: "active"
  }
];

export const users = [
  { id: "u1", name: "Admin User", role: "admin" },
  { id: "u2", name: "Staff Member", role: "staff" }
];

export const analyticsData = [
  { month: "January", views: 4200, conversions: 850 },
  { month: "February", views: 5100, conversions: 1050 }
];

export const devices = [
  { id: "d1", name: "Mobile", percentage: 58 },
  { id: "d2", name: "Desktop", percentage: 32 },
  { id: "d3", name: "Tablet", percentage: 10 }
];
