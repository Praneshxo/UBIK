export interface FlowStep {
  steps: string[];
}

export interface LevelItem {
  level: string;
  name: string;
  desc: string;
  examples: string[];
}

export interface NumberedStep {
  step: string;
  text: string;
}

export interface ArticleContentSection {
  type: "paragraph" | "heading" | "blockquote" | "list" | "flow" | "levels" | "principle" | "note" | "numberedSteps" | "comparison";
  text?: string;
  items?: string[];
  level?: number;
  flow?: FlowStep;
  levelsList?: LevelItem[];
  numberedSteps?: NumberedStep[];
  comparison?: { old: string; new: string };
  attribution?: string;
}

export interface ArticleData {
  number: string;
  slug: string;
  title: string;
  category: "INSIGHT" | "RESEARCH" | "CASE STUDY" | "FIELD NOTE" | "EXPERIMENT" | "PERSPECTIVE" | "FUTURE";
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  shortDescription: string;
  badgeNote?: string;
  sections: ArticleContentSection[];
  keyTakeaways: string[];
}

export const ARTICLES_DATABASE: Record<string, ArticleData> = {
  "the-automation-gap": {
    number: "01",
    slug: "the-automation-gap",
    title: "The Automation Gap: Why Automating Tasks Isn't Enough",
    category: "INSIGHT",
    date: "Sep 10, 2026",
    readTime: "5 min read",
    author: "UBIK Research",
    authorRole: "Automation & Systems Architecture",
    shortDescription: "Most companies have automated individual tasks. Very few have automated the journey between those tasks.",
    sections: [
      {
        type: "paragraph",
        text: "A company can have a CRM, ERP, helpdesk, email automation, dashboards and dozens of internal tools—and still operate manually."
      },
      {
        type: "paragraph",
        text: "Why?"
      },
      {
        type: "paragraph",
        text: "Because automation is often designed around **tasks**, not **outcomes**."
      },
      {
        type: "flow",
        flow: {
          steps: [
            "A person receives an email",
            "They read it",
            "They understand what it means",
            "They decide what needs to happen",
            "They open another system",
            "They enter information",
            "They wait for an approval",
            "They update another system",
            "They notify someone"
          ]
        }
      },
      {
        type: "paragraph",
        text: "The company may have automated three of those steps while leaving the actual decision-making process untouched."
      },
      {
        type: "paragraph",
        text: "That's the **automation gap**."
      },
      {
        type: "heading",
        level: 2,
        text: "Task automation vs outcome automation"
      },
      {
        type: "blockquote",
        text: "What repetitive action can we remove?",
        attribution: "Traditional automation asks:"
      },
      {
        type: "blockquote",
        text: "What outcome are we trying to achieve, and what work stands between the request and that outcome?",
        attribution: "A more useful question is:"
      },
      {
        type: "paragraph",
        text: "This changes the architecture completely."
      },
      {
        type: "comparison",
        comparison: {
          old: "Email → Human → Spreadsheet → Human → CRM",
          new: "Input → Understand → Decide → Execute → Verify → Escalate"
        }
      },
      {
        type: "paragraph",
        text: "The system becomes responsible for the workflow—not simply one step inside it."
      },
      {
        type: "paragraph",
        text: "Modern enterprise deployments are increasingly moving toward these multi-step workflows rather than isolated automation."
      },
      {
        type: "heading",
        level: 2,
        text: "Where UBIK comes in"
      },
      {
        type: "paragraph",
        text: "We look at the entire process:"
      },
      {
        type: "flow",
        flow: {
          steps: ["Discover", "Map", "Identify friction", "Design", "Build", "Automate", "Measure"]
        }
      },
      {
        type: "paragraph",
        text: "The objective isn't to eliminate people. It's to remove the unnecessary work surrounding their judgment."
      },
      {
        type: "principle",
        text: "The future of automation isn't fewer clicks. It's fewer things that require someone to click."
      }
    ],
    keyTakeaways: [
      "Shift focus from removing clicks to automating decision-making pathways between systems.",
      "Design systems around complete business outcomes: Input → Understand → Decide → Execute → Verify.",
      "Eliminate manual data transfer friction so humans focus purely on high-leverage judgment."
    ]
  },
  "the-agentic-shift": {
    number: "02",
    slug: "the-agentic-shift",
    title: "From Software That Responds to Software That Acts",
    category: "RESEARCH",
    date: "Sep 08, 2026",
    readTime: "6 min read",
    author: "UBIK Intelligence Lab",
    authorRole: "AI & Autonomous Systems Research",
    shortDescription: "Software used to wait for instructions. The next generation of systems can understand goals, plan actions and execute workflows.",
    sections: [
      {
        type: "paragraph",
        text: "For decades, software worked in a simple relationship:"
      },
      {
        type: "flow",
        flow: {
          steps: ["Human", "Instruction", "Software", "Result"]
        }
      },
      {
        type: "paragraph",
        text: "You clicked the button. You entered the information. You selected the option. The software executed exactly what you asked."
      },
      {
        type: "paragraph",
        text: "But increasingly, systems are being designed around a different model:"
      },
      {
        type: "flow",
        flow: {
          steps: ["Human", "Goal", "System", "Plan", "Action", "Result"]
        }
      },
      {
        type: "paragraph",
        text: "That is a fundamental shift."
      },
      {
        type: "heading",
        level: 2,
        text: "The difference"
      },
      {
        type: "blockquote",
        text: "Click here to create an invoice.",
        attribution: "A traditional application might say:"
      },
      {
        type: "blockquote",
        text: "This customer has approved the proposal. Prepare the invoice, check the contract, confirm the pricing and send it for approval.",
        attribution: "A more autonomous system could understand:"
      },
      {
        type: "paragraph",
        text: "The second system isn't simply executing a command. It is **interpreting an objective**."
      },
      {
        type: "heading",
        level: 2,
        text: "Why this matters"
      },
      {
        type: "paragraph",
        text: "Business processes rarely follow perfect scripts. Documents change. Customers behave differently. Information arrives incomplete. Exceptions appear. Approvals get delayed."
      },
      {
        type: "paragraph",
        text: "This is where rigid automation starts breaking down."
      },
      {
        type: "paragraph",
        text: "Modern agentic systems are increasingly being used for multi-stage workflows that span applications and business functions."
      },
      {
        type: "heading",
        level: 2,
        text: "But autonomy needs boundaries"
      },
      {
        type: "paragraph",
        text: "A system that can act also needs to know:"
      },
      {
        type: "list",
        items: [
          "What it can access",
          "What it can change",
          "What requires approval",
          "When it should stop",
          "When it should ask a person"
        ]
      },
      {
        type: "paragraph",
        text: "The most useful autonomous system isn't the one that acts everywhere. It's the one that knows **where it should act—and where it shouldn't.**"
      },
      {
        type: "principle",
        text: "Give systems goals, not just instructions. Give autonomy, but design the boundaries."
      }
    ],
    keyTakeaways: [
      "Transition software design from reactive user commands to objective-driven goal execution.",
      "Build resilient exception handling for complex real-world workflows that deviate from scripts.",
      "Establish strict permission and human-in-the-loop boundaries for autonomous agents."
    ]
  },
  "from-lead-to-opportunity": {
    number: "03",
    slug: "from-lead-to-opportunity",
    title: "From Lead to Opportunity: Rebuilding the Sales Workflow",
    category: "CASE STUDY",
    date: "Sep 04, 2026",
    readTime: "7 min read",
    author: "UBIK Product Studio",
    authorRole: "Workflow Engineering",
    shortDescription: "Rebuilding the complete sales journey from lead arrival to enrichment, qualification, routing, and CRM execution.",
    badgeNote: "Concept Case Study / UBIK Experiment",
    sections: [
      {
        type: "note",
        text: "Note: This document represents a Concept Case Study / UBIK Experiment demonstrating modern sales workflow architecture."
      },
      {
        type: "heading",
        level: 2,
        text: "The problem"
      },
      {
        type: "paragraph",
        text: "A growing company receives leads from multiple channels:"
      },
      {
        type: "list",
        items: ["Website", "Email", "Social media", "Referrals", "Campaigns"]
      },
      {
        type: "paragraph",
        text: "Every lead enters the business differently. Someone has to read the message. Someone researches the company. Someone decides whether it's relevant. Someone assigns a salesperson. Someone follows up. Someone updates the CRM."
      },
      {
        type: "paragraph",
        text: "The problem isn't the number of leads. **The problem is everything that happens after the lead arrives.**"
      },
      {
        type: "heading",
        level: 2,
        text: "Our approach"
      },
      {
        type: "paragraph",
        text: "UBIK maps the complete journey:"
      },
      {
        type: "flow",
        flow: {
          steps: ["Lead", "Qualification", "Research", "Scoring", "Assignment", "Outreach", "Follow-up", "CRM"]
        }
      },
      {
        type: "paragraph",
        text: "Then we identify which decisions can be handled by software and which require people."
      },
      {
        type: "heading",
        level: 2,
        text: "The system"
      },
      {
        type: "numberedSteps",
        numberedSteps: [
          { step: "01 — Capture", text: "Collect incoming opportunities from multiple channels seamlessly into a unified pipeline." },
          { step: "02 — Understand", text: "Extract company name, core requirements, industry vertical, team size, and buyer intent." },
          { step: "03 — Research", text: "Enrich the opportunity automatically with relevant business context and financial signals." },
          { step: "04 — Qualify", text: "Evaluate the opportunity against predefined ICP (Ideal Customer Profile) criteria." },
          { step: "05 — Route", text: "Send the qualified opportunity to the appropriate account executive based on domain expertise." },
          { step: "06 — Act", text: "Prepare personalized follow-ups, schedule tasks, and construct initial outreach drafts." },
          { step: "07 — Learn", text: "Track deal outcomes for qualified opportunities and continuously tune pipeline scoring." }
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "The result"
      },
      {
        type: "paragraph",
        text: "Instead of employees spending time moving information between systems, they spend more time on:"
      },
      {
        type: "list",
        items: ["Relationships", "Negotiation", "High-value decisions"]
      },
      {
        type: "principle",
        text: "Don't automate the salesperson. Automate everything around the salesperson that prevents them from selling."
      }
    ],
    keyTakeaways: [
      "Automate background research, intent classification, and CRM data entry to free up sales rep time.",
      "Implement real-time multi-channel lead enrichment before human handoff.",
      "Focus human capital strictly on trust building, relationship management, and deal closing."
    ]
  },
  "what-should-never-be-automated": {
    number: "04",
    slug: "what-should-never-be-automated",
    title: "What Should Never Be Automated?",
    category: "FIELD NOTE",
    date: "Aug 30, 2026",
    readTime: "5 min read",
    author: "UBIK Field Notes",
    authorRole: "Governance & Systems Ethics",
    shortDescription: "The most important automation decision isn't what you can automate. It's what you shouldn't.",
    sections: [
      {
        type: "paragraph",
        text: "Automation has a seductive promise:"
      },
      {
        type: "blockquote",
        text: "If a machine can do it, let the machine do it."
      },
      {
        type: "paragraph",
        text: "That's not always good design."
      },
      {
        type: "paragraph",
        text: "Some decisions fundamentally require:"
      },
      {
        type: "list",
        items: ["Context", "Empathy", "Accountability", "Ethics", "Negotiation", "Creativity", "Human judgment"]
      },
      {
        type: "paragraph",
        text: "The goal isn't maximum autonomy. The goal is **appropriate autonomy**."
      },
      {
        type: "heading",
        level: 2,
        text: "A simple framework"
      },
      {
        type: "paragraph",
        text: "We think about business actions across four levels:"
      },
      {
        type: "levels",
        levelsList: [
          {
            level: "LEVEL 01",
            name: "AUTOMATE",
            desc: "Repetitive, predictable, low-risk work.",
            examples: ["Data entry", "Document extraction", "Notifications", "Routine classification"]
          },
          {
            level: "LEVEL 02",
            name: "DELEGATE",
            desc: "The system can perform the work but should remain observable.",
            examples: ["Research", "Report generation", "Lead qualification", "Scheduling"]
          },
          {
            level: "LEVEL 03",
            name: "APPROVE",
            desc: "The system prepares the action; a person approves it.",
            examples: ["Financial transactions", "Sensitive communications", "Contract changes", "High-value decisions"]
          },
          {
            level: "LEVEL 04",
            name: "HUMAN",
            desc: "Keep the decision fundamentally human.",
            examples: ["Strategic direction", "Sensitive employee decisions", "Ethical judgments", "Major negotiations"]
          }
        ]
      },
      {
        type: "paragraph",
        text: "Modern enterprise guidance increasingly emphasizes human checkpoints, approval thresholds and governance as systems become more autonomous."
      },
      {
        type: "principle",
        text: "Good automation doesn't remove humans. It removes humans from the wrong parts of the process."
      }
    ],
    keyTakeaways: [
      "Categorize workflows across 4 levels of autonomy from total automation to strictly human.",
      "Reserve high-empathy, high-accountability, and strategic decisions exclusively for human judgment.",
      "Build human approval checkpoints for financial, legal, and high-value customer interactions."
    ]
  },
  "can-a-system-run-a-research-project": {
    number: "05",
    slug: "can-a-system-run-a-research-project",
    title: "Can a System Run a Research Project?",
    category: "EXPERIMENT",
    date: "Aug 22, 2026",
    readTime: "6 min read",
    author: "UBIK Labs",
    authorRole: "Experimental Systems Architect",
    shortDescription: "What happens when you give a system a business question instead of a predefined task?",
    sections: [
      {
        type: "heading",
        level: 2,
        text: "The question"
      },
      {
        type: "paragraph",
        text: "What happens when you give a system a business question instead of a predefined task?"
      },
      {
        type: "paragraph",
        text: "For example:"
      },
      {
        type: "blockquote",
        text: "Should we enter this market?"
      },
      {
        type: "paragraph",
        text: "A conventional workflow might require:"
      },
      {
        type: "flow",
        flow: {
          steps: ["Researcher", "Search", "Spreadsheet", "Analysis", "Presentation"]
        }
      },
      {
        type: "paragraph",
        text: "We wanted to think about a different architecture."
      },
      {
        type: "heading",
        level: 2,
        text: "The experiment"
      },
      {
        type: "paragraph",
        text: "Give the system one objective:"
      },
      {
        type: "blockquote",
        text: "Evaluate whether Market X is worth entering."
      },
      {
        type: "paragraph",
        text: "Then break the objective into research missions:"
      },
      {
        type: "numberedSteps",
        numberedSteps: [
          { step: "01 — Market", text: "How large is the total addressable opportunity?" },
          { step: "02 — Competition", text: "Who already operates there and what are their moats?" },
          { step: "03 — Customer", text: "Who experiences the acute problem and has willingness to pay?" },
          { step: "04 — Economics", text: "What does the unit business model and margin structure look like?" },
          { step: "05 — Risk", text: "What regulatory, technical, or market risks could prevent successful entry?" },
          { step: "06 — Opportunity", text: "Where are the underserved white spaces and feature gaps?" },
          { step: "07 — Recommendation", text: "What action should the leadership team take next?" }
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "The system architecture"
      },
      {
        type: "flow",
        flow: {
          steps: [
            "Question",
            "Planner",
            "Research Agents",
            "Evidence",
            "Analysis",
            "Contradiction Check",
            "Synthesis",
            "Decision Brief"
          ]
        }
      },
      {
        type: "heading",
        level: 2,
        text: "The interesting part"
      },
      {
        type: "paragraph",
        text: "The challenge isn't generating information. The challenge is determining:"
      },
      {
        type: "paragraph",
        text: "**Which information matters?**"
      },
      {
        type: "paragraph",
        text: "A system that produces 200 pages of research isn't necessarily intelligent. A system that identifies the **five facts that change the decision** is far more valuable."
      },
      {
        type: "principle",
        text: "The future of research isn't more information. It's better decisions from information."
      }
    ],
    keyTakeaways: [
      "Decompose high-level strategic inquiries into parallel autonomous research sub-missions.",
      "Incorporate explicit contradiction checking and evidence verification loops in agentic research.",
      "Filter out report noise to deliver decision briefs focused exclusively on decision-altering facts."
    ]
  },
  "your-product-is-not-your-brand": {
    number: "06",
    slug: "your-product-is-not-your-brand",
    title: "Your Product Is Not Your Brand",
    category: "PERSPECTIVE",
    date: "Aug 15, 2026",
    readTime: "5 min read",
    author: "UBIK Brand Studio",
    authorRole: "Brand & Strategic Design",
    shortDescription: "A product explains what you built. A brand explains why anyone should care.",
    sections: [
      {
        type: "paragraph",
        text: "A technology company can have:"
      },
      {
        type: "list",
        items: [
          "Excellent engineering",
          "Powerful technology",
          "Strong infrastructure",
          "Sophisticated products"
        ]
      },
      {
        type: "paragraph",
        text: "and still be forgettable."
      },
      {
        type: "paragraph",
        text: "Because technology explains **what something does**."
      },
      {
        type: "paragraph",
        text: "Brand explains:"
      },
      {
        type: "list",
        items: [
          "Who you are.",
          "What you believe.",
          "Why you exist.",
          "Why someone should choose you."
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "The common mistake"
      },
      {
        type: "paragraph",
        text: "Companies often begin branding with:"
      },
      {
        type: "flow",
        flow: {
          steps: ["Logo", "Colors", "Website", "Social media"]
        }
      },
      {
        type: "paragraph",
        text: "We think the sequence should start earlier:"
      },
      {
        type: "flow",
        flow: {
          steps: ["Research", "Positioning", "Narrative", "Identity", "Experience"]
        }
      },
      {
        type: "heading",
        level: 2,
        text: "The strategic sequence"
      },
      {
        type: "numberedSteps",
        numberedSteps: [
          {
            step: "01 — Research",
            text: "What does the market believe? What do customers actually care about? Where is the category heading? What does everyone already sound like?"
          },
          {
            step: "02 — Positioning",
            text: "What territory can the company own? What makes it meaningfully different?"
          },
          {
            step: "03 — Narrative",
            text: "What is the company's point of view? What future is it trying to create?"
          },
          {
            step: "04 — Identity",
            text: "Now—and only now—do visual systems become meaningful. Logo. Typography. Color. Motion. Interface. Language."
          },
          {
            step: "05 — Experience",
            text: "The brand should survive beyond the website. It should exist in product → sales → onboarding → support → communication → culture."
          }
        ]
      },
      {
        type: "principle",
        text: "A brand isn't what you design. It's the system of meaning people experience."
      }
    ],
    keyTakeaways: [
      "Avoid starting brand design with visual assets before defining core market positioning and narrative.",
      "Ensure brand narrative informs every touchpoint from sales onboarding to product UI micro-copy.",
      "Treat brand as a cohesive operating system of meaning, trust, and perceived value."
    ]
  },
  "the-company-after-software": {
    number: "07",
    slug: "the-company-after-software",
    title: "The Company After Software",
    category: "FUTURE",
    date: "Aug 02, 2026",
    readTime: "6 min read",
    author: "UBIK Leadership",
    authorRole: "Executive Strategy",
    shortDescription: "What happens when software stops being something employees use and becomes something that works alongside them?",
    sections: [
      {
        type: "paragraph",
        text: "For decades, companies bought software:"
      },
      {
        type: "list",
        items: ["CRM", "ERP", "HRMS", "Accounting", "Project management", "Analytics"]
      },
      {
        type: "paragraph",
        text: "Every department received another interface. And humans became the connection between them."
      },
      {
        type: "paragraph",
        text: "They copied. Pasted. Checked. Updated. Forwarded. Approved. Repeated."
      },
      {
        type: "heading",
        level: 2,
        text: "But something is changing."
      },
      {
        type: "paragraph",
        text: "Instead of humans moving between software systems, software can increasingly move between systems on behalf of humans."
      },
      {
        type: "paragraph",
        text: "That changes the role of software. It stops being merely a **tool**. It becomes an **operator**."
      },
      {
        type: "heading",
        level: 2,
        text: "Imagine a company where:"
      },
      {
        type: "list",
        items: [
          "A customer request arrives.",
          "The system understands it.",
          "It checks the customer's history.",
          "It identifies the appropriate process.",
          "It gathers the required information.",
          "It prepares the response.",
          "It updates internal systems.",
          "It requests approval if necessary.",
          "It completes the action.",
          "And it reports what happened."
        ]
      },
      {
        type: "paragraph",
        text: "No one had to manually move the request through six different applications."
      },
      {
        type: "heading",
        level: 2,
        text: "This doesn't mean humans disappear."
      },
      {
        type: "paragraph",
        text: "It means their role changes:"
      },
      {
        type: "comparison",
        comparison: {
          old: "Operators → Data movers → Managing software",
          new: "Decision makers → Problem solvers → Managing outcomes"
        }
      },
      {
        type: "paragraph",
        text: "The shift toward agentic systems is increasingly being discussed as a move from isolated tools toward systems capable of executing multi-step work, but governance and integration remain critical to making that reliable."
      },
      {
        type: "heading",
        level: 2,
        text: "The UBIK view"
      },
      {
        type: "paragraph",
        text: "We believe the next generation of companies won't be defined by how much software they own. They'll be defined by **how intelligently their systems work together.**"
      },
      {
        type: "flow",
        flow: {
          steps: [
            "Research the problem",
            "Design the system",
            "Build the intelligence",
            "Automate the work",
            "Measure the outcome"
          ]
        }
      },
      {
        type: "principle",
        text: "UBIK — Beyond Intelligence. Into Action."
      }
    ],
    keyTakeaways: [
      "Move beyond purchasing siloed software interfaces toward orchestrating cross-system intelligent operators.",
      "Reposition human workforce from repetitive data-moving operators into strategic decision makers.",
      "Align business operations around Research → Design → Build → Automate → Measure."
    ]
  }
};

export const ARTICLES_LIST = Object.values(ARTICLES_DATABASE);
