import { useState } from 'react';
import { motion } from 'framer-motion';
import './contactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email:string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsSubmitted(true);
            setIsLoading(false);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1000);
    };

    return (
        <motion.div
            className="contact__form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {isSubmitted && (
                <motion.div
                    className="contact__success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <i className="ri-check-line me-2"></i>
                    Your message has been sent successfully! We’ll get back to you soon.
                </motion.div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`contact__input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <div className="contact__error">{errors.name}</div>}
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className={`contact__input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <div className="contact__error">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        className={`contact__textarea ${errors.message ? 'error' : ''}`}
                        rows={5}
                    ></textarea>
                    {errors.message && <div className="contact__error">{errors.message}</div>}
                </div>

               <div className='d-flex justify-content-center'>
                 <motion.button
                    type="submit"
                    className="button__Contact d-flex  w-50  align-content-center justify-content-center"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                    {isLoading ? (
                        <>
                            <i className="ri-loader-4-line me-2" style={{ animation: 'spin 1s linear infinite' }}></i>
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message <i className="ri-send-plane-line"></i>
                        </>
                    )}
                </motion.button>
               </div>
            </form>
        </motion.div>
    );
};

export default ContactForm;
