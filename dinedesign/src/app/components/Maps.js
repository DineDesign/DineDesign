import React, { useState } from 'react';

const GoogleMapOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="">
      <button 
        onClick={handleOpen} 
        className="px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded"
      >
        Location
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="relative bg-white rounded-lg shadow-lg p-4">
            <button 
              onClick={handleClose} 
              className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.773437632053!2d-79.4723097238155!3d43.79831407109564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f95064838eb%3A0x5f9fc3c67b52cbf7!2zRGVlZGFyIFBlcnNpYW4gUmVzdGF1cmFudNiv24zYr9in2LEg2LHYs9iq2YjYsdin2YY!5e0!3m2!1sen!2sca!4v1721535027743!5m2!1sen!2sca"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="mt-4 text-center">
              <button 
                onClick={handleClose} 
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Close Map
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMapOverlay;