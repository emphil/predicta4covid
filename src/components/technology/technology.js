import React from "react";
import styled from "styled-components"



const ImageBox = styled.div`
display: flex;
justify-content: space-between;
flex-wrap:wrap;
align-items: center;
flex-direction: row;
width: 100%;
max-width: 960px;
margin: 0 auto;
@media (max-width:1440px) {
  max-width:720px;
}
@media (max-width:1024px) {
  max-width:768px;
}
@media (max-width:768px) {
  padding:0 32px;
}
.first {
  width:66%;
}
.second {
  width:31%
}
.third {
  width:100%;
}
`

const TextBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
margin: 0 auto;
max-width: 800px;
@media (max-width: 1440px) {
  max-width: 600px;
}
@media (max-width: 1024px) {
  padding:0 32px;
}
p {
  letter-spacing: 0px;
  color: #606060;
  font-size:18px;
  line-height:38px;
  @media (max-width: 1440px) {
    font-size:16px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:15px;
    line-height:30px;
  }
}
`

const Gap = styled.div`
display: block;
height: 2rem;
`;


const Tech = () => (
  <>

<ImageBox>
   <img className="first" src="/tech-1.svg" />
   <img className="second" src="/tech-2.svg" />
   <img className="third" src="/tech-3.svg" />
</ImageBox>
    <Gap />
    <TextBox>
        <p>IBM SPSS MODELER is an extensive data mining & predictive analytics platform that is designed to integrate predictive intelligence into decisions made by individuals, groups, systems and the enterprise. By providing a range of advanced algorithms and techniques that include text analytics, entity analytics, decision management and optimization, IBM SPSS MODELER helps you consistently to make the right decisions, from the desktop or within operational systems.</p>
        <p>As, IBM SPSS MODELER also interacts with exceptional efficiency with R and PYTHON software languages, a fact that expands the available analytical capabilities in an unlimited fashion, made possible the successful implementation of the presented project.</p>

    </TextBox>
    </>
  );


export default Tech