import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

const Skills = () => {
    return(
        <div className='skills'>
            <div className='skillsContent'>
                <Row>
                    <Col className='skillsCard'>
                    <ul>
                    <p><strong>Programming Languages</strong></p>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>C++</li>
                    </ul>
                    </Col>

                    <Col className='skillsCard'>
                    <ul>
                    <p><strong>Framework</strong></p>
                        <li>ReactJS</li>
                        <li>Unity</li>
                    </ul>
                    </Col>

                    <Col className='skillsCard'>
                    <ul>
                    <p><strong>Database</strong></p>
                        <li>MySQL</li>
                    </ul>
                    </Col>

                    <Col className='skillsCard'>
                    <ul>
                    <p><strong>Others</strong></p>
                        <li>Word</li>
                        <li>PowerPoint</li>
                        <li>Excel</li>
                    </ul>
                    </Col>

                    <Col className='skillsCard'>
                    <ul>
                    <p><strong>Languages</strong></p>
                        <li>Bahasa Indonesia</li>
                        <li>English</li>
                    </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Skills;