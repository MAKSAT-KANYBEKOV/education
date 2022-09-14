import React from 'react'
import './Article.style.css'
import Button  from '../../UI/Button.article'

import numberImage from './img/25.png'
import novemberImage from './img/november.png'
import desktopImage from './img/monitor.png'
import newsImage from './img/newspaper.png'
import itImage from './img/it.png'
import againImage from './img/again.svg'

const Article = () => {
  return (
    <section className="article">
      <div className="container">
        <div className="article-content">
            <Button  
            img={numberImage}
            img1={novemberImage}
            title={`${"День открытых дверей "}`}
            link={'/'}
            type={"door"}
            text={"Приглашаем всех желающих на бесплатную экскурсию   в мир востребованных профессий и полезных навыков"}
            />
            <Button  
            img={desktopImage}
            title={`${"Программы обучения"}`}
            link={'/'}
            type={"plan"}
            text={"В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить практические знания, которые помогут получить работу мечты."}
            />
            <Button  
            img={newsImage}
            title={`${"Новости Академии"}`}
            link={'/'}
            type={"news"}
            />
            <Button  
            img={itImage}
            title={`${"Мир IT"}`}
            link={'/'}
            type={"it"}
            />
            <Button  
            img={againImage}
            title={`${"Попробуй!"}`}
            link={'/'}
            type={"again"}
            text={"Пройдите тест и узнайте свои способности   в сфере информационных технологий"}
            />
        </div>
        </div>
    </section>
  )
}

export default Article