import './health.css'
import Button from '../common/button/Button'
import { motion } from 'framer-motion';
export default function Health() {
    return (
        <section className="health section" id="health">
            <div className="container">
                <div className="row align-items-center ">
                    <div className="imageHome order-lg-0 order-first">
                        <motion.div
                            className="health__image "
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <img src="assets/img/health-fitness.png" className="health__img img-fluid" />
                            <div className="health__rate">
                                <div className="health__icon">
                                    <i className="ri-heart-3-fill"></i>
                                </div>
                                <div className="health__group">
                                    <span className="health__title">
                                        Heart Rate
                                    </span>
                                    <span className="health__number">
                                        168 bpm
                                    </span>
                                </div>
                            </div>

                            <div className="health__course">
                                <div className="health__group">
                                    <span className="health__number">
                                        500+
                                    </span>
                                    <span className="health__title">
                                        Free course
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                    <div className="col-lg-6 order-lg-1 order-last">
                        <motion.div
                            className='health__data'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="section__title">
                                Bring Happiness To
                                Good Health!
                            </h2>
                            <p className="health__description">
                                If you take care of your good health, take
                                care of your mentality ans lead a healthy
                                life with positive thoughts every day.
                            </p>
                            <Button>
                                Let's Start <i className="ri-arrow-right-line"></i>
                            </Button>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>

    )
}
