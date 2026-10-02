# Enquiry submission

## Existing integration found

The app uses TanStack Start and Nitro. Before this change, the shared enquiry form
posted directly from the browser to an optional VITE_CONTACT_FORM_ENDPOINT, or
opened an email application when that variable was absent. No enquiry API, email
SDK, database integration, local environment file, or matching integration
environment variable was found during inspection. Deployment configuration was
not available for inspection.

## Current implementation

All enquiry forms and dialogs use the same POST server function. It validates
the existing fields and the nine allowed service options, checks the request
origin, and forwards JSON to a server-configured HTTPS endpoint. Requests time
out after 15 seconds; redirects are rejected. Visitor input cannot select the
destination or recipient. Backend errors and credentials are not returned to
the browser. Failed submissions retain the form values for retry.

No provider has been selected or configured, and no dependency was added.
**Live delivery is not enabled until Moni-AK approves and configures a receiving
integration.** An unconfigured integration returns an error, never success.

## Required deployment configuration

- CONTACT_FORM_ENDPOINT: approved HTTPS endpoint that delivers enquiries to
  Moni-AK. Set this on the server, not with a VITE_ prefix.
- CONTACT_FORM_API_TOKEN: optional server-only bearer token if that endpoint
  requires authentication. Never put real credentials in this repository.
- VITE_CONTACT_FORM_ENDPOINT is no longer used by the enquiry form.

The receiving endpoint must accept a JSON POST containing name, email, telephone,
projectType (the selected option value), message, and optional marketingConsent.
It must return a 2xx JSON response with `{"success": true}` only after the enquiry
has been durably accepted for delivery to Moni-AK. If the approved provider uses
a different API contract, adapt the server adapter before enabling it.

Keep the incoming public origin intact through the hosting proxy. Apply the
hosting platform's request-size and abuse/rate limits to the server-function
endpoint before exposing delivery publicly. Any provider credentials, verified
sender, recipient routing, durable queue, and delivery retries depend on the
approved integration.

## Verification

Run `pnpm lint`, `pnpm build`, and
`pnpm exec vitest run src/lib/enquiry.server.test.ts`.
Tests use mocked fetch responses and do not send enquiries to any external
service. Confirm actual receipt in Moni-AK's destination after configuration;
a passing build or mock test is not proof of live delivery.

Framework reference:
https://tanstack.com/start/latest/docs/framework/react/guide/server-functions
