import Styles from "./inicio.module.css"

const Inicio = () => {
  return (
  <div className={Styles.container}>
    <div className={Styles.text}>
      <h1>Leonardo Cestari</h1>
      <p>Desenvolvedor e Analista de Sistemas</p>
    </div>
    <div className={Styles.image}></div>
  </div>
  );
};

export default Inicio;