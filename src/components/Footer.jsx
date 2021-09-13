import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Button, Container, Alert, Row, Col, Modal } from 'react-bootstrap';

export default function Footer() {
    return (
        <div className="footer">
            <Row>
                <Col>
                    asdasd
                </Col>
                    <Col>
                    
                    <a className="social-icon" href="https://wa.me/+5493564505913" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a className="social-icon" href="https://www.facebook.com/mimitossf" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a className="social-icon" href="https://www.instagram.com/mimitossanfco" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    </Col>
            </Row>
                
            
            <div>
                
            
            
            </div>
        </div>
    )
}