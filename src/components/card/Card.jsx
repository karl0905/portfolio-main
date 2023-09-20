import { useEffect } from 'react'
import './Card.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Card(props) {

    Aos.init();

    return(
        <div className="card" data-aos="fade-up" data-aos-once="true" data-aos-delay={props.delay}>
            <img className='card__img' src={`${props.img}`} alt={props.alt} />
        </div>
    )
}