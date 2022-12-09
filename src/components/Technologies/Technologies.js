import React from 'react';
import {DiFirebase, DiReact, DiPython} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';


const Technologies = () => (
    <Section id="tech">
        <SectionDivider/>
        <br/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>I've worked with a range of technologies in web development.</SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem"/>
                <ListContainer>
                    <ListTitle>Languages</ListTitle>
                    <ListParagraph>
                        Python, Java, JavaScript, HTML, CSS, Solidity, SQL, C, R, MATLAB
                    </ListParagraph>
                </ListContainer>
            </ListItem>

            <ListItem>
                <DiFirebase size="3rem"/>
                <ListContainer>
                    <ListTitle>Development Tools</ListTitle>
                    <ListParagraph>
                        React, Next, Node, Express, Spring Boot, MongoDB, Git, Tailwind, AWS
                    </ListParagraph>
                </ListContainer>
            </ListItem>

            <ListItem>
                <DiPython size="3rem"/>
                <ListContainer>
                    <ListTitle>Relevant Courses</ListTitle>
                    <ListParagraph>
                        Data Structure and Algorithms, <br/>
                        Cloud Computing & Big Data,<br/>
                        Web Programming, <br/>
                        Databases, Computer Networks,<br/>
                        Statistical Machine Learning

                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
