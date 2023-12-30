import styles from './styles.module.scss'
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';

export default function Midias() {
    return (
        <section className={styles.containerMidias}>
            <Link
                href='https://github.com/eractrus'
                target='_BLANK'
                >
                <RxGithubLogo className={styles.githubIcon} />
            </Link>

            <Link
                target='_blank'
                href='https://www.linkedin.com/in/eractrus-de-jud%C3%A1-oliveira-da-rocha-775393198/'>
                <FaLinkedin className={styles.linkedinIcon} />
            </Link>


            <MdOutlineEmail  className={styles.emailIcon} title='eractrus@gmail.com' />

        </section>
    )
}