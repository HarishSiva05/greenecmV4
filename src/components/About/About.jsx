import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Us" />
        <Row className="about-wrapper">
         
          <Col md={0} sm={0}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="60px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||'We Support you to Grow Great Heights with Green.'}                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||'GreenECM has the professionals that you need to supplement your IBM FileNet ECM team, provide a jump-start to a new product implementation or deliver/support the entire project. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||'GreenECM is the trusted partner for you to make sure you get the value from the solution, GreenECM has the dedicated Support team with technical training, certifications and industry experience to help solve the problem with your team.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||'We do support you solve your problem at Architectural Level and Operational Level for better implementation of ECM System and best ROI.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || ''}
                </p>
               
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
