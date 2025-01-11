import styles from "./card.module.css";

export default function Card({ ehTemaEscuro, periodo, cargo, empresa, descricao }) {
  return (
    <div className={`${styles.div} ${ehTemaEscuro ? styles.dark : ""}`}>
      <div>
        <span>{periodo}</span>
        <h3>{cargo}</h3>
        <small>{empresa}</small>
        <p>{descricao}</p>
      </div>
    </div>
  );
}
