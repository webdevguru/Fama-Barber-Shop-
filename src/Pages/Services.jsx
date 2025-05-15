const Services = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center bg-black text-white">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1529434173292-b6709e2fe899?w=1500"
          alt="Barber Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Premium <span className="text-amber-500">Barber</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover timeless grooming with our skilled barbers. Haircuts, shaves, trims — all tailored to perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
              Book Appointment
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
