import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { destinations as mockDestinations } from '../lib/mockData';
import { apiService } from '../services/apiService';
import {
  MapPin,
  ArrowLeft,
  Mail,
  QrCode,
  Route,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from './ui/dialog';
import { motion } from 'framer-motion';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AnimalTracking } from './AnimalTracking';
import { AccommodationView } from './AccommodationView';
import { FlightPortal } from './FlightPortal';

export function InteractiveKiosk({ initialView = null }) {
  const [view, setView] = useState('home');
  const [userProfile, setUserProfile] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState([]);
  const [destinationsState, setDestinationsState] = useState(mockDestinations);
  const [loadingDestinations, setLoadingDestinations] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [showQRDialog, setShowQRDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [qrContent, setQrContent] = useState('');

  useEffect(() => {
    if (initialView) setView(initialView);
  }, [initialView]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const p = await apiService.getProfile();
        if (mounted && p) setUserProfile(p);
      } catch {}
    })();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('kiosk_route');
      if (stored) setSelectedRoute(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoadingDestinations(true);
      try {
        const data = await apiService.getDestinations();
        if (mounted && Array.isArray(data) && data.length) {
          setDestinationsState(data);
        }
      } catch {
        console.warn('Using mock destinations');
      } finally {
        if (mounted) setLoadingDestinations(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  const handleDestinationClick = (id) => {
    setSelectedDestination(id);
    setView('destination');
  };

  const handleBack = () => {
    setView('home');
    setSelectedDestination(null);
  };

  const handleAddToRoute = () => {
    if (selectedDestination && !selectedRoute.includes(selectedDestination)) {
      const updated = [...selectedRoute, selectedDestination];
      setSelectedRoute(updated);
      localStorage.setItem('kiosk_route', JSON.stringify(updated));
      toast.success('Added to your route');

      apiService.recordInteraction({
        interaction_type: 'add_to_route',
        destination_id: selectedDestination,
        device_id: 'kiosk-local'
      }).catch(() => {});
    }
  };

  const handleSendEmail = () => {
    if (!email) return;

    apiService.recordInteraction({
      interaction_type: 'email',
      destination_id: view === 'route' ? null : selectedDestination,
      user_data: { email, route: selectedRoute }
    }).finally(() => {
      toast.success(`Route sent to ${email}`);
      setShowEmailDialog(false);
      setEmail('');
    });
  };

  const handleGenerateQR = () => {
    if (typeof window === 'undefined') return;

    const content = `${window.location.origin}/route?ids=${selectedRoute.join(',')}`;
    setQrContent(content);
    setShowQRDialog(true);
    toast.success('QR code generated');

    apiService.recordInteraction({
      interaction_type: 'qr_generated',
      user_data: { route: selectedRoute },
      device_id: 'kiosk-local'
    }).catch(() => {});
  };

  const copyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(qrContent);
      toast.success('Link copied');
    }
  };

  const destination = destinationsState.find(d => d.id === selectedDestination);

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* HEADER */}
      <div className="sticky top-0 bg-white shadow z-10 flex justify-between items-center p-4">
        {view !== 'home' ? (
          <Button variant="ghost" onClick={handleBack}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-blue-600" />
            <div>
              <h2>Gateway Discoveries</h2>
              <p className="text-xs text-muted-foreground">Discover Mpumalanga</p>
              {userProfile?.name && (
                <div className="text-xs text-muted-foreground">{userProfile.name}</div>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          {selectedRoute.length > 0 && (
            <Button variant="outline" onClick={() => setView('route')}>
              <Route className="mr-2 h-4 w-4" />
              My Route ({selectedRoute.length})
            </Button>
          )}
        </div>
      </div>

      {/* HOME */}
      {view === 'home' && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinationsState.map(dest => (
            <Card
              key={dest.id}
              className="cursor-pointer hover:shadow-lg"
              onClick={() => handleDestinationClick(dest.id)}
            >
              <img src={dest.imageUrl} alt={dest.name} className="h-48 w-full object-cover" />
              <CardContent>
                <h3>{dest.name}</h3>
                <p className="text-sm text-muted-foreground">{dest.country}</p>
                <Badge>{dest.category}</Badge>
              </CardContent>
              {dest.id === 'kruger' && (
                <div className="p-4">
                  <AnimalTracking compact />
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* DESTINATION */}
      {view === 'destination' && destination && (
        <div className="p-6 max-w-5xl mx-auto">
          <Card>
            <img src={destination.imageUrl} className="h-72 w-full object-cover" />
            <CardContent>
              <h1>{destination.name}</h1>

              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                  {destination.hasAnimalTracking && (
                    <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
                  )}
                </TabsList>

                <TabsContent value="overview">
                  <p>{destination.description}</p>
                </TabsContent>

                <TabsContent value="activities">
                  {destination.activities.map((a, i) => (
                    <p key={i}>• {a}</p>
                  ))}
                </TabsContent>

                <TabsContent value="accommodation">
                  <AccommodationView destinationIds={[destination.id]} />
                </TabsContent>

                {destination.hasAnimalTracking && (
                  <TabsContent value="tracking">
                    <AnimalTracking />
                  </TabsContent>
                )}
              </Tabs>

              <div className="flex gap-3 mt-6">
                <Button onClick={handleAddToRoute}>
                  <Route className="mr-2 h-4 w-4" /> Add to Route
                </Button>
                <Button variant="outline" onClick={() => setShowEmailDialog(true)}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Button>
                <Button variant="outline" onClick={handleGenerateQR}>
                  <QrCode className="mr-2 h-4 w-4" /> QR Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* FLIGHTS */}
      {view === 'flights' && (
        <motion.div key="flights" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-6 max-w-7xl mx-auto">
          <FlightPortal />
        </motion.div>
      )}

      {/* ROUTE */}
      {view === 'route' && (
        <div className="p-6 max-w-4xl mx-auto">
          {selectedRoute.map(id => {
            const d = destinationsState.find(x => x.id === id);
            return (
              <Card key={id} className="mb-3">
                <CardContent className="flex justify-between items-center">
                  <span>{d?.name}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      const updated = selectedRoute.filter(x => x !== id);
                      setSelectedRoute(updated);
                      localStorage.setItem('kiosk_route', JSON.stringify(updated));
                    }}
                  >
                    <X />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* EMAIL DIALOG */}
      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Email Route</DialogTitle>
            <DialogDescription>Send your travel info</DialogDescription>
          </DialogHeader>
          <Label>Email</Label>
          <Input value={email} onChange={e => setEmail(e.target.value)} />
          <Button onClick={handleSendEmail}>Send</Button>
        </DialogContent>
      </Dialog>

      {/* QR DIALOG */}
      <Dialog open={showQRDialog} onOpenChange={setShowQRDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>QR Code</DialogTitle>
          </DialogHeader>
          <div className="text-center">
            <QrCode className="h-32 w-32 mx-auto" />
            <p className="break-all text-sm">{qrContent}</p>
            <Button onClick={copyLink}>Copy Link</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
