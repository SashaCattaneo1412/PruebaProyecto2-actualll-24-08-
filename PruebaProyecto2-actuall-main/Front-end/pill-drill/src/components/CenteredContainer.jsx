import React from 'react';

const CenteredContainer = ({ children }) => {
  return (
    <div className="centered-container">
      {children}
      <style jsx>{`
        .centered-container {
          background-color: rgba(255, 255, 255, 0.8); /* Blanco con opacidad reducida */
          padding: 20px; /* Espacio interior alrededor del contenido */
          border-radius: 10px; /* Bordes redondeados */
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Sombra ligera */
          text-align: center; /* Centra el contenido horizontalmente */
        }
      `}</style>
    </div>
  );
};

export default CenteredContainer;