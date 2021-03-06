import React from "react";
// import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../../components/layout";
import NavbarSubLinks from "../../components/in-depth/navbarsub";
import ChartTwo from "../../components/in-depth/europe/images/measures/school.svg";
import ChartThree from "../../components/in-depth/europe/images/measures/workplace.svg";
import ChartFour from "../../components/in-depth/europe/images/measures/public-events.svg";
import ChartFive from "../../components/in-depth/europe/images/measures/restriction-on-gatherings.svg";
import ChartSix from "../../components/in-depth/europe/images/measures/restriction-on-internal-movement.svg";
import ChartSeven from "../../components/in-depth/europe/images/measures/travel-control.svg";
import ChartEight from "../../components/in-depth/europe/images/measures/facial-masks.svg";
import ChartNine from "../../components/in-depth/europe/images/measures/i.svg";
import SEO from "../../components/seo";

const measuresMetadata = {
  Title: "Measures Against Covid-19 | Europe & the Covid-19 Pandemic",
  Keywords: [`covid analytics`, `predicta analytics`, `covid`, `predicta`],
  Description:
    "All the countries try to contain the pandemic by implementing a variety of preventing measures.",
  Image: "/predicta-icon.png",
  url: "https://www.predicta4covid.com/",
  titleTemplate: "Measures Against Covid-19 | Europe & the Covid-19 Pandemic",
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  @media (max-width: 1440px) {
    max-width: 720px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const GridB = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  @media (max-width: 1440px) {
    max-width: 960px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

const ItemSpan = styled.div`
  grid-column: span 2;
  justify-content: center;
  padding: 1rem;
  width: 700px;
  align-self: center;
  justify-self: center;

  & h1 {
    color: white;
    margin: 0;
  }

  @media (max-width: 1280px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  @media (max-width: 1440px) {
    max-width: 720px;
  }
  @media (max-width: 1024px) {
    max-width: 768px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
  svg {
    max-width: 100%;
    height: auto;
  }

  margin: 0 auto;
  .metrics-table-alt {
    color: #606060;
    font-family: "IBM Plex Sans - Light";
    font-size: 19px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: normal;
    line-height: 22.74px;
    text-align: left;
    /* Text style for "0 - no res" */
    font-family: "IBM Plex Sans";
    font-weight: 300;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    /* Text style for ",  ,  ," */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    th {
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
    td {
      padding: 17px 26px;
      @media (max-width: 1440px) {
        padding: 4px 14px;
      }
      @media (max-width: 768px) {
        font-size: 12px;
      }
      li {
        font-size: 14px;
        @media (max-width: 1440px) {
          font-size: 12px;
        }
        @media (max-width: 1024px) {
          font-size: 12px;
        }
      }
    }
    ul {
      margin: 0;
    }
  }
  li {
    color: #606060;
    font-size: 14px;
    line-height: 38px;
    @media (max-width: 1440px) {
      font-size: 12px;
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 12px;
      line-height: 30px;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    max-width: 600px;
  }
  @media (max-width: 1024px) {
    padding: 0 32px;
  }
  p {
    font-size: 18px;
    line-height: 38px;
    @media (max-width: 1440px) {
      font-size: 16px;
      line-height: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 15px;
      line-height: 30px;
    }
  }
`;

const Gap = styled.div`
  height: 2rem;
`;
const TitleSection = styled.h1`
  text-transform: uppercase;
  color: #222b3e;
  letter-spacing: 0px;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 0;
  @media (max-width: 1440px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

const SubTitle = styled.h2`
  color: #222b3e;
  font-weight: 400;
  font-size: 26px;
  line-height: 38px;
  @media (max-width: 1440px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const Measures = (props) => (
  <Layout location={props.location}>
    <SEO
      title={measuresMetadata.Title}
      keywords={measuresMetadata.Keywords}
      description={measuresMetadata.Description}
      image={measuresMetadata.Image}
      url={measuresMetadata.url}
      titleTemplate={measuresMetadata.titleTemplate}
    />
    <div className="row" id="first-section">
      <div className="col">
        <NavbarSubLinks />

        <TitleSection>MEASURES AGAINST COVID-19</TitleSection>

        <Gap />

        <TextBox>
          <p>
            All the countries try to contain the pandemic by implementing a
            variety of preventing measures. The graph below demonstrates
            European countries percentage, that imposed every measures.
          </p>
        </TextBox>
      </div>
    </div>

    <div
      className="row"
      style={{
        backgroundColor: `rgba(234,234,234,1)`,
      }}
    >
      <div className="col">
        <SubTitle
          style={{
            fontWeight: `normal`,
          }}
        >
          Measures Imposed - Europe
        </SubTitle>

        <Grid>
          <Item>
            <img
              src="/Measures-Imposed-Europe.png"
              alt="Measures Imposed - Europe"
            />

            <Gap />
          </Item>
        </Grid>

        <TextBox>
          <p>
            The measures that implied by more than 70% of the countries were:
            limitations of gatherings, school closure, economic measures,
            strengthening health system, restrictions in travelling and
            Lockdowns. <br /> <br /> The graphs (Area Plots) that follow show
            some of the most important measures that governments imposed to
            fight the pandemic. The graphs describe the severity of the measures
            during the months of pandemic. The table below shows the levels of
            severity for the measures.
          </p>
        </TextBox>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <SubTitle
          style={{
            fontWeight: `normal`,
          }}
        >
          Measures Severity
        </SubTitle>

        <Grid>
          <Item>
            <table className="metrics-table-alt">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Severity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>School closing</td>

                  <td>
                    <ul>
                      <li>0 - no measures</li>
                      <li>
                        1 - recommend closing or all schools open with
                        alterations resulting in significant differences
                        compared to non-Covid-19 operations
                      </li>
                      <li>
                        2 - require closing (only some levels or categories, eg
                        just high school, or just public schools)
                      </li>
                      <li>3 - require closing all levels</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Workplace closing</td>
                  <td>
                    <ul>
                      <li>0 - no measures</li>
                      <li>
                        1 - recommend closing (or recommend work from home)
                      </li>
                      <li>
                        2 - require closing (or work from home) for some sectors
                        or categories of workers
                      </li>
                      <li>
                        3 - require closing (or work from home) for
                        all-but-essential workplaces (eg grocery stores,
                        doctors)
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Cancel public events</td>
                  <td>
                    <ul>
                      <li>0 - no measures</li>
                      <li>1 - recommend cancelling</li>
                      <li>2 - require cancelling</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Restrictions on gatherings</td>
                  <td>
                    <ul>
                      <li>0 - no restrictions</li>
                      <li>
                        1 - restrictions on very large gatherings (the limit is
                        above 1000 people)
                      </li>
                      <li>
                        2 - restrictions on gatherings between 101-1000 people
                      </li>
                      <li>
                        3 - restrictions on gatherings between 11-100 people
                      </li>
                      <li>
                        4 - restrictions on gatherings of 10 people or less
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Restrictions on internal movement</td>
                  <td>
                    <ul>
                      <li>0 - no measures</li>
                      <li>
                        1 - recommend not to travel between regions/cities
                      </li>
                      <li>2 - internal movement restrictions in place</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>International travel controls</td>
                  <td>
                    <ul>
                      <li>0 - no restrictions</li>
                      <li>1 - screening arrivals</li>
                      <li>2 - quarantine arrivals from some or all regions</li>
                      <li>3 - ban arrivals from some regions</li>
                      <li>4 - ban on all regions or total border closure</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Facial Coverings</td>
                  <td>
                    <ul>
                      <li>0 - No policy</li>
                      <li>1 - Recommended</li>
                      <li>
                        2 - Required in some specified shared/public spaces
                        outside the home with other people present, or some
                        situations when social distancing not possible
                      </li>
                      <li>
                        3 - Required in all shared/public spaces outside the
                        home with other people present or all situations when
                        social distancing not possible
                      </li>
                      <li>
                        4 - Required outside the home at all times regardless of
                        location or presence of other people
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Grid>
      </div>
    </div>

    <div
      className="row"
      style={{
        backgroundColor: `rgba(234,234,234,1)`,
      }}
    >
      <div className="col">
        <GridB>
          <Item>
            <SubTitle
              style={{
                fontWeight: `normal`,
              }}
            >
              School Closing
            </SubTitle>

            <img src="/school-closing-europe.png" alt="School Closing" />
            <Gap />
          </Item>

          <Item>
            <SubTitle
              style={{
                fontWeight: `normal`,
              }}
            >
              Workplace Closing
            </SubTitle>

            <img src="/workplace-closing-europe.png" alt="Workplace Closing" />
            <Gap />
          </Item>

          <Item>
            <SubTitle
              style={{
                fontWeight: `normal`,
              }}
            >
              Cancel Public Events
            </SubTitle>

            <img
              src="/cancel-public-events-europe.png"
              alt="Cancel Public Events"
            />
            <Gap />
          </Item>

          <Item>
            <SubTitle
              style={{
                fontWeight: `normal`,
              }}
            >
              Restrictions on Gatherings
            </SubTitle>

            <img
              src="/restriction-on-gathering-europe.png"
              alt="Restrictions on Gatherings"
            />
            <Gap />
          </Item>

          <Item>
            <SubTitle
              style={{
                fontWeight: `normal`,
              }}
            >
              Restrictions on Internal Movement
            </SubTitle>

            <img
              src="/restricion-on-movement-europe.png"
              alt="Restrictions on Internal Movement"
            />
            <Gap />
          </Item>

          <Item>
            <SubTitle
              style={{
                fontWeight: `normal`,
              }}
            >
              International Travel Control
            </SubTitle>
            <img
              src="/travel-control-europe.png"
              alt="International Travel Control"
            />

            <Gap />
          </Item>
          <ItemSpan>
            <SubTitle
              style={{
                fontWeight: `normal`,
              }}
            >
              Facial Masks
            </SubTitle>

            <img src="/facial-masks-europe.png" alt="Facial Masks" />
            <Gap />
          </ItemSpan>
        </GridB>

        <TextBox>
          <p>
            The above measures influenced country population mobility as the
            following graph demonstrates.
          </p>
        </TextBox>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <SubTitle
          style={{
            fontWeight: `normal`,
          }}
        >
          Mobility in Europe
        </SubTitle>

        <Grid>
          <Item>
            <ChartNine />
            <Gap />
          </Item>
        </Grid>

        <TextBox>
          <p>
            All along the three waves of the pandemic (Feb 2020-May 2021) we see
            a considerable reduction in mobility in most European countries due
            to lockdown policies. Overall mobility remained low apart from Park
            mobility, which increased during the summer months and generally
            remained higher that other activities, as it was the only recreation
            option. Government policies such as work from home or closing
            business kept mobility low, while the good weather encouraged
            outdoor mobility.
          </p>
        </TextBox>
      </div>
    </div>
  </Layout>
);

export default Measures;
