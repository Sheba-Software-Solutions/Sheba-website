import { Link } from 'react-router-dom';

const FeatureCard = ({ 
  bgColor = 'bg-black', 
  title, 
  description, 
  buttonText, 
  buttonVariant = 'primary',
  link,
  children 
}) => {
  const handleClick = () => {
    if (link === '#contact') {
      // Scroll to contact section
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const ButtonContent = () => (
    <button 
      className={`px-6 py-3 rounded-full text-base font-medium 
        ${buttonVariant === 'primary' 
          ? 'bg-gradient-to-b from-blue-100 to-blue-200 text-black hover:bg-yellow-300 transition-colors' 
          : 'bg-gray-800 text-white hover:bg-gray-700 transition-colors'}`}
      onClick={link === '#contact' ? handleClick : undefined}
    >
      {buttonText}
    </button>
  );

  return (
    <div className={`${bgColor} rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-between`}>
      <div>
        <div className="mb-12">{title}</div>
        <p className="text-lg text-white/90 mb-8">{description}</p>
      </div>
      <div>
        {link && link.startsWith('/') ? (
          <Link to={link}>
            <ButtonContent />
          </Link>
        ) : link === '#contact' ? (
          <ButtonContent />
        ) : (
          <ButtonContent />
        )}
      </div>
      {children}
    </div>
  );
};

export default FeatureCard;