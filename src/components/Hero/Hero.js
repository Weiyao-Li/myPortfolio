import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';


const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Weiyao Li
            </SectionTitle>
            <SectionText>
                A first-year Master's student at Columbia University with technical experiences in <br/>
                Computer Science,
                Statistics,
                and Finance
            </SectionText>

            <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
        </LeftSection>

    </Section>
);

export default Hero;