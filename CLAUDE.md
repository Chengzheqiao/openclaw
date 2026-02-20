# Claude Code Rules

## Branch Management

- Always create a new branch before starting any work. Never commit directly to `main`.
- Branch naming convention: `<type>/<short-description>` (e.g., `feat/add-login`, `fix/null-pointer`, `refactor/cleanup-utils`).

## Model Selection

- Default to using the **Ultimate** model (claude-sonnet-4 or higher) to ensure output quality.
- Do not downgrade to a faster/cheaper model unless explicitly instructed by the user.

## Git Operations Requiring User Confirmation

- **Push to remote:** Always ask for user confirmation before pushing any commits to the remote repository.
- **Merge to main:** Always ask for user confirmation before merging any branch into `main`. Never force-push to `main`.
- **General rule:** Any destructive or irreversible git operation (force push, hard reset, branch deletion on remote) requires explicit user approval.
