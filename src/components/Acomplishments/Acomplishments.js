import React from 'react';

import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {Box, Boxes, BoxNum, BoxText} from './AcomplishmentsStyles';

const data = [
    {text: 'Pi Mu Epsilon (U.S. honorary national math society'},
    {text: 'Goldman Sachs Insight Series Participant'},
    {text: 'Clorox Case Competition Finalist (2nd)',},
    // {text: 'Github Followers'}

];

const Acomplishments = () => (
    <Section>
        <SectionTitle>Personal Accomplishments</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    {/*<BoxNum>{card.number}+</BoxNum>*/}
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Acomplishments;
