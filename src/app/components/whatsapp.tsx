import React from 'react';

// Define the props for the component
interface WhatsAppButtonProps {
  phoneNumber: string; // Phone number with country code (e.g., +123456789)
  message: string; // Default message
  photoURL?: string; // Optional custom image URL (default photo will be used if not provided)
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, photoURL }) => {
  // Define the URL for the WhatsApp API with pre-filled message
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Default WhatsApp icon URL if no custom photo is provided
  const defaultPhotoURL = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#25d366', // WhatsApp green
          border: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <img
          src={photoURL || defaultPhotoURL}
          alt="WhatsApp"
          style={{ width: '30px', height: '30px', marginRight: '10px' }}
        />
        Send WhatsApp Message
      </button>
    </a>
  );
};

export default WhatsAppButton;
