import React, { useState } from "react";
import { DigitalSignage } from "./DigitalSignage";
import { InteractiveKiosk } from "./InteractiveKiosk";
import { DestinationsCard } from "./DestinationsCard";
import { FlightsCard } from "./FlightsCard";
import { destinations, flights } from "../lib/mockData";
import { Button } from "./ui/button";
import { MonitorPlay, ArrowLeft, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PublicLanding({ onStaffLogin }) {
  const [showKiosk, setShowKiosk] = useState(false);
  const [showTapPrompt, setShowTapPrompt] = useState(true);
  const [showDestinations, setShowDestinations] = useState(false);
  const [showFlights, setShowFlights] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleTapToExplore = () => {
    setShowDestinations(true);
    setShowTapPrompt(false);
  };

  const handleViewFlights = () => {
    setShowFlights(true);
  };

  const handleBackToSignage = () => {
    setShowKiosk(false);
    setTimeout(() => setShowTapPrompt(true), 2000);
  };

  return (
    <div className="h-screen relative">
      <AnimatePresence mode="wait">
        {!showKiosk ? (
          <motion.div
            key="signage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <DigitalSignage
              onOpenKiosk={() => {
                setShowKiosk(true);
                setShowTapPrompt(false);
              }}
              onOpenFlights={handleViewFlights}
            />

            {/* Tap to Explore */}
            <AnimatePresence>
              {showTapPrompt && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50"
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
                    onClick={handleTapToExplore}
                  >
                    <MonitorPlay className="mr-3 h-6 w-6" />
                    Tap to Explore Destinations
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Flights Panel */}
            <div
              onClick={handleViewFlights}
              className="absolute top-16 right-4 z-30 w-72 cursor-pointer bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4 hover:scale-105 transition-transform"
            >
              <h3 className="font-bold text-sm mb-2">Scheduled Flights</h3>
              <ul className="text-xs max-h-48 overflow-y-auto">
                {flights.map((flight) => (
                  <li key={flight.id} className="border-b border-gray-200 py-1">
                    {flight.airline} {flight.flightNumber} - {flight.status}
                  </li>
                ))}
              </ul>
            </div>

            {/* Staff Login */}
            <div className="absolute top-4 right-4 z-20">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10"
                onClick={() => onStaffLogin && onStaffLogin()}
              >
                <Shield className="h-4 w-4 mr-2" />
                Staff Login
              </Button>
            </div>

            {/* Destinations */}
            {showDestinations && (
              <DestinationsCard
                destinations={destinations}
                onClose={() => {
                  setShowDestinations(false);
                  setShowTapPrompt(true);
                }}
              />
            )}

            {/* Flights */}
            {showFlights && (
              <FlightsCard
                flightsData={flights}
                onClose={() => setShowFlights(false)}
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="kiosk"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="h-full relative"
          >
            <InteractiveKiosk language={language} onLanguageChange={setLanguage} />

            <div className="absolute top-4 left-4 z-20">
              <Button
                variant="outline"
                size="sm"
                onClick={handleBackToSignage}
                className="bg-white/90 backdrop-blur-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Showcase
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
