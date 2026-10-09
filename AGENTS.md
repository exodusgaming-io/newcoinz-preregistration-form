# Repository instructions

- Use the repository's checked-in documentation, scripts, and manifests as the source of truth. Inspect the relevant files before choosing commands or changing behavior.
- Work from the repository root. Preserve unrelated changes and stage only files belonging to the requested task.
- Never commit credentials, private keys, tokens, local environment files, or generated secret material.
- Run the narrowest relevant checks while working, then the repository's standard verification before declaring the change complete. Report checks that cannot run.
- Do not deploy, migrate production data, rotate credentials, or make other external changes unless the task explicitly requires it.
