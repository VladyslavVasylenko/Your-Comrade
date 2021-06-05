import './contact.css';

function Contact() {
  return(
    <div className="contact">
      <div className="conteiner-contact">
        <p className="contact__mail">vladyslavvasylenko03@gmail.com</p>
        <p className="contact__phone">+380668047228</p>
        <p className="contact__inst"><a href="vladyslavvasylenko0312"><i className="fab fa-instagram-square"></i></a></p>
        <p className="contact__In"><a href="https://www.linkedin.com/in/vladyslav-
vasylenko/"><i className="fab fa-linkedin-in"></i></a></p>
      </div>
      <div className="container-form">
      <form className="form">
        <input className="form__message" type="text" name="message" placeholder="Ваше сообщение"/>
        <button className="form__btn">Отправить</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;