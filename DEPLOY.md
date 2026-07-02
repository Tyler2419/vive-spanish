# Vive Spanish Deployment

This app is already a PWA. To use it away from your home Wi-Fi, put the `spanish-learning-app` folder on a static web host with HTTPS.

## Recommended First Setup

Use a public GitHub repository for the app only. Do not publish any surrounding parent project folder.

Suggested repository name:

```text
vive-spanish
```

Suggested publishing source:

```text
main branch / root folder
```

After it is live, open the GitHub Pages HTTPS URL on your phone and use Add to Home Screen or Install.

## Easiest Paths

### GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder so `index.html` is at the publishing root.
3. In the repository settings, enable GitHub Pages from the branch that contains the files.
4. Open the published HTTPS URL on your phone.
5. Use the browser's Add to Home Screen or Install option.

GitHub Pages publishes static files pushed to a repository and can publish from a chosen branch.

### Cloudflare Pages

1. Create a GitHub repository with these files.
2. In Cloudflare, create a Pages project.
3. Import the GitHub repository.
4. Use no build command and set the output folder to the folder containing `index.html`.
5. Open the Cloudflare HTTPS URL on your phone and install it.

Cloudflare Pages can connect to GitHub and redeploy when changes are pushed.

## What Not To Do First

Native app-store packaging is possible, but it adds Apple/Google developer accounts, signing, app review, and mobile build tooling. A hosted PWA gives you the app-like phone experience with much less setup.

## Notes

- Recording/speech recognition works best on HTTPS. The local Wi-Fi IP address may block microphone recognition.
- Your progress is stored in the browser on each device. A later version could add cloud sync.
- For phone-first use, keep your phone as the main practice device so the same local progress is used at home, work, and on the road.
