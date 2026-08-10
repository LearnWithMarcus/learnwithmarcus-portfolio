LearnWithMarcus Portfolio v2.4
================================

This update adds the scalable Design Gallery system using the first two gallery items:
- interaction-diamonds
- screen-scene-audiophile-lounge-tv-remote

FILES INCLUDED
--------------
public/index.html
public/css/styles.css
public/js/main.js
public/js/gallery-data.js

YOUR IMAGE FOLDERS ARE NOT INCLUDED IN THIS ZIP.
You already placed them locally under:
public/assets/images/design-gallery/

Before testing, confirm the TV/remote folder contains:
01.png through 07.png
(the former long-named replay-state image should be renamed 07.png).

INSTALL
-------
1. Close or save any open edits in VS Code.
2. Extract this ZIP into the ROOT of:
   C:\LearnWithMarcus\GITHUB - learnwithmarcus-portfolio
3. Allow Windows to replace the included code files.
4. Do NOT delete your existing public/assets/images/design-gallery folders.
5. Open the repo in VS Code.
6. Test locally or commit/sync and test the Cloudflare deployment.

EXPECTED GALLERY BEHAVIOR
-------------------------
- "Design Gallery" shows one master card per design idea.
- "All Work" also shows the current Design Gallery items.
- Clicking a card opens a multi-image lightbox.
- The lightbox includes:
  * large main image
  * visible thumbnail strip
  * image counter
  * previous/next buttons
  * keyboard Left/Right navigation
  * title, description, tools, tags, and per-image caption
- Mobile changes to a stacked layout with a horizontal thumbnail strip.

ADDING FUTURE ITEMS
-------------------
1. Add the new image folder under:
   public/assets/images/design-gallery/<folder-name>/
2. Keep gallery-info.txt in that folder as your human-readable source notes.
3. Add one matching object to:
   public/js/gallery-data.js
4. No new gallery HTML or modal code is required.

Suggested Git commit:
Add scalable Design Gallery with multi-image lightbox
