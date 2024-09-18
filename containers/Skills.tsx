import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container className="text-center section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          <Row>
            <Col lg="6" className="order-2 order-lg-1">
              <DisplayLottie animationPath={"/lottie/skills/fullstack.json"} />
            </Col>
            <Col lg="6" className="order-1 order-lg-2">
              {skillsSection.data.map((section, index) => {
                return (
                  <div key={index} className="relative my-5">
                    <h3 className="h3 mb-2">{section.title}</h3>
                    <div className="d-flex justify-content-center flex-wrap mb-2">
                      {section.softwareSkills.map((skill, i) => {
                        return (
                          <Fragment key={i}>
                            <div
                              className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                              id={`${skill.skillName}-i`}
                            >
                              <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                            </div>
                            <UncontrolledTooltip delay={0} placement="bottom" target={`${skill.skillName}-i`}>
                              {skill.skillName}
                            </UncontrolledTooltip>
                          </Fragment>
                        );
                      })}
                    </div>
                    <div>
                      {section.skills.map((skill, i) => {
                        return <p key={i}>{skill}</p>;
                      })}
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>

        </Container>
      </Fade>
    )
  );
};

export default Skills;
