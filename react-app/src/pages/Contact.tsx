import { motion } from 'framer-motion';
import ContactForm from '../components/contactForm/ContactForm';
import Layout from '../layouts/Layout';

const Contact = () => {
  return (
    <Layout>
      <section className="section pt-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-5"
              >
                <h1 className="section__title text-center mb-4">
                  Contact Us
                </h1>
                <p>
                  Do you have questions about our yoga classes? 
                  Feel free to reach out—we’ll be happy to help.
                </p>
              </motion.div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
