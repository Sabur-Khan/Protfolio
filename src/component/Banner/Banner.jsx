import React from 'react'

import Container from '../Container/Container'

import RightBannerImage from '../../assets/images/banner-profile.png'
import SocialLink from '../SocialLink/SocialLink'
import BannerTitle from '../BannerTitle/BannerTitle'


const Banner = () => {
  
  return (
      <div className='my-14'>
       <Container>
        <div className='grid px-2 lg:grid-cols-2 gap-4 items-center'>

          <div>
            <BannerTitle/>
            <SocialLink/>
          </div>
          <div className='lg:block md:hidden hidden'>
            <div className='w-[250px] h-[250px] mx-auto outline-4 outline outline-white rounded-full overflow-hidden'>
              <img src={RightBannerImage} alt="bannerlogo" />
            </div>
          </div>
          
        </div>
       </Container>
      </div>
  )
}

export default Banner