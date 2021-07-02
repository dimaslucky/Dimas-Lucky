import React from 'react';

const Experience = () => {
    return(
        <div className='experience'>
            <div className='experienceContent'>
                <h5><strong>Bandung Institute of Technology's Informatics Engineering</strong></h5>
                <ul>
                    <p>Undergraduate Student 2018-present</p>
                </ul>
            </div>

            <div className='experienceContent'>
                <h5><strong>HMIF ITB</strong></h5>
                <ul>
                    <li>Head of Gala Dinner Event 2020-2021</li>
                    <p>Leads conceptualization, development, and implementation of a gala dinner event for Arkavidia 7 participants.</p>
                    <li>Human Resource Management Staff</li>
                </ul>
            </div>

            <div className='experienceContent'>
                <h5><strong>Apres! ITB</strong></h5>
                <ul>
                    <li>Head of Human Resource Management 2020-2021</li>
                    <p>Leads conceptualization, development and implementation of Apres! ITB recruitment process.
                        <br />Managing Apres! ITB members.
                    </p>
                </ul>
            </div>
        </div>
    );
};

export default Experience;