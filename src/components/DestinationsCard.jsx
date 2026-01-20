import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Star, Plane } from "lucide-react";

export function DestinationsCard({ destinations, onClose, onViewFlights }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl p-6 relative overflow-y-auto max-h-[90vh]">

        <Button
          variant="ghost"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          Close
        </Button>

        <h2 className="text-2xl font-bold mb-4">Explore Destinations</h2>

        {/* View Flights Button */}
        <div className="mb-6 flex justify-end">
          <Button onClick={onViewFlights}>
            <Plane className="mr-2 h-4 w-4" />
            View Available Flights
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((place) => (
            <Card key={place.id} className="overflow-hidden hover:shadow-xl transition">
              <img
                src={place.imageUrl}
                alt={place.name}
                className="h-48 w-full object-cover"
              />

              <CardHeader>
                <CardTitle>{place.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {place.country}
                </div>

                <p className="text-sm">{place.description}</p>

                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-yellow-500" />
                  {place.rating}
                </div>

                <div className="text-xs text-gray-500">
                  Category: {place.category}
                </div>

                <Button
                  className="w-full mt-3"
                  onClick={() => window.open(place.bookingUrl, "_blank")}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
