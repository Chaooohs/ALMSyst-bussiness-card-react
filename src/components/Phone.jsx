import PhoneIcon from '../img/svg/phone.svg'

export const Phone = () => {
  return (
    <div className="about__phone">
      <img src={PhoneIcon} alt="phone" className="about__phone_img" />
      <a href="tel:+380991019368" className="about__tel text_md">+38 (099) 101 93 68</a>
    </div>
  )
}