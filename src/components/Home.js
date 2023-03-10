import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        lefBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        lefBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        lefBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        lefBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Lowest Coast Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        lefBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Then A New Roof'
        backgroundImg='solar-roof.jpg'
        lefBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        lefBtnText='Shop Now'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh
`