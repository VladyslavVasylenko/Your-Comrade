import './contact.css';

function Contact() {
  return(
    <div className="contact" id="Contact">
      <div className="conteiner-contact">
        <p className="contact__mail"><a className="contact__mail" href="https://www.google.com/intl/uk/gmail/about/" target="blank">vladyslavvasylenko03@gmail.com</a></p>
        <p className="contact__phone"><a className="contact__phone" href="tel:++380668047228">+380668047228</a></p>
        <p className="contact__inst"><a href="https://www.instagram.com/vladyslavvasylenko0312/" target="blank"><i className="fab fa-instagram"></i></a></p>
        <p className="contact__In"><a href="https://www.linkedin.com/in/vladyslav-vasylenko-5600301a6/" target="blank"><i className="fab fa-linkedin-in"></i></a></p>
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