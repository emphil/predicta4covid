import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"


const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width:1440px) {
    max-width:600px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
  @media (max-width:768px) {
    padding:0 32px;
    margin-top:64px;
  }
  h1 {
    
    margin-bottom:4px;
    font-size:32px;
    line-height:38px;
    @media (max-width: 1440px) {
      font-size:28px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:26px;
      line-height:30px;
    }
  }
  h2 {

    color: #606060;
    font-weight:400;
    font-size:26px;
    line-height:38px;
    @media (max-width: 1440px) {
      font-size:24px;
      line-height:32px;
    }
    @media (max-width: 1024px) {
      font-size:22px;
      line-height:30px;
    }
  }
  p {
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
    strong {
      letter-spacing:-0.67px;
    }
    
  }

`

const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:42px;
  line-height:1.1;
  margin-bottom:0;
  @media (max-width: 1024px) {
    font-size:42px;
    line-height:48px;
  }
`
const Intro = () => (
  <IntroBox id="first-section">
    <TitleSection>Purpose</TitleSection>
    <h2>Investigating COVID-19's global evolution factors</h2>
    <p>COVID-19 has already affected almost all countries of the world, with national goverments being exposed at an unprecedented situation, which creates such massive health and economic shocks that the world hasn't seen since the World War II. The intensity of the pandemic varies between countries, there are different goverment preventive policies and the reaction of alternative population regions, is not consistent. PREDICTA's scientific team took the challenge to collect and analyze the relevant publicly available data aiming to identify the most important factors that significantly affect the pandemic's evolution & spread, through the application of extensive statistical data analysis. The findings and the results of this project are considered worth of publicity and attention, as they may contribute to the wider global research, with the intention to better understand the situation created and to help optimize preventive policies in the present and possible future pandemics.</p>

  </IntroBox>
)

export default Intro