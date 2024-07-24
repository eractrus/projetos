import style from  './header.module.scss';

export function Header(){
    return (
        <header className={style.containerHeader}>

            <h1 className={style.logo}>EASY<span>INVEST</span></h1>

            <nav className={style.containerControlerHeader}>
                <a href="/">Home</a>
                <a href="/active">Active</a>
                <a href="/wallet">My wallet</a>
            </nav>
        </header>
    )
}