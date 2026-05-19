# Experient React Assessment

A small React app that demonstrates a searchable user autocomplete and a simple user details view.

## Quick start

1. Install dependencies:

```sh
npm install
```

2. Run the local server:

```sh
npm run dev
```

## Entry points

- App root: `src/main.tsx` — renders the `App` component.
- App component: `src/App.tsx` — main layout and wiring between autocomplete and details.

## Components & types

- `src/components/AutocompleteUser.tsx` — Autocomplete that fetches users and calls `onUserSelect`.
- `src/components/UserDetails.tsx` — Displays the selected user's address and basic info.
- `src/components/user.tsx` — TypeScript `User` type used across components.


## Troubleshooting

- If the local dev server doesn't start, make sure Node.js and npm are installed you can check the version of node with this command (`node -v`, `npm -v`).

