import styles from './styles.module.scss';
import {
    FaNode,
    FaCss3Alt,
    FaGitAlt,
    FaReact,
    FaSass,
    FaHtml5
} from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiPrisma, SiJest, SiTailwindcss } from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { BsFiletypeSql } from 'react-icons/bs';

export default function Technologies() {
    return (
        <section className={styles.containerTecnologias}>
            <span>Technologies:</span>

            <ul>
                <li className={styles.node}><FaNode /></li>
                <li className={styles.express}><SiExpress /></li>
                <li className={styles.typescript}><TbBrandTypescript /></li>
                <li className={styles.sql}><BsFiletypeSql /></li>
                <li className={styles.postgresql}><SiPostgresql /></li>
                <li className={styles.prisma}><SiPrisma /></li>
                <li className={styles.jest}><SiJest /></li>
                <li className={styles.git}><FaGitAlt /></li>
                <li className={styles.react}><FaReact /></li>
                <li className={styles.sass}><FaSass /></li>
                <li className={styles.tailwind}><SiTailwindcss /></li>
                <li className={styles.html}><FaHtml5 /></li>
                <li className={styles.css}><FaCss3Alt /></li>
            </ul>
        </section>
    );
}
