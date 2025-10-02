'use client'
import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully.'
        })
        // Clear form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        
        // Track conversion for Google Ads
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/XXXXX-XXXXX', // Replace with your conversion ID
            'value': 1.0,
            'currency': 'USD'
          })
        }
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page__form-box">
      <form onSubmit={handleSubmit} className="contact-page__form contact-form-validated">
        <div className="row">
          <div className="col-xl-6">
            <div className="contact-page__input-box">
              <input
                type="text"
                placeholder="Full name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-page__input-box">
              <input
                type="email"
                placeholder="Email Address *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-page__input-box">
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-page__input-box">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="contact-page__input-box text-message-box">
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>
            <div className="contact-page__btn-box">
              <button 
                type="submit" 
                className="contact-page__btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      
      {/* Status Messages */}
      {submitStatus.type && (
        <div className={`result ${submitStatus.type === 'success' ? 'success' : 'error'}`}>
          <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'}`}>
            {submitStatus.message}
          </div>
        </div>
      )}
    </div>
  )
}