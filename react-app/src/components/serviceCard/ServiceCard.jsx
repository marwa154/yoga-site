import React from "react";
import { motion } from "framer-motion";
import "./ServiceCard.css";

const ServiceCard = ({ service, index, onNext }) => {
  return (
    <motion.section
      className="list section"
      key={service.id}
      initial={{ opacity: 0, x: 100 }}                
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6, delay: index * 0.2 }} 
      viewport={{ once: false, amount: 0.2 }} 
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className="list__content"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="list__number">{service.number}</h1>
              <div className="list__blob">
                <img src={service.image} alt={service.title} />
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <div className="list__data">
              <p className="list__description">
                {service.description}
                <img src="/assets/img/star-2-img.svg" alt="Decoration" />
              </p>
              <motion.button
                onClick={onNext}
                className="button list__button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next <i className="ri-arrow-right-line"></i>
                <img
                  src="/assets/img/ellipse-img.svg"
                  alt="Ellipse decoration"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceCard;
