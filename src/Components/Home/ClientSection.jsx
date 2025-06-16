const ClientSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-8 md:mb-0">
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Entrusted by<br />
            20+ long term clients
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 items-center">
          <div className="w-24 h-10 opacity-80 flex items-center">
            <img src="https://placehold.co/120x50/FFFFFF/FF8800?text=dociai" alt="Client logo" className="max-w-full" />
          </div>
          <div className="w-24 h-10 opacity-80 flex items-center">
            <img src="https://placehold.co/120x50/FFFFFF/00880F?text=Escaply" alt="Client logo" className="max-w-full" />
          </div>
          <div className="w-24 h-10 opacity-80 flex items-center">
            <img src="https://placehold.co/120x50/FFFFFF/005588?text=affcollect" alt="Client logo" className="max-w-full" />
          </div>
          <div className="w-24 h-10 opacity-80 flex items-center">
            <img src="https://placehold.co/120x50/FFFFFF/33AA00?text=AKHENA" alt="Client logo" className="max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;