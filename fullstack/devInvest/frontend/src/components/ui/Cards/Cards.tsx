import style from './cardStyles.module.scss'
import { PropsDataActive } from '../../../types/PropsActive'

export function CardActive(props: PropsDataActive) {
    return (
        <div className={style.cardActive}>

            <h2>{props.ativo}</h2>

            <section className={style.containerPriceCardActive}>
                <span className={style.priceTitle}>R$ {props.ultimo}</span>
                <div>
                    <span>R$ {props.valorMinimo}</span>
                    <span>R$ {props.valorMaximo}</span>
                </div>
            </section>

            <section className={style.containerInfosActive}>
                <span>volume: {props.volume}</span>
                <span>Atualização: {props.data}</span>
            </section>

            <button>Add wallet</button>
        </div>
    )
}