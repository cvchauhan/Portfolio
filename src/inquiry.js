// Netlify handles this POST after form detection is enabled and the site redeployed.
export async function sendInquiry(fields, signal) {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fields).toString(),
    signal,
  });
  if (!response.ok) throw new Error('Submission was not accepted.');
}
