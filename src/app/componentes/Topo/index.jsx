import Image from "next/image";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import logo from "/public/logo.png";
import styles from "./topo.module.css";
export default function Topo(props) {
  return (
<div className={`${styles.div} ${props.ehTemaEscuro ? styles.dark : ""}`}>      <Image src={logo} alt={"logo"} />
      <button onClick={props.acao_onclick}>
        {props.ehTemaEscuro ?  <CiLight />: <CiDark />}
      </button>
    </div>
  );
}
