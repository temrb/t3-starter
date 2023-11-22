# T3 Next.js Template

This is a template for a [Next.js](https://nextjs.org/) project. It includes:

-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Next JS](https://nextjs.org/)
-   [TRPC](https://trpc.io/)
-   [Prisma](https://www.prisma.io/)
-   [CockroachDB](https://www.cockroachlabs.com/)
-   [NextAuth.js](https://next-auth.js.org/)
-   [Shadcn ui](https://ui.shadcn.com/)

## ENV

```bash
GOOGLE_CLIENT_ID = ''
GOOGLE_CLIENT_SECRET = ''
DATABASE_URL = ''
NEXTAUTH_SECRET = ''
NEXTAUTH_URL = 'http://localhost:4242/'  # change this to your domain in production
```

## Google OAuth Setup

![Screenshot 2023-11-22 at 8 50 37 AM](https://github.com/temrb/t3-nextjs-starter/assets/22056864/8126399b-0d2d-489f-81d2-2028d5aaa95d)

## Cookie Edit

Set sessionToken domain to your production domain with period in front:

```tsx
            domain:
                    process.env.NODE_ENV === 'production'
                        ? '.t3-nextjs-starter.vercel.app' //<--- change this to your domain in production
                        : undefined,
                secure: process.env.NODE_ENV === 'production',
```

##

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# t3-nextjs-starter
