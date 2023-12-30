import styles from './styles.module.scss'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Router from 'next/router';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <div className={styles.menuItem} title='Home'>
                <IoHomeOutline onClick={() => { Router.push('/') }} className={styles.btnHome} />
            </div>
            <div className={styles.menuItem} onClick={() => { Router.push('/about') }} title='About'>
                <FaRegUser className={styles.btnUser} />
            </div>
            <div className={styles.menuItem} onClick={() => { Router.push('/projects') }} title='Projects'>
                <FaCode className={styles.btnCode} />
            </div>
        </nav>
    )
}
