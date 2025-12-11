import React from 'react';

const GoldenFadingLine = () => {
  // Definimos los estilos
  const lineStyle = {
    // Ocupa todo el ancho disponible hasta llegar al máximo
    width: '100%',
    // Límite de ancho solicitado
    maxWidth: '1100px',
    // Altura de la línea (puedes ajustarla si la quieres más gruesa)
    height: '3px',
    // Centrado horizontal automático
    margin: '0 auto',
    // EL TRUCO: Gradiente lineal horizontal (90deg).
    // Va de transparente (opacity 0) -> dorado sólido (opacity 1) en el centro (50%) -> transparente de nuevo.
    // He usado un color dorado (#CFA248) similar al de la imagen.
    background: 'linear-gradient(90deg, rgba(207,162,72,0) 0%, rgba(207,162,72,1) 50%, rgba(207,162,72,0) 100%)',
    // Opcional: suaviza un poco los bordes superior e inferior
    borderRadius: '3px',
    border: 'none'
  };

  return <div style={lineStyle} role="presentation" />;
};

export default GoldenFadingLine;