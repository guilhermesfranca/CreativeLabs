import styles from "./SecaoExperiencia.module.css";
import Card from "../Card";

export default function SecaoExperienciaTrabalho(props) {
  return (
    <section className={`${styles.container} ${props.ehTemaEscuro ? styles.dark : ""}`}>
      <div className={styles.experiencia}>
        <h2>Experiências De Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de trabalho de Branding, Design Gráfico,
          Criação de Sites e Marketing Digital, nos empenhamos diariamente para
          entregar resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      <div className={styles.cards}>
        <Card
          ehTemaEscuro={props.ehTemaEscuro}
          periodo={"JUNHO 2012 - 2016"}
          cargo={"Web Designer"}
          empresa={"Pied Piper Startup."}
          descricao={
            "Criação de landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
          }
        />
        <Card
          ehTemaEscuro={props.ehTemaEscuro}
          periodo={"OUTUBRO 2016 - 2018"}
          cargo={"Game Designer"}
          empresa={"Meta Dev Games."}
          descricao={
            "Criação de landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
          }
        />
        <Card
          ehTemaEscuro={props.ehTemaEscuro}     
          periodo={"JANEIRO 2018 - ATUAL"}
          cargo={"Web Developer"}
          empresa={"Rocket Launcher Paper."}
          descricao={
            "Criação de landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
          }
        />
      </div>
    </section>
  );
}
