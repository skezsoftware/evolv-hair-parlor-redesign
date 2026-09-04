import { useState } from 'react'
import Button from './Button'
import FormField from './FormField'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <h3>Thank you.</h3>
        <p>We received your message and will reply within one business day.</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <FormField id="contact-name" label="Name" required autoComplete="name" />
        <FormField
          id="contact-email"
          label="Email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <FormField
        id="contact-phone"
        label="Phone"
        type="tel"
        autoComplete="tel"
      />
      <FormField
        id="contact-message"
        label="Message"
        as="textarea"
        required
      />
      <Button type="submit">Send Message</Button>
    </form>
  )
}
