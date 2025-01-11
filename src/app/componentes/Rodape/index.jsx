import style from "./rodape.module.css";
import Image from "next/image";
import logo from "/public/logo.png";
import styles from './rodape.module.css'
import image1 from '/public/facebook.png'
import image2 from '/public/twitter.png'
import image3 from '/public/linkedin.png'
import image4 from '/public/dribble.png'
import image5 from '/public/behance.png'
import image6 from '/public/google.png'


export default function Rodape({ehTemaEscuro}) {
  return (
    <footer>
      <div className={`${styles.container_div} ${ehTemaEscuro ? styles.dark : ""}`}>
        <div className={styles.subdiv_1}>
          <Image className={styles.dark_img} src={logo} alt={"logo"} />
          <p>
            Ajudamos a criar uma personalidade digital construindo sua marca no
            ambiente online utilizando estratégias , ferramentas e tecnologias
            personalizadas
          </p>
        </div>
        <div className={styles.subdiv_2}>
          <Image src={image1} alt={'social'}/>
          <Image src={image2} alt={'social'}/>
          <Image src={image3} alt={'social'}/>
          <Image src={image4} alt={'social'}/>
          <Image src={image5} alt={'social'}/>
          <Image src={image6} alt={'social'}/>
        </div>
      </div>
      <div className={styles.traço}></div>
      <p className={styles.footer}>
        © 2025 <span>Guilherme França.</span> Todos os direitos reservados.{" "}
      </p>
    </footer>
  );
}
