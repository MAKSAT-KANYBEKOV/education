import React from 'react';
import './Button.css'

const Button = ({ type, text, title, img, img1,link }) => {
    return (
        <button className={`btn ${
            (type ==='door' && 'door') || 
            (type === 'plan' && 'plan') || 
            (type === 'news' && 'news') ||
            (type === 'it' && 'it') ||
            (type === 'again' && 'again')
        }`}
        >
            <div className="btn-box">
           <a href={link}><img src={img} alt="" /></a> 
            <img src={img1} alt="" />
            </div>
            <div className="btn-content">            
            <a className='btn-a' href={link}>{title}</a>
            <p>{text}</p>
            </div>

            </button>
    );
}

export default Button;
