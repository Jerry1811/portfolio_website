import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+233-541-914-386'>+233-541-914-386</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:jerryhukpati@gmail.com'>jerryhukpati@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/Jerry1811'>
       <AiFillGithub size='3rem' />
     </SocialIcons>
     <SocialIcons href='https://www.linkedin.com/in/jeremiah-hukpati/'>
       <AiFillLinkedin size='3rem' />
     </SocialIcons>
     <SocialIcons href='https://github.com/Jerry1811'>
       <AiFillFacebook size='3rem' />
     </SocialIcons>
     </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
