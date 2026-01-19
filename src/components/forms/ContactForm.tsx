'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Callout from '@/components/ui/Callout';
import Input from '@/components/forms/Input';
import Select from '@/components/forms/Select';
import Textarea from '@/components/forms/Textarea';
import FieldError from '@/components/forms/FieldError';

const interestOptions = [
  'General question',
  'Joining a cell group',
  'Sunday School (after service)',
  'Quiet-time gatherings (after service)',
  'Prayer request'
];

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  interest: 'General question',
  message: ''
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<FormValues> = {};

    if (!values.name.trim()) nextErrors.name = 'Please tell us your name.';
    if (!values.email.trim()) {
      nextErrors.email = 'An email helps us follow up.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please use a valid email address.';
    }
    if (!values.message.trim()) nextErrors.message = 'Let us know how we can help.';

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitted(false);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setValues(initialValues);
    }, 900);
  };

  return (
    <Card className="bg-white/90">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Input
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            <FieldError message={errors.name} />
          </div>
          <div>
            <Input
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <FieldError message={errors.email} />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="Phone (optional)"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
          />
          <Select
            label="I am interested in"
            name="interest"
            value={values.interest}
            onChange={handleChange}
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Textarea
            label="Message"
            name="message"
            value={values.message}
            onChange={handleChange}
            error={errors.message}
            required
          />
          <FieldError message={errors.message} />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send message'}
          </Button>
          <span className="text-xs text-ink/60" aria-live="polite">
            We will respond within 2-3 days.
          </span>
        </div>
        {submitted ? (
          <Callout tone="warm" role="status">
            Thanks for reaching out. We received your message and will be in touch
            soon.
          </Callout>
        ) : null}
      </form>
    </Card>
  );
}
