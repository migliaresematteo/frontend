import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LocationOn, Email, Phone, AccessTime } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row className="gy-4">
          <Col md={6}>
            <h5 className="mb-4 border-bottom pb-2">
              <LocationOn className="me-2" />
              Sede dei Corsi
            </h5>
            <p className="mb-1">Palazzo Oliveri - primo piano</p>
            <p className="mb-1">Vicolo Fourat, 2</p>
            <p className="mb-1">(Piazza XXV Aprile)</p>
            <p className="mb-4">VOLPIANO (TO)</p>
          </Col>

          <Col md={6}>
            <h5 className="mb-4 border-bottom pb-2">
              <Email className="me-2" />
              Contatti
            </h5>
            <p className="mb-1">
              <strong>Email:</strong>
            </p>
            <p className="mb-1">
              <a href="mailto:istitutolessonavolpiano@gmail.com" className="text-light text-decoration-none">
                istitutolessonavolpiano@gmail.com
              </a>
            </p>
            <p className="mb-1">
              <a href="mailto:info@istitutolessona.it" className="text-light text-decoration-none">
                info@istitutolessona.it
              </a>
            </p>
            <p className="mb-4">
              <a href="mailto:istitutolessona@pec.it" className="text-light text-decoration-none">
                PEC: istitutolessona@pec.it
              </a>
            </p>

            <p className="mb-3">
              <Phone className="me-2" />
              <a href="tel:+393922941482" className="text-light text-decoration-none">
                Cell: 392 2941 482
              </a>
            </p>

            <div className="mb-4">
              <h6 className="mb-2">
                <AccessTime className="me-2" />
                Orari Segreteria:
              </h6>
              <p className="mb-1">Aperta tutti i mercoledì</p>
              <p className="mb-1">dalle 17 alle 19</p>
              <p className="mb-1">in sede</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4 pt-4 border-top">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Istituto Musicale Lessona. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
