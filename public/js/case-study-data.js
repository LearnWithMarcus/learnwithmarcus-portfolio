// =========================================
// LearnWithMarcus Case Study Data
// =========================================

window.caseStudyItems = [
  {
    id: "northstar-flexline-product-launch",
    eyebrow: "CASE STUDY · PRODUCT ENABLEMENT",
    title: "Preparing CX Team for New Product Launch",
    organization: "Northstar Business Finance",
    shortDescription:
      "A fictionalized financial-services case study demonstrating training needs analysis, learning design, scenario development, performance support, and overall lesson planning.",
    thumbnail:
      "/assets/case-studies/northstar-flexline-product-launch/thumb.png",
    tags: ["Needs Analysis", "Multimedia", "eLearning", "Performance Support"],
    documents: [
      {
        id: "case-study-scenario",
        phase: "Source Context Materials",
        title: "Case Study Context",
        fileType: "PDF",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/01-case-study-scenario/case-study-scenario.pdf",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/01-case-study-scenario/preview/thumb.png",
        overview:
          "The background, business need, and learning need supplied as the starting point for training request.",
        designDecision: "",
        frameworks: [],
        tools: [],
        ai: {
          used: true,
          description:
            "Claude supported the fictionalization of the original source scenario for public portfolio use.",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/01-case-study-scenario/preview/01.png",
            alt: "Northstar Business Finance case study scenario.",
          },
        ],
      },
      {
        id: "marketing-product-brief",
        phase: "Source Context Materials",
        title: "Marketing Product Brief",
        fileType: "PDF",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/02-marketing-product-brief/marketing-product-brief.pdf",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/02-marketing-product-brief/preview/thumb.png",
        overview:
          "The supplied product-marketing reference describing FlexLine Business Credit, including product mechanics, eligibility, pricing concepts, and common misconceptions.",
        designDecision: "",
        frameworks: [],
        tools: [],
        ai: {
          used: true,
          description:
            "Claude supported fictionalization of the source content while preserving the instructional challenge.",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/02-marketing-product-brief/preview/01.png",
            alt: "FlexLine Business Credit marketing product brief.",
          },
        ],
      },
      {
        id: "mock-collaboration-thread",
        phase: "Source Context Materials",
        title: "Mock Collaboration Thread",
        fileType: "PDF",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/03-mock-collaboration-thread/mock-collaboration-thread.pdf",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/03-mock-collaboration-thread/preview/thumb.png",
        overview:
          "A fictionalized pilot-feedback thread capturing the questions and misconceptions Customer Experience representatives were encountering during customer conversations.",
        designDecision: "",
        frameworks: [],
        tools: [],
        ai: {
          used: true,
          description:
            "Claude supported fictionalization of names, product references, and scenario details for portfolio use.",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/03-mock-collaboration-thread/preview/01.png",
            alt: "Mock collaboration thread with pilot customer questions.",
          },
        ],
      },
      {
        id: "stakeholder-email",
        phase: "Source Context Materials",
        title: "Stakeholder Email",
        fileType: "PDF",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/04-stakeholder-email/stakeholder-email.pdf",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/04-stakeholder-email/preview/thumb.png",
        overview:
          "The stakeholder request defining the audience, constraints, coursework requirements, and go-live timeline.",
        designDecision: "",
        frameworks: [],
        tools: [],
        ai: {
          used: true,
          description:
            "Claude supported fictionalization and restructuring of the stakeholder input for public portfolio use.",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/00-source-materials/04-stakeholder-email/preview/01.png",
            alt: "Customer Experience Enablement stakeholder email.",
          },
        ],
      },
      {
        id: "training-needs-analysis",
        phase: "Analyze",
        title: "My Training Needs Analysis",
        fileType: "Microsoft Word",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/01-analyze/01-training-needs-analysis/training-needs-analysis.docx",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/01-analyze/01-training-needs-analysis/preview/thumb.png",
        overview:
          "My initial analysis of the root problem, business need, audience, timeline & constraints, anticipated success metrics, and deliverables. Once I understand the root problem and desired results, I refer to Bloom's for assistnace in creating measurable Learning Objectives.",
        designDecision:
          "Before committing to modalities or development choices, I like to define the scope of the project, measurable learning objectives, assessment or tracking requirements, and what success will look like after completion. I typically inquire about and identify the answers to all of these questions during my initial Kickoff Meeting with my client or stakeholder.",
        frameworks: [
          "ADDIE",
          "Bloom's Revised Taxonomy",
          "Kirkpatrick's Four Levels of Evaluation",
        ],
        tools: [],
        ai: {
          used: false,
          description: "",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/01-analyze/01-training-needs-analysis/preview/01.png",
            alt: "Training Needs Analysis page 1.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/01-analyze/01-training-needs-analysis/preview/02.png",
            alt: "Training Needs Analysis page 2.",
          },
        ],
      },
      {
        id: "content-gap-analysis",
        phase: "Analyze",
        title: "Content Gap Analysis",
        fileType: "Microsoft Word",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/01-analyze/02-content-gap-analysis/content-gap-analysis.docx",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/01-analyze/02-content-gap-analysis/preview/thumb.png",
        overview:
          "A comparison of supplied content against the knowledge and behaviors required for confident and accurate customer expectations.",
        designDecision:
          "Using the Learning Objectives as my guide and compass, I comb over the provided content to identify gaps, risks, and recommended follow-ups. I then consolidate my findings to be shared with stakeholders for review and approval. When content approval is granted, I organize the Content Outline in a scaffolding fashion.",
        frameworks: ["ADDIE", "Gap Analysis", "Chunking"],
        tools: [],
        ai: {
          used: false,
          description: "",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/01-analyze/02-content-gap-analysis/preview/01.png",
            alt: "Content and Gap Analysis page 1.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/01-analyze/02-content-gap-analysis/preview/02.png",
            alt: "Content and Gap Analysis page 2.",
          },
        ],
      },
      {
        id: "scenario-video-storyboard",
        phase: "Design",
        title: "Animated Video Storyboard",
        fileType: "Microsoft Word",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/02-design/01-scenario-video-storyboard/scenario-video-storyboard.docx",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/02-design/01-scenario-video-storyboard/preview/thumb.png",
        overview:
          "A scene-by-scene design document for the animated opener video that grabs learner attention and establishes the new product by illustrating potential customer concerns and the need for agent readiness.",
        designDecision:
          "With basic andragogy principles in mind, I begin my design with determining how I can present an applicable and relevant problem to the learners so that they can relate and become self-invested into the following content.",
        frameworks: ["ADDIE", "Gagne's Nine Events", "Meyer's 12 Principles"],
        tools: ["Microsoft Word", "Vyond", "Articulate Storyline 360"],
        ai: {
          used: true,
          description:
            "ChatGPT supported scenario ideation and script refinement; I performed the final sequencing and instructional purpose.",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/01-scenario-video-storyboard/preview/01.png",
            alt: "Scenario Video Storyboard page 1.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/01-scenario-video-storyboard/preview/02.png",
            alt: "Scenario Video Storyboard page 2.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/01-scenario-video-storyboard/preview/03.png",
            alt: "Scenario Video Storyboard page 3.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/01-scenario-video-storyboard/preview/04.png",
            alt: "Scenario Video Storyboard page 4.",
          },
        ],
      },
      {
        id: "elearning-course-storyboard",
        phase: "Design",
        title: "eLearning Course Storyboard",
        fileType: "Microsoft Word",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/02-design/02-elearning-course-storyboard/elearning-course-storyboard.docx",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/02-design/02-elearning-course-storyboard/preview/thumb.png",
        overview:
          "A granular slide-by-slide storyboard illustrating course and content flow, slide text and visual treatment, anticipated interactions, and planned use of assessment with associated feedback messaging. I also include brief notes of slide functionality and intent.",
        designDecision:
          "In order to satisfy the singular independent course requirement that can apply to a dual audience, I chose to utilize a dual-branching eLearning course. The course is designed to pull learner data from the LMS to identifty current role. Once the role is defined, the course will automatically advance accordingly: new-hire agents will view all content while tenured agents will skip the foundational loan content and be directed straight to the new product information.",
        frameworks: [
          "ADDIE",
          "Chunking",
          "Gagne's Nine Events",
          "Meyer's 12 Principles",
          "Cognitive Overload",
          "Scenario-Based Learning",
        ],
        tools: ["Microsoft Word", "Articulate Storyline 360"],
        ai: {
          used: false,
          description: "",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/02-elearning-course-storyboard/preview/01.png",
            alt: "eLearning Course Storyboard page 1.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/02-elearning-course-storyboard/preview/02.png",
            alt: "eLearning Course Storyboard page 2.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/02-elearning-course-storyboard/preview/03.png",
            alt: "eLearning Course Storyboard page 3.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/02-elearning-course-storyboard/preview/04.png",
            alt: "eLearning Course Storyboard page 4.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/02-design/02-elearning-course-storyboard/preview/05.png",
            alt: "eLearning Course Storyboard page 5.",
          },
        ],
      },
      {
        id: "flexline-live-call-speed-sheet",
        phase: "Develop",
        title: "FlexLine Speed Sheet Resource",
        fileType: "PDF",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/03-develop/01-flexline-speed-sheet/flexline-live-call-speed-sheet.pdf",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/03-develop/01-flexline-speed-sheet/preview/thumb.png",
        overview:
          "A two-page performance-support resource designed for quick reference during live customer conversations.",
        designDecision:
          "With the understanding and belief that learners will not typically refer back to a full eLearning course after completion, I wanted to provide a quick-reference resource that can be printed or accessed online during live customer conversations.",
        frameworks: ["Performance Support", "Retain & Transfer"],
        tools: ["PDF", "Generative AI"],
        ai: {
          used: true,
          description:
            "Claude assisted with drafting and final file production; content was reviewed against the fictionalized brief and known content gaps.",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/03-develop/01-flexline-speed-sheet/preview/01.png",
            alt: "FlexLine Live-Call Speed Sheet page 1.",
          },
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/03-develop/01-flexline-speed-sheet/preview/02.png",
            alt: "FlexLine Live-Call Speed Sheet page 2.",
          },
        ],
      },
      {
        id: "design-rationale",
        phase: "Rationale",
        title: "My Design Rationale & Reflection",
        fileType: "Microsoft Word",
        sourceFile:
          "/assets/case-studies/northstar-flexline-product-launch/06-rationale/01-design-rationale/design-rationale-reflection.docx",
        thumbnail:
          "/assets/case-studies/northstar-flexline-product-launch/06-rationale/01-design-rationale/preview/thumb.png",
        overview:
          "My explanation of the analysis, frameworks, instructional reasoning, modality choices, measurement strategy, and use of AI across the case study.",
        designDecision:
          "My effort in providing a behind-the-scenes understanding of my overall instructional design process. I specifically focus on my approach, reasoning, and decision-making.",
        frameworks: [
          "ADDIE",
          "Adult Learning Principles",
          "Scenario-Based Learning",
          "Performance Support",
        ],
        tools: ["Microsoft Word"],
        ai: {
          used: false,
          description: "",
        },
        pages: [
          {
            src: "/assets/case-studies/northstar-flexline-product-launch/06-rationale/01-design-rationale/preview/01.png",
            alt: "Design Rationale and Reflection.",
          },
        ],
      },
    ],
  },
];
