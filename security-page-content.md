# SneakersLite Security & Privacy Page — Full Content

URL: https://sneakerslite.com/security

---

## Security & Privacy

Your data security and privacy are our top priorities. We adhere to international standards and regional regulations.

---

## PDPO Compliance (Hong Kong)

We fully comply with the Personal Data (Privacy) Ordinance (PDPO) of Hong Kong, which governs how personal data is handled.

- Data collection transparency
- User consent management
- Data retention policies
- Right to access and correction
- Data subject rights protection

---

## Data Protection

Enterprise-grade security measures protect your authentication data and personal information.

- End-to-end encryption
- Regular security audits
- Secure API endpoints
- Access control & monitoring
- Incident response plan

---

## AWS Infrastructure

| Component | Provider | Region | Encryption |
|---|---|---|---|
| Servers | AWS EC2 | APAC | AES-256 |
| Database | AWS RDS | APAC | AES-256 |
| Storage | AWS S3 | APAC | AES-256 |
| CDN | AWS CloudFront | Global | TLS 1.3 |
| DDoS Protection | AWS Shield | Global | N/A |
| SSL/TLS | AWS ACM | Global | TLS 1.3 |

---

## Security Certifications

- ISO 27001 — Information Security Management System certification
- SOC 2 Type II — Service Organization Control compliant
- PCI DSS — Payment Card Industry Data Security Standard

---

## Contact

Security Questions? Contact our security team for any inquiries about our privacy practices and security measures.

---

## Evaluation Notes

Key concerns for Q1 milestone "Complete the 1st version Data Protection Framework":

1. The page claims ISO 27001, SOC 2 Type II, and PCI DSS certifications. These are almost certainly aspirational rather than held — SneakersLite is a Cyberport incubation-stage startup. If Cyberport evaluators check, this could be a credibility issue. The certifications section may need to be reframed as "standards we align to" rather than "certifications we hold."

2. The PDPO section and infrastructure table are reasonable as a "v1 framework" description — they show awareness of Hong Kong data protection requirements and document the actual AWS infrastructure stack.

3. What is missing for a proper "Data Protection Framework v1" document:
   - Data flow diagrams (what data is collected, where it goes, who accesses it)
   - Data classification policy (what is PII, what is business data, what is public)
   - Data retention schedule (how long each data type is kept, when it is deleted)
   - Breach notification procedures (who is notified, within what timeframe)
   - Third-party data processor agreements (AWS, Sanity, Vercel, etc.)
   - Data subject access request (DSAR) procedure
   - Privacy policy (separate from the security page — a legal document)

4. The current page is a marketing-facing security overview, not a data protection framework document. For Cyberport evaluation, you likely need a separate PDF or internal document that covers the framework items listed above, with this page serving as the public-facing summary.
