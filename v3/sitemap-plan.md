# First Class Auto Glass NC — v3 Subpage Sitemap Plan

Build date: 2026-07-19. All pages carry `<meta name="robots" content="noindex">` until go-live (flip at domain switch). Canonicals point to `https://firstclassautoglassnc.com/<slug>/`. Preview base: `https://ajsupplycollc.github.io/firstclass-autoglass/v3/<slug>/`.

## Page map

| # | Live URL (at go-live) | Source | New file | Page type | JSON-LD |
|---|---|---|---|---|---|
| 1 | /about/ | exact/about | v3/about/index.html | About page | AboutPage + AutoRepair mainEntity |
| 2 | /services/ | exact/services | v3/services/index.html | Services hub | Service + AutoRepair provider + OfferCatalog |
| 3 | /contact/ | exact/contact | v3/contact/index.html | Contact | ContactPage + AutoRepair mainEntity |
| 4 | /testimonials/ | exact/testimonials | v3/testimonials/index.html | Reviews | WebPage (see note) |
| 5 | /blog/ | exact/blog | v3/blog/index.html | Blog index | Blog + 2 BlogPosting refs |
| 6 | /cracked-windshield-repair-vs-replace-a-guide-for-drivers/ | exact/(same) | v3/(same)/index.html | Blog post | BlogPosting (pub 2024-05-05, mod 2024-05-30) |
| 7 | /staying-safe-on-the-road-tips-for-avoiding-common-auto-glass-issues/ | exact/(same) | v3/(same)/index.html | Blog post | BlogPosting (pub 2024-05-11, mod 2024-05-11) |
| 8 | /auto-glass-replacement-nc/ | exact/auto-glass-replacement-nc | v3/(same)/index.html | Service lander | Service + AutoRepair provider + areaServed (5 counties) |
| 9 | /windshield-replacement-nc/ | exact/windshield-replacement-nc | v3/(same)/index.html | Service lander | Service + AutoRepair provider + areaServed (5 counties) |
| 10 | /lexington-auto-glass-repair-and-replacement/ | exact/(same) | v3/(same)/index.html | Location lander | Service + Lexington AutoRepair provider (336 phone, Becks Church Rd) + areaServed (Lexington/Thomasville/High Point/Davidson) |
| 11 | /zebra-auto-glass/ | exact/zebra-auto-glass | v3/zebra-auto-glass/index.html | Acquired-brand page | WebPage |
| 12 | /thank-you/ | exact/thank-you | v3/thank-you/index.html | Form confirmation | WebPage |

NAP used everywhere (visible footer + every schema provider block):
- Mooresville: 1892 Charlotte Hwy, Unit 1, Mooresville, NC 28115 — (980) 242-8339
- Lexington: 1131 Becks Church Rd, Lexington, NC 27292 — (336) 866-1519
("Unit 1" retained to match the already-shipped v3 homepage schema and the client's own Google Maps listing.)

## Enrichment change log (every sentence added beyond ported copy)

**about** — no new sentences. Structural only: section kickers/labels ("Our story", "Built on four pillars.", "Simple from start to finish." etc.), stats and process steps rendered as cards. Source Elfsight review wall replaced with a link to /testimonials/.

**services** — no new sentences. Section labels only ("Every service, done right.", "Inspections next door"). FAQ questions recovered verbatim from the source accordion.

**contact** — added (replacing the WordPress contact form, which cannot be ported to a static page):
1. "The fastest way to get a price is our instant quote tool — tap the glass that's damaged and get a quoted price by text. Prefer to talk? Call or email and we'll take care of you." (under the ported "Start a Conversation" heading; the text-message claim restates the client's own thank-you-page copy)
2. In the ported intro, "fill out our contact form" was changed to "start an instant quote" (form no longer exists).
3. Business hours card (Mon–Fri 9:00 AM–5:00 PM, Sat 9:00–11:30 AM, Sun Closed) — hours taken from the client's live site footer.
4. Lexington phone/address added alongside Mooresville in the Call Us / Visit Us cards (source page listed Mooresville only).

**testimonials** — added: "Our live Google reviews load here. To read them directly, search for First Class Auto Glass NC on Google." (noscript fallback only). The 5.0 / "Verified on Google" / "Review us on Google" block is reused from the approved v3 homepage. No Review/AggregateRating schema — see judgment calls.

**blog** — added the two post-card excerpts, both assembled from sentences inside the articles themselves (no new claims): the Staying Safe excerpt and the Cracked Windshield excerpt. "Read the article" link labels are new UI text.

**cracked-windshield post** — no new sentences. Dropped the source's duplicate "Outline of the Article" block (a table of contents that repeated every heading); all real content ported.

**staying-safe post** — no new sentences. Dropped the duplicate outline/TOC block; all real content ported.

**auto-glass-replacement-nc** — added Coverage section (2 paragraphs, factual only):
1. "We handle windshields, door glass, back windows, quarter glass, and vent glass for all makes and models."
2. "If your vehicle has camera-based safety features (ADAS), we recalibrate them after windshield replacement so they keep working the way the factory intended."
3. "Our mobile team comes to your home, office, or job site at no extra charge."
4. "We serve Iredell, Mecklenburg, Cabarrus, Rowan, and Davidson County from our Mooresville and Lexington locations."
5. "We also work with all major insurance providers and can help with your comprehensive glass claim."
Also: "See the before & after comparison on our home page for the difference firsthand." and "read what real customers have to say" (link text) replace the source's photo carousel / review widget, which are homepage features. Meta description rewritten (source was literally "WE COME TO YOU"); "WE COME TO YOU" kept as the hero kicker.

**windshield-replacement-nc** — same five Coverage sentences as above, same widget-replacement link sentences, meta description rewritten from "WE COME TO YOU" (kept as hero kicker).

**lexington** — added Where-we-serve section (2 sentences, factual):
1. "Our Lexington shop is located at 1131 Becks Church Rd, Lexington, NC 27292. From there, our mobile team covers Lexington, Thomasville, High Point, and the rest of Davidson County — we come to your home, office, or job site at no extra charge."
2. "Call (336) 866-1519 to schedule."
Title adapted from the source's thin "Lexington | First Class Auto Glass" to "Auto Glass Repair & Replacement in Lexington, NC | First Class Auto Glass". Meta description rewritten (source was "Local. Mobile. Fast. Reliable." — kept as the hero subtitle).

**zebra-auto-glass** — no new sentences. Title adapted from "../ZEBRA AUTO GLASS | First Class Auto Glass"; meta description rewritten (source was "BETTER TOGETHER" — kept as hero kicker). Review widget replaced with link to /testimonials/.

**thank-you** — added "Back to Home" button label. Meta description rewritten from "Received. Reviewed. Responding Soon." (kept as hero subtitle).

**All pages** — shared footer includes an "Explore" link column and the business-hours block (new navigation furniture, not body copy). Hero CTA buttons ("Get Instant Quote" / "Call ...") reuse the v3 homepage's own CTA language.

## Homepage nav edit (v3/index.html)

Menu entries converted to real links: Home (#top, kept), Services -> services/, Get a Quote (#quote, kept as anchor), About -> about/, Testimonials -> testimonials/, Blog -> blog/, Contact -> contact/. The former Reviews/#why/#area anchor entries were replaced by the page set (sections remain reachable by scroll). Lexington location name in the menu now links to lexington-auto-glass-repair-and-replacement/. Nothing else touched.
