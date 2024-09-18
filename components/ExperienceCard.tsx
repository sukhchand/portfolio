import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="experience-wrapper shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
          <img
            src={companyLogo}
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
            }}
            className="shadow mb-3"
            alt={companyLogo}
          />
          <CardTitle tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map((desc, i) => {
                  return (<>
                    {desc.type == 'client' && <div style={{marginBottom: "10px"}}>
                      <li key={i}><b>Client:</b> {desc.client}</li>
                      <li key={i}><b>Technology:</b> {desc.technology}</li>
                      <li key={i}><b>Platform:</b> {desc.platform}</li>
                    </div>}
                    {desc.type == 'product' && (
                      <li key={i}>{desc.description}</li>
                    )}
                  </>
                  );
                })
                : null}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
