import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Plane, Clock, MapPin, AlertTriangle } from 'lucide-react';

export function FlightPortal({ flightsData = [] }) {
  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Plane className="h-6 w-6" />
        Scheduled Flights
      </h2>

      {flightsData.length === 0 ? (
        <div className="flex items-center gap-2 text-gray-500">
          <AlertTriangle className="h-4 w-4" />
          No flights available
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flightsData.map((flight) => (
            <Card key={flight.id} className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    {flight.airline} {flight.flightNumber}
                  </span>
                  <Badge
                    variant={
                      flight.status === 'Delayed'
                        ? 'destructive'
                        : flight.status === 'Cancelled'
                        ? 'secondary'
                        : 'default'
                    }
                  >
                    {flight.status}
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-2 text-sm">
                {flight.destination && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{flight.destination}</span>
                  </div>
                )}

                {flight.time && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{flight.time}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
