
export const Advert = (props) => {
  return (
    <div className="advert">
      <p className="advert__text text_md">
        {
          props.textEditor.advert.map((el, index) => {
            return (
              <span key={index}>
                {el}&nbsp; • &nbsp;
              </span>
            )
          })
        }
      </p>
    </div>
  )
}