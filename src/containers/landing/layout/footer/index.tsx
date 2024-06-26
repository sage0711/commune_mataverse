/**import modules */
import React from 'react';
import { VscGlobe } from 'react-icons/vsc';
import { FaAngleDown } from 'react-icons/fa';
/**import styled components */
import { StyledContainer, Title, MoreInfo, ItemList, FooterSection } from './styled';
/**import images */
import SolImg from 'assets/icons/Sol.svg';

const Footer: React.FC = () => {
  return (
    <StyledContainer>
      <Title>Get more out of commune</Title>
      <MoreInfo>
        <ItemList>
          <span>Build</span>
          <p>Docs</p>
          <p>Github 🡶</p>
          <p>Chat on Discord 🡶</p>
          <p>Status 🡶</p>
        </ItemList>
        <ItemList>
          <span>Apply</span>
          <p>Grants</p>
          <p>Collective 🡶</p>
          <p>Careers 🡶</p>
        </ItemList>
        <ItemList>
          <span>Learn</span>
          <p>Blog</p>
          <p>Podcast</p>
          <p>Videos 🡶</p>
          <p>Network Stats 🡶</p>
        </ItemList>
        <ItemList>
          <span>Other</span>
          <p>Break commune</p>
          <p>Disclaimer</p>
          <p>Press & Brand</p>
        </ItemList>
      </MoreInfo>
      <FooterSection>
        <img src={SolImg} alt="sol-icon" width={25} height={25} />
        <div>
          <span>commune.com</span>
          <span>
            <VscGlobe />
            <FaAngleDown />
          </span>
        </div>
      </FooterSection>
    </StyledContainer>
  );
};

export default Footer;
