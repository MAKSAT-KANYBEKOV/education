import React from 'react'
import ownImg from './Form.img/own.png'
import './Form.style.css'


const Form = () => {
  return (
    <section className='form'>
        <div className="form-content">
            <div className="form-box">
                <div className="form-after">
                <img src={ownImg} alt=""  className='own'/>
                </div>
            </div>
            <div className="form-continer">
                <div className="form-box">
            <form action="#">
                <input type="text" placeholder='Ваше имя'  className='form-name'/>
                <div className="form-container">
                    <input type="number" name="" id="" placeholder='Ваш телефон' className='form-number'/>
                    <input type="email" name="" id="" placeholder='Ваш e-mail' className='form-email'/>
                </div>
            </form></div>
            <div className="form-box__submit">
            <p className='form-txt'>Нажимая на кнопку, я соглашаюсь 
на обработку персональных данных 
и с правилами пользования Платформой</p>
            <button className='form-btn' type="submit">Отправить</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Form