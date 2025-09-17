import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <a href="#" className="footer__logo">Yoga</a>
                    <p className="footer__description">
                      Take care of your health and <br />
                      your mind with the best <br />
                      Yoga classes.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="footer__data">
                    <div className="row">
                      <div className="col-md-4">
                        <h3 className="footer__title">Address</h3>
                        <p className="footer__info">
                          12345 M/01 Sol <br />
                          Avenue, Lima, Peru
                        </p>
                      </div>

                      <div className="col-md-4">
                        <h3 className="footer__title">Contact</h3>
                        <p className="footer__info">
                          +123 456 7890 <br />
                          yoga@email.com
                        </p>
                      </div>

                      <div className="col-md-4">
                        <h3 className="footer__title">Office</h3>
                        <p className="footer__info">
                          Monday - Saturday <br />
                          9AM - 10PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer__group">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <ul className="footer__social d-flex list-unstyled mb-0">
                    <li className="me-3">
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <i className="ri-facebook-circle-line"></i>
                      </a>
                    </li>
                    <li className="me-3">
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li className="me-3">
                      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <i className="ri-twitter-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <i className="ri-youtube-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 text-md-end">
                  <span className="footer__copy">
                    &#169; Copyright Codein. All rights reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;