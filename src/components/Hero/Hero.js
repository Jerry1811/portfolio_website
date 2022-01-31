import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row noppadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio Website
      </SectionTitle>
      <SectionText>FullStack Software Developer</SectionText>
      <Button onClick={() => (window.location = '#')}>Learn More</Button>
    </LeftSection>
  </Section>
)

export default Hero
