// server/seed.js
import { v4 as uuidv4 } from 'uuid';
import { query, testConnections } from '../src/lib/database.js';
import { destinations, flights, accommodations } from '../src/lib/mockData.js';

const seedDestinations = async () => {
  console.log('🗄️  Seeding destinations...');
  for (const dest of destinations) {
    try {
      await query(
        `INSERT INTO destinations (id, name, country, description, image_url, rating, category, avg_cost, best_time, activities, has_animal_tracking, views, scans, emails_sent)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
         ON CONFLICT (id) DO NOTHING`,
        [
          dest.id,
          dest.name,
          dest.country,
          dest.description,
          dest.imageUrl,
          dest.rating,
          dest.category,
          dest.avgCost.replace(/[R,]/g, ''), // Remove R and commas for numeric
          dest.bestTime,
          dest.activities.join(', '),
          dest.hasAnimalTracking,
          dest.views,
          dest.scans,
          dest.emailsSent
        ]
      );
    } catch (err) {
      console.error('❌ Error seeding destination:', err.message || err);
    }
  }
  console.log('✅ Destinations seeded');
};

const seedFlights = async () => {
  console.log('🗄️  Seeding flights...');
  for (const flight of flights) {
    try {
      await query(
        `INSERT INTO flights (id, flight_number, airline, origin, origin_code, destination, destination_code, departure_time, arrival_time, duration, status, gate, price)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
         ON CONFLICT (id) DO NOTHING`,
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
          parseFloat(flight.price.replace(/[R,]/g, '')) // Convert to numeric
        ]
      );
    } catch (err) {
      console.error('❌ Error seeding flight:', err.message || err);
    }
  }
  console.log('✅ Flights seeded');
};

const seedAccommodations = async () => {
  console.log('🗄️  Seeding accommodations...');
  for (const acc of accommodations) {
    try {
      await query(
        `INSERT INTO accommodations (id, name, location, type, price, rating, amenities)
         VALUES ($1,$2,$3,$4,$5,$6,$7)
         ON CONFLICT (id) DO NOTHING`,
        [
          acc.id,
          acc.name,
          acc.location,
          acc.type,
          acc.price.replace(/[R,]/g, ''), // Ensure numeric
          acc.rating,
          acc.amenities.join(', ')
        ]
      );
    } catch (err) {
      console.error('❌ Error seeding accommodation:', err.message || err);
    }
  }
  console.log('✅ Accommodations seeded');
};

const seedAll = async () => {
  const connected = await testConnections();
  if (!connected) return;

  await seedDestinations();
  await seedFlights();
  await seedAccommodations();

  console.log('🎉 Seeding complete!');
};

seedAll();
