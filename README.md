# Frokostmøte - AI Demo Project

This is a demonstration project for an introductory generative AI course for local businesses in Gudbrandsdalen, Norway. The project showcases how AI agents can identify and fix common web development bugs.

## Project Purpose

This demo is designed to show approximately 30 business leaders how AI agents can solve simple software development problems through "vibe-coding" - a development approach that relies on large language models to generate and fix code based on natural language prompts.

## The Demo

The application displays a simple Norwegian contact form ("Kontakt oss") that appears functional but contains a deliberate bug. The form includes:

- Business name field (Bedriftsnavn)
- Email address field (E-postadresse) 
- Service interest dropdown (Tjeneste Interesse)
- Message field (Melding)
- Submit button (Send Melding)

## The Bug

The contact form has a critical bug that prevents it from working properly. Users can fill out all the form fields, but the submission button is non-functional. This demonstrates a common web development issue that would typically require a developer to fix, but can be quickly identified and resolved by an AI agent.

*Note: The specific nature of the bug is intentionally not documented here - discovering and fixing it is part of the AI demonstration.*

## Technical Stack

This is a [Next.js](https://nextjs.org) project built with:
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The contact form will be displayed in the center of the screen. Try filling it out and submitting it to experience the bug firsthand.

## Demo Flow

1. **Show the "broken" state**: Have participants fill out the form and experience the bug
2. **Explain business impact**: Demonstrate how this bug would prevent customer contact and lose business
3. **Use AI agent to fix**: Let an AI agent identify and resolve the issue
4. **Show the "fixed" state**: Demonstrate the working form after AI intervention

## Course Context

This demo supports the broader goal of enabling local businesses to handle small software requirements independently through AI assistance, overcoming budget constraints that would otherwise prevent such projects.

---

*Built for the Gudbrandsdalen Business AI Course 2024*
