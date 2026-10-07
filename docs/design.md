# Design notes

SLP'edia's homepage uses the **Reading Lamp** palette: a cream page, cream cards, a soft butter yellow, and a navy accent. The directory is set out as shelves: Tools, Technology, Research, and Guides and groups. The drawn reading room (shelf, lamp and armchair, with speech bubbles rising from the books) sits at the top of the page, between the headline and search, on a navy band for contrast.

## Layout rules

- Search comes first. On a phone the search box is visible on first load, right under the headline.
- One centered headline and one short line under it. No badges or highlight marks.
- No icon-only buttons. Every control says what it does in words, for example "Suggest an addition".
- No hidden sideways scrolling. On wide screens the shelf and topic buttons wrap onto new lines; on phones they become two plain dropdowns, Shelf and Topic.
- Nothing on the page is wider than the screen. Check at 390 px and 1280 px before publishing.

The colours were chosen from published research and accessibility guidance rather than taste alone. The full review, with strength ratings and the weaker claims we chose not to rely on, is in [color-evidence.md](color-evidence.md).

## Palette

| Role | Colour |
|---|---|
| Page background | `#FAF3E0` cream |
| Cards | `#FFFCF5` off-white |
| Text | `#1B1F3B` dark navy |
| Secondary text | `#4A4636` |
| Accent (search button, Suggest buttons, shelf icons) | `#1F3A68` navy |
| Highlight and selected filters | `#F6D26B` butter yellow |
| Shelf headers | Tools `#F9DFA0`, Technology `#D6ECEA`, Research `#F7DCC4`, Guides and groups `#FBE8B5` |
| Logo star and "New" badge | `#C8321E` red, used only here |

The type is DM Sans for reading and Big Shoulders for headings. Both are self-hosted under the SIL Open Font License; the license files are in [`assets/fonts/`](../assets/fonts/).

## Why these colours

- **A warm, light background instead of white or blue.** In a study of 341 readers, 89 of them with dyslexia, warm backgrounds (peach, orange, yellow) gave faster on-screen reading than cool ones (blue, blue-grey, green), for readers with and without dyslexia. The study was online, with screens not controlled. ([Rello and Bigham, 2017, ASSETS](https://dl.acm.org/doi/10.1145/3132525.3132546), [PDF](https://www.cs.cmu.edu/~jbigham/pubs/pdfs/2017/colors.pdf))
- **Cream rather than pure white, and dark text that isn't pure black.** The British Dyslexia Association's style guide advises dark text on a light background that is not white, cream or a soft pastel instead of white, and single-colour backgrounds. We use one flat page colour, off-white cards and dark navy text. ([BDA Dyslexia Style Guide 2023](https://blogs.cardiff.ac.uk/LTAcademy/wp-content/uploads/sites/286/2025/10/British-Dyslexia-Association-Style-Guide.pdf))
- **Navy and yellow as the main pair.** Red-green colour vision deficiency affects about 1 in 12 men and 1 in 200 women of Northern European ancestry ([MedlinePlus](https://medlineplus.gov/genetics/condition/color-vision-deficiency/)). Blue-yellow deficiency is much less common ([National Eye Institute](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness/types-color-vision-deficiency)), so a blue and yellow pairing stays distinct for the largest group. The site never uses red against green to carry meaning.
- **WCAG 2.2 AA contrast throughout.** Body text is about 14.5:1 on the page, secondary text at least 7:1 on every surface, and white on the navy accent 11.3:1. The AA minimum is 4.5:1 for text and 3:1 for interface parts ([W3C: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)). Shelves are identified by name, icon and count, never by colour alone ([Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)).
- **Soft tints, with saturated colour kept small.** Brighter, more saturated colours raise arousal more than hue does ([Wilms and Oberfeld, 2018](https://doi.org/10.1007/s00426-017-0880-8)), so large areas stay pale. The yellow is a clear butter tone, not a dark mustard, because dark yellows rank among the least liked colours in preference studies ([Palmer and Schloss, 2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC2889342/)).

## What we don't claim

Colour psychology is a young field with many weak findings ([Elliot, 2015](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2015.00368/full)). We don't say any colour calms, heals or improves learning. Cream backgrounds are about glare and comfort, not a treatment: coloured overlays and tinted lenses are not supported as a dyslexia treatment ([joint statement, AAP and others](https://publications.aap.org/pediatrics/article/127/3/e818/64947/Learning-Disabilities-Dyslexia-and-Vision)).

Suggestions to improve readability are welcome. Email [editor@slpedia.world](mailto:editor@slpedia.world?subject=Suggestion%20for%20SLP%27edia), or if you use GitHub, [open an issue](https://github.com/FotiosMpouris/slpedia-open/issues/new/choose).
