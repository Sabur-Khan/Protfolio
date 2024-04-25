import React from 'react'
import Banner from '../../component/Banner/Banner'
import Container from '../../component/Container/Container'
import Projects from '../../component/Projects/Projects'
import MyBlog from '../../component/MyBlog/MyBlog'
import Contacts from '../../component/Contacts/Contacts'
import SpacialWork from '../../component/SpacialWork/SpacialWork'


const Home = () => {
  return (
    <div>

      <Container>
        <Banner/>
        <Projects/>
        <MyBlog/>
        <Contacts/>
        <SpacialWork/>
      </Container>
    </div>
  )
}

export default Home