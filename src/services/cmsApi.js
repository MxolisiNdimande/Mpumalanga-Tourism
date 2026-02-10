const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const getToken = () => localStorage.getItem('token');

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`
});

export const cmsApi = {
  // ================= DESTINATIONS =================
  getDestinations: async () => {
    const res = await fetch(`${API_BASE}/destinations`, { headers: headers() });
    return res.json();
  },

  createDestination: async (data) => {
    const res = await fetch(`${API_BASE}/destinations`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  deleteDestination: async (id) => {
    await fetch(`${API_BASE}/destinations/${id}`, {
      method: 'DELETE',
      headers: headers()
    });
  },

  // ================= USERS =================
  getUsers: async () => {
    const res = await fetch(`${API_BASE}/users`, { headers: headers() });
    return res.json();
  },

  // ================= CAMPAIGNS =================
  getCampaigns: async () => {
    const res = await fetch(`${API_BASE}/campaigns`, { headers: headers() });
    return res.json();
  }
};
