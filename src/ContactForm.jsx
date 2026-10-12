import { useEffect, useRef, useState } from 'react';
import { sendInquiry } from './inquiry';
const empty = { name: '', email: '', service: 'Angular development', budget: 'Let’s discuss', details: '' };
export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const pending = useRef(false);
  const activeRequest = useRef(null);
  useEffect(() => () => activeRequest.current?.abort(), []);
  function change(e) {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }));
    if (status === 'error') { setStatus('idle'); setMessage(''); }
  }
  async function submit(e) {
    e.preventDefault();
    if (pending.current) return;
    if (!e.currentTarget.reportValidity()) return;
    if (!values.name.trim() || values.details.trim().length < 20) {
      setStatus('error'); setMessage('Please add your name and at least 20 characters about your project.'); return;
    }
    if (import.meta.env.DEV || ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname) || window.location.protocol === 'file:') {
      setStatus('error'); setMessage('This local preview cannot send inquiries. Use the deployed website or the contact links.'); return;
    }
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    fields.name = values.name.trim(); fields.email = values.email.trim(); fields.details = values.details.trim();
    pending.current = true; setStatus('sending'); setMessage('Sending your inquiry…');
    const controller = new AbortController(); activeRequest.current = controller;
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      await sendInquiry(fields, controller.signal);
      setStatus('success'); setMessage('Thank you! Your inquiry has been submitted. I’ll get back to you using the email you provided.');
      setValues(empty);
    } catch {
      setStatus('error'); setMessage('Your inquiry could not be confirmed. Please try again, or use the contact links.');
    } finally { clearTimeout(timer); pending.current = false; activeRequest.current = null; }
  }
  return <div className="brief-panel"><div className="brief-heading"><span className="overline">A GOOD PROJECT STARTS HERE</span><span aria-hidden="true">↗</span></div>
    {status === 'success' ? <div className="inquiry-success"><span className="success-check" aria-hidden="true">✓</span><h3>Let’s take the next step.</h3><p role="status">{message}</p><button type="button" className="button secondary" onClick={() => { setStatus('idle'); setMessage(''); }}>Send another message</button></div> :
      <form name="project-inquiry" method="POST" action="/thank-you.html" onSubmit={submit} aria-busy={status === 'sending'}>
        <input type="hidden" name="form-name" value="project-inquiry" />
        <p hidden><label>Leave this field empty<input name="bot-field" autoComplete="off" tabIndex="-1" /></label></p>
        <fieldset disabled={status === 'sending'}>
          <legend className="visually-hidden">Project inquiry</legend>
          <div className="form-row"><label>Your name<input autoComplete="name" name="name" placeholder="Alex Morgan" required maxLength="100" value={values.name} onChange={change} /></label><label>Email address<input autoComplete="email" type="email" name="email" placeholder="alex@company.com" required maxLength="254" value={values.email} onChange={change} /></label></div>
          <div className="form-row"><label>What do you need?<select name="service" value={values.service} onChange={change}>{['Angular development', 'Node.js & APIs', 'Database performance', 'SaaS / business application', 'Something else'].map(x => <option key={x}>{x}</option>)}</select></label><label>Budget range<select name="budget" value={values.budget} onChange={change}>{['Let’s discuss', 'Under ₹10,000', '₹10,000–₹50,000', '₹50,000–₹1,00,000', '₹1,00,000+'].map(x => <option key={x}>{x}</option>)}</select></label></div>
          <label>A little about your project<textarea name="details" placeholder="What are you building, or what needs fixing? Include your timeline if you have one." required minLength="20" maxLength="4000" rows="4" value={values.details} onChange={change} /></label>
          <button className="button primary" type="submit">{status === 'sending' ? 'Sending…' : 'Send inquiry'}<span aria-hidden="true">↗</span></button>
        </fieldset>
        <p className={`inquiry-status ${status === 'error' ? 'error' : ''}`} role={status === 'error' ? 'alert' : 'status'}>{message}</p>
        <p className="form-note">Tell me about your project. I’ll reply using the email you provide.</p>
      </form>}
  </div>;
}
