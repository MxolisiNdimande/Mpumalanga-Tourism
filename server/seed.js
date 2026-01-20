// server/seed.js
import dotenv from "dotenv";
dotenv.config();

import { v4 as uuidv4 } from "uuid";
import pkg from "pg";
const { Pool } = pkg;

import {
  destinations,
  flights,
  accommodations,
  animalSightings
} from "../src/lib/mockData.js";

// =======================
// DATABASE CONNECTION
// =======================

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

const query = (text, params) => pool.query(text, params);

const testConnections = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Connected to PostgreSQL");
    return true;
  } catch (err) {
    console.error("❌ PostgreSQL connection failed:", err.message);
    return false;
  }
};

// =======================
// HELPERS
// =======================

// Extract minimum numeric value from price ranges like "R2,500 - R8,000"
const extractMinPrice = (value) => {
  if (!value) return null;
  const cleaned = value.replace(/[R,]/g, "");
  const min = cleaned.split("-")[0].trim();
  return Number(min);
};

// =======================
// SEED DESTINATIONS
// =======================

const seedDestinations = async () => {
  console.log("🗄️  Seeding destinations...");

  for (const dest of destinations) {
    try {
      await query(
        `
        INSERT INTO destinations (
          id,
          name,
          country,
          description,
          image_url,
          rating,
          category,
          avg_cost,
          best_time,
          activities,
          has_animal_tracking,
          views,
          scans,
          emails_sent
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
        ON CONFLICT (id) DO NOTHING
        `,
        [
          dest.id,
          dest.name,
          dest.country,
          dest.description,
          dest.imageUrl,
          dest.rating,
          dest.category,
          extractMinPrice(dest.avgCost), // ✅ FIXED
          dest.bestTime,
          dest.activities.join(", "),
          dest.hasAnimalTracking,
          dest.views,
          dest.scans,
          dest.emailsSent
        ]
      );
    } catch (err) {
      console.error("❌ Error seeding destination:", err.message);
      throw err;
    }
  }

  console.log("✅ Destinations seeded");
};

// =======================
// SEED FLIGHTS
// =======================

const seedFlights = async () => {
  console.log("🗄️  Seeding flights...");

  for (const flight of flights) {
    try {
      await query(
        `
        INSERT INTO flights (
          id,
          flight_number,
          airline,
          origin,
          origin_code,
          destination,
          destination_code,
          departure_time,
          arrival_time,
          duration,
          status,
          gate,
          price
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        ON CONFLICT (id) DO NOTHING
        `,
        [
          uuidv4(),
          flight.flightNumber,
          flight.airline,
          flight.origin,
          flight.originCode,
          flight.destination,
          flight.destinationCode,
          flight.departureTime,
          flight.arrivalTime,
          flight.duration,
          flight.status,
          flight.gate,
          extractMinPrice(flight.price)
        ]
      );
    } catch (err) {
      console.error("❌ Error seeding flight:", err.message);
      throw err;
    }
  }

  console.log("✅ Flights seeded");
};

// =======================
// SEED ACCOMMODATIONS
// =======================

const seedAccommodations = async () => {
  console.log("🗄️  Seeding accommodations...");

  for (const acc of accommodations) {
    try {
      await query(
        `
        INSERT INTO accommodations (
          id,
          name,
          location,
          type,
          price,
          rating,
          amenities
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7)
        ON CONFLICT (id) DO NOTHING
        `,
        [
          acc.id,
          acc.name,
          acc.location,
          acc.type,
          extractMinPrice(acc.pricePerNight),
          acc.rating,
          acc.amenities.join(", ")
        ]
      );
    } catch (err) {
      console.error("❌ Error seeding accommodation:", err.message);
      throw err;
    }
  }

  console.log("✅ Accommodations seeded");
};

// =======================
// SEED ANIMAL SIGHTINGS
// =======================

const seedAnimalSightings = async () => {
  console.log("🗄️  Seeding animal sightings...");

  for (const a of animalSightings) {
    try {
      await query(
        `
        INSERT INTO animal_sightings (
          id,
          species,
          location,
          gate,
          time,
          image,
          status,
          latitude,
          longitude,
          count,
          confidence
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
        ON CONFLICT (id) DO NOTHING
        `,
        [
          a.id,
          a.species,
          a.location,
          a.gate,
          a.time,
          a.image,
          a.status,
          a.coordinates.lat,
          a.coordinates.lng,
          a.count,
          a.confidence
        ]
      );
    } catch (err) {
      console.error("❌ Error seeding animal sighting:", err.message);
      throw err;
    }
  }

  console.log("✅ Animal sightings seeded");
};

// =======================
// RUN ALL
// =======================

const seedAll = async () => {
  const connected = await testConnections();
  if (!connected) return;

  try {
    await seedDestinations();
    await seedFlights();
    await seedAccommodations();
    await seedAnimalSightings();
    console.log("🎉 Seeding complete!");
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
  } finally {
    await pool.end();
    console.log("🔌 PostgreSQL connection closed");
  }
};

seedAll();
