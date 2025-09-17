import React from 'react'
import './routine.css'
import { motion } from 'framer-motion';
import Button from '../common/button/Button';
export default function Routine() {
    return (
        <section className="routine section" id="routine">
            <div className="container">
                <div className="row align-items-center g-4">
                    <div className="col-lg-6">
                        <motion.div
                            className="routine__data"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="section__title">
                                Anytime, Any Place,
                                Any Workout
                            </h2>
                            <p className="routine__description">
                                Take your routine at any time of your day,
                                with the new videos and with the teachers
                                who will guide you.
                            </p>
                            <Button>
                                Get Started Free <i className="ri-arrow-right-line"></i>
                            </Button>
                        </motion.div>

                    </div>
                    <div className="col-lg-6">
                        <motion.div
                            className="routine__images "
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.img
                                src="assets/img/routine-yoga-1.png"
                                className="routine__img-1"
                                alt="Yoga Routine 1"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                            />
                            <motion.img
                                src="assets/img/routine-yoga-2.png"
                                className="routine__img-2"
                                alt="Yoga Routine 2"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: false, amount: 0.3 }}
                            />
                            <div className="routine__box-1">
                                <i className="ri-play-circle-fill routine__icon"></i>
                                <span className="routine__title">High Quality Video</span>
                            </div>
                            <div className="routine__box-2">
                                <i className="ri-run-fill routine__icon"></i>
                                <span className="routine__title">Professional Trainer</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

    )
}
