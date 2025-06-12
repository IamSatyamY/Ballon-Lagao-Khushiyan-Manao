import React from 'react'
import Sliders from '../Components/Sliders'
import QuickView from '../Components/QuickView'
import HomeCategoryGrouping from '../Components/HomeCategoryGrouping'
import Ourgallery from '../Components/Ourgallery'
import Reviews from '../Components/Reviews'
import WhyToChooseUS from '../Components/WhyToChooseUS'
import Slidevideos from '../Components/Slidevideos'
import BiggestBalloon from '../Components/BiggestBalloon'
import { Helmet } from 'react-helmet'
import FAQ from '../Components/FAQ'
import Offer from '../Components/Offer'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Balloon Lagao | Khushiyan Manao</title>
        <meta name='description' content='Make your next event extraordinary with Beautiful Balloon Decor from Balloon Lagao! Free quote. sky advertising, jumping bouncy,inflatable sky balloons,trampoline,helium balloon, bouquets and many more!'></meta>
      </Helmet>
      <Sliders/>
      <Offer/>
      <QuickView/>
      {/* <HomeCategoryGrouping/> */}
      <Ourgallery/>
      <Slidevideos/>
      <BiggestBalloon/>
      <Reviews/>
      <WhyToChooseUS/>
      <FAQ/>
    </div>
  )
}

export default Home