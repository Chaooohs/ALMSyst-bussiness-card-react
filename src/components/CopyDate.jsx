
export const CopyDate = () => {

  const date = new Date().getFullYear().toString();

  return (
    <span className="footer__copy text_sm">
      © 2019 - {date}. ALMSystem
    </span>
  )
}