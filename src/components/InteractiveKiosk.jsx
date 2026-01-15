import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { destinations, flights } from '../lib/mockData';

import {
  MapPin,
  ArrowLeft,
  Route,
  Plane
} from 'lucide-react';

import { motion } from 'framer-motion';
import { FlightPortal } from './FlightPortal';

export function InteractiveKiosk() {
  const [view, setView] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destination = destinations.find(d => d.id === selectedDestination);

  const handleDestinationClick = (id) => {
    setSelectedDestination(id);
    setView('destination');
  };

  const handleBack = () => {
    setView('home');
    setSelectedDestination(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* HEADER */}
      <div className="sticky top-0 bg-white shadow flex justify-between items-center p-4">
        {view !== 'home' ? (
          <Button variant="ghost" onClick={handleBack}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-blue-600" />
            <div>
              <h2 className="font-bold text-lg">Gateway Discoveries</h2>
              <p className="text-xs text-muted-foreground">
                Tap to explore destinations
              </p>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setView('flights')}>
            <Plane className="mr-2 h-4 w-4" />
            Flights
          </Button>
        </div>
      </div>

      {/* HOME (DESTINATIONS GRID) */}
      {view === 'home' && (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(dest => (
            <Card
              key={dest.id}
              className="cursor-pointer hover:shadow-xl transition"
              onClick={() => handleDestinationClick(dest.id)}
            >
              <img
                src={dest.imageUrl}
                alt={dest.name}
                className="h-56 w-full object-cover rounded-t-lg"
              />

              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p className="text-sm text-muted-foreground">{dest.country}</p>

                <div className="mt-2">
                  <Badge>{dest.category}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* DESTINATION VIEW */}
      {view === 'destination' && destination && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden shadow-xl">
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="h-80 w-full object-cover"
            />

            <CardContent className="p-6 space-y-4">
              <h1 className="text-3xl font-bold">{destination.name}</h1>
              <p className="text-muted-foreground">{destination.description}</p>

              <div className="flex flex-wrap gap-2">
                {destination.activities.map((a, i) => (
                  <Badge key={i} variant="secondary">{a}</Badge>
                ))}
              </div>

              <div className="pt-4 flex gap-3">
                <Button onClick={() => setView('flights')}>
                  <Plane className="mr-2 h-4 w-4" />
                  View Flights
                </Button>

                <Button variant="outline">
                  <Route className="mr-2 h-4 w-4" />
                  Add to Route
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* FLIGHTS VIEW */}
      {view === 'flights' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 max-w-7xl mx-auto"
        >
          <FlightPortal flightsData={flights} />
        </motion.div>
      )}
    </div>
  );
}
