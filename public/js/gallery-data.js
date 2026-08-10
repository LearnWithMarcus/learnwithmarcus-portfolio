// =========================================
// LearnWithMarcus Design Gallery Data
// Add future gallery items to this array.
// Keep each item's images inside:
// /assets/images/design-gallery/<folder>/
// =========================================

window.designGalleryItems = [
  {
    id: "interaction-diamonds",
    title: "Interactive Related-Content Reveal",
    category: "Interaction Design",
    thumbnail: "/assets/images/design-gallery/interaction-diamonds/thumb.png",
    shortDescription:
      "A layered related-content interaction using bold visual buttons to reveal supporting benefit details without overloading the base slide.",
    description:
      "Designed to introduce a category of employee benefits and its key features, this Storyline interaction uses a visually distinctive diamond-button layout, progressive on-slide guidance, and click-to-reveal layers to keep supporting detail available without crowding the main view.",
    tools: ["Articulate Storyline 360"],
    tags: [
      "Storyline",
      "Interaction Design",
      "Related Content",
      "Visual Design",
      "Learner Engagement"
    ],
    priorProfessionalWork: true,
    featuredImage: 0,
    images: [
      {
        src: "/assets/images/design-gallery/interaction-diamonds/01.png",
        title: "Slide Load",
        caption: "The base slide and diamond-shaped content buttons enter with their topic labels.",
        alt: "Related-content slide with neon green diamond buttons and topic labels."
      },
      {
        src: "/assets/images/design-gallery/interaction-diamonds/02.png",
        title: "Supporting Statement",
        caption: "Supporting context is introduced while the primary interaction remains visually prominent.",
        alt: "Related-content slide with neon green diamond buttons and a supporting statement."
      },
      {
        src: "/assets/images/design-gallery/interaction-diamonds/03.png",
        title: "Click-to-Reveal Guidance",
        caption: "A subtle instruction fades in to cue the learner to explore the selectable content.",
        alt: "Related-content slide showing an instructional hint that prompts the learner to select a diamond."
      },
      {
        src: "/assets/images/design-gallery/interaction-diamonds/04.png",
        title: "Layer Reveal",
        caption: "Selecting a content button opens a supporting layer with additional details while preserving the visual context of the base slide.",
        alt: "Related-content slide with a supporting detail layer displayed after a learner selection."
      }
    ]
  },
  {
    id: "screen-scene-audiophile-lounge-tv-remote",
    title: "Immersive Scenario Video Experience",
    category: "Scenario & Multimedia",
    thumbnail:
      "/assets/images/design-gallery/screen-scene-audiophile-lounge-tv-remote/thumb.png",
    shortDescription:
      "An immersive television scene that turns a scenario video into a learner-controlled media experience.",
    description:
      "Built to visualize a situation and internal team through an immersive scenario, this slide combines a Photoshop-composited lounge scene, a Vyond animation placed inside a hollowed television frame, and Storyline interactions that gate entry with a remote control, support replay, and provide audio controls.",
    tools: ["Articulate Storyline 360", "Adobe Photoshop", "Vyond"],
    tags: [
      "Storyline",
      "Photoshop",
      "Vyond",
      "Immersive Design",
      "Interaction Design",
      "Learner Engagement"
    ],
    priorProfessionalWork: true,
    featuredImage: 0,
    images: [
      {
        src: "/assets/images/design-gallery/screen-scene-audiophile-lounge-tv-remote/01.png",
        title: "TV Remote Gate",
        caption: "The scene opens behind a gated overlay that requires the learner to use the remote control before continuing.",
        alt: "Immersive lounge scene with a television and a gated prompt requiring the learner to select a remote control."
      },
      {
        src: "/assets/images/design-gallery/screen-scene-audiophile-lounge-tv-remote/02.png",
        title: "Remote Hover State",
        caption: "The remote responds visually on hover to reinforce that it is the required interactive control.",
        alt: "Immersive lounge scene showing the hover state of an interactive television remote control."
      },
      {
        src: "/assets/images/design-gallery/screen-scene-audiophile-lounge-tv-remote/03.png",
        title: "TV Turns On",
        caption: "After the gate clears, the television powers on and the scene transitions toward the video experience.",
        alt: "Immersive lounge scene with the television turned on and a scenario-video thumbnail visible."
      },
      {
        src: "/assets/images/design-gallery/screen-scene-audiophile-lounge-tv-remote/04.png",
        title: "Scenario Video Begins",
        caption: "The animated scenario plays directly inside the realistic television frame to preserve the environmental context.",
        alt: "Animated scenario video playing within a realistic television frame in an immersive lounge scene."
      },
      {
        src: "/assets/images/design-gallery/screen-scene-audiophile-lounge-tv-remote/05.png",
        title: "Scenario in Progress",
        caption: "The video continues inside the scene rather than switching to a conventional full-screen media player.",
        alt: "Animated scenario continuing to play inside the television in an immersive lounge scene."
      },
      {
        src: "/assets/images/design-gallery/screen-scene-audiophile-lounge-tv-remote/06.png",
        title: "Audio Control",
        caption: "Interactive speakers provide a contextual mute control, with a glow state confirming the learner's hover target.",
        alt: "Immersive lounge scene with speaker controls glowing to indicate an interactive audio mute option."
      },
      {
        src: "/assets/images/design-gallery/screen-scene-audiophile-lounge-tv-remote/07.png",
        title: "Replay Interaction",
        caption: "After playback, the television itself becomes the replay target and uses a glow state to communicate interactivity.",
        alt: "Immersive lounge scene with the television glowing to indicate that the learner can replay the scenario video."
      }
    ]
  }
];
