# Sangita Pal — Portfolio

A modern portfolio site built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, using **shadcn/ui** and **Magic UI** components, with **light/dark mode**.

> Folder structure and tooling follow the same conventions as the `translater` reference project (`src/layout`, `src/section`, `src/components/ui`, `src/JSON/data`, `src/@type`, `lib/utils`, `providers.tsx`).
> This project contains **no translator / i18n** — that was intentionally left out.

---

## 1. Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

| Script          | Purpose                    |
| --------------- | -------------------------- |
| `npm run dev`   | Development server         |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | ESLint                     |

---

## 2. Environment variables (`.env`) — read this

The repository ships with **empty keys that belong to nobody**. You must create your own keys.

- `.env` → your real keys (already **git-ignored**, never commit it)
- `.env.example` → a template with comments (safe to commit)

```bash
cp .env.example .env
```

### Why `.env` exists here

The contact form sends email through **EmailJS**. The old template had someone
else's keys hardcoded in the source — those are gone. Your keys go in `.env`
instead, so they are:

- not committed to GitHub
- easy to rotate if leaked
- usable across dev and production (Vercel → Project Settings → Environment Variables)

### What goes in `.env`

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The `NEXT_PUBLIC_` prefix makes the variable available in the browser. That is
correct and expected for EmailJS — its "public key" is designed to be public.
**Never** put a secret/private API key in a `NEXT_PUBLIC_` variable.

---

## 3. Creating your own EmailJS keys (step by step)

1. Go to **https://www.emailjs.com/** and sign up (free tier is enough).
2. **Email Services → Add New Service**
   - Choose your provider (Gmail, Outlook, or "Other").
   - Connect your own mailbox (`sangitapal131@gmail.com`).
   - Copy the **Service ID** → `NEXT_PUBLIC_EMAILJS_SERVICE_ID`.
3. **Email Templates → Create New Template**
   - Set a subject line, e.g. `New message from {{from_email}}`.
   - In the body use these variables (the app sends exactly these):

     ```
     From: {{from_email}}
     Subject: {{subject}}

     {{message}}
     ```
   - Save and copy the **Template ID** → `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.
4. **Account → General** → copy the **Public Key** → `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.
5. Restart the dev server after editing `.env` (env vars are read at boot).

### Testing

Run `npm run dev`, open the Contact section, fill the form and submit. You
should get a success toast and an email in your inbox.

If you see *"Email service is not configured"*, one of the three keys is empty
or the server was not restarted.

### Alternative: Resend (server-side)

If you prefer a server API route instead of EmailJS:

1. Sign up at **https://resend.com/** → **API Keys → Create API Key**.
2. Verify your receiving address (self-send verification is enough for testing).
3. Add to `.env`:

   ```env
   RESEND_API_KEY=re_your_key
   FROM_EMAIL=your_verified_email@example.com
   ```

   Then create `src/app/api/send/route.ts` that reads
   `process.env.RESEND_API_KEY`. Note: on Vercel's free tier, sending to
   unverified domains is limited — verify a domain or use EmailJS to avoid this.

---

## 4. Light / dark mode

- Toggle lives in the navbar (`src/components/ThemeToggle.tsx`).
- Powered by **next-themes**; `Providers` sets `attribute="class"` and defaults
  to **dark**.
- Styling uses CSS variables defined in `src/app/globals.css` (`:root` for light,
  `.dark` for dark). Any new component should use tokens like
  `bg-background`, `text-foreground`, `border-border` **plus** `dark:` variants
  for the slate-based surfaces so both themes look right.

---

## 5. Project structure

```
src/
├── @type/               # Shared TypeScript interfaces
├── JSON/data/           # All content (profile, skills, projects, education)
├── app/
│   ├── globals.css      # Tailwind v4 theme + light/dark tokens
│   ├── layout.tsx       # Root layout + metadata
│   ├── providers.tsx    # next-themes ThemeProvider + sonner Toaster
│   └── page.tsx         # Assembles all sections
├── components/
│   ├── ThemeToggle.tsx
│   ├── ScrollVelocity.tsx
│   └── ui/              # shadcn/ui + Magic UI primitives
│       ├── badge.tsx  button.tsx  card.tsx  input.tsx  textarea.tsx
│       ├── separator.tsx  tooltip.tsx  scroll-area.tsx
│       ├── shimmer-button.tsx  sparkles-text.tsx  morphing-text.tsx
│       └── magic-card.tsx  border-beam.tsx  lens.tsx
├── hook/                # Custom hooks
├── layout/              # Navbar.tsx, Footer.tsx
├── lib/utils.ts         # cn() helper
└── section/             # Hero, About, Skills, Projects, Education, Contact
```

---

## 6. Editing your content

All copy lives in **`src/JSON/data/`** — no component edits needed:

| File            | Contains                                            |
| --------------- | --------------------------------------------------- |
| `profile.ts`    | Name, summary, hero roles, nav links, social links   |
| `skills.ts`     | Skill groups and their icons                         |
| `projects.ts`   | Projects: description, highlights, tech, repo, period |
| `education.ts`  | Degree, institution, stream, pattern, location       |

Icons are mapped by name in `src/section/Skills.tsx` (`iconMap`) using
[react-icons](https://react-icons.github.io/react-icons/). To add a skill, add
it in `skills.ts` and make sure its icon key exists in `iconMap`.

---

## 7. Adding a new shadcn / Magic UI component

`components.json` is already configured with the Magic UI registry:

```bash
npx shadcn@latest add button
npx shadcn@latest add https://magicui.design/r/marquee
```

---

## 8. Deploying (Vercel)

1. Push to GitHub.
2. Import the repo at **vercel.com/new**.
3. **Project Settings → Environment Variables** → add the three
   `NEXT_PUBLIC_EMAILJS_*` values (do **not** rely on the local `.env`).
4. Deploy.

---

## Tech stack

| Technology   | Purpose                          |
| ------------ | -------------------------------- |
| Next.js 16   | React framework (App Router)     |
| TypeScript   | Type safety                      |
| Tailwind CSS v4 | Styling + theming             |
| shadcn/ui    | Accessible UI primitives         |
| Magic UI     | Animated components              |
| next-themes  | Light/dark mode                  |
| Motion       | Animations                       |
| EmailJS      | Contact form email delivery      |
| Sonner       | Toasts                           |
