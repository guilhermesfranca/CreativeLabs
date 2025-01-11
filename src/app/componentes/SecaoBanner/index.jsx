import Image from 'next/image'
import styles from './secaoBanner.module.css'
import banner from '/public/banner.jpg'
export default function SecaoBanner({ehTemaEscuro}) {
    return(
        <div className={`${styles.banner} ${ehTemaEscuro ? styles.dark : ""}`}>
            <Image src={banner} alt={'banner'}/>
            <div>
                <p>BRANDING / UI / UX / TECNOLOGIA </p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
            
        </div>
    )
}