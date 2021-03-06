import React from "react"
import styled from "styled-components"
import ContactLogo from "./images/contact-logo.svg"



const IntroBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;

& svg {width: 50%}
margin: 0 auto;
max-width: 960px;
@media (max-width: 1440px) {
  max-width: 720px;
}
@media (max-width: 1024px) {
  max-width: 768px;
  margin-top:90px;
  padding:0 32px;
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
}
`

const Gap = styled.div`
height: 5rem;

  @media (max-width: 1024px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`


const Intro = () => (
  <>
  <IntroBox>
  
    <p>If you found interesting the presented project and you would like to contact us for exchanging ideas or additional information which is definitely available, as a fraction of the findings can be incorporated in a micro site, please do not hesitate to come in touch with PREDICTA’s team.</p>

    <Gap />

<ContactLogo />

<Gap />

<p style={{color: `#777777`, fontWeight: `bold`}}>PREDICTA’s team of experts have successfully championed advanced analytics for 35 years. Applying statistics, data mining and machine learning techniques they handle available data to uncover hidden information to be used for better predictions and decision making optimization.</p>

<Gap />
<p style={{
         padding:`.5rem`, textAlign: `center`, lineHeight: `2`
      }}>
18 Chatzikonstanti Str., 115 24 Athens, Greece<br />
<b>T.</b> +30 210 69 31 040   &nbsp; •   &nbsp; <b>F.</b> +30 210 69 31 079  &nbsp;  •  &nbsp;  <b>E.</b> info@predicta.gr<br />
www.predicta.gr
</p>

</IntroBox>
</>
)

export default Intro