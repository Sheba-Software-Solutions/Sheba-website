import React, { useState, useEffect } from 'react';
import { websiteApi } from '../../utils/api';
import { Loader2 } from 'lucide-react';

const ClientSection = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setIsLoading(true);
        const response = await websiteApi.getClients({ 
          is_active: true,
          ordering: 'name'
        });
        const data = response?.data;
        const fetchedClients = Array.isArray(data) ? data : (data?.results || []);
        
        // Transform backend data to match frontend format
        const transformedClients = fetchedClients.map(client => ({
          id: client.id,
          name: client.name,
          company: client.company,
          logo: client.logo || `https://placehold.co/120x50/FFFFFF/FF8800?text=${client.name.substring(0, 6)}`
        }));
        
        setClients(transformedClients);
      } catch (err) {
        console.error('Failed to fetch clients:', err);
        setError('Failed to load clients');
        // Fallback to default clients if API fails
        setClients([
          { id: 1, name: "DocAI", company: "DocAI", logo: "https://placehold.co/120x50/FFFFFF/FF8800?text=dociai" },
          { id: 2, name: "Escaply", company: "Escaply", logo: "https://placehold.co/120x50/FFFFFF/00880F?text=Escaply" },
          { id: 3, name: "AffCollect", company: "AffCollect", logo: "https://placehold.co/120x50/FFFFFF/005588?text=affcollect" },
          { id: 4, name: "AKHENA", company: "AKHENA", logo: "https://placehold.co/120x50/FFFFFF/33AA00?text=AKHENA" }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-8 md:mb-0">
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Entrusted by<br />
              Our Clients
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <Loader2 className="text-4xl text-orange-500 animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-8 md:mb-0">
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Entrusted by<br />
            {clients.length}+ long term clients
          </h2>
        </div>
        
        {error && (
          <div className="text-center mb-8 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
            <p className="text-yellow-800">{error}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-8 items-center">
          {clients.map((client) => (
            <div key={client.id} className="w-24 h-10 opacity-80 flex items-center">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-w-full" 
                onError={(e) => {
                  e.target.src = `https://placehold.co/120x50/FFFFFF/FF8800?text=${client.name.substring(0, 6)}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;