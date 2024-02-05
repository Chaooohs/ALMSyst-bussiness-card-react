import { Phone } from './Phone'

export const Aboutus = (props) => {
  return (
    <div className="aboutus">
      <div className="wrap">
        <div className="aboutus__one flex">
          <div className="left aboutus__title text_lg">
            Про нас
          </div>
          <div className="right text_sm">
            <p className="aboutus__text">
              {props.textEditor.aboutUsOne}
            </ p>
            <p>
              {props.textEditor.aboutUsTwo}
            </p>
          </div>
        </div>

        <div className="aboutus__two flex">
          <div className="left aboutus__title text_lg">
            Оплата
          </div>
          <div className="right text_sm">
            {props.textEditor.cost}
          </div>
        </div>
      </div>
      <div className="aboutus__phone">
        <Phone />
      </div>
    </div>
  )
}