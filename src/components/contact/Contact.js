import "./contact.css"
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState } from "react"
import emailjs from 'emailjs-com'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_0gn0hc7', 
                        'template_6iprx5a',
                        formRef.current, 
                        'user_SUtomjy7eKCibGPRfuJIP')
      .then((result) => {
          console.log(result.text)
          setDone(true)
      }, (error) => {
          console.log(error.text)
      })
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +94741123123
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            sovisrushain@gmail.com
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Sri Rahula Mawatha, Mount Lavinia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your Story</b>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank You..!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
