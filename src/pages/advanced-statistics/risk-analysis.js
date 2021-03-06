import React from "react";
// import { Link } from "gatsby"

import Layout from "../../components/layout";
import Intro from "../../components/advanced-statistics/intro";
import RiskA from "../../components/advanced-statistics/risk-analysis-a";
import RiskB from "../../components/advanced-statistics/risk-analysis-b";
import RiskC from "../../components/advanced-statistics/risk-analysis-c";
import RiskD from "../../components/advanced-statistics/risk-analysis-d";
import RiskE from "../../components/advanced-statistics/risk-analysis-e";
import RiskF from "../../components/advanced-statistics/risk-analysis-f";
import RiskG from "../../components/advanced-statistics/risk-analysis-g";
import RiskH from "../../components/advanced-statistics/risk-analysis-h";
import RiskK from "../../components/advanced-statistics/risk-analysis-k";
import SEO from "../../components/seo";

const riskAnalysisMetadata = {
  Title: "Predicta",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "Analytics for Decision Making, is a leading provider of Predictive Analytics Solutions.",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Predicta",
};

const Index = (props) => (
  <Layout location={props.location}>
    <SEO
      title={riskAnalysisMetadata.Title}
      keywords={riskAnalysisMetadata.Keywords}
      description={riskAnalysisMetadata.Description}
      image={riskAnalysisMetadata.Image}
      url={riskAnalysisMetadata.url}
      titleTemplate={riskAnalysisMetadata.titleTemplate}
    />
    <div className="row" id="first-section">
      <div className="col">
        <Intro />
      </div>
    </div>
    <div className="row" style={{ backgroundColor: ` rgba(234,234,234,1)` }}>
      <div className="col">
        <RiskA />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <RiskB />
      </div>
    </div>
    <div className="row" style={{ backgroundColor: ` rgba(234,234,234,1)` }}>
      <div className="col">
        <RiskC />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <RiskD />
      </div>
    </div>
    <div className="row" style={{ backgroundColor: ` rgba(234,234,234,1)` }}>
      <div className="col">
        <RiskE />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <RiskF />
      </div>
    </div>
    <div className="row" style={{ backgroundColor: ` rgba(234,234,234,1)` }}>
      <div className="col">
        <RiskG />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <RiskH />
      </div>
    </div>
    <div className="row" style={{ backgroundColor: ` rgba(234,234,234,1)` }}>
      <div className="col">
        <RiskK />
      </div>
    </div>
  </Layout>
);

export default Index;
