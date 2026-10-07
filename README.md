# SLP'edia

**A free, open directory of the tools, technology and research shaping the future of speech-language pathology.**

SLP'edia organizes the future of speech-language pathology in one place: AAC apps and devices, emerging technology such as AI and brain-computer interfaces, and the research studies worth knowing about. Think of it as "Future Tools, but for SLPs." A free newsletter is planned.

SLP'edia is a directory and a newsletter, nothing more. It offers no therapy, assessments, mentoring or other services, and it doesn't sell anything.

## The Future Tools model

SLP'edia borrows its approach from [Future Tools](https://www.futuretools.io/), Matt Wolfe's curated directory of AI tools:

- **Curation with a public bar.** Every suggestion is checked against our editorial standards before it goes up. Taste beats completeness, so plenty of suggestions don't make it in.
- **One card per entry.** A short summary, the people or organization behind it, the region, and a link to the primary source.
- **Filters that match how SLPs look for things.** Tools, Research, People, Autism & kids and Broader SLP today, with more to come (type, access, region and a small hand-picked "Start here" list).
- **Weekly refresh.** New cards are added after review, and entries that stop meeting the bar are removed with a reason.
- **Reader first.** No affiliate links and no paid placements. SLPs choose tools for the people they work with, so trust comes first.

## What's in this repo

| Path | What it is |
|------|------------|
| `index.html` | The directory page: search, shelf and topic filters, and the four shelves of cards. |
| `assets/` | The page's stylesheet (`site.css`), script (`app.js`), favicon, and self-hosted fonts with their SIL Open Font License files. |
| `data.json` | The directory data: every card with title, summary, region, people, filters and link. The page loads it at runtime. |
| `docs/` | [Design notes](docs/design.md) and the [colour evidence review](docs/color-evidence.md) behind the palette. |
| `wiki/` | The long-form wiki: every card grouped by topic, plus editorial standards and a changelog. Start at [wiki/index.md](wiki/index.md). |
| `CONTRIBUTING.md` | How to suggest a tool or study, and the bar it needs to clear. |
| `LICENSE` | MIT License for the code. |
| `LICENSE-CONTENT.md` | CC BY 4.0 for the card and wiki text. |

## How to browse

- **Online:** [slpedia.world](https://slpedia.world).
- **In this repo:** read the [wiki](wiki/index.md), or open [`data.json`](data.json) to see every card.
- **On your own computer:** the page loads `data.json` with `fetch`, so serve the folder instead of opening the file directly:

  ```
  git clone https://github.com/FotiosMpouris/slpedia-open.git
  cd slpedia-open
  python3 -m http.server 8000
  ```

  Then open http://localhost:8000 in your browser. Type in the search box or pick a shelf or topic to narrow the cards. Each card links to its primary source.

## Design notes

The site uses the Reading Lamp palette: a cream page, cream cards, butter yellow and a navy accent, with dark navy text. The colours follow published evidence and accessibility guidance: warm backgrounds read faster than blue ones on screen ([Rello and Bigham, 2017](https://dl.acm.org/doi/10.1145/3132525.3132546)), the British Dyslexia Association recommends cream over white with dark text ([style guide](https://blogs.cardiff.ac.uk/LTAcademy/wp-content/uploads/sites/286/2025/10/British-Dyslexia-Association-Style-Guide.pdf)), navy and yellow stay distinct for the most common colour vision deficiencies, and all text meets WCAG 2.2 AA contrast. Details and sources are in [docs/design.md](docs/design.md) and [docs/color-evidence.md](docs/color-evidence.md).

## Suggest a tool or study

Know a tool, article, study or person that belongs here? Email [editor@slpedia.world](mailto:editor@slpedia.world?subject=Suggestion%20for%20SLP%27edia) with the name, a link and why it belongs. No account needed.

Comfortable with GitHub? You can also [open a "Suggest a tool or study" issue](https://github.com/FotiosMpouris/slpedia-open/issues/new/choose). It asks for the name, the link, a one-line description, the type, the access (free, paid, open source, open access and so on) and, where it applies, the evidence behind it. Please read [CONTRIBUTING.md](CONTRIBUTING.md) first for the bar each entry has to clear.

Corrections are welcome too: if a card has a broken link, an outdated price or a mistake, email editor@slpedia.world (or open an issue) and say which card.

Please don't include patient or client information in emails or issues.

## License

- **Code** (`index.html`, `assets/app.js`, `assets/site.css`): [MIT License](LICENSE), copyright 2026 Fotios Mpouris.
- **Fonts** (`assets/fonts/`): DM Sans and Big Shoulders, each under the [SIL Open Font License 1.1](assets/fonts/dm-sans/OFL.txt) ([Big Shoulders license](assets/fonts/big-shoulders/OFL.txt)).
- **Content** (card text in `data.json` and the pages in `wiki/`): [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-CONTENT.md). You can share and adapt it, including translating it for SLPs in other languages, as long as you credit SLP'edia.
- **Third-party material keeps its own license.** Linked papers, websites and apps belong to their authors and publishers. ARASAAC symbols are CC BY-NC-SA. Nothing in this repo relicenses them.

SLP'edia is for information only and is not clinical advice.
