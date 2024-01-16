import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {DiGit, DiJavascript1, DiMongodb, DiNodejs, DiReact, DiSass} from 'react-icons/di';
import {FaAws, FaDocker, FaJenkins} from 'react-icons/fa';
import {
  SiAngular,
  SiAntdesign,
  SiBabel,
  SiBootstrap,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiKubernetes,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import {TbBrandGolang} from 'react-icons/tb';

function Techstack() {
  return (
    <Row
      style={{justifyContent: 'center', paddingBottom: '50px', display: 'flex', flexWrap: 'wrap', marginLeft: '-50px'}}>
      <Col className="tech-icons" md={2} xs={4}>
        <SiHtml5 title="Html" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiCss3 title="CSS" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiBootstrap title="Bootstrap" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiAntdesign title="Ant Design" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <DiSass title="Saas" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiTailwindcss title="Tailwind" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <DiJavascript1 title="Javascript" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <DiReact title="React" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiNextdotjs title="Next" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiAngular title="Angular" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiTypescript title="Typescript" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiRedux title="Redux" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <DiNodejs title="Node" />
      </Col>

      <Col className="tech-icons" md={2} xs={4}>
        <SiWebpack title="Webpack" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiBabel title="Babel" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiGraphql title="Graphql" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <DiMongodb title="Mongodb" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <TbBrandGolang title="Golang" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <DiGit title="Git" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <FaJenkins title="Jenkins" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <FaAws title="Aws" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <FaDocker title="docker" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiKubernetes title="Kubernetes" />
      </Col>
    </Row>
  );
}

export default Techstack;
