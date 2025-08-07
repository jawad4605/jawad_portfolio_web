import {
  FiBarChart2,
  FiCpu,
  FiLayers,
  FiCode,
  FiDatabase,
  FiPenTool,
  FiShield,
  FiCloud
} from 'react-icons/fi';

export const servicesData = [
  {
    id: 1,
    slug: 'data-science-solutions',
    title: 'Data Science Solutions',
    description: 'Advanced analytics and predictive modeling to extract insights from your data.',
    longDescription: 'I provide comprehensive data science services that transform raw data into actionable insights. From exploratory data analysis to predictive modeling, my solutions help you make informed business decisions and uncover hidden trends.',
    icon: <FiBarChart2 />,
    features: [
      'Predictive Modeling',
      'Statistical Analysis',
      'Data Visualization',
      'EDA (Exploratory Data Analysis)',
      'Feature Engineering',
      'Model Evaluation'
    ],
    benefits: [
      'Data-driven decision making',
      'Improved business forecasting',
      'Deeper customer insights',
      'Optimized processes',
      'Increased ROI from data assets'
    ],
    process: [
      { title: 'Data Collection', description: 'Gather relevant business and customer data' },
      { title: 'Exploratory Analysis', description: 'Explore trends, patterns, and anomalies' },
      { title: 'Model Development', description: 'Build and validate predictive models' },
      { title: 'Visualization', description: 'Present insights via dashboards and charts' },
      { title: 'Deployment', description: 'Integrate results into decision-making workflows' }
    ]
  },
  {
    id: 2,
    slug: 'machine-learning-development',
    title: 'Machine Learning Development',
    description: 'Custom ML models tailored to your specific business requirements.',
    longDescription: 'From regression models to deep learning networks, I develop machine learning models tailored to solve your specific problems. My focus is on delivering scalable, maintainable, and high-performing ML systems.',
    icon: <FiCpu />,
    features: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning',
      'Model Training & Tuning',
      'Feature Selection',
      'Performance Optimization'
    ],
    benefits: [
      'Automated insights',
      'Real-time predictions',
      'Scalable ML pipelines',
      'Competitive business intelligence',
      'Reduced manual effort'
    ],
    process: [
      { title: 'Requirement Gathering', description: 'Define ML goals and data availability' },
      { title: 'Data Preparation', description: 'Clean and prepare datasets' },
      { title: 'Model Training', description: 'Develop, train, and validate models' },
      { title: 'Evaluation', description: 'Test for accuracy, bias, and efficiency' },
      { title: 'Deployment', description: 'Deploy models into production systems' }
    ]
  },
  {
    id: 3,
    slug: 'computer-vision-systems',
    title: 'Computer Vision Systems',
    description: 'AI-powered image and video analysis solutions for various applications.',
    longDescription: 'I develop computer vision systems that can recognize objects, analyze video feeds, and extract useful information from visual content using technologies like OpenCV, YOLO, and deep learning.',
    icon: <FiLayers />,
    features: [
      'Object Detection',
      'Image Classification',
      'OCR (Text Recognition)',
      'Video Analytics',
      'YOLO Implementation',
      'OpenCV Solutions'
    ],
    benefits: [
      'Automated visual analysis',
      'Improved accuracy in recognition',
      'Real-time video processing',
      'Enhanced security and monitoring',
      'Operational efficiency'
    ],
    process: [
      { title: 'Requirement Analysis', description: 'Understand your use case and visual data' },
      { title: 'Model Design', description: 'Choose architecture and tools (e.g., YOLO, CNN)' },
      { title: 'Implementation', description: 'Develop and integrate vision algorithms' },
      { title: 'Testing', description: 'Validate on real image/video datasets' },
      { title: 'Deployment', description: 'Integrate with existing systems or cloud APIs' }
    ]
  },
  {
    id: 4,
    slug: 'ai-integration',
    title: 'AI Integration',
    description: 'Seamless integration of AI models into existing business systems.',
    longDescription: 'I help businesses integrate AI technologies directly into their platforms, enabling smarter decision-making, automation, and intelligent customer interactions without disrupting current workflows.',
    icon: <FiCode />,
    features: [
      'API Development',
      'Model Deployment',
      'Cloud Integration',
      'Real-time Inference',
      'Scalable Solutions',
      'Performance Monitoring'
    ],
    benefits: [
      'AI without infrastructure overhaul',
      'Intelligent features for your app',
      'Faster go-to-market for AI tools',
      'Scalability and flexibility',
      'Improved customer experience'
    ],
    process: [
      { title: 'Integration Planning', description: 'Assess current infrastructure and goals' },
      { title: 'Model Compatibility', description: 'Choose AI models or APIs for use' },
      { title: 'Implementation', description: 'Integrate and test AI in your system' },
      { title: 'Validation', description: 'Monitor outcomes and fine-tune' },
      { title: 'Scaling', description: 'Deploy AI features at scale' }
    ]
  },
  {
    id: 5,
    slug: 'data-engineering',
    title: 'Data Engineering',
    description: 'Robust data pipelines and infrastructure for analytics.',
    longDescription: 'I design and implement scalable data engineering pipelines that ensure efficient, secure, and accurate movement and transformation of data across systems to support business intelligence and machine learning.',
    icon: <FiDatabase />,
    features: [
      'ETL Pipelines',
      'Data Warehousing',
      'Big Data Solutions',
      'Data Cleaning',
      'Database Optimization',
      'Data Governance'
    ],
    benefits: [
      'Reliable data pipelines',
      'Faster analytics workflows',
      'Optimized storage and access',
      'Improved data quality',
      'Enhanced data compliance'
    ],
    process: [
      { title: 'Data Audit', description: 'Understand existing data flows' },
      { title: 'Pipeline Design', description: 'Create architecture for ETL/ELT' },
      { title: 'Development', description: 'Build scalable data pipelines' },
      { title: 'Testing', description: 'Verify data integrity and performance' },
      { title: 'Monitoring', description: 'Automate health checks and alerts' }
    ]
  },
  {
    id: 6,
    slug: 'data-visualization',
    title: 'Data Visualization',
    description: 'Interactive dashboards and reports for data-driven decisions.',
    longDescription: 'I create visually compelling and interactive dashboards using tools like Power BI, Tableau, and Plotly, allowing stakeholders to quickly gain insights and monitor key performance indicators in real time.',
    icon: <FiPenTool />,
    features: [
      'Power BI Dashboards',
      'Tableau Reports',
      'Plotly Visualizations',
      'Custom Dashboards',
      'Business Intelligence',
      'KPI Tracking'
    ],
    benefits: [
      'Faster decision making',
      'User-friendly data insights',
      'Real-time monitoring',
      'Custom visual reports',
      'Enhanced stakeholder communication'
    ],
    process: [
      { title: 'Requirement Gathering', description: 'Understand KPIs and business goals' },
      { title: 'Tool Selection', description: 'Select the right dashboard tool' },
      { title: 'Data Connection', description: 'Connect to databases and APIs' },
      { title: 'Design & Build', description: 'Develop the visual dashboard' },
      { title: 'Feedback & Iteration', description: 'Refine based on user input' }
    ]
  },
  {
    id: 7,
    slug: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Strategic guidance for implementing AI in your organization.',
    longDescription: 'I offer expert guidance to help you understand where and how AI can bring value to your business. From identifying opportunities to evaluating tools and vendors, I provide a strategic roadmap for successful AI adoption.',
    icon: <FiShield />,
    features: [
      'AI Strategy Development',
      'Use Case Identification',
      'Technology Selection',
      'ROI Analysis',
      'Implementation Roadmap',
      'Team Training'
    ],
    benefits: [
      'Reduced AI adoption risks',
      'Faster implementation',
      'Better resource planning',
      'Strategic alignment',
      'Competitive edge in AI usage'
    ],
    process: [
      { title: 'Assessment', description: 'Evaluate readiness and needs' },
      { title: 'Strategy Planning', description: 'Develop AI roadmap and use cases' },
      { title: 'Vendor/Tool Selection', description: 'Choose platforms and frameworks' },
      { title: 'Pilot Program', description: 'Implement small-scale POCs' },
      { title: 'Rollout & Training', description: 'Train teams and launch full-scale project' }
    ]
  },
  {
    id: 8,
    slug: 'cloud-ai-solutions',
    title: 'Cloud AI Solutions',
    description: 'Deploy scalable AI solutions on cloud platforms.',
    longDescription: 'I help you deploy and manage AI solutions using cloud services like AWS, GCP, and Azure. From AutoML to scalable inference, I ensure your AI workloads are cost-effective, secure, and highly available.',
    icon: <FiCloud />,
    features: [
      'AWS AI Services',
      'Azure Machine Learning',
      'GCP AI Platform',
      'Model Hosting',
      'AutoML Solutions',
      'Serverless AI'
    ],
    benefits: [
      'On-demand scalability',
      'Cost-effective infrastructure',
      'Seamless model deployment',
      'High availability and uptime',
      'Flexible integrations'
    ],
    process: [
      { title: 'Cloud Assessment', description: 'Identify suitable cloud services' },
      { title: 'Infrastructure Setup', description: 'Create scalable cloud environments' },
      { title: 'Model Deployment', description: 'Deploy models using AutoML or containers' },
      { title: 'Monitoring', description: 'Track usage and performance' },
      { title: 'Optimization', description: 'Refine for cost and performance' }
    ]
  }
];
