import { motion } from 'framer-motion';
import './hero.css';
const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className="home__data"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="home__title">
                Choose Your
                <div className="home__title-box">
                  Best <div>Yoga</div>
                </div>
                Teacher
                <img src="/assets/img/star-img.svg" alt="Star decoration" />
              </h1>

              <p className="home__description">
                Calm your mind and body with the best
                yoga teachers available, relax your day
                and stay positive.
                <img src="/assets/img/circle-img.svg" alt="Circle decoration" />
              </p>

              <motion.a
                href="#"
                className="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free <i className="ri-arrow-right-line"></i>
              </motion.a>

              <div className="home__box">
                <div>
                  <h3>300+</h3>
                  <span>Yoga Class</span>
                </div>
                <div>
                  <h3>40+</h3>
                  <span>Participants</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="imageHome">
            <motion.img
              src="/assets/img/home-yoga.png"
              className="home__img img-fluid"
              alt="Yoga pose"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;