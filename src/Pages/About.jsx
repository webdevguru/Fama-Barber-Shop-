const About = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Salon Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <p className="text-lg max-w-xl">
          Welcome to our salon! We provide premium grooming services tailored to your needs. Relax, refresh, and get styled.
        </p>
        <p className="text-lg max-w-xl mt-4">
          Our team of experienced professionals is dedicated to making you look and feel your best. From haircuts to facials, we offer a wide range of services to cater to all your beauty needs.    
        </p>
        <p className="text-lg max-w-xl mt-4">
          We believe in using only the best products and techniques to ensure you leave our salon feeling rejuvenated and confident. Your satisfaction is our top priority.
        </p>
        <p className="text-lg max-w-xl mt-4">
          Thank you for choosing us. We look forward to serving you!
        </p>
        <p className="text-lg max-w-xl mt-4">
          Follow us on social media for the latest updates and promotions!
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png" alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
      </div>
    </div>
  </div>
  );
};

export default About;
