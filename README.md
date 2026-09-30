# SLP'edia

**A free, open directory of the tools, technology and research shaping the future of speech-language pathology.**

SLP'edia organizes the future of speech-language pathology in one place: AAC apps and devices, emerging technology such as AI and brain-computer interfaces, and the research studies worth knowing about. Think of it as "Future Tools, but for SLPs." A free newsletter is planned.

SLP'edia is a directory and a newsletter, nothing more. It offers no therapy, assessments, mentoring or other services, and it doesn't sell anything.

## The Future Tools model

SLP'edia borrows its approach from [Future Tools](https://www.futuretools.io/), Matt Wolfe's curated directory of AI tools:

- **Human curation with a public bar.** Every entry is reviewed by a person. Taste beats completeness, so plenty of suggestions don't make it in.
- **One card per entry.** A short summary, the people or organization behind it, the region, and a link to the primary source.
- **Filters that match how SLPs look for things.** Tools, Research, People, Autism & kids and Broader SLP today, with more to come (type, access, region and a small hand-picked "Start here" list).
- **Weekly refresh.** New cards are added after review, and entries that stop meeting the bar are removed with a reason.
- **Reader first.** No affiliate links and no paid placements. SLPs choose tools for the people they work with, so trust comes first.

## What's in this repo

| Path | What it is |
|------|------------|
| `index.html` | The directory page: search, filter chips and a card feed. One self-contained file. |
| `data.json` | The directory data: 75 cards with title, summary, region, people, filters and link. |
| `wiki/` | The long-form wiki: every card grouped by topic, plus editorial standards and a changelog. Start at [wiki/index.md](wiki/index.md). |
| `CONTRIBUTING.md` | How to suggest a tool or study, and the bar it needs to clear. |
| `LICENSE` | MIT License for the code. |
| `LICENSE-CONTENT.md` | CC BY 4.0 for the card and wiki text. |

## How to browse

- **Online:** the current live version is at [regal-inlet-xrbz.here.now](https://regal-inlet-xrbz.here.now/). The planned home is slpedia.world (coming soon).
- **In this repo:** read the [wiki](wiki/index.md), or open [`data.json`](data.json) to see every card.
- **On your own computer:** the page loads `data.json` with `fetch`, so serve the folder instead of opening the file directly:

  ```
  git clone https://github.com/FotiosMpouris/slpedia-open.git
  cd slpedia-open
  python3 -m http.server 8000
  ```

  Then open http://localhost:8000 in your browser. Type in the search box or pick a filter to narrow the cards. Each card links to its primary source.

## Suggest a tool or study

Know a tool, technology or study that belongs here? [Open a "Suggest a tool or study" issue](https://github.com/FotiosMpouris/slpedia-open/issues/new/choose). It asks for the name, the link, a one-line description, the type, the access (free, paid, open source, open access and so on) and, where it applies, the evidence behind it. Please read [CONTRIBUTING.md](CONTRIBUTING.md) first for the bar each entry has to clear.

Corrections are welcome too: if a card has a broken link, an outdated price or a mistake, open an issue and say which card.

Please don't include patient or client information in issues.

## Not affiliated

SLP'edia is a free, open directory of SLP tools, technology and research. It isn't affiliated with SLPedia (slpedia.com), the speech-language practice in Long Beach, CA.

## License

- **Code** (`index.html` and any scripts): [MIT License](LICENSE), copyright 2026 Fotios Mpouris.
- **Content** (card text in `data.json` and the pages in `wiki/`): [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-CONTENT.md). You can share and adapt it, including translating it for SLPs in other languages, as long as you credit SLP'edia.
- **Third-party material keeps its own license.** Linked papers, websites and apps belong to their authors and publishers. ARASAAC symbols are CC BY-NC-SA. Nothing in this repo relicenses them.

SLP'edia is for information only and is not clinical advice.
