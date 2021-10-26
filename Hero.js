import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


// class App extends Component {
//   render () {
//     return <img src={profile} /> 
//   }
// }
const Hero = () => (
  <Section row nopadding>
    
    <LeftSection>
      
      <SectionTitle main center>
        
      Brian Won<br/>

      
      </SectionTitle>
      <SectionText>
      
      I'm an undergrad in Computer Science, Math, and Stats at the University of Toronto. I will be graduating in May 2023 and I'm seeking out for another venture for intern opportunities!
    
      </SectionText>
      
    </LeftSection>
  </Section>
);




export default Hero;