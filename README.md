<h1>Features</h1>

Create a new repository in your GitHub account instantly.

No need to open GitHub manually.

Uses your Personal Access Token for authentication.

Provides clear instructions and "how it works" explanation on the page.

<h1>How to Use</h1>h1>

Open the webpage.

Enter your GitHub Personal Access Token and click Submit.

Enter the repository name you want to create.

Click Create Repo.

The repository will be created on GitHub instantly.

Check your GitHub account to see the new repository.

<h1>Important Notes</h1>

Make sure your token has the correct permissions (repo scope).

Repository name cannot be empty or duplicate.

Keep your token private. Do not share it publicly.

<h1>How It Works</h1>

The page uses fetch API to send a POST request to:

https://api.github.com/user/repos


The token is added in the request headers for authentication.

GitHub validates the token, permissions, and repository name.

If everything is correct, GitHub creates the repository instantly and returns the repo details.

<h1>Technologies Used</h1>

HTML, CSS, JavaScript

GitHub REST API

Google Fonts (Playfair Display, Quicksand)

Font Awesome Icons

<h1>Security Warning</h1>

Never expose your GitHub Personal Access Token publicly. If you think it is exposed, revoke it immediately in GitHub settings.

<h1>Future Improvements</h1>

Add option to choose repository visibility (public/private).

Display the newly created repository link directly on the page.

Error handling for invalid tokens or duplicate repo names.