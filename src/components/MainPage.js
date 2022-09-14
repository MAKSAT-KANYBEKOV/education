import React from 'react'
import Header from './GlobalSections/Header/Header'
import FirstSection from './Sections(main-page)/First-section/FirstSection'
import NavSection from './Sections(main-page)/Nav-section/NavSection'
import ArticleSection from './Sections(main-page)/Article-section/Article'
import SliderSection from './Sections(main-page)/Slider-section/SliderSection'
import WelcomeSection from './Sections(main-page)/Welcome-section/WelcomeSection'
import FormSection from './GlobalSections/Form/Form'
import Footer from './GlobalSections/Footer/Footer'
const App = () => {
  return (
    <div>
      <Header /> 
      <FirstSection />
      <NavSection />
      <ArticleSection />
      <SliderSection />
      <WelcomeSection />
      <FormSection />
      <Footer />
    </div>
  )
}

export default App
