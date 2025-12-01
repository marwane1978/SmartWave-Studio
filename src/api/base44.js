const API_BASE = "https://app.base44.com/api/v1/apps/690fe6be32d8f70ac82e0272/functions/publicApi";

export async function getTestimonials() {
  return fetch(`${API_BASE}?endpoint=testimonials`).then(res => res.json());
}

export async function getPortfolio() {
  return fetch(`${API_BASE}?endpoint=modelsprototypes`).then(res => res.json());
}

export async function getServices() {
  return fetch(`${API_BASE}?endpoint=services`).then(res => res.json());
}

export async function sendContactForm(data) {
  return fetch(`${API_BASE}?endpoint=contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());
}
