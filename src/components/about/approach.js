import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"

const TextBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 800px;
margin: 0 auto;
@media (max-width:1440px) {
  max-width:600px;
}
@media (max-width: 1024px) {
  padding:0 32px;
}
h4 {
  margin-bottom:16px;
  font-size:24px;
  line-height:44px;
  font-family:IBM Plex Sans;
  @media (max-width: 1440px) {
    font-size:20px;
  }
}

p {
  color: #222B3E;
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


const List = styled.ul`
  list-style: none;
  overflow-x: auto;
  margin: 0 0 1rem;
  padding:0;
`;

const ListItem = styled.li`
  display: block;
  letter-spacing: -0.48px;
  color: #222B3E;
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
`;

const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222B3E;
  letter-spacing: 0px;
  font-size:32px;
  line-height:38px;
  margin-bottom:0;
  @media (max-width: 1440px) {
    font-size:28px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:26px;
    line-height:30px;
  }
`

const SubheadSection = styled.h2`
  margin-bottom:1rem;
  color: #606060;
  font-weight:400;
  font-size:26px;
  line-height:38px;
  margin-bottom:42px;
  @media (max-width: 1440px) {
    font-size:24px;
    line-height:32px;
  }
  @media (max-width: 1024px) {
    font-size:22px;
    line-height:30px;
  }
`


const Intro = () => (
  <>
  <TextBox>
    <TitleSection id ='approach'> Approach</TitleSection>
    <SubheadSection>The Project's Methodological Approach</SubheadSection>   
    <h4>A - Data Collection - Retrieval</h4>
    <p>One challenging task was the detection of the right and most informational data sources, the type of data required and the extent of their availability for each country of the world. Data were collected from Official Health organizations like WHO - ECDC, UK - US Universities, Non-Profit Foundations like Wikipedia and Institutes like the World Bank. <br/> <br /> Data collected were grouped in 5 high-level categories:</p>
    <List>
      <ListItem><strong>Virus:</strong> Patients and Deceased Counts, Demographics, Covid-19 Tests, Government Preventive Measures  and Citizens' Response.</ListItem>
      <ListItem><strong>Health System: </strong>Health centers' capabilities and vaccinations' policies.</ListItem>
      <ListItem><strong>Hazards:</strong> Death causes and risks.</ListItem>
      <ListItem><strong>General:</strong> Climate and geographical data.</ListItem>
      <ListItem><strong>Socioeconomics:</strong> Prosperity, human rights and transportation data.</ListItem>
    </List>
    <h4>B - Data Management</h4>
    <p>A Master COVID-19 dataset was constructed and an automated process was developed for its continuous enrichment. Data quality checks were performed before moving further with the analysis. A massive number of KPIs were calculated, enriching the original available information. E.g. KPIs were derived by groupings, ratios, rolling averages, percentages etc., on both day-to-day level and overall country level.</p>
    <p>The Master File's information was standardized (by population or/and age), a statistical neccessity that leads to logical comparisons. Comparisons were possible obviously where reliable data were available.</p>
    <h4>C - Data Exploration</h4>
    <p>The virus evolution (number of cases and deaths) was examined with respect to two groups of factors, the first group containing socioeconomic and structural country characteristics such as GDP, quality of health system, climate, population density, etc., while the second group contains the goverment intervention measures such as lockdown policies and testing strategy. Factors found significant for the virus evolution were further examined via advanced statistical methods.  </p>
    <h4>D - Statistical Analysis</h4>
    <p>Statistical Tests and Correlations between several KPIs, related to virus growth and mortality were performed. Factor Analysis was used for data reduction purposes and the creation of indices related to significant factors such as mobility variations and other preventive policy measures. Anomaly Detection was used to identify uncommon patterns that may lead to unreliable data. Cluster Analysis was used to examine the potential grouping of countries based on the pandemic evolution and the various other independent factors found to influence significantly this evolution. Decision trees were also used to possibly clarify complex relations unexplained by the clustering procedure.</p>
    <h4>E - Simulation Analysis</h4>
    <p>Simulation of the risk of infection under specific situations/conditions using what-if scenarios. Epidemiological models were applied and compared, to depict and predict the pandemic evolution by country. What-If simulation modeling to understand the pandemic evolution under alternative scenarios specified by the preventive government policies.</p>
  </TextBox>
  </>
)

export default Intro