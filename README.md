# Pulock Kumar — Personal Portfolio
I’m Pulock Kumar, a CSE student at DUET (2nd year, 2nd semester). Alongside my academic studies, I’m focusing on backend engineering with a strong interest in fintech. Right now, I’m learning Golang and PostgreSQL to build scalable backend systems, while also practicing C++ and solving DSA problems regularly to strengthen my problem‑solving skills. My future plan is to move into industry with Java and gain deeper knowledge in core financial technologies, aiming to work in a fintech company.

Beyond backend, I’m also curious about machine learning, neural networks, and AI. Although I haven’t focused on them yet, I plan to explore these areas in the future alongside my professional career. My long‑term goal is to become a skilled backend engineer who can contribute to fintech innovation while staying future‑proof in the tech industry.

A fast, dependency-free portfolio site built with plain HTML, CSS, and JavaScript — no build step, no framework, no backend. Deployed directly with GitHub Pages.

**Live site:** https://branotix.github.io

---

## Design

- **Theme:** "Build log" — a deep navy background with a brass-gold and signal-cyan accent, styled like a developer's terminal and CI log rather than a generic template.
- **Type:** Space Grotesk (headings), Inter (body text), JetBrains Mono (labels, stats, code).
- **Icons:** Hand-written inline SVGs in `js/icons.js` — no icon-font or external CDN dependency.

## Pages

| Page            | File            | Purpose                                            |
|-----------------|-----------------|-----------------------------------------------------|
| Home            | `index.html`    | Hero, stats, featured projects, skills, blog teaser |
| About           | `about.html`    | Full bio, journey timeline, campus life             |
| Projects        | `projects.html` | Full, filterable project list                       |
| Blog             | `blog.html`     | List of all blog posts                               |
| Blog post        | `post.html`     | Renders a single post via `?slug=` from the data file |
| Contact          | `contact.html`  | Contact form (Web3Forms) + social links              |
| 404              | `404.html`      | Custom not-found page                                 |

## How to add content (no code changes needed elsewhere)

### Add a new blog post
Open `js/posts-data.js` and add a new object to the `POSTS` array:

```js
{
  slug: "my-new-post",              // used in the URL: post.html?slug=my-new-post
  title: "Post title",
  date: "2026-08-20",                // YYYY-MM-DD, used for sorting
  displayDate: "20 August, 2026",
  cover: "images/your-image.jpg",   // add the image to /images first
  summary: "One or two sentence summary shown on cards.",
  content: `
    <p>Your first paragraph.</p>
    <p>Your second paragraph.</p>
  `
}
```
Save, commit, and push — `blog.html` and the homepage teaser update automatically. No other file needs to change.

### Add a new project
Open `js/projects-data.js` and add a new object to the `PROJECTS` array. Set `tag` to `"platform"`, `"systems"`, or `"algorithms"` so it shows up under the right filter on the Projects page, and `featured: true` if it should also appear on the homepage.

## Deploying on GitHub Pages

1. Push this folder's contents to the root of the `branotix.github.io` repository (or any repo, and enable Pages on it).
2. In **Settings → Pages**, set the source branch to `main` and folder to `/ (root)`.
3. The site will be live at `https://branotix.github.io/` within a few minutes.
4. If you later attach a custom domain, add a `CNAME` file with the domain name and update the `canonical`, `og:url`, and `sitemap.xml` URLs to match.

## SEO & search appearance

- `robots.txt` and `sitemap.xml` are included at the root.
- Every page has a unique `<title>`, meta description, canonical URL, and Open Graph / Twitter card tags (with `images/og-cover.jpg` as the preview image).
- A `Person` JSON-LD schema on the homepage links to the GitHub and LinkedIn profiles, which helps search engines associate the site with you.
- The favicon (`images/favicon-*.png`, `apple-touch-icon.png`) and `site.webmanifest` are what let the "PK" logo show up next to the site in browser tabs and, over time, in search results — this can take search engines a few weeks to pick up after the first deploy.
- After deploying, submit the site to [Google Search Console](https://search.google.com/search-console) and submit `sitemap.xml` there to speed up indexing.

## Contact form

The form on `contact.html` uses [Web3Forms](https://web3forms.com) (no backend required). It currently uses an access key carried over from the previous project. Because that key has already been public in a prior repository, get a fresh one for free at web3forms.com and swap the `value` of the hidden `access_key` input in `contact.html` before going live, so form submissions are tied only to this site.

## Folder structure

```
.
├── index.html
├── about.html
├── projects.html
├── blog.html
├── post.html
├── contact.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── css/
│   └── style.css
├── js/
│   ├── main.js          # nav, terminal typing effect, animations
│   ├── icons.js          # inline SVG icon set
│   ├── projects-data.js  # edit this to add/update projects
│   └── posts-data.js     # edit this to add/update blog posts
└── images/
```
