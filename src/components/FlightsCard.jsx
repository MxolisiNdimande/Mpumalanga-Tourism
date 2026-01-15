import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Plane } from "lucide-react";
import { Button } from "./ui/button";

export function FlightsCard({ flightsData, onClose }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl p-6 relative">

        <Button
          variant="ghost"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          Close
        </Button>

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Plane /> Scheduled Flights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flightsData.map((flight) => (
            <Card key={flight.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {flight.airline} {flight.flightNumber}
                  <Badge>{flight.status}</Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-1 text-sm">
                <p><b>From:</b> {flight.origin}</p>
                <p><b>To:</b> {flight.destination}</p>
                <p><b>Departure:</b> {flight.departureTime}</p>
                <p><b>Arrival:</b> {flight.arrivalTime}</p>
                <p><b>Duration:</b> {flight.duration}</p>
                <p><b>Gate:</b> {flight.gate}</p>
                <p><b>Price:</b> {flight.price}</p>

                <Button
                  className="w-full mt-3"
                  onClick={() => window.open(flight.bookingUrl, "_blank")}
                >
                  Book Flight
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
