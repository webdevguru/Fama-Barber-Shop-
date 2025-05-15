const Contact = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center bg-black text-white">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1553521041-d168abd31de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Barber Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Content */}
        <div className="relative z-10 p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-6">
            Have questions or want to book an appointment? Reach out to us!
          </p>
          <form className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 p-2 rounded bg-white text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 p-2 rounded bg-white text-black"
            />
            <textarea
              placeholder="Your Message"
              className="mb-4 p-2 rounded bg-white text-black"
            ></textarea>
            <button className="bg-red-500 text-white py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
