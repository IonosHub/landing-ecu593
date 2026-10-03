# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (static site), plain CSS with custom properties, no UI framework. Chosen by the user.

## Users

Families and individuals in Ecuador looking for an English course: parents enrolling kids and teens, and teens/adults studying for work, travel, or school. They arrive mostly from mobile (WhatsApp-first culture) and want to know what the program is, whether it fits their age and schedule, and how to start.

## Product Purpose

Marketing landing page that sells the English courses of **Ecu593 English** (Ecu593 English School). Success = a qualified lead: the visitor submits the interest form (which creates a lead in the school's management system) or opens a WhatsApp chat with the school.

## Positioning

- A structured path: every course is **12 levels × 4 weeks**, graded out of 10 (pass mark 7), with written and oral evaluation and a 25% absence limit.
- The school runs its own management system: students and families have an account where they see grades, attendance and progress; one family account can hold several student profiles.
- Ecuadorian identity carried in the brand: "593" is Ecuador's country code; the logo uses the flag's yellow, blue and red.

## Operating Context

- Lead capture: public endpoint `POST {API}/v1/leads/register` with `firstName, lastName, email, phone, source:"web", notes` (optional `interestedLanguageId`, `interestedCourseId`). New leads land in the secretaries' pipeline.
- WhatsApp is the primary human channel: `0963660675` (`https://wa.me/593963660675`).
- Enrollment is confirmed manually by the secretary (documents + payment); there is no online checkout.
- Ecuadorian phone format `09XXXXXXXX`.

## Capabilities and Constraints

- Language: English only on this landing. Audiences: kids, teens, adults.
- Modality: in-person and online.
- Copy in Spanish (Ecuador), informal "tú".
- **Open decisions (do not invent):** prices, campus city/address, office hours, social links, class schedules per program, total hours, certification/diploma, group size (seed data says max 20 — unconfirmed), CEFR mapping of the 12 levels (PRD mentions A1–C1, not confirmed per level), production domain and API URL.

## Brand Commitments

- Name: "Ecu593 English". Slogan: **LEARN • GROW • ACHIEVE**.
- Logo: navy eagle with yellow/blue/red wings; "ECU 593" with 5 yellow, 9 blue, 3 red; "ENGLISH" below. Only available as a 557×485 JPG on white (`public/imgs/logo_oficial.jpg`); a vector/transparent version is pending.
- Voice: warm and direct ("¡Hola! Te saludamos desde Ecu593 English School", "Déjanos tus datos y te contactamos").

## Evidence on Hand

- Logo (above). Course structure facts (above). WhatsApp number.
- **Absent — must not be fabricated:** testimonials, student counts, years of experience, teacher bios, accreditations, partner logos, prices, real photos.

## Product Principles

1. Every call to action ends in a real human conversation (form → secretary, or WhatsApp).
2. Show the path, not promises: the 12-level structure is the proof.
3. Never fake social proof; empty slots stay visibly pending until real material exists.
4. Mobile and slow connections first.

## Accessibility & Inclusion

WCAG 2.2 AA; respect `prefers-reduced-motion`; content readable without JavaScript.
