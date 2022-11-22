import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

import {Div3, SocialIcons} from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <linkTitle>Contact:</linkTitle>
                    <LinkItem href="tel: 917-526-8948">tel: 917-526-8948</LinkItem>
                </LinkColumn>

                <LinkColumn>
                    <linkTitle>Email:</linkTitle>
                    <LinkItem href="mailto:nolanwyl@gmail.com">nolanwyl@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>One Step at a Time</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/Weiyao-Li">
                        <AiFillGithub size="3rem"/>
                    </SocialIcons>

                    <SocialIcons href="https://www.linkedin.com/in/weiyaoli/">
                        <AiFillLinkedin size="3rem"/>
                    </SocialIcons>

                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
