LearnWithMarcus Portfolio v2.11
=================================

POLISH PASS

Updated:
- Globally optically centered the left/right chevrons inside circular viewer
  navigation buttons for both Design Gallery and Case Study viewers.
- Removed the browser-native horizontal scrollbar from the Case Study document
  rail while preserving horizontal scrolling.
- Corrected obvious typos and wording issues in case-study-data.js, including:
  * assistance
  * Animated Video Storyboard
  * illustrating
  * identify the learner's current role
  * Gagné's Nine Events of Instruction
  * Mayer's 12 Principles of Multimedia Learning
  * Cognitive Load Theory
  * Retention & Transfer
  * several small readability/grammar refinements

IMPORTANT:
This is a targeted patch package containing only the files changed in v2.11:
- public/css/styles.css
- public/js/case-study-data.js

Do NOT replace your newly reformatted/content-aware case-study.js with an older
copy. This package intentionally does not include case-study.js.

Suggested Git commit message:
fix: polish case study rail, chevrons, and content copy
