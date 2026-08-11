LearnWithMarcus Portfolio — v2.5
August 10, 2026

WHAT CHANGED
- Design Gallery is now the default Selected Work filter.
- Added four Design Gallery projects:
  1. Immersive Benefits Lounge (positioned first as a featured favorite)
  2. Cause & Effect Examples w/ Layers
  3. Screen Scene w/ Knowledge Check
  4. 3-Step Process Interaction
- Existing gallery projects remain intact.
- Active Development Recent Update and Last Updated remain easy-to-edit constants near the top of index.html.
- Development History now automatically uses the current ACTIVE_DEVELOPMENT values as the newest entry.
- The August 9 update is preserved as archived history.

ACTIVE DEVELOPMENT WORKFLOW
At the top of public/index.html, edit:
  recentUpdate: "..."
  lastUpdated: "Month D, YYYY"

The Development History lightbox automatically displays those values as the newest entry.
Before replacing them with your next update, copy the outgoing update into the history array directly below the two current values. This preserves a permanent timeline.

GALLERY NOTES
- New image folders are included under public/assets/images/design-gallery/.
- screen-scene-office-shelves-tv/04 - Copy.png was normalized to 04.png to match gallery-info.txt.
- three-step-process-interaction did not include thumb.png, so thumb.png was created from its designated featured image, 06.png.

SUGGESTED GIT COMMIT MESSAGE
feat: expand design gallery and sync active development history
