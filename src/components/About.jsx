import Gates from '../img/gates/almsystem-555x370.jpg'
import { Phone } from './Phone'

export const About = (props) => {
  return (
    <div className="wrap">
      <div className="about">
        <div className="about__content">
          <div className="about__left">
            <h1 className="about__title text_lg">{props.textEditor.chapter}</h1>
            <p className="about__descr text_md">{props.textEditor.workArea}</p>
            <Phone />
          </div>
          <div className="about__rigth">
            <img src={Gates} alt="gate" className="about__img" />
          </div>
        </div>
      </div>
    </div>
  )
}