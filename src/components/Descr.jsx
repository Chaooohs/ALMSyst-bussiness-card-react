import { Phone } from "./Phone"

export const Descr = (props) => {
  return (
    <div className="descr">
      <div className="wrap">
        <div className="descr__one flex">
          <div className="descr__left left">
            <h2 className="descr__title text_lg">
              ДЕТАЛЬНІШЕ ПРО ДЕЯКІ ПОСЛУГИ
            </h2>
          </div>
          <div className="right">
            <ul className="text_sm">
              {
                props.textEditor.servises.map((el, index) => {
                  return (
                    <li key={index}>
                      {el}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="descr__more descr__more_mob">
          <p className="text_lg">
            БІЛШ ДЕТАЛЬНІША КОНСУЛЬТАЦІЯ ТЕХНИЧНОГО ФАХІВЦЯ ПО ТЕЛЕФОНУ
          </p>
          <Phone />
        </div>

        <div className="flex">
          <div className="descr__left left">
            <h2 className="descr__title text_lg">
              НАШІ ПЕРЕВАГИ
            </h2>
          </div>
          <div className="right">
            <ul className="text_sm">
              {
                props.textEditor.advantages.map((el, index) => {
                  return (
                    <li key={index}>
                      {el}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}