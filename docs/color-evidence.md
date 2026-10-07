# SLP'edia colour evidence review

Prepared October 7, 2026 for the SLP'edia homepage redesign (Reading Room layout, Atomic Dawn family). The goal: choose colours an SLP would recognise as research-informed, not invented.

> **What shipped:** the live site uses the "Reading Lamp" surfaces from palette 1 (cream page `#FAF3E0`, cream cards, butter yellow, palette 1 shelf tints) with the navy accent `#1F3A68` from palette 2 on the search button, the Suggest buttons and the shelf icons. See [design.md](design.md) for the short version. The A4a to A4d names below refer to the mockups the palettes were tested in.

How to read the strength ratings:

- **Strong**: a standard with an empirical basis, or large and well-replicated findings.
- **Moderate**: one solid study or a few consistent smaller ones, or a well-established expert guideline that has some empirical support.
- **Preliminary**: small samples, indirect populations, or a single lab.
- **Weak or contested**: popular claims, findings that failed to replicate, or associations with no shown effect on behaviour.

The short version: colour has **no strong evidence-based "SLP colour"**. Readability, contrast, colour-blind safety, and calm (low saturation) have the best evidence. The specific hue matters much less, and claims about hue are where most of the weak "colour psychology" sits.

---

## 1. Findings

### 1.1 Warm background tints made on-screen reading faster than blue ones (people with and without dyslexia)

- **Source:** Rello, L. and Bigham, J. P. (2017). *Good Background Colors for Readers: A Study of People with and without Dyslexia.* ASSETS '17. [PDF](https://www.cs.cmu.edu/~jbigham/pubs/pdfs/2017/colors.pdf) | [ACM](https://dl.acm.org/doi/10.1145/3132525.3132546)
- **What it found:** 341 participants (89 with dyslexia) each read with 10 background colours and black text. Peach, Orange and Yellow backgrounds gave significantly shorter reading times and less mouse movement than the cool backgrounds Blue, Blue Grey and Green, and this held for both groups. Tested hexes included Peach `#EDD1B0`, Orange `#EDDD6E`, Yellow `#F8FD89`, Blue `#96ADFC`, Blue Grey `#DBE1F1`. The paper's RGB column is offset by one row, so the hexes above are the ones it states. The authors link the result to the cream backgrounds recommended by the BDA and to earlier eye-tracking work in which black on cream gave the shortest fixations.
- **Caveats:** The study ran online with uncontrolled screens and Spanish-speaking participants. The authors say plainly that this "does not necessarily mean" warm colours should be recommended, because preference was not measured.
- **Strength:** Moderate. It is the largest direct test, and its direction agrees with the BDA guidance and the earlier cream eye-tracking studies.
- **Implication:** Use a warm, light page background (cream, butter, or peach) where people read. Keep blue off large reading surfaces and use it for accents. This is probably why the light-blue version "isn't reading SLP": cool backgrounds measured slower for everyone.

### 1.2 British Dyslexia Association style guide: cream or soft pastel, dark (not black) text, single-colour backgrounds

- **Source:** British Dyslexia Association, *Dyslexia Style Guide 2023* ([copy hosted by Cardiff University](https://blogs.cardiff.ac.uk/LTAcademy/wp-content/uploads/sites/286/2025/10/British-Dyslexia-Association-Style-Guide.pdf)). Related: [Dyslexia Scotland, "Contrasting advice"](https://dyslexiascotland.org.uk/contrasting-advice-what-colours-are-best-for-accessibility/) and [Dyslexia Scotland dyslexia-friendly formats](https://dyslexiascotland.org.uk/wp-content/uploads/2023/09/DyslexiaFriendlyFormats-2.pdf).
- **What it says:** "Use dark coloured text on a light (not white) background." "White can appear too dazzling. Use cream or a soft pastel colour." "Use single colour backgrounds." "Avoid green and red/pink, as these colours are difficult for those who have colour vision deficiencies." Dyslexia Scotland recommends dark blue text on cream, pastel or off-white, and its formats sheet says to "avoid patterns and graduated colour."
- **Strength:** Moderate. This is expert practice guidance, not a trial, but it is widely adopted and consistent with 1.1.
- **Implications:**
  - Use an off-white or cream card surface, never pure `#FFFFFF`.
  - Use dark navy ink (`#1B1F3B`) rather than pure black.
  - Make the page background a single flat colour instead of the gradient used in A3.
  - Keep pink and red to small touches, and never pair them with green to carry meaning.

### 1.3 WCAG 2.2 contrast: 4.5:1 for text, 3:1 for large text and interface parts, never colour alone

- **Source:** W3C, [Understanding SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [SC 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [SC 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).
- **What it says:** 4.5:1 was chosen for AA "because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/40 vision." Interface components and meaningful graphics need 3:1 against adjacent colours. Colour must not be the only way information is conveyed.
- **Strength:** Strong. This is the international standard, with a stated empirical rationale, and the legal baseline in many countries.
- **Implication:** All four palettes below were checked. Body text is 13:1 to 16:1 and muted text 5.8:1 to 9.2:1 on every surface. White on the teal accent is 6.0:1 and white on navy is 10:1 or more. Shelves are labelled by name, icon and count, so colour is never the only cue.

### 1.4 Red-green colour vision deficiency affects about 1 in 12 men; blue versus yellow stays distinguishable for them

- **Sources:** [MedlinePlus Genetics: Color vision deficiency](https://medlineplus.gov/genetics/condition/color-vision-deficiency/) ("about 1 in 12 males and 1 in 200 females" among people of Northern European ancestry). [National Eye Institute: Types of color vision deficiency](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness/types-color-vision-deficiency): red-green is the most common type, and blue-yellow is "less common."
- **Strength:** Strong, from epidemiology and physiology.
- **Implication:** Blue (navy or teal) paired with yellow is the safest two-colour pairing for the largest colour-blind group. Avoid red versus green as a meaningful contrast, which also agrees with the BDA guidance.

### 1.5 In AAC displays, background-colour cues did not help children find symbols and sometimes slowed them; arrangement helped

- **Sources:**
  - Thistle, J. J. and Wilkinson, K. M. (2017). Effects of background color and symbol arrangement cues on construction of multi-symbol messages by young children without disabilities. *AAC*, 33(3). [PubMed](https://pubmed.ncbi.nlm.nih.gov/28617614/)
  - Wilkinson, K. M. and Coombs, B. (2010). Preliminary exploration of the effect of background color on the speed and accuracy of search for an aided symbol target by typically developing preschoolers. *Early Childhood Services*. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4599784/)
  - Wilkinson, K. M. and Snell, J. (2011). Facilitating children's ability to distinguish symbols for emotions. *American Journal of Speech-Language Pathology*. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3472415/)
- **What they found:**
  - Thistle and Wilkinson 2017 (N = 52): arranging symbols by word class made responses significantly faster. Most children were faster on white symbol backgrounds, but that difference was not significant. The authors urge "caution when incorporating background color on displays for young children."
  - Wilkinson and Coombs 2010 (10 preschoolers): younger children were significantly slower when a background colour cue was present.
  - Wilkinson and Snell 2011 found that clustering helped only when symbols had white backgrounds, and background colour added nothing.
- **Strength:** Preliminary and indirect. The samples were small, the children were typically developing, and the tasks were symbol-search rather than web reading. Still, it is the research SLPs who know AAC will recognise.
- **Implication:** Grouping and layout help people find things, and colour tints are secondary. The Reading Room's shelves already do the grouping. Keep shelf tints soft and always paired with labels and icons. Do not rely on colour fills to signal category.

### 1.6 The Modified Fitzgerald Key is a convention SLPs know (yellow = people, orange = things, green = actions, blue = describing)

- **Sources:** [Thames Valley Children's Centre: Fitzgerald Key colour coding](https://www.tvcc.on.ca/resource/fitzgerald-key-colour-coding) and [PrAACtical AAC: Communication boards, colorful considerations](https://praacticalaac.org/strategy/communication-boards-colorful-considerations/). Both describe the Modified Fitzgerald Key (yellow for people and pronouns, green for verbs, orange for nouns, blue for adjectives, pink for social words) and the alternative Goossens', Crain and Elder scheme. PrAACtical AAC says the most important thing is consistency.
- **Strength:** This is a professional convention, not evidence of effect. Section 1.5 shows that background colour cues have weak support for performance. Its value is recognition: AAC-literate SLPs read these colours instantly.
- **Implication:** Fitzgerald colours can be a deliberate nod for SLPs: Tools as things = orange, Guides and groups as people = yellow. Present it as a wink, not as a claim that it helps people find things.

### 1.7 Saturation and brightness drive arousal more than hue does

- **Source:** Wilms, L. and Oberfeld, D. (2018). Color and emotion: effects of hue, saturation, and brightness. *Psychological Research*, 82. [PDF](https://www.staff.uni-mainz.de/oberfeld/downloads/Wilms-Oberfeld2018_Article_ColorAndEmotionEffectsOfHueSat.pdf) | [DOI](https://doi.org/10.1007/s00426-017-0880-8)
- **What it found:** In a controlled lab design (N = 62), more saturated and brighter colours raised self-rated arousal and skin conductance, and arousal increased from blue to green to red. Medium saturation produced the most positive valence on average.
- **Strength:** Moderate. It is well controlled but involves one lab and full-field colour viewing, not web pages.
- **Implication:** Calm comes from muted, medium-to-low saturation tints more than from any particular hue. That is why the A3 and A2 sky blues felt "intense" even though blue is a "calm" hue. Keep large areas low in saturation and save saturated colour for small accents such as the sun, the star and the badges.

### 1.8 Colour psychology as a field is "nascent"; blue-means-trust is among the better-replicated but still soft findings

- **Sources:** Elliot, A. J. (2015). [Color and psychological functioning: a review of theoretical and empirical work](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2015.00368/full). *Frontiers in Psychology.* Elliot and Maier (2014), [*Annual Review of Psychology*](https://www.annualreviews.org/content/journals/10.1146/annurev-psych-010213-115035).
- **What they say:** The literature "is at a nascent stage of development" and has long been "fraught with major methodological problems," including uncontrolled colour, underpowered samples and no screening for colour-deficient participants. The author recommends "patience and prudence regarding conclusions." Among findings replicated in at least five labs: blue on stores and logos raised quality and trustworthiness ratings (for example, websites featuring blue rated more trustworthy than green ones), and red before a challenging task slightly undermined performance.
- **Strength:** The field is weak overall. The blue-trust and red-in-achievement findings are weak to moderate.
- **Implications:**
  - Do not market the palette as "colour psychology."
  - Navy or teal as the accent colour is reasonable support for credibility.
  - Keep red to the logo star and the small "New" badge rather than big buttons.

### 1.9 People's colour preferences: blue is widely liked, dark yellow (olive or mustard-brown) is widely disliked, but neither is universal

- **Sources:**
  - Palmer, S. E. and Schloss, K. B. (2010). An ecological valence theory of human color preference. *PNAS.* [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2889342/)
  - Taylor, C., Clifford, A. and Franklin, A. (2013). Color preferences are not universal. *J Exp Psych: General.* [APA](https://psycnet.apa.org/doiLanding?doi=10.1037%2Fa0030273)
- **What they found:** In US samples, blue was most preferred and dark yellow (olive, brownish yellow) among the least. The authors tie this to associations with liked objects, such as clear sky, and disliked ones, such as rotting food. Taylor et al. found Himba participants in Namibia did not show the blue preference or the yellow-green aversion.
- **Strength:** Moderate within Western samples, contested cross-culturally.
- **Implication:** If we add yellow, make it a clear, light butter yellow, not a dark mustard that drifts toward olive or brown. Blue as an accent is a safe, widely liked choice.

### 1.10 "Pink for women, blue for men" is weakly supported and contested

- **Sources:** Hurlbert, A. C. and Ling, Y. (2007). Biological components of sex differences in color preference. *Current Biology.* [Newcastle record](https://eprints.ncl.ac.uk/76026). Taylor et al. (2013), above.
- **What they found:** Hurlbert and Ling reported a sex difference, with women weighting toward reddish-purple, though their abstract notes earlier studies tended to agree on a general preference for blue. Taylor et al. did not replicate the sex difference in the Himba sample.
- **Strength:** Weak or contested.
- **Implication:** We don't need pink to make the site feel welcoming to women, which matters because the SLP workforce is mostly female. A warm, light palette (cream, butter, peach) reads as gentle without gendered coding. Pink stays optional, as in A4c.

### 1.11 One small study found autistic boys avoided yellow

- **Source:** Grandgeorge, M. and Masataka, N. (2016). Atypical color preference in children with autism spectrum disorder. *Frontiers in Psychology.* [Article](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01976/full)
- **What it found:** 29 autistic boys preferred yellow significantly less, and green and brown more, than 38 typically developing boys. The authors suggested sensory sensitivity to yellow's high luminance.
- **Strength:** Preliminary: one small study of boys only, with a speculative mechanism.
- **Implication:** Not a reason to drop yellow. It is a reason to keep yellow soft (butter tints) rather than saturated over large areas, which section 1.7 already recommends.

### 1.12 Yellow is linked to joy in most countries, but that is an association, not an effect

- **Source:** Jonauskaite, D. et al. (2020). Universal patterns in color-emotion associations are further shaped by linguistic and geographic proximity. *Psychological Science* (4,598 participants, 30 nations). [PubMed](https://pubmed.ncbi.nlm.nih.gov/32900287/). Related: Jonauskaite et al. (2019), [yellow across 55 countries](https://www.sciencedirect.com/science/article/abs/pii/S0272494419303469).
- **What it found:** The yellow-joy link was common but varied a lot between countries, from about 6% in Egypt to 88% in Finland in the 2019 study, rising with latitude and rainfall.
- **Strength:** Strong as a survey of associations, weak as a guide to behaviour.
- **Implication:** A friendly, optimistic note for a global audience, but not a claim we should make on the site.

### 1.13 Aphasia-friendly formatting: preferences are clear, colour itself is barely studied

- **Sources:**
  - Herbert, Gregory and Haw (2018). Collaborative design of accessible information with people with aphasia. *Aphasiology* 33(12). [Accepted manuscript](https://eprints.whiterose.ac.uk/id/eprint/140934/)
  - Rose, Worrall, Hickson and Hoffmann. [Aphasia-friendly health information: text formatting facilitators and barriers](https://aphasiapathway.com.au/flux-content/aarp/pdf/Aphasia-Friendly-Text-formatting.pdf) (University of Queensland poster)
  - UQ [aphasia-friendly poster guidelines](https://shrs.uq.edu.au/files/3729/Aphasia%20friendly%20poster%20guidelines%20PDF.pdf)
- **What they found:** People with aphasia report clear preferences for white space, headings, sans-serif fonts, larger type (about 14 pt) and generous spacing. Herbert et al. note "limited evidence of a positive effect of modified formatting on ... comprehension" but "stronger evidence regarding ... preferences." UQ's guidance says to use a light background with dark text.
- **Strength:** Moderate for preferences, weak for colour specifically.
- **Implication:** The current layout already matches these preferences: DM Sans, 18 px base, roomy cards, bold headings. Colour should support that without adding busy patterns or gradients behind text.

### 1.14 First impressions are visual and fast, and health sites get rejected on design first

- **Sources:**
  - Lindgaard, G. et al. (2006). Attention web designers: You have 50 milliseconds to make a good first impression! *Behaviour and Information Technology* 25(2). [T&F](https://www.tandfonline.com/doi/abs/10.1080/01449290500330448)
  - Sillence, E. et al. (2004). Trust and mistrust of online health sites. CHI '04. [ACM](https://dl.acm.org/doi/10.1145/985692.985776)
- **What they found:** Ratings of visual appeal formed after 50 ms closely matched ratings after 500 ms. Sillence et al. found that rejection, or mistrust, of health sites was driven by design factors, while selection, or trust, was driven by credibility and personalised content.
- **Strength:** Moderate for both.
- **Implication:** The palette's job is to pass the first glance as calm and credible. After that, the content does the work. That supports a restrained palette over a loud one.

### 1.15 Weak or popular claims to avoid repeating

- **Coloured overlays and tinted lenses as a dyslexia treatment** are not supported. See the joint statement by the AAP, AAO and others, [Learning Disabilities, Dyslexia, and Vision](https://publications.aap.org/pediatrics/article/127/3/e818/64947/Learning-Disabilities-Dyslexia-and-Vision), and the [AAO reaffirmation](https://www.aao.org/education/clinical-statement/joint-statement-learning-disabilities-dyslexia-vis). Cream backgrounds are about glare and comfort, not a treatment. SLPs will know this distinction, so the site should never imply otherwise.
- **Hue-to-emotion rules** such as "blue calms," "yellow causes anxiety" or "green heals" come mostly from marketing writing, not controlled studies (see 1.7 and 1.8).

---

## 2. What SLP professional bodies and well-known SLP brands use

These colours were sampled on October 7, 2026 from each homepage's computed styles and screenshots (not included in this repo). Sites change, so treat these as a snapshot.

| Organisation | Main colours seen | Notes |
|---|---|---|
| ASHA (asha.org) | Teal `#00778B`, warm grey-brown `#6E6259`, plus navy `#151F6E` and plum `#9A1D65` tiles, on white | Teal is the signature colour. |
| RCSLT (rcslt.org) | Dark navy `#1E2133`, blue `#007EB8` (theme colour), yellow `#FFDC10` "Become a Member" button | Navy plus a yellow call to action. |
| Speech Pathology Australia | Navy `#002A53`, blue `#004892`, white, light greys | Corporate blue. |
| SAC, Speech-Language and Audiology Canada (sac-oac.ca) | Navy-blue `#0D4C81`, a soft yellow circle `#F2C24B` behind the headline, light blue logo `#3EB4E4` | Navy plus soft yellow. |
| Speech and Language UK (children's charity) | Bright yellow `#FFED00`, aqua `#28D2D5`, dark navy `#313147` | Yellow-led brand. |
| NZSTA (speechtherapy.org.nz) | Pale blue `#A4DBE8`, bright blue `#00B4FA`, orange `#FF9900` buttons | |
| IASLT (Ireland) | Near-black and dark teal `#082E2E`, muted gold `#BBAB7E` | |
| ESLA (European SLT association, formerly CPLOL) | Teal `#00A99D`, dark grey `#32323A`, off-white `#F9F9F9` | |
| ISAAC (AAC society) | Pale pink `#EFC1C3` page, crimson `#A70240` | |
| Stuttering Foundation | Navy `#073358` and `#123B6A`, red `#C5131F` accent, warm off-white `#FCFAF9` | |
| The Informed SLP | Navy `#03253E`, teal `#147F8A`, near-black hero | Evidence-focused SLP brand. |
| IALP (ialpglobal.org) | Not sampled | The site sits behind a bot check. The old domain, ialpasoc.info, now shows an unrelated betting site, so don't link it. |

**Pattern:** The field leans heavily on navy, blue and teal for credibility. Navy or teal plus yellow appears at three of the most visible bodies: RCSLT (yellow call to action), SAC (soft yellow accent) and Speech and Language UK (yellow-led). Very few use warm page backgrounds; nearly all sit on white. A cream or butter reading surface with a navy or teal accent would therefore look familiar to SLPs through the accents while being friendlier to read than the white most professional bodies use.

---

## 3. Recommended palettes

Shared rules for all four, from the findings above:

- **Reading surfaces:** off-white or cream cards, never pure white (1.2).
- **Ink:** dark navy `#1B1F3B` rather than pure black (1.2).
- **Page background:** one flat warm or neutral colour, with no gradient behind text (1.1, 1.2).
- **Saturation:** low over large areas. Saturated colour appears only in small accents: sun, star, "New" badge (1.7, 1.11).
- **Red:** only on the logo star and the "New" badge. It is never a large call to action and never paired with green to carry meaning (1.2, 1.4, 1.8).
- **Contrast:** AA everywhere, and colour is never the only cue (1.3).
- **Yellow:** clear butter, never olive or mustard-brown (1.9).

### Palette 1, "Reading Lamp" (cream, butter, teal), built as A4a

| Role | Hex |
|---|---|
| Page | `#FAF3E0` (cream) |
| Card | `#FFFCF5` |
| Paper and chips | `#FFFAF0` |
| Ink | `#1B1F3B` |
| Muted text | `#4A4636` |
| Accent (search, call to action) | `#0E6E73` (Atomic Dawn teal) |
| Butter co-colour (selected, highlight) | `#F6D26B` |
| Shelf tints | Tools `#F9DFA0`, Technology `#D6ECEA`, Research `#F7DCC4`, Guides `#FBE8B5` |

- **Why:** Cream is the BDA recommendation and close to the warm backgrounds that read fastest (1.1, 1.2). Teal is ASHA's and The Informed SLP's signature family (section 2) and Open Care's own Atomic Dawn teal. Butter is a light, clear yellow (1.9).
- **Contrast:** ink on page 14.1:1, muted on page 8.3:1, white on teal 6.0:1.

### Palette 2, "Navy and Butter" (butter page, navy accents, pale-blue shelves), built as A4b

| Role | Hex |
|---|---|
| Page | `#FBEDC0` (butter) |
| Card | `#FFFCF5` |
| Ink | `#1B1F3B` |
| Muted text | `#454A5C` |
| Navy accent (search, suggest button, shelf icons) | `#1F3A68` |
| Butter (selected, highlight, call to action) | `#F5CD55` |
| Shelf headers | `#DFE8F3` (pale blue) |

- **Why:** Yellow backgrounds were among the fastest in Rello and Bigham (1.1). Blue against yellow is the pairing that survives red-green colour blindness (1.4). Navy accents support credibility (1.8), and navy plus yellow is the RCSLT and SAC look (section 2). Blue is used only for accents and small panels, not as the reading surface (1.1).
- **Contrast:** ink on page 13.8:1, white on navy 11.3:1, ink on the butter call to action 10.5:1.

### Palette 3, "Peach and Teal" (no yellow, a light rose touch), built as A4c

| Role | Hex |
|---|---|
| Page | `#F8E6D4` (peach) |
| Card | `#FFFAF3` |
| Ink | `#1B1F3B` |
| Muted text | `#4D4440` |
| Accent | `#0E6E73` |
| Dusty rose (selected) | `#EEC3BD` |
| Headline highlight | `#F1CDB4` |
| Shelf tints | Tools `#F6D3B8`, Technology `#D3E9E6`, Research `#F2D4D0`, Guides `#EFE1C6` |

- **Why:** Peach was the fastest background overall in Rello and Bigham (1.1). It keeps the gentle, warm feel Fotios wanted from the pink without depending on pink, which the BDA flags (1.2) and which has only weak support as "for women" (1.10). Rose is a small accent only.
- **Contrast:** ink on page 13.2:1, white on teal 6.0:1.

### Palette 4, "Fitzgerald Shelves" (neutral cream with AAC colour-key shelves), built as A4d

| Role | Hex |
|---|---|
| Page | `#FBF6EA` |
| Card | `#FFFDF7` |
| Ink | `#1B1F3B` |
| Muted text | `#474A55` |
| Navy accent | `#23407A` |
| Yellow (selected, highlight) | `#F7D65C` |
| Shelf tints | Tools orange `#FBD9B3` (things), Technology green `#D6EAD2` (actions), Research blue `#D8E6F5` (describing), Guides and groups yellow `#FBEAA5` (people) |

- **Why:** This is a deliberate, recognisable nod to the Modified Fitzgerald Key that AAC-literate SLPs use daily (1.6). The footer explains it in one line. Tints are soft and every shelf keeps its label and icon, because the AAC research does not support colour fills as a finding aid by themselves (1.5). Green and red are never adjacent (1.4).
- **Fit:** Tools as orange (things) and Guides as yellow (people) map cleanly. Technology as green and Research as blue are looser fits, and the footer wording keeps that honest.
- **Contrast:** ink on page 14.9:1, white on navy 10.1:1.

### Which to pick, plainly

- **A4a:** the closest to the evidence on every axis.
- **A4b:** the most "SLP institution" in feel, and the safest pairing for colour-blind readers.
- **A4c:** the softest, but it has no yellow.
- **A4d:** the most clever for SLPs specifically, though the "key" is a convention, not evidence.

A good mix is A4a's surfaces with A4b's navy accents.
