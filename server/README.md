# Server

All backend implementation code for this project belongs in this directory.

Recommended structure:

- `actions/` — server actions
- `api/` — request handlers used by Next.js route entry files
- `db/` — database clients, queries, and repositories
- `services/` — backend business logic and external integrations
- `auth/` — authentication and authorization logic
- `utils/` — server-only utilities

Next.js requires route entry files such as `app/api/**/route.ts` to remain in the
`app` directory. Keep those files small and delegate their implementation to
modules in this `server` directory.
# Wealth Growth backend

The development API runs on `http://localhost:4000`.

```bash
npm run dev
```

Health check:

```text
GET /api/health
```
