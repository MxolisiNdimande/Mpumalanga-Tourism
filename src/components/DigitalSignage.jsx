import React, { useState, useEffect } from "react";
import { destinations, flights } from "../lib/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Star, Calendar } from "lucide-react";

export function DigitalSignage({ onExplore, onOpenFlights }) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [currentFlight] = useState(flights[0]);
  const [language, setLanguage] = useState("en"); // Default English

  // Rotate destinations every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % destinations.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentDestination = destinations[currentAdIndex];

  return (
    <div className="h-full bg-black relative overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAdIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 cursor-pointer"
          onClick={() => onExplore && onExplore("interactive-kiosk")}
        >
          <img
            src={currentDestination.imageUrl}
            alt={currentDestination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-12 text-white">
        {/* TOP BAR */}
        <div className="relative flex items-center justify-between">

          {/* NOW BOARDING — CLICK OPENS SCHEDULED FLIGHTS */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onOpenFlights && onOpenFlights()}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              onOpenFlights &&
              onOpenFlights()
            }
            className="bg-black/60 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20 cursor-pointer hover:bg-black/70 transition"
          >
            <div className="flex items-center gap-6">
              <div>
                <p className="text-sm opacity-80">Now Boarding</p>
                <p className="text-xl">{currentFlight.flightNumber}</p>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div>
                <p className="text-sm opacity-80">Destination</p>
                <p className="text-xl">
                  {currentFlight.destination.split("(")[0].trim()}
                </p>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div>
                <p className="text-sm opacity-80">Gate</p>
                <p className="text-xl">{currentFlight.gate}</p>
              </div>
            </div>
          </div>

          {/* CURRENT TIME */}
          <div className="bg-black/60 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6" />
              <div>
                <p className="text-sm opacity-80">Current Time</p>
                <p className="text-xl">
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAdIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 cursor-pointer"
            onClick={() => onExplore && onExplore("interactive-kiosk")}
          >
            <h1 className="text-7xl">{currentDestination.name}</h1>
            <p className="text-2xl max-w-3xl opacity-90">
              {currentDestination.description}
            </p>

            <div className="grid grid-cols-4 gap-6 max-w-4xl">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <Star className="h-8 w-8 mb-3 text-yellow-400 fill-yellow-400" />
                <p className="text-3xl">{currentDestination.rating}</p>
                <p className="text-sm opacity-80">Rating</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <Calendar className="h-8 w-8 mb-3" />
                <p className="opacity-80">{currentDestination.bestTime}</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <MapPin className="h-8 w-8 mb-3" />
                <p className="opacity-80">{currentDestination.country}</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-3xl">R</div>
                <p className="opacity-80">{currentDestination.avgCost}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
