import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {
  SiFigma,
  SiGrafana,
  SiJirasoftware,
  SiKibana,
  SiMacos,
  SiPostman,
  SiSlack,
  SiVisualstudiocode,
} from 'react-icons/si';

function Tools() {
  return (
    <Row
      style={{justifyContent: 'center', paddingBottom: '50px', display: 'flex', flexWrap: 'wrap', marginLeft: '-50px'}}>
      <Col className="tech-icons" md={2} xs={4}>
        <SiMacos title="Mac OS" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiPostman title="Postman" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiSlack title="Slack" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiKibana title="Kibana" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiGrafana title="Grafana" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiFigma title="Figma" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiJirasoftware title="Jira" />
      </Col>
    </Row>
  );
}

export default Tools;
