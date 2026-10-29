# Dependency security verification

## Dependency audit

Full development + production dependency audit: **0 known advisories** on 2026-10-29. This is a point-in-time check, not a guarantee about unknown vulnerabilities.

## Reproduce

Use the pinned Node 24.22.2 / npm 11.19.1 runtime, then run `npm ci`, `npm run verify:scss`, `npm run lint:scss`, `npm run build`, and `npm run audit:dependencies`. Dependencies are exact and the lockfile records integrity hashes. Install-time lifecycle scripts stay disabled via `.npmrc`; builds are separate explicit commands. No audit suppression or `--force` is used.

For React samples, [the October Next.js security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026) requires patched Next and Sharp versions. The locked Next 16.4.3 / React 19.3.1 graph must retain Sharp 0.35.5 or newer. Recheck the actual lockfile and advisories whenever dependencies change.
