import React from 'react';
import Beneficio from './Beneficio';
import styles from './Secao_Beneficios.module.css'; // Importar estilos da seção

// Importar imagens corretamente
import imgPremmia from '/img/imgPremmia.png';
import imgCelular from '/img/imgCelular.png';

const Secao_Beneficios = () => {
  return (
    <section className={styles.containerBeneficios}>
      <h2 className={styles.tituloSecao}>Benefícios</h2>
      <div>
        <Beneficio
          titulo="Programa de Fidelidade Premmia"
          subtitulo="O programa de pontos"
          descricao="Com o Premmia, você se cadastra, acumula pontos e pode trocá-los por ofertas incríveis, produtos, serviços e descontos em diversos parceiros."
          imagem={imgPremmia}
        />
        <Beneficio
          titulo="Cashback e Acúmulo de Pontos"
          subtitulo="vários benefícios"
          descricao="Pague seu abastecimento pelo App Premmia com PIX ou cartão de crédito e ganhe até 6% de cashback, também acumule pontos."
          imagem={imgCelular}
          invertido
        />
      </div>
    </section>
  );
};

export default Secao_Beneficios;
