import React from 'react';

const GoogleMap = () => {
  return (
    <div>
      <div id="google-maps-display" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
        <iframe
          className=" "
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=ashok+van,+vallabh+road,+dahisar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
      <style jsx>{`
        #google-maps-display img {
          max-width: none !important;
          background: none !important;
          font-size: inherit;
          font-weight: inherit;
        }
      `}</style>
    </div>
  );
};

export default GoogleMap;
