const companyData = {
  services: `We offer the following services:

1. **Integrated IT Services** — End-to-end technology solutions including network infrastructure, cloud services, security management, and digital workplace solutions.

2. **Software Development & Automation** — Custom software engineering and intelligent automation solutions using RPA, AI-driven development, and DevOps practices.

3. **Data Analytics & AI** — Advanced analytics, machine learning, and artificial intelligence solutions transforming raw data into actionable business intelligence.

4. **IT Advisory & Strategy** — Strategic technology consulting to align IT investments with business objectives, digital transformation roadmaps, and governance frameworks.

5. **Managed IT Services & Support** — Comprehensive managed services including 24/7 monitoring, helpdesk support, incident management, and proactive maintenance.

Would you like to know more about any specific service?`,

  about: `Bafana Consulting Pty Ltd is a collection of specialized technology experts united by deep tech knowledge, an innovative mindset, and a passion for leveraging cutting-edge solutions to drive business transformation. We are based in South Africa and our tagline is "Innovating Tomorrow".`,

  contact: `You can reach us at:
- Email: bheki.malinga@bafanaconsulting.co.za
- LinkedIn: linkedin.com/company/bafana-consulting-pty-ltd

You can also click the "Schedule Consultation" button on the website to fill out a contact form and someone from our team will get back to you.`,

  consultation: `To schedule a consultation, you can:
1. Click the "Schedule Consultation" button on the website — it will open a form where you can share your details and what business you'd like to discuss.
2. Email us directly at bheki.malinga@bafanaconsulting.co.za

Once we receive your request, a team member will be in contact with you shortly.`,

  mission: `Our Mission: To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.

Our Vision: To be the leading technology consulting partner for organizations seeking transformative digital solutions across Africa and beyond.

Our Objective: To deliver measurable business outcomes by combining deep technical expertise with industry knowledge and a client-first approach.`,

  approach: `Our approach follows four key phases:

1. **Discovery & Assessment** — Deep dive into your existing systems and processes to understand your needs.
2. **Strategy & Planning** — Develop comprehensive roadmaps tailored to your business goals.
3. **Implementation & Integration** — Execute with precision using agile methodologies.
4. **Optimization & Support** — Continuous improvement and 24/7 support to ensure lasting success.`,

  itServices: `Our Integrated IT Services include end-to-end technology solutions such as network infrastructure design and management, cloud services (migration, hosting, hybrid cloud), security management and cybersecurity, and digital workplace solutions. We ensure your IT environment is robust, scalable, and secure.`,

  software: `Our Software Development & Automation services include custom software engineering tailored to your business needs, intelligent automation using Robotic Process Automation (RPA), AI-driven development, and DevOps practices for continuous integration and delivery. We help streamline operations and boost productivity.`,

  dataAi: `Our Data Analytics & AI services transform raw data into actionable business intelligence. We provide advanced analytics, machine learning model development, artificial intelligence solutions, and data visualization dashboards. We help you make data-driven decisions with confidence.`,

  advisory: `Our IT Advisory & Strategy services help align your IT investments with your business objectives. We provide digital transformation roadmaps, technology governance frameworks, IT investment optimization, and strategic consulting to ensure technology drives your business forward.`,

  managed: `Our Managed IT Services & Support include comprehensive 24/7 monitoring of your IT environment, helpdesk support, incident management, proactive maintenance, and performance optimization. We keep your systems running smoothly so you can focus on your core business.`,

  greeting: `Hello! I'm Bafana AI, the virtual assistant for Bafana Consulting Pty Ltd. I can help you learn about our services, company, or how to get in touch. What would you like to know?`,

  fallback: `I appreciate your question! While I may not have the specific answer, I can help with:

- Our **services** (IT, software, data, advisory, managed services)
- **Company** information and our mission
- **How to contact us** or schedule a consultation
- Our **approach** to projects

Could you rephrase your question or pick one of these topics?`,
}

type MatchPattern = {
  patterns: RegExp[]
  response: string
}

const matchPatterns: MatchPattern[] = [
  {
    patterns: [/\b(hi|hello|hey|good\s*(morning|afternoon|evening)|greetings|howdy)\b/i],
    response: companyData.greeting,
  },
  {
    patterns: [
      /\b(services|what (do|can) you (offer|do|provide)|offerings|solutions)\b/i,
      /\b(help my business|help us|what you do)\b/i,
    ],
    response: companyData.services,
  },
  {
    patterns: [
      /\b(about|who (are|is)|tell me about|company|bafana)\b/i,
      /\b(background|overview|profile)\b/i,
    ],
    response: companyData.about,
  },
  {
    patterns: [
      /\b(contact|reach|email|phone|call|get in touch|talk to)\b/i,
      /\b(linkedin|social media)\b/i,
    ],
    response: companyData.contact,
  },
  {
    patterns: [
      /\b(consult|schedule|book|appointment|meeting|demo)\b/i,
    ],
    response: companyData.consultation,
  },
  {
    patterns: [
      /\b(mission|vision|objective|values|purpose|goal)\b/i,
    ],
    response: companyData.mission,
  },
  {
    patterns: [
      /\b(approach|methodology|process|how (do|does) (you|it) work|phases|steps)\b/i,
    ],
    response: companyData.approach,
  },
  {
    patterns: [
      /\b(integrated it|network|infrastructure|cloud|security|cybersecurity|digital workplace)\b/i,
    ],
    response: companyData.itServices,
  },
  {
    patterns: [
      /\b(software|development|automation|rpa|devops|custom (app|application|software))\b/i,
    ],
    response: companyData.software,
  },
  {
    patterns: [
      /\b(data|analytics|ai|artificial intelligence|machine learning|ml|business intelligence)\b/i,
    ],
    response: companyData.dataAi,
  },
  {
    patterns: [
      /\b(advisory|strategy|governance|digital transformation|roadmap|consulting)\b/i,
    ],
    response: companyData.advisory,
  },
  {
    patterns: [
      /\b(managed|support|monitoring|helpdesk|incident|maintenance|24.7)\b/i,
    ],
    response: companyData.managed,
  },
  {
    patterns: [
      /\b(location|where|based|office|south africa|address)\b/i,
    ],
    response: `Bafana Consulting Pty Ltd is based in South Africa. For our specific office address or to arrange a meeting, please contact us at bheki.malinga@bafanaconsulting.co.za.`,
  },
  {
    patterns: [
      /\b(pric|cost|rate|fee|how much|quote|budget|afford)\b/i,
    ],
    response: `For pricing and quotations, we'd love to understand your specific needs first. Please schedule a consultation using the "Schedule Consultation" button on our website, or email us at bheki.malinga@bafanaconsulting.co.za and we'll provide a tailored proposal.`,
  },
  {
    patterns: [
      /\b(thank|thanks|cheers|appreciate)\b/i,
    ],
    response: `You're welcome! If you have any more questions about Bafana Consulting, feel free to ask. You can also schedule a consultation anytime using the button on our website.`,
  },
]

function findResponse(userMessage: string): string {
  for (const { patterns, response } of matchPatterns) {
    for (const pattern of patterns) {
      if (pattern.test(userMessage)) {
        return response
      }
    }
  }
  return companyData.fallback
}

export async function POST(req: Request) {
  const { messages } = await req.json()

  const lastUserMessage = [...messages].reverse().find((m: { role: string }) => m.role === "user")

  let userText = ""
  if (lastUserMessage?.parts) {
    userText = lastUserMessage.parts
      .filter((p: { type: string; text?: string }) => p.type === "text")
      .map((p: { text: string }) => p.text)
      .join("")
  } else if (lastUserMessage?.content) {
    userText = lastUserMessage.content
  }

  const response = findResponse(userText)

  // Stream the response character by character for a natural typing effect
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      // Send message start
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ type: "start", messageId: crypto.randomUUID() })}\n\n`)
      )

      // Stream text in chunks for natural feel
      const chunkSize = 3
      for (let i = 0; i < response.length; i += chunkSize) {
        const chunk = response.slice(i, i + chunkSize)
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "text-delta", textDelta: chunk })}\n\n`)
        )
        await new Promise((r) => setTimeout(r, 10))
      }

      // Send finish
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ type: "finish", finishReason: "stop" })}\n\n`)
      )
      controller.enqueue(encoder.encode("data: [DONE]\n\n"))
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
