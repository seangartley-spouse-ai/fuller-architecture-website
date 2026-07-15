# Fuller Architecture Website — How to Add a New Project

The website is fully data-driven: **every project on the site comes from one file,
[`data/projects.js`](data/projects.js)**. You never need to touch the HTML, CSS, or
JavaScript to add, edit, or remove a project.

## Adding a new project (2 steps)

### Step 1 — Add the photos

1. Create a new folder inside `images/` named after the project.
   Use lowercase letters/numbers, no spaces — e.g. `images/smithchapel/`
2. Copy the project photos into that folder. Any JPG file names work
   (e.g. `photo1.jpg`, `exterior.jpg`), but keeping a simple numbered
   pattern like `main1.jpg`, `main2.jpg`, ... is easiest.

**Photo tips**
- The first image in the list is used as the card thumbnail on the portfolio grid.
- Landscape (wider than tall) photos look best.
- Recommended size: at least **1200px wide** for crisp display on modern screens.
  (The photos migrated from the old site are only ~600px wide — replacing them
  with high-resolution originals over time will noticeably sharpen the site.)

### Step 2 — Add an entry to `data/projects.js`

Open `data/projects.js` in any text editor (Notepad works). Copy an existing
block and edit it. A project entry looks like this:

```js
{
  "slug": "smithchapel",
  "title": "Smith Chapel United Methodist Church",
  "location": "Mocksville, North Carolina",
  "category": "Religious",
  "featured": false,
  "description": "A one-paragraph description of the project...",
  "folder": "smithchapel",
  "images": ["main1.jpg", "main2.jpg", "main3.jpg"]
},
```

Field by field:

| Field | What it does |
|---|---|
| `slug` | Unique short id, lowercase, no spaces. Not shown to visitors. |
| `title` | Project name shown on the card and detail view. |
| `location` | City/state line shown under the title. Can be `""` if unknown. |
| `category` | One of: `Religious`, `Financial`, `Civic`, `Education`, `Commercial`, `Planning`. Controls which filter button shows it. |
| `featured` | `true` sorts it toward the front of its category. |
| `description` | The paragraph shown in the project pop-up. |
| `folder` | The folder name you created inside `images/`. |
| `images` | The photo file names inside that folder, in display order. The **first** one is the thumbnail. |

**Watch the commas:** every project block ends with `},` except the very last
one in the list, which ends with `}` (no comma).

### That's it
Save the file, refresh the site, and the new project appears in the grid
with its filter, pop-up gallery, and thumbnails — automatically.

## Editing or removing a project

- **Edit**: change the text in that project's block in `data/projects.js`.
- **Remove**: delete the project's block (and optionally its image folder).
- **Reorder photos**: reorder the file names in the `images` list.

## Adding a new category

Categories are created automatically from the data. To add e.g. `Residential`,
just use `"category": "Residential"` on a project — then add the word
`"Residential"` to the `CATEGORY_ORDER` list at the top of `js/main.js` so it
gets a filter button in the right position.

## Changing the hero (top-of-page) slideshow

The rotating full-screen photos come from `images/rotator/rotate1.jpg` through
`rotate11.jpg`. Replace any of those files (keep the same names) to change the
slideshow. High-resolution photos (1920px wide or more) are strongly
recommended here since they display full-screen.

## Adding an "In the News" article

News articles work the same way as projects: they all live in
[`data/news.js`](data/news.js). Copy an existing block and edit it — newest
articles go at the top of the list. Each entry has:

| Field | What it does |
|---|---|
| `source` | The publication name (e.g. "Davie County Enterprise Record"). |
| `date` | Shown next to the source (e.g. "March 2026"). |
| `title` | The article headline. |
| `quote` | A short pull-quote shown in italics. Can be `""` to omit. |
| `summary` | One or two sentences about the article. |
| `url` | Link to the full article. |

## Other content

- **Contact info / address / phone**: edit the Contact and footer sections of `index.html`.
- **About text**: edit the About section of `index.html`.
- **Colors and fonts**: edit the `:root` variables at the top of `css/style.css`.

## Notes for the developer / host

- The site is 100% static (HTML/CSS/JS) — host it anywhere (Netlify, Vercel,
  GitHub Pages, or any web host). No PHP or database required.
- The old site's SSL certificate has **expired** — when relaunching, provision
  a new certificate (free via Let's Encrypt on most hosts).
- The contact form posts to FormSubmit.co (no account needed). **The first
  real submission emails an activation link to kevin@fullerarchitecture.com —
  it must be clicked once before messages are delivered.** Spam protection is
  a hidden honeypot field (`_honey`); FormSubmit's captcha is disabled for a
  friction-free form, which is a reasonable tradeoff for a site of this size.
- **At domain cutover** (moving to fullerarchitecture.com): update the form's
  hidden `_next` field in `index.html` so the post-submit redirect points at
  the new domain, and re-provision SSL on the new host.
- Text placed in `data/projects.js` / `data/news.js` is rendered as plain
  text (HTML in those fields is escaped, and news links must be http/https).
