import React from 'react'
import Sliders from '../Components/Sliders'
import QuickView from '../Components/QuickView'
import HomeCategoryGrouping from '../Components/HomeCategoryGrouping'
import Ourgallery from '../Components/Ourgallery'
import Reviews from '../Components/Reviews'
import WhyToChooseUS from '../Components/WhyToChooseUS'

const Home = () => {
  return (
    <div>
      <Sliders/>
      <QuickView/>
      <HomeCategoryGrouping/>
      <Ourgallery/>
      <Reviews/>
      <WhyToChooseUS/>
    </div>
  )
}

export default Home