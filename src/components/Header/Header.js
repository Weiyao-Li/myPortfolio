import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';

import {Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link legacyBehavior href="/">
                <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
                    <DiCssdeck size="3rem"/> <Span>WEIYAO LI</Span>
                </a>
            </Link>
        </Div1>
        <Div2>

            <Link href="#about">
                <NavLink>About Me</NavLink>
            </Link>
            
            <Link href="#projects">
                <NavLink>Projects</NavLink>
            </Link>

            <Link href="#tech">
                <NavLink>Technologies</NavLink>
            </Link>

        </Div2>

        <Div3>
            <SocialIcons href="https://github.com/Weiyao-Li">
                <AiFillGithub size="3rem"/>
            </SocialIcons>

            <SocialIcons href="https://www.linkedin.com/in/weiyaoli/">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>

            <SocialIcons href="https://www.instagram.com/nolanlwyy/">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
