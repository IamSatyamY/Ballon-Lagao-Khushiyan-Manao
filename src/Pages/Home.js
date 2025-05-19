import React from 'react'
import Sliders from '../Components/Sliders'
import QuickView from '../Components/QuickView'
import HomeCategoryGrouping from '../Components/HomeCategoryGrouping'
import Ourgallery from '../Components/Ourgallery'
import Reviews from '../Components/Reviews'
import WhyToChooseUS from '../Components/WhyToChooseUS'
import Slidevideos from '../Components/Slidevideos'

const Home = () => {
  return (
    <div>
      <Sliders/>
      <QuickView/>
      <HomeCategoryGrouping/>
      <Ourgallery/>
      <Slidevideos/>
      <Reviews/>
      <WhyToChooseUS/>
    </div>
  )
}

export default Home