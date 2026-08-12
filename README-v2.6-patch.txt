LearnWithMarcus v2.6 architecture patch

FILES TO REPLACE
1. public/index.html
2. public/js/main.js

OPTIONAL BUT RECOMMENDED UPLOADER UPDATE
3. UploaderTool/Deploy-Storyline.ps1

WHAT CHANGED
- Active Development now uses one growing updates[] array.
- The first array entry automatically populates the Recent Update and Last Updated fields.
- Development History renders the entire array, preserving August 9, August 10, August 11, and future entries.
- The Storyline uploader explicitly sets MIME types and Cache-Control metadata so story.html is served as HTML rather than raw source text and frequently changing Storyline files revalidate after republishes.

IMPORTANT
This is a targeted patch. It intentionally does NOT include styles.css or gallery-data.js, so it will not overwrite your newer Design Gallery glow/style work.
