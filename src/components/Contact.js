import React from 'react';
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return(
        <div className='contact'>
            <div className='contactContent'>
                <ul class="list-unstyled li-space-lg">
                    <li class="address"><FontAwesomeIcon icon={faMapMarkerAlt}/> Jakarta, Indonesia</li>
                    <li class="address"><FontAwesomeIcon icon={faLinkedin}/> <a href="linkedin.com/in/dimaslucky">linkedin.com/in/dimaslucky</a></li>
                    <li class="address"><FontAwesomeIcon icon={faGithub}/><a href="github.com/dimaslucky">github.com/dimaslucky</a></li>
                    <li class="address"><FontAwesomeIcon icon={faEnvelope}/> dimasluckym49@rocketmail.com</li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;