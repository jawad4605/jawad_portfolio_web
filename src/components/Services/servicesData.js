import {
  FiBarChart2,
  FiCpu,
  FiLayers,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiShield,
  FiCloud,
  FiPhoneCall,
  FiPackage,
  FiRepeat,
  FiUsers,
  FiTrendingUp
} from 'react-icons/fi';

export const servicesData = [
  {
    id: 1,
    slug: 'ai-web-application-development',
    title: 'AI Web Application Development',
    description: 'End-to-end development of live, production-ready AI-powered web applications.',
    longDescription: 'I design and build full-stack AI web applications that go live and serve real users. From mental health platforms like VieroMind to file conversion tools like FileConv Pro, I handle everything from UI to backend AI integration and cloud deployment.',
    icon: <FiGlobe />,
    features: [
      'Next.js and React Frontend',
      'Python and FastAPI Backend',
      'Firebase Integration',
      'AI Model Embedding',
      'Cloud Deployment (Vercel, AWS)',
      'Production-Ready Architecture'
    ],
    benefits: [
      'Fully deployed, live products',
      'Real users from day one',
      'AI features built into the core UX',
      'Scalable and maintainable codebase',
      'Fast time-to-market'
    ],
    process: [
      { title: 'Discovery', description: 'Define product goals, users, and AI requirements' },
      { title: 'Design and Architecture', description: 'Plan the stack, UI, and AI integration points' },
      { title: 'Development', description: 'Build frontend, backend, and AI components in parallel' },
      { title: 'Testing', description: 'End-to-end testing across all layers' },
      { title: 'Launch', description: 'Deploy to production and monitor live traffic' }
    ]
  },
  {
    id: 2,
    slug: 'machine-learning-development',
    title: 'Machine Learning Development',
    description: 'Custom ML models trained, evaluated, and deployed into real products.',
    longDescription: 'I develop machine learning models tailored to specific problems and integrate them directly into production applications. Every model I build is designed to be deployed, not just demonstrated.',
    icon: <FiCpu />,
    features: [
      'Supervised and Unsupervised Learning',
      'Deep Learning',
      'Model Training and Tuning',
      'Feature Engineering',
      'Model-to-API Deployment',
      'Performance Monitoring'
    ],
    benefits: [
      'Models that run in production',
      'Automated predictions at scale',
      'Reduced manual effort',
      'Business intelligence from data',
      'Scalable ML pipelines'
    ],
    process: [
      { title: 'Problem Definition', description: 'Define ML goals and available data' },
      { title: 'Data Preparation', description: 'Clean, label, and engineer features' },
      { title: 'Model Training', description: 'Train, validate, and compare models' },
      { title: 'Evaluation', description: 'Test for accuracy, fairness, and speed' },
      { title: 'Deployment', description: 'Wrap in API and ship to production' }
    ]
  },
  {
    id: 3,
    slug: 'computer-vision-systems',
    title: 'Computer Vision Systems',
    description: 'AI-powered image and video analysis for detection, recognition, and monitoring.',
    longDescription: 'I build computer vision systems using OpenCV, YOLO, and deep learning that power real applications. From object detection in industrial settings to mouse behavior authentication, my vision systems run in production.',
    icon: <FiLayers />,
    features: [
      'Object Detection with YOLO',
      'Image Classification',
      'OCR and Text Recognition',
      'Video Analytics',
      'Behavior Analysis',
      'OpenCV Integration'
    ],
    benefits: [
      'Automated visual workflows',
      'High-accuracy detection',
      'Real-time video processing',
      'Reduced human monitoring costs',
      'Deployable as API or embedded system'
    ],
    process: [
      { title: 'Requirement Analysis', description: 'Understand visual data and use case' },
      { title: 'Model Selection', description: 'Choose the right architecture (YOLO, CNN, etc.)' },
      { title: 'Training', description: 'Train on custom or pre-labeled datasets' },
      { title: 'Testing', description: 'Validate on real image and video inputs' },
      { title: 'Deployment', description: 'Integrate with live systems or APIs' }
    ]
  },
  {
    id: 4,
    slug: 'ai-integration',
    title: 'AI System Integration',
    description: 'Plug AI capabilities into your existing platform without rebuilding from scratch.',
    longDescription: 'I help businesses add AI to their existing products via APIs, SDKs, and custom middleware. Whether you need a chatbot, document processor, or intelligent recommendation engine, I integrate it cleanly into your stack.',
    icon: <FiCode />,
    features: [
      'REST API Development',
      'LLM and ChatGPT Integration',
      'Document AI (PDF, Word processing)',
      'Real-time Inference',
      'Webhook and Event Systems',
      'Performance Monitoring'
    ],
    benefits: [
      'No full rebuild required',
      'Faster AI feature rollout',
      'Scalable and modular',
      'Works with existing tech stack',
      'Improved user experience'
    ],
    process: [
      { title: 'Audit', description: 'Review current system and integration points' },
      { title: 'Planning', description: 'Define what AI adds and how it connects' },
      { title: 'Build', description: 'Develop and connect AI modules' },
      { title: 'Validate', description: 'Test in staging before production push' },
      { title: 'Scale', description: 'Monitor and optimize under real load' }
    ]
  },
  {
    id: 5,
    slug: 'data-science-solutions',
    title: 'Data Science Solutions',
    description: 'Advanced analytics and predictive modeling to extract insight from your data.',
    longDescription: 'I provide data science services that turn raw data into actionable business insight. From exploratory analysis to predictive modeling and dashboards, I help you make decisions backed by evidence.',
    icon: <FiBarChart2 />,
    features: [
      'Predictive Modeling',
      'Statistical Analysis',
      'Exploratory Data Analysis',
      'Feature Engineering',
      'Power BI and Tableau Dashboards',
      'Model Evaluation'
    ],
    benefits: [
      'Data-driven decision making',
      'Improved business forecasting',
      'Deeper customer insights',
      'Optimized processes',
      'Increased ROI from existing data'
    ],
    process: [
      { title: 'Data Collection', description: 'Gather relevant business and user data' },
      { title: 'Exploratory Analysis', description: 'Uncover trends, patterns, and anomalies' },
      { title: 'Model Development', description: 'Build and validate predictive models' },
      { title: 'Visualization', description: 'Present insights via dashboards and reports' },
      { title: 'Deployment', description: 'Integrate results into decision workflows' }
    ]
  },
  {
    id: 6,
    slug: 'data-engineering',
    title: 'Data Engineering',
    description: 'Scalable data pipelines and infrastructure to power your AI and analytics.',
    longDescription: 'I design and build data pipelines that move, clean, and transform data reliably at scale. Every AI product I ship depends on solid data engineering underneath.',
    icon: <FiDatabase />,
    features: [
      'ETL and ELT Pipelines',
      'Firebase and SQL Databases',
      'Data Cleaning and Transformation',
      'Big Data Handling',
      'Database Optimization',
      'Automated Health Monitoring'
    ],
    benefits: [
      'Reliable data flows',
      'Faster analytics and AI inference',
      'Optimized storage costs',
      'Improved data quality',
      'Less time fixing data, more time using it'
    ],
    process: [
      { title: 'Data Audit', description: 'Map existing data sources and flows' },
      { title: 'Pipeline Design', description: 'Architect ETL or streaming pipelines' },
      { title: 'Development', description: 'Build and test each pipeline stage' },
      { title: 'Validation', description: 'Verify data integrity end to end' },
      { title: 'Monitoring', description: 'Automate alerts for failures or drift' }
    ]
  },
  {
    id: 7,
    slug: 'ai-consulting',
    title: 'AI Product Consulting',
    description: 'Strategic guidance to turn your AI idea into a shipped, scalable product.',
    longDescription: 'I help founders and teams figure out what to build, how to build it, and how to get it to market. Having shipped multiple live AI products, I provide practical advice grounded in real execution.',
    icon: <FiShield />,
    features: [
      'Product-Market Fit for AI',
      'Tech Stack Selection',
      'MVP Scoping',
      'AI Use Case Identification',
      'Build vs. Buy Analysis',
      'Roadmap and Launch Planning'
    ],
    benefits: [
      'Avoid costly wrong decisions early',
      'Ship faster with the right stack',
      'Proven patterns from live products',
      'Honest assessment of what is possible',
      'Focus on what users actually need'
    ],
    process: [
      { title: 'Discovery Call', description: 'Understand your idea, goals, and constraints' },
      { title: 'Assessment', description: 'Evaluate technical feasibility and risk' },
      { title: 'Strategy', description: 'Define the roadmap and MVP scope' },
      { title: 'Prototype Review', description: 'Validate early decisions before committing' },
      { title: 'Ongoing Support', description: 'Advisory support through build and launch' }
    ]
  },
  {
    id: 8,
    slug: 'cloud-ai-solutions',
    title: 'Cloud AI Deployment',
    description: 'Deploy and scale AI applications on AWS, Vercel, and Firebase.',
    longDescription: 'I handle the full deployment of AI applications to cloud infrastructure. From serverless APIs to containerized ML models, I ensure your product is fast, reliable, and cost-efficient at scale.',
    icon: <FiCloud />,
    features: [
      'Vercel and AWS Deployment',
      'Firebase Backend Services',
      'Containerized ML with Docker',
      'Serverless AI APIs',
      'CDN and Performance Optimization',
      'Uptime Monitoring'
    ],
    benefits: [
      'Live in production, not just local',
      'Scales with user growth',
      'Cost-efficient infrastructure',
      'High availability and uptime',
      'Easy CI/CD integration'
    ],
    process: [
      { title: 'Infrastructure Planning', description: 'Choose cloud services and architecture' },
      { title: 'Environment Setup', description: 'Configure staging and production environments' },
      { title: 'Deployment', description: 'Ship models and APIs to cloud' },
      { title: 'Monitoring', description: 'Track uptime, latency, and errors' },
      { title: 'Optimization', description: 'Tune for cost, speed, and reliability' }
    ]
  },
  {
    id: 9,
    slug: 'ai-voice-agents',
    title: 'AI Voice Agents',
    description: 'Conversational AI voice agents that handle calls, qualify leads, and book appointments automatically.',
    longDescription: 'I build AI voice agents that answer inbound calls, understand caller intent, and take real action, from qualifying a lead to booking it directly onto a calendar. Each agent is tuned to your business so calls get handled consistently, day or night, without a human on the line for every one.',
    icon: <FiPhoneCall />,
    features: [
      'Inbound Call Handling',
      'Lead Qualification Scripts',
      'Automated Appointment Booking',
      'Calendar and CRM Integration',
      'Natural Conversation Flow',
      'Call Transcripts and Summaries'
    ],
    benefits: [
      'Never miss a call, day or night',
      'Consistent lead qualification every time',
      'Fewer no-shows with automatic booking',
      'Lower cost than a full-time call handler',
      'Frees your team for higher-value work'
    ],
    process: [
      { title: 'Call Flow Design', description: 'Map the conversations the agent needs to handle' },
      { title: 'Voice and Script Build', description: 'Configure the voice, tone, and qualification questions' },
      { title: 'Integration', description: 'Connect to your calendar, CRM, and phone number' },
      { title: 'Testing', description: 'Run real call scenarios and refine responses' },
      { title: 'Go Live', description: 'Launch and monitor call outcomes' }
    ]
  },
  {
    id: 10,
    slug: 'ai-saas-mvp-development',
    title: 'AI SaaS MVP Development',
    description: 'Idea-to-MVP development for AI SaaS products, built on Next.js, Node.js, and OpenAI.',
    longDescription: 'I take an AI SaaS idea from a blank page to a launch-ready MVP. That means a modern, scalable architecture from day one, an AI feature that actually works in production, and a product you can put in front of real users fast, not a throwaway prototype.',
    icon: <FiPackage />,
    features: [
      'Next.js and Node.js Architecture',
      'OpenAI and LLM Integration',
      'User Auth and Billing Setup',
      'Database and API Design',
      'Responsive Product UI',
      'Launch-Ready Deployment'
    ],
    benefits: [
      'Idea to working product, fast',
      'Architecture built to scale past MVP',
      'AI features that work in the real world',
      'Lower cost than a full dev team',
      'Ready to demo to users or investors'
    ],
    process: [
      { title: 'Scoping', description: 'Define the MVP feature set and AI use case' },
      { title: 'Architecture', description: 'Design the stack, data model, and AI integration' },
      { title: 'Build', description: 'Develop frontend, backend, and AI features' },
      { title: 'Testing', description: 'Validate core flows end to end' },
      { title: 'Launch', description: 'Deploy and hand over a production-ready MVP' }
    ]
  },
  {
    id: 11,
    slug: 'business-automation',
    title: 'Business Automation',
    description: 'Custom workflow automation connecting forms, CRM, analytics, and notifications with n8n, Zapier, and GoHighLevel.',
    longDescription: 'I design automation workflows that remove manual, repetitive work from your business. Using tools like n8n, Zapier, and GoHighLevel, I connect the systems you already use, forms, CRM, databases, and notifications, into one pipeline that runs itself.',
    icon: <FiRepeat />,
    features: [
      'n8n Workflow Design',
      'Zapier and GoHighLevel Integration',
      'CRM and Customer Data Sync',
      'Automated Notifications and Alerts',
      'Form and Intake Processing',
      'Analytics and Reporting Hooks'
    ],
    benefits: [
      'Less manual work for your team',
      'Fewer dropped leads and missed follow-ups',
      'Systems that talk to each other automatically',
      'Faster response times for customers',
      'Scales without adding headcount'
    ],
    process: [
      { title: 'Process Mapping', description: 'Document the current manual workflow' },
      { title: 'Tool Selection', description: 'Choose n8n, Zapier, GoHighLevel, or a mix' },
      { title: 'Build', description: 'Create and connect each automation step' },
      { title: 'Testing', description: 'Run real data through the pipeline' },
      { title: 'Monitoring', description: 'Watch for failures and refine over time' }
    ]
  },
  {
    id: 12,
    slug: 'custom-ai-agent-development',
    title: 'Custom AI Agent Development',
    description: 'Multi-agent AI systems with retrieval-augmented generation, shared memory, and automation.',
    longDescription: 'I build multi-agent AI systems where specialized agents, research, automation, RAG, and analytics, plan, collaborate, and execute together instead of relying on one general-purpose model. Each system is grounded in your own knowledge and context through retrieval-augmented generation and shared memory.',
    icon: <FiUsers />,
    features: [
      'Multi-Agent Orchestration',
      'Retrieval-Augmented Generation (RAG)',
      'Shared Memory and Context',
      'Task Planning and Routing',
      'Tool and API Integration',
      'Automation and Execution Agents'
    ],
    benefits: [
      'Agents specialized for each task, working together',
      'Answers grounded in your real data, not guesses',
      'Handles multi-step tasks end to end',
      'Extensible as your use cases grow',
      'Reduces manual oversight over time'
    ],
    process: [
      { title: 'Use Case Definition', description: 'Identify the tasks and agents needed' },
      { title: 'Knowledge Setup', description: 'Build the RAG pipeline and memory layer' },
      { title: 'Agent Development', description: 'Build and connect each specialized agent' },
      { title: 'Testing', description: 'Validate agent collaboration on real tasks' },
      { title: 'Deployment', description: 'Ship the multi-agent system to production' }
    ]
  },
  {
    id: 13,
    slug: 'financial-data-pipeline-optimization',
    title: 'Financial Data Pipeline Optimization',
    description: 'High-performance financial data pipelines built with DuckDB and the Polygon market data API.',
    longDescription: 'I design and optimize financial data pipelines for speed and reliability, using DuckDB for fast local analytics and the Polygon API for market data. Every pipeline covers ingestion, transformation, and query, built in Python so you can analyze large datasets without waiting on a slow database.',
    icon: <FiTrendingUp />,
    features: [
      'DuckDB Pipeline Architecture',
      'Polygon Market Data Integration',
      'Python ETL Development',
      'Query and Storage Optimization',
      'Historical and Real-Time Data Handling',
      'Automated Data Refresh Jobs'
    ],
    benefits: [
      'Fast queries over large market datasets',
      'Lower infrastructure cost than heavier databases',
      'Reliable, repeatable data ingestion',
      'Clean data ready for analysis or models',
      'Built for financial data at scale'
    ],
    process: [
      { title: 'Data Audit', description: 'Review data sources and current pipeline gaps' },
      { title: 'Pipeline Design', description: 'Architect ingestion, storage, and transform steps' },
      { title: 'Development', description: 'Build the ETL pipeline with DuckDB and Polygon API' },
      { title: 'Optimization', description: 'Tune queries and storage for performance' },
      { title: 'Monitoring', description: 'Automate refresh jobs and track data health' }
    ]
  }
];
