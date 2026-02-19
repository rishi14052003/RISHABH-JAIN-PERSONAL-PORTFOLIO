import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(undefined);
      setSuccess(false);

      // Local-only placeholder: wire this to EmailJS / Netlify Forms / backend later.
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main id="contact" className="contact">
      <div className="container">
        <SectionHeader
          title="Let’s work together"
          subtitle="Tell me about your MERN or automation project"
          align="center"
          gradient
        />
        <ContactForm onSubmit={handleSubmit} isLoading={isLoading} success={success} error={error} />
      </div>
    </main>
  );
};

export default Contact;
