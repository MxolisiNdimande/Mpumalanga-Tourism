import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from './ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from './ui/dialog';
import {
  Plus,
  Edit,
  Trash2,
  Upload,
  Image as ImageIcon
} from 'lucide-react';
import { toast } from 'sonner';
import { apiService } from '../services/apiService';

export function CMSPortal({ onLogout }) {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: '',
    country: '',
    category: '',
    description: '',
    image: null
  });

  /* ================= LOAD DATA ================= */
  const loadDestinations = async () => {
    setLoading(true);
    try {
      const data = await apiService.getDestinations();
      setDestinations(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load destinations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDestinations();
  }, []);

  /* ================= HANDLERS ================= */
  const openCreate = () => {
    setEditingId(null);
    setForm({
      name: '',
      country: '',
      category: '',
      description: '',
      image: null
    });
    setOpenDialog(true);
  };

  const openEdit = (dest) => {
    setEditingId(dest.id);
    setForm({
      name: dest.name,
      country: dest.country,
      category: dest.category,
      description: dest.description || '',
      image: null
    });
    setOpenDialog(true);
  };

  const saveDestination = async () => {
    if (!form.name || !form.country) {
      toast.error('Name and country are required');
      return;
    }

    const data = new FormData();
    data.append('name', form.name);
    data.append('country', form.country);
    data.append('category', form.category);
    data.append('description', form.description);
    if (form.image) data.append('image', form.image);

    try {
      if (editingId) {
        await apiService.updateDestination(editingId, data, true);
        toast.success('Destination updated');
      } else {
        await apiService.createDestination(data, true);
        toast.success('Destination created');
      }

      setOpenDialog(false);
      loadDestinations();
    } catch (err) {
      console.error(err);
      toast.error('Save failed');
    }
  };

  const deleteDestination = async (id) => {
    if (!confirm('Delete this destination?')) return;

    try {
      await apiService.deleteDestination(id);
      toast.success('Destination deleted');
      loadDestinations();
    } catch (err) {
      console.error(err);
      toast.error('Delete failed');
    }
  };

  /* ================= UI ================= */
  return (
    <div className="h-full overflow-auto bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Mpumalanga Tourism CMS</h1>
            <p className="text-muted-foreground">
              Manage destinations and content
            </p>
          </div>
          <Button variant="outline" onClick={onLogout}>
            Logout
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="destinations">
          <TabsList>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
          </TabsList>

          {/* ================= DESTINATIONS ================= */}
          <TabsContent value="destinations">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Destinations</CardTitle>
                  <CardDescription>
                    Create and manage tourism destinations
                  </CardDescription>
                </div>
                <Button onClick={openCreate}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Destination
                </Button>
              </CardHeader>

              <CardContent>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {destinations.map((d) => (
                        <TableRow key={d.id}>
                          <TableCell>
                            {d.imageUrl ? (
                              <img
                                src={`http://localhost:3001${d.imageUrl}`}
                                alt={d.name}
                                className="h-12 w-20 object-cover rounded"
                              />
                            ) : (
                              <ImageIcon className="h-6 w-6 text-muted-foreground" />
                            )}
                          </TableCell>
                          <TableCell>{d.name}</TableCell>
                          <TableCell>{d.country}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{d.category}</Badge>
                          </TableCell>
                          <TableCell>⭐ {d.rating || 0}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => openEdit(d)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => deleteDestination(d.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* ================= DIALOG ================= */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>
              {editingId ? 'Edit Destination' : 'Add Destination'}
            </DialogTitle>
            <DialogDescription>
              Upload destination information and image
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Country</Label>
              <Input
                value={form.country}
                onChange={(e) =>
                  setForm({ ...form, country: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Category</Label>
              <Input
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Description</Label>
              <textarea
                rows={4}
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setForm({ ...form, image: e.target.files[0] })
                }
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button onClick={saveDestination}>
                <Upload className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
