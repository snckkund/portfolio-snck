import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { motion, useScroll, useTransform } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const initEmailJS = async () => {
      try {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        setEmailJSInitialized(true);
      } catch (error) {
        console.error('Error initializing EmailJS:', error);
        setEmailJSInitialized(false);
      }
    };

    initEmailJS();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailJSInitialized) {
      console.error('EmailJS not initialized');
      setSubmitStatus('error');
      return;
    }

    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          'user_name': formData.name,
          'user_email': formData.email,
          'message': formData.message,
          'g-recaptcha-response': recaptchaValue,
        }
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      recaptchaRef.current?.reset();
      setRecaptchaValue(null);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <motion.div
      style={{ y }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-orbitron mb-8 neon-text neon-line">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="neon-border bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h3 className="text-2xl font-orbitron mb-4 neon-text">Get in Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Mail className="mr-2 text-neon-blue" />
              <a href="mailto:sn003chandrakant@gmail.com" className="hover:text-neon-blue transition-colors duration-300">
                sn003chandrakant@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-neon-pink" />
              <a href="tel:+919348870937" className="hover:text-neon-pink transition-colors duration-300">
                +91 9348870937
              </a>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2 text-neon-green" />
              <span>Bangalore, India</span>
            </li>
          </ul>
        </div>
        <div className="neon-border bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h3 className="text-2xl font-orbitron mb-4 neon-text">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              ></textarea>
            </div>
            <div className="mb-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
                theme="dark"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !emailJSInitialized || !recaptchaValue}
              className="neon-button flex items-center justify-center w-full"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send className="mr-2" size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-400">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-400">Error sending message. Please try again.</p>
          )}
          {!emailJSInitialized && (
            <p className="mt-4 text-yellow-400">Email service is not available. Please try again later.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;