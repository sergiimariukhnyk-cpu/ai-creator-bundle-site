# Launch checklist

Technical readiness: ready for static hosting. Sales readiness: **blocked** until the blockers below are resolved. Search the project for `[TODO_` to find every placeholder.

## Blockers
- [ ] **Payment URL** (`paymentUrl`, https only). Until it is set, purchase buttons only show a preview message.
- [ ] **Access terms:** access type and duration (`product.access`) and delivery method (`product.delivery`, `delivery.method`). Do not promise instant or automatic access until the chain payment → enrollment on Kwiga → message to the buyer has been tested.
- [ ] **Company data:** name, address, company number, jurisdiction (`company.*`).
- [ ] **Support email** (`support.email`).
- [ ] **Domain:** set `domain`, `environment: "production"`, then `python3 scripts/build.py --domain https://…` (see DEPLOY.md). Write og:image / twitter:image / canonical / og:url into the static HTML, not only via JavaScript.
- [ ] **Legal pages** (`legal/offer.html`, `privacy.html`, `refund.html`): replace the `[TODO_*]` text and have them reviewed by a professional. Check the 30-day guarantee wording against the real terms.
- [ ] **Program:** confirm that the 3 courses and 28 lessons match what is delivered on Kwiga.
- [ ] **Preview protection:** remove `noindex` (meta tags, `_headers`, robots.txt) only at launch, on purpose.

## Content decisions still open
- [ ] **Hero accordion "How access works"** (`heroInfo.items`, id `how-access-works`) is hidden (`visible: false`, text `[TODO_ACCESS_INFO]`). Write the text and set `visible: true` once delivery and duration are confirmed. The FAQ question about access stays until then.
- [ ] **Update policy** (`product.updatePolicy`): not shown anywhere; no promise of future updates on the page.
- [ ] **Tools not confirmed by the program:** Nano Banana Pro, Veo, Sora, Seedance, music generation, face swapping (`toolsUnconfirmed`). Add them publicly only after the lessons confirm them.
- [ ] **Real lesson / workflow demo** (`realLesson`): the section is hidden. Set `enabled: true`, a title and `localVideo` or `videoEmbed` (plus `poster`, `caption`).
- [ ] **Gallery and artwork** are concept AI images, labeled as such. Replace or supplement them with real, permitted examples when available.
- [ ] **Reviews, rating, bonuses, social proof:** add only real ones (`reviews`, `rating`, `bonuses`, `socialProof`).
- [ ] **Meta Pixel** (`tracking.metaPixelId`): optional; loads only after cookie consent.

## Price and timers
- The comparison price ($87) is the sum of the three individual course prices (`products[].price`); the saving and percentage are computed. Change prices in one place only.
- The daily countdown (`sale`, midnight America/New_York) runs against a price that does not change. Keep the wording consistent with the checkout and check local advertising rules on recurring countdowns.

## Before and after publishing
- [ ] `python3 scripts/build.py`, then commit the sources and the `.min.js` files together.
- [ ] Back up the server files, upload only the public files (see DEPLOY.md), set permissions 644/755.
- [ ] Check the live site: all pages 200, images, console, timers, mobile menu, FAQ, accordion, gallery lightbox, checkout and real access delivery.
