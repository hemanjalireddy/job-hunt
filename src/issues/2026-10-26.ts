import type { Entry } from './types';

const entry: Entry = {
  no: 2,
  weekOf: '2026-10-26',
  title: 'Seven new applications this week',
  note: 'Leaning into roles where AI meets production: evaluation, multimodal and healthcare.',
  roles: [
    {
      company: 'eBay',
      title: 'AI Engineer, Finance Innovation & Transformation',
      req: 'R0075757',
      url: 'https://www.linkedin.com/jobs/view/4482117469/',
      contribute: [
        {
          jd: 'Intelligent agents and decision-support tools',
          mine: 'Built an agentic RAG assistant at ResMed that routes each question to a SQL agent over claims data or to document retrieval, the same pattern finance decision support needs.',
        },
        {
          jd: 'End-to-end AI, from system design through deployment',
          mine: 'Took a patient-facing medical chatbot from design to production at ResMed with LangGraph and Dockerized FastAPI services on AWS.',
        },
        {
          jd: 'Python, SQL, structured and unstructured data',
          mine: 'Benchmarked models on 20M+ insurance records, and combined SQL tables with documentation in a single assistant.',
        },
        {
          jd: 'Monitor, refine and scale deployed solutions',
          mine: 'Built LangSmith and Datadog monitoring plus an automated regression suite, and cut end-to-end latency 37%.',
        },
      ],
    },
    {
      company: 'ServiceNow',
      title: 'Machine Learning Engineer, Multimodal',
      req: 'JB0075737',
      url: 'https://careers.servicenow.com/jobs/744000156637254/machine-learning-engineer/',
      contribute: [
        {
          jd: 'Document extraction and visual understanding',
          mine: 'Built AutoCode-MD, where a vision model reads handwritten clinical notes into structured data.',
        },
        {
          jd: 'Evaluate model quality: design test sets, choose metrics',
          mine: 'Designed an agent evaluation framework at Pfizer with judge scoring, perturbation tests and drift checks.',
        },
        {
          jd: 'Observability and reliability in production',
          mine: 'Built LangSmith and Datadog dashboards at ResMed and cut latency 37% with a guardrails migration.',
        },
      ],
    },
    {
      company: 'Garner Health',
      title: 'Associate Software Engineer',
      url: 'https://job-boards.greenhouse.io/garnerhealth/jobs/6174210004',
      contribute: [
        {
          jd: 'Use AI to build and maintain software',
          mine: 'I build with Claude Code every day, including my portfolio end to end.',
        },
        {
          jd: 'Back-end Python and PostgreSQL',
          mine: 'Built FastAPI services, a SQL agent over claims data and PostgreSQL vector retrieval at ResMed.',
        },
        {
          jd: 'Protect user privacy and security',
          mine: 'Worked within HIPAA-aligned guardrails and designed a read-only SQL agent that can never change records.',
        },
      ],
    },
    {
      company: 'InterSystems',
      title: 'Software Engineer Rotational Program, Early Career',
      url: 'https://job-boards.greenhouse.io/intersystems/jobs/7827894003',
      contribute: [
        {
          jd: 'AI and agentic tools in software development',
          mine: 'Built agent harnesses and evaluation frameworks, and develop with coding agents daily.',
        },
        {
          jd: 'Rotations across healthcare and data platform teams',
          mine: 'My healthcare AI work at ResMed and Pfizer maps directly to HealthShare and IntelliCare.',
        },
        {
          jd: 'Initiative through personal projects',
          mine: 'Built InferBench, an LLM-as-a-Judge bias benchmark, and a candle-based options strategy on my own time.',
        },
      ],
    },
    {
      company: 'Western Digital',
      title: 'Software Engineer, Early Career',
      url: 'https://www.linkedin.com/jobs/view/4440197019/',
      contribute: [
        {
          jd: 'Design and develop data pipelines and databases',
          mine: 'Built evaluation pipelines over raw execution logs at Pfizer, and benchmarked models on 20M+ insurance records at ResMed.',
        },
        {
          jd: 'Debug and optimize software',
          mine: 'Profiled LLM inference in InferBench (3.4× faster decoding with KV caching) and cut a production chatbot’s latency 37%.',
        },
        {
          jd: 'Python, SQL and C++, plus an interest in AI and data analytics',
          mine: 'Python and SQL every day, C++ from my CS degree, and an MPS in Applied Statistics behind my AI work.',
        },
      ],
    },
    {
      company: 'Synthio Labs',
      title: 'Forward Deployed Engineer, Tech',
      url: 'https://jobs.gem.com/synthio-labs/am9icG9zdDp8yHH0IGRlNGf1VfZH3m6v',
      contribute: [
        {
          jd: 'Build AI-powered applications with LLMs, APIs and modern AI frameworks',
          mine: 'Built a production patient-facing chatbot at ResMed with LangGraph and LangChain, served as FastAPI services.',
        },
        {
          jd: 'Combine structured enterprise data with generative AI',
          mine: 'Built a router agent that answers from SQL claims data and device documentation in a single response.',
        },
        {
          jd: 'Monitoring, performance optimization and reliability',
          mine: 'LangSmith and Datadog dashboards, and a 37% latency cut from a guardrails migration.',
        },
        {
          jd: 'Pharma and healthcare environments, with regulatory compliance',
          mine: 'Evaluated a multi-agent oncology assistant at Pfizer and shipped healthcare AI at ResMed under HIPAA-aligned guardrails.',
        },
      ],
    },
    {
      company: 'OpenEvidence',
      title: 'Member of Technical Staff',
      url: 'https://jobs.ashbyhq.com/openevidence/4c577aae-1ad0-444b-9e15-2ad994333de4',
      contribute: [
        {
          jd: 'Evaluation and quantitative proof as first-class citizens',
          mine: 'Built a system-agnostic agent evaluation framework at Pfizer and an LLM calibration study with Los Alamos National Laboratory.',
        },
        {
          jd: 'End-to-end systems with modern models as components',
          mine: 'Took a medical chatbot from agent harness to production at ResMed, grounded in each patient’s records.',
        },
        {
          jd: 'Speed: optimize away every source of inefficiency',
          mine: 'Cut a production chatbot’s latency 37% (19s to 12s) and profiled LLM inference in InferBench.',
        },
        {
          jd: 'A mission-critical medical domain',
          mine: 'All my AI work so far has been in healthcare: ResMed patients and Pfizer oncology trials.',
        },
      ],
    },
  ],
};

export default entry;
