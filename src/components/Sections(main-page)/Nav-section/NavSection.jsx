import React from 'react'
import './NS.style.css'
import ownImage from './NS.img/own.png'
import ownadImage from './NS.img/ownad.png'
import { nav, btn } from './NS.db'

const Section = () => {
  return (
    <section className="nav-section">
      <div className="container">
        <div className="nav-content">
          <div className="nav-section__box">
            <div className="nav-img__adaptiv"><img src={ownadImage} alt=""  className='nav-adaptiv__img'/></div>
          <div className="nav-img__box"><img  className='nav-img' src={ownImage} alt="" /></div>
        <p className='nav-question'>
          Кем вы хотите стать? <br /> <br /> Пора найти себя и выбрать подходящий курс :) <br />  <br />
          Удачи!
        </p>
          </div>
          <div className="nav-section__container">
            <div className="nav-category">
            {nav.map((item, index) => (
          <div className='nav-box__category'  key={` nav item ${index}`}>
            <img src={item.img} alt="" />
            <div className='category-box'>
              <h5 className="category-title">{item.title}</h5>
              <p className="category-age">{item.age}</p>
            </div>
          </div>
        ))} 
            </div>
            <hr className='line' />
            <div className="nav-box__btn">
            {btn.map((item,index) => (
            <div className="nav-btn" key= {` btn item ${index}`}>
              <a className='nav-link' href={item.link}>{item.title}</a>
        </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section