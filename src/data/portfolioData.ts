import { ProfileData } from '../types';

export const initialPortfolioData: ProfileData = {
  name: "Hendri Permana",
  title: "Senior Full-Stack Engineer & Cloud Architect",
  tagline: "Architecting resilient distributed systems, modern web platforms, and human-centric digital experiences.",
  bioSummary: "Senior Software Engineer with 8+ years of experience designing and shipping scalable web applications, real-time architectures, and cloud-native solutions. Passionate about clean code, high performance, and intuitive user interfaces.",
  fullBio: [
    "I am a Senior Software Engineer and Architect focused on crafting high-concurrency web systems and refined frontend applications. Over the past 8 years, I have led engineering teams from 0-to-1 product launches to enterprise-scale refactors serving millions of active users.",
    "My technical foundation spans modern TypeScript/React ecosystems, high-throughput Node.js & Go backend services, distributed data pipelines, and cloud-native infrastructure on GCP and AWS. I obsess over developer ergonomics, test-driven reliability, and sub-second user experiences.",
    "Beyond writing clean code, I mentor engineers, conduct technical design reviews, and bridge the gap between complex business requirements and elegant software architectures."
  ],
  location: "Singapore & Remote (UTC+8)",
  email: "hendripermana13@gmail.com",
  availableForHire: true,
  availabilityNote: "Available for Senior/Lead roles, Fractional Architecture & Advisory",
  yearsOfExperience: 8,
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  metrics: [
    { id: '1', label: 'Years Experience', value: '8+', description: 'Building web & cloud applications' },
    { id: '2', label: 'Projects Shipped', value: '45+', description: 'From startups to enterprise systems' },
    { id: '3', label: 'Code Quality', value: '99.9%', description: 'Test coverage & uptime benchmark' },
    { id: '4', label: 'Users Reached', value: '2.5M+', description: 'Across production products' }
  ],
  principles: [
    {
      title: "Performance by Default",
      desc: "Sub-100ms response targets, optimized rendering trees, lazy-loaded bundles, and zero-bloat state architectures.",
      icon: "zap"
    },
    {
      title: "Defensive Architecture",
      desc: "Type-safe end-to-end contracts, strict runtime validations, idempotent event streams, and graceful fault tolerance.",
      icon: "shield-check"
    },
    {
      title: "Human-Centric Craft",
      desc: "Pixel-accurate spacing, accessible WCAG AA standards, fluent animations, and respectful developer ergonomics.",
      icon: "sparkles"
    },
    {
      title: "Observable & Scalable",
      desc: "Structured telemetry, automated CI/CD pipelines, containerized orchestration, and cost-efficient cloud topology.",
      icon: "layers"
    }
  ],
  socialLinks: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/hendripermana',
      iconName: 'github',
      username: 'hendripermana',
      isPrimary: true
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hendripermana',
      iconName: 'linkedin',
      username: 'hendri-permana',
      isPrimary: true
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:hendripermana13@gmail.com',
      iconName: 'mail',
      username: 'hendripermana13@gmail.com',
      isPrimary: true
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      url: 'https://x.com/hendripermana',
      iconName: 'twitter',
      username: '@hendripermana',
      isPrimary: false
    }
  ],
  skills: [
    // Frontend
    { id: 's1', name: 'TypeScript', level: 95, category: 'frontend', yearsOfExp: 7, highlight: true },
    { id: 's2', name: 'React 19 & Next.js', level: 95, category: 'frontend', yearsOfExp: 8, highlight: true },
    { id: 's3', name: 'Tailwind CSS & UI Systems', level: 92, category: 'frontend', yearsOfExp: 6, highlight: true },
    { id: 's4', name: 'State Management (Zustand/Redux)', level: 90, category: 'frontend', yearsOfExp: 7 },
    { id: 's5', name: 'Web Performance & Core Web Vitals', level: 92, category: 'frontend', yearsOfExp: 6, highlight: true },
    { id: 's6', name: 'WebSockets & Real-time Web', level: 88, category: 'frontend', yearsOfExp: 5 },

    // Backend
    { id: 's7', name: 'Node.js & Express / NestJS', level: 94, category: 'backend', yearsOfExp: 8, highlight: true },
    { id: 's8', name: 'Go (Golang)', level: 84, category: 'backend', yearsOfExp: 4, highlight: true },
    { id: 's9', name: 'REST & GraphQL APIs', level: 92, category: 'backend', yearsOfExp: 8 },
    { id: 's10', name: 'gRPC & Microservices', level: 85, category: 'backend', yearsOfExp: 5 },
    { id: 's11', name: 'Event-Driven Architecture (Kafka/RabbitMQ)', level: 86, category: 'backend', yearsOfExp: 5 },

    // Cloud & DevOps
    { id: 's12', name: 'Google Cloud Platform (GCP)', level: 90, category: 'cloud', yearsOfExp: 6, highlight: true },
    { id: 's13', name: 'Amazon Web Services (AWS)', level: 88, category: 'cloud', yearsOfExp: 6 },
    { id: 's14', name: 'Docker & Kubernetes', level: 86, category: 'cloud', yearsOfExp: 5, highlight: true },
    { id: 's15', name: 'CI/CD (GitHub Actions / ArgoCD)', level: 90, category: 'cloud', yearsOfExp: 6 },
    { id: 's16', name: 'Terraform & IaC', level: 82, category: 'cloud', yearsOfExp: 4 },

    // Databases
    { id: 's17', name: 'PostgreSQL & Drizzle/Prisma', level: 92, category: 'database', yearsOfExp: 7, highlight: true },
    { id: 's18', name: 'Redis Caching & PubSub', level: 90, category: 'database', yearsOfExp: 6 },
    { id: 's19', name: 'MongoDB & Document Stores', level: 85, category: 'database', yearsOfExp: 6 },
    { id: 's20', name: 'Firestore & Firebase Suite', level: 90, category: 'database', yearsOfExp: 6 },

    // Architecture & Tools
    { id: 's21', name: 'System Design & High Availability', level: 92, category: 'architecture', yearsOfExp: 7, highlight: true },
    { id: 's22', name: 'AI & LLM Integration (Gemini / OpenAI)', level: 88, category: 'architecture', yearsOfExp: 3, highlight: true },
    { id: 's23', name: 'Automated Testing (Jest / Vitest / Playwright)', level: 90, category: 'architecture', yearsOfExp: 7 },
    { id: 's24', name: 'Security & Auth (OAuth2 / OIDC / RBAC)', level: 91, category: 'architecture', yearsOfExp: 7 }
  ],
  projects: [
    {
      id: 'p1',
      title: 'AuraCloud — Distributed Edge Observability Engine',
      tagline: 'Real-time telemetry pipeline processing 50,000+ events/sec with sub-second alert dispatching and interactive topological visualization.',
      description: 'A cloud-native observability platform built for distributed microservices. Features automated trace anomaly detection, live log aggregation, and real-time network topology visualization using WebGL and WebSockets.',
      category: 'Distributed Systems',
      featured: true,
      technologies: ['TypeScript', 'Go', 'React', 'ClickHouse', 'Kafka', 'Docker', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
      demoUrl: 'https://github.com/hendripermana',
      githubUrl: 'https://github.com/hendripermana/auracloud-telemetry',
      status: 'In Production',
      metrics: [
        { label: 'Ingestion Speed', value: '50k+ ev/s' },
        { label: 'Query Latency', value: '< 45ms' },
        { label: 'Cluster Uptime', value: '99.99%' }
      ],
      fullCaseStudy: {
        overview: 'Engineered an end-to-end monitoring system capable of receiving high-frequency telemetry traces from multi-region container clusters, indexing billions of log lines in columnar ClickHouse storage, and broadcasting live health dashboards to thousands of simultaneous engineers.',
        challenges: [
          'Handling massive ingest burst spikes during production incidents without dropping packets.',
          'Rendering complex node dependency graphs with 1,000+ interactive live nodes in the browser without UI thread freezing.',
          'Guaranteeing sub-50ms query execution across 200GB+ of daily metrics.'
        ],
        solutions: [
          'Built a partitioned Go ingestion buffer that batches telemetry records into Kafka topics with snappy compression.',
          'Engineered a canvas/WebGL graph rendering pipeline utilizing offscreen canvas workers to isolate calculations.',
          'Implemented materialized views and adaptive indexing on ClickHouse to pre-aggregate high-cardinality time series.'
        ],
        architecture: 'Client Collectors -> Go Ingestion Gateways -> Kafka Cluster -> ClickHouse Columnar Store -> NestJS Query API -> WebSocket Broker -> React 19 Client Dashboard.',
        metrics: [
          'Reduced mean time to incident detection (MTTD) from 12 minutes to 18 seconds.',
          'Reduced cloud telemetry storage cost by 42% via compression and tiering.'
        ]
      }
    },
    {
      id: 'p2',
      title: 'NexusAI — Intelligent Knowledge Synthesis Workspace',
      tagline: 'Multi-modal document workspace leveraging Gemini LLM embeddings for instant enterprise knowledge extraction and autonomous research synthesis.',
      description: 'An AI-powered workspace enabling cross-team document intelligence. Incorporates semantic vector search, dynamic markdown canvas editing, and multi-turn collaborative research agents.',
      category: 'AI & Cloud',
      featured: true,
      technologies: ['React 19', 'Node.js', 'Google GenAI SDK', 'PostgreSQL', 'pgvector', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
      demoUrl: 'https://github.com/hendripermana',
      githubUrl: 'https://github.com/hendripermana/nexus-ai-workspace',
      status: 'Completed',
      metrics: [
        { label: 'Semantic Accuracy', value: '96.4%' },
        { label: 'Synthesis Time', value: '1.4s' },
        { label: 'Active Teams', value: '120+' }
      ],
      fullCaseStudy: {
        overview: 'Developed an enterprise research companion that transforms thousands of unstructured PDFs, slide decks, and Notion documents into conversational intelligence with precise source citations.',
        challenges: [
          'Preventing LLM hallucinations across technical specifications.',
          'Streaming real-time markdown responses with interactive charts smoothly into the user interface.'
        ],
        solutions: [
          'Implemented hybrid retrieval: sparse BM25 keyword search blended with dense vector cosine similarity in PostgreSQL pgvector.',
          'Engineered chunk-level citation validation and confidence scores for every synthesized paragraph.'
        ],
        architecture: 'Document Ingestion Worker -> Text Chunking & Embedding -> Vector Store -> Hybrid RAG Pipeline -> Gemini 2.5 Flash / Pro -> Streaming SSE -> React Markdown UI.',
        metrics: [
          'Saved average researcher 6.5 hours per week in documentation reviews.',
          'Achieved 96.4% factual citation verification rate in production audits.'
        ]
      }
    },
    {
      id: 'p3',
      title: 'HyperCart — Ultra-Low Latency Commerce Platform',
      tagline: 'High-volume checkout & catalog engine engineered for flash-sale concurrency with distributed inventory reservation locks.',
      description: 'A headless e-commerce platform built for peak flash sales. Features optimistic cart reservation locks, Redis-backed inventory queues, and edge-cached static pages.',
      category: 'Full Stack',
      featured: true,
      technologies: ['TypeScript', 'Next.js', 'Redis', 'PostgreSQL', 'Stripe API', 'Docker'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      demoUrl: 'https://github.com/hendripermana',
      githubUrl: 'https://github.com/hendripermana/hypercart-platform',
      status: 'In Production',
      metrics: [
        { label: 'Checkout Latency', value: '280ms' },
        { label: 'Max Concurrency', value: '25k users' },
        { label: 'Oversell Rate', value: '0.00%' }
      ],
      fullCaseStudy: {
        overview: 'Designed a fault-tolerant checkout pipeline for high-demand product drops, guaranteeing zero inventory overselling even under extreme load surges.',
        challenges: [
          'Eliminating race conditions when 10,000 customers claim the same remaining 50 items simultaneously.',
          'Maintaining sub-300ms page load speeds worldwide on mobile connections.'
        ],
        solutions: [
          'Utilized Redis distributed atomic Lua scripts with TTL-backed reservations during the checkout funnel.',
          'Built edge-rendered catalog templates cached on global CDNs with stale-while-revalidate protocols.'
        ],
        architecture: 'Edge CDN -> Next.js SSR / Static Cache -> Distributed Redis Locks -> Node.js Transaction Gateway -> PostgreSQL Master-Replica.',
        metrics: [
          'Zero oversell incidents across 14 consecutive global flash sales.',
          '38% increase in mobile checkout conversion rate.'
        ]
      }
    },
    {
      id: 'p4',
      title: 'FlowSync — Collaborative Real-Time Whiteboard & Diagrammer',
      tagline: 'Multiplayer infinite canvas with CRDT conflict-free resolution, offline support, and WebRTC peer-to-peer synchronization.',
      description: 'A high-performance browser canvas application enabling distributed engineering teams to brainstorm, sketch system architectures, and export clean vector blueprints in real-time.',
      category: 'Frontend',
      featured: false,
      technologies: ['React 19', 'TypeScript', 'HTML5 Canvas', 'WebSockets', 'CRDT (Yjs)', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1000',
      demoUrl: 'https://github.com/hendripermana',
      githubUrl: 'https://github.com/hendripermana/flowsync-whiteboard',
      status: 'Open Source',
      metrics: [
        { label: 'Frame Rate', value: '60 FPS' },
        { label: 'Sync Delay', value: '< 20ms' }
      ]
    },
    {
      id: 'p5',
      title: 'KubePulse — Cluster Cost & Resource Optimizer',
      tagline: 'Autonomous Kubernetes daemon for right-sizing pods, predicting node autoscaling bottlenecks, and slashing idle cloud bills.',
      description: 'A lightweight Go agent and companion dashboard that monitors pod utilization patterns, detects memory leaks, and provides automated recommendations for cloud cost reduction.',
      category: 'AI & Cloud',
      featured: false,
      technologies: ['Go', 'Kubernetes API', 'Prometheus', 'React', 'Tailwind CSS', 'GCP'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
      demoUrl: 'https://github.com/hendripermana',
      githubUrl: 'https://github.com/hendripermana/kubepulse-agent',
      status: 'Open Source',
      metrics: [
        { label: 'Average Savings', value: '34%' },
        { label: 'Daemon Footprint', value: '< 15MB RAM' }
      ]
    },
    {
      id: 'p6',
      title: 'DevVault — Secure Secrets & Config Management Hub',
      tagline: 'Zero-trust secret sharing CLI and web manager with end-to-end client encryption and granular team RBAC.',
      description: 'A self-hosted developer secrets manager encrypting environment variables in the browser before reaching backend persistence, with automated rotation webhooks.',
      category: 'Full Stack',
      featured: false,
      technologies: ['TypeScript', 'Node.js', 'Web Cryptography API', 'PostgreSQL', 'React'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
      demoUrl: 'https://github.com/hendripermana',
      githubUrl: 'https://github.com/hendripermana/devvault-secrets',
      status: 'Completed',
      metrics: [
        { label: 'Encryption', value: 'AES-256-GCM' },
        { label: 'Audit Compliance', value: 'SOC2 Ready' }
      ]
    }
  ],
  experiences: [
    {
      id: 'exp1',
      role: 'Staff / Lead Software Engineer',
      company: 'Vanguard Cloud Technologies',
      location: 'Singapore (Hybrid)',
      period: '2022 — Present',
      type: 'Lead',
      current: true,
      description: 'Directing the architecture of core distributed SaaS platforms and mentoring a team of 14 full-stack and backend engineers.',
      achievements: [
        'Architected a high-throughput event streaming engine that scaled from 5M to 40M daily transactions with 99.99% availability.',
        'Spearheaded frontend migration to modern React 19 + TypeScript, slashing initial bundle sizes by 44% and boosting Core Web Vitals to 98+.',
        'Established automated CI/CD deployment gates and observability pipelines, cutting production rollback rates by 70%.'
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'Go', 'GCP', 'Kubernetes', 'PostgreSQL', 'Kafka']
    },
    {
      id: 'exp2',
      role: 'Senior Full-Stack Engineer',
      company: 'Synapse Digital Labs',
      location: 'Remote',
      period: '2020 — 2022',
      type: 'Full-time',
      current: false,
      description: 'Engineered mission-critical web applications, financial dashboards, and real-time collaboration tools for enterprise clients.',
      achievements: [
        'Built real-time financial reporting dashboards handling multi-million-row datasets with client-side virtualized rendering.',
        'Created a reusable internal UI design system adopted by 6 product teams, speeding up new feature delivery cycles by 35%.',
        'Implemented end-to-end security compliance (SOC 2, OAuth2, RBAC) across multi-tenant cloud backends.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Redis', 'AWS', 'Docker', 'Jest']
    },
    {
      id: 'exp3',
      role: 'Full-Stack Software Developer',
      company: 'Aperture Systems',
      location: 'Jakarta, Indonesia',
      period: '2018 — 2020',
      type: 'Full-time',
      current: false,
      description: 'Designed and deployed responsive web apps, customer portals, and RESTful microservices.',
      achievements: [
        'Developed high-traffic customer onboarding funnels that boosted user conversion rates by 28%.',
        'Migrated legacy monolithic database queries to indexed PostgreSQL models, reducing p95 query response time from 1.2s to 85ms.',
        'Introduced automated integration testing suites, raising code test coverage from 40% to 85%.'
      ],
      technologies: ['JavaScript/TypeScript', 'React', 'Express', 'PostgreSQL', 'REST APIs', 'Git']
    }
  ],
  education: [
    {
      id: 'edu1',
      degree: 'Bachelor of Science in Computer Science & Software Engineering',
      institution: 'State University Institute of Technology',
      period: '2014 — 2018',
      location: 'Graduated with Distinction (First Class Honors)',
      details: 'Focus on Distributed Systems, Algorithms, Software Design Patterns, and Database Architecture.',
      honors: 'Dean’s Honor List & Best Capstone Architecture Award'
    }
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Alexander Reed',
      role: 'VP of Engineering',
      company: 'Vanguard Cloud Technologies',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      content: 'Hendri is that rare engineer who effortlessly bridges high-level architectural strategy with meticulous pixel-level craft. His work on our real-time streaming platform set the gold standard for performance and reliability across the company.',
      relationship: 'Managed Hendri directly at Vanguard'
    },
    {
      id: 't2',
      name: 'Elena Rostova',
      role: 'Head of Product',
      company: 'Synapse Digital Labs',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      content: 'Working with Hendri was a game changer for our product roadmap. He doesn’t just build specs—he challenges assumptions, anticipates edge cases, and delivers interfaces that customers genuinely love using.',
      relationship: 'Collaborated on 4 enterprise products'
    },
    {
      id: 't3',
      name: 'Marcus Chen',
      role: 'Principal Cloud Architect',
      company: 'Apex Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      content: 'Hendri has deep mastery of modern full-stack engineering and cloud-native topologies. Whenever we faced complex distributed database lock contention or frontend performance bottlenecks, Hendri was the one who solved it cleanly.',
      relationship: 'Technical collaborator & peer'
    }
  ]
};
