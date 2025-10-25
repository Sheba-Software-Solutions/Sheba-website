import React, { useState, useEffect } from 'react';
import { websiteApi } from '../../utils/api';
import { Loader2 } from 'lucide-react';
import { imageHelpers } from '../../utils/imageHelpers';
import SmartImage from '../ui/SmartImage';

const ClientSection = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
        logo: client.logo || imageHelpers.getClientPlaceholder(client.name)
      }));
      
      setClients(transformedClients);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('Failed to fetch clients:', err);
      setError(`Failed to load clients: ${err.response?.data?.detail || err.message || 'Network error'}`);
      setClients([]); // Don't fallback to static data
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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

  if (error && !isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Clients</h3>
              <p className="text-red-700 mb-4">{error}</p>
              <button 
                onClick={fetchClients}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
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
        
        <div className="flex flex-wrap gap-8 items-center">
          {clients.map((client) => (
            <div key={client.id} className="w-24 h-10 opacity-80 flex items-center">
              <SmartImage
                src={client.logo} 
                alt={`${client.name} logo`} 
                fallback={imageHelpers.getClientPlaceholder(client.name)}
                className="max-w-full" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;