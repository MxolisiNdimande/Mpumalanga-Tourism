-- ===============================
-- EXTENSIONS
-- ===============================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===============================
-- USERS
-- ===============================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) CHECK (role IN ('admin','staff','editor','kruger_staff')) NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===============================
-- DESTINATIONS
-- ===============================
CREATE TABLE destinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  rating DECIMAL(2,1) DEFAULT 0,
  image_url VARCHAR(500),      -- /uploads/destinations/xxx.jpg
  booking_url VARCHAR(500),
  avg_cost VARCHAR(100),
  best_time VARCHAR(100),
  has_animal_tracking BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0,
  scans INTEGER DEFAULT 0,
  emails_sent INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===============================
-- ACCOMMODATIONS
-- ===============================
CREATE TABLE accommodations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100),
  location VARCHAR(255),
  description TEXT,
  image_url VARCHAR(500),
  rating DECIMAL(2,1),
  price_per_night VARCHAR(100),
  booking_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE destination_accommodations (
  destination_id UUID REFERENCES destinations(id) ON DELETE CASCADE,
  accommodation_id UUID REFERENCES accommodations(id) ON DELETE CASCADE,
  PRIMARY KEY (destination_id, accommodation_id)
);

-- ===============================
-- FLIGHTS
-- ===============================
CREATE TABLE flights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  airline VARCHAR(100) NOT NULL,
  flight_number VARCHAR(20) NOT NULL,
  origin VARCHAR(100) NOT NULL,
  destination VARCHAR(100) NOT NULL,
  departure_time TIME,
  arrival_time TIME,
  duration VARCHAR(20),
  status VARCHAR(50) DEFAULT 'On Time',
  gate VARCHAR(10),
  price VARCHAR(50),
  booking_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===============================
-- ANIMAL SIGHTINGS
-- ===============================
CREATE TABLE animal_sightings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  species VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  image_url VARCHAR(500),
  status VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===============================
-- CAMPAIGNS
-- ===============================
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) CHECK (status IN ('active','upcoming','paused')) NOT NULL,
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===============================
-- ANALYTICS / INTERACTIONS
-- ===============================
CREATE TABLE interactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  interaction_type VARCHAR(100) NOT NULL,
  destination_id UUID REFERENCES destinations(id) ON DELETE SET NULL,
  accommodation_id UUID REFERENCES accommodations(id) ON DELETE SET NULL,
  flight_id UUID REFERENCES flights(id) ON DELETE SET NULL,
  device_id VARCHAR(100),
  session_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===============================
-- DEVICES
-- ===============================
CREATE TABLE devices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  type VARCHAR(50),
  location VARCHAR(255),
  status VARCHAR(50),
  last_active TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===============================
-- SEED DATA (LOCAL IMAGES)
-- ===============================
INSERT INTO destinations (name, country, category, rating, image_url, booking_url)
VALUES
(
  'Kruger National Park',
  'South Africa',
  'Wildlife & Nature',
  4.8,
  '/uploads/destinations/kruger.jpg',
  'https://www.sanparks.org/parks/kruger'
),
(
  'Blyde River Canyon',
  'South Africa',
  'Nature & Scenery',
  4.7,
  '/uploads/destinations/blyde.jpg',
  'https://www.mpumalanga.com'
);
