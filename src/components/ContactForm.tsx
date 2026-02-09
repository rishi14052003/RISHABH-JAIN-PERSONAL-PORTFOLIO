import React, { useState } from 'react';
import type { FormEvent } from 'react';
import Button from './Button';
import type { ContactFormProps, ContactFormData, FormErrors } from '../types';
import '../styles/ContactForm.css';

/**
 * Contact form component with validation and error handling
 * Features character count, accessibility features, and loading states
 */
export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isLoading = false,
  success = false,
  error,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  // Validation functions
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        break;
      
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      
      case 'subject':
        if (!value.trim()) {
          return 'Subject is required';
        }
        if (value.trim().length < 3) {
          return 'Subject must be at least 3 characters';
        }
        break;
      
      case 'message':
        if (!value.trim()) {
          return 'Message is required';
        }
        if (value.trim().length < 10) {
          return 'Message must be at least 10 characters';
        }
        if (value.length > 500) {
          return 'Message must be less than 500 characters';
        }
        break;
      
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof ContactFormData]);
      if (error) {
        errors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => new Set(prev).add(name));
    
    const error = validateField(name, value);
    if (error) {
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched(new Set(Object.keys(formData)));
    
    if (validateForm() && onSubmit) {
      onSubmit(formData);
    }
  };

  const getFieldError = (fieldName: string): string | undefined => {
    return formErrors[fieldName as keyof FormErrors];
  };

  const isFieldInvalid = (fieldName: string): boolean => {
    return touched.has(fieldName) && !!getFieldError(fieldName);
  };

  // Success state
  if (success) {
    return (
      <div className="contact-form contact-form--success">
        <div className="contact-form__success-icon">✓</div>
        <h3 className="contact-form__success-title">Message Sent!</h3>
        <p className="contact-form__success-message">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {error && (
        <div className="contact-form__error" role="alert">
          <span className="contact-form__error-icon">⚠️</span>
          {error}
        </div>
      )}

      <div className="contact-form__field">
        <label htmlFor="name" className="contact-form__label">
          Name 
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`contact-form__input ${isFieldInvalid('name') ? 'contact-form__input--error' : ''}`}
          placeholder="Your full name"
          required
          aria-required="true"
          aria-invalid={isFieldInvalid('name')}
          aria-describedby={isFieldInvalid('name') ? 'name-error' : undefined}
          disabled={isLoading}
        />
        {isFieldInvalid('name') && (
          <span id="name-error" className="contact-form__error-message" role="alert">
            {getFieldError('name')}
          </span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="email" className="contact-form__label">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`contact-form__input ${isFieldInvalid('email') ? 'contact-form__input--error' : ''}`}
          placeholder="your email@example.com"
          required
          aria-required="true"
          aria-invalid={isFieldInvalid('email')}
          aria-describedby={isFieldInvalid('email') ? 'email-error' : undefined}
          disabled={isLoading}
        />
        {isFieldInvalid('email') && (
          <span id="email-error" className="contact-form__error-message" role="alert">
            {getFieldError('email')}
          </span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="subject" className="contact-form__label">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`contact-form__input ${isFieldInvalid('subject') ? 'contact-form__input--error' : ''}`}
          placeholder="What's this about?"
          required
          aria-required="true"
          aria-invalid={isFieldInvalid('subject')}
          aria-describedby={isFieldInvalid('subject') ? 'subject-error' : undefined}
          disabled={isLoading}
        />
        {isFieldInvalid('subject') && (
          <span id="subject-error" className="contact-form__error-message" role="alert">
            {getFieldError('subject')}
          </span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message" className="contact-form__label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`contact-form__textarea ${isFieldInvalid('message') ? 'contact-form__textarea--error' : ''}`}
          placeholder="Tell me more about your project or inquiry..."
          rows={6}
          maxLength={500}
          required
          aria-required="true"
          aria-invalid={isFieldInvalid('message')}
          aria-describedby={isFieldInvalid('message') ? 'message-error' : undefined}
          disabled={isLoading}
        />
        <div className="contact-form__character-count">
          <span className={formData.message.length > 450 ? 'contact-form__character-count--warning' : ''}>
            {formData.message.length}/500
          </span>
        </div>
        {isFieldInvalid('message') && (
          <span id="message-error" className="contact-form__error-message" role="alert">
            {getFieldError('message')}
          </span>
        )}
      </div>

      <div className="contact-form__actions">
        <Button
          type="submit"
          variant="primary"
          size="large"
          isLoading={isLoading}
          disabled={isLoading}
          fullWidth
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      <p className="contact-form__note">
        * Required fields. I'll respond within 24-48 hours.
      </p>
    </form>
  );
};

export default ContactForm;
