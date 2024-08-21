import React from 'react';
import styles from './Secao_Beneficios.module.css'; // Importar como módulo

// eslint-disable-next-line react/prop-types
const Beneficio = ({ titulo, subtitulo, descricao, imagem, invertido }) => {
  return (
    <div className={`${styles.beneficio} ${invertido ? styles.invertido : ''}`}>
      <div className={styles.texto}>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>{descricao}</p>
      </div>
      <div className={styles.imagem}>
        <img src={imagem} alt={titulo} />
      </div>
    </div>
  );
};

export default Beneficio;