import type { Role } from './issues/types';

// Roles I'd love an introduction for before I apply.
// When I apply, move the role into that week's entry file.
export const wishlist: Role[] = [
  {
    company: 'Legora',
    title: 'Junior/Mid-level Forward Deployed Engineer',
    url: 'https://jobs.ashbyhq.com/legora/572044a8-d0c4-42b4-97d3-bde7cb5599d6',
    contribute: [
      {
        jd: 'Translate enterprise customer workflows into engineering tasks',
        mine: 'Turned a nurse bottleneck at ResMed into a scoped, guarded patient chatbot running in production.',
      },
      {
        jd: 'Build, test and ship integrations through deployment',
        mine: 'Shipped Dockerized FastAPI services on AWS, gated by an automated regression suite I built.',
      },
      {
        jd: 'Debug across systems using logs, tests and systematic investigation',
        mine: 'Traced agent runs in LangSmith and diagnosed failures from raw execution logs at Pfizer.',
      },
      {
        jd: 'Practical experience using AI tools to build software',
        mine: 'I build with Claude Code every day, including this journal and my portfolio.',
      },
    ],
  },
  {
    company: 'Baseten',
    title: 'Software Engineer, Observability',
    url: 'https://jobs.ashbyhq.com/baseten/3e925ab1-2089-4a79-989e-50479b546eda/',
    contribute: [
      {
        jd: 'Experience with metrics, logging and tracing',
        mine: 'Built LangSmith tracing and Datadog dashboards for a production chatbot at ResMed.',
      },
      {
        jd: 'Pipelines over high volumes of operational data',
        mine: 'Built evaluation pipelines that process raw JSONL execution logs from a multi-agent system at Pfizer.',
      },
      {
        jd: 'Apply AI and LLMs to root cause analysis and anomaly detection',
        mine: 'Built drift detection and trajectory analysis that pinpoint where agent runs diverge.',
      },
      {
        jd: 'Strong proficiency in Python',
        mine: 'Python is my main language across production systems and research.',
      },
    ],
  },
  {
    company: 'Whatnot',
    title: 'AI Engineer',
    url: 'https://www.whatnot.com/careers/roles/7cfa0536-94de-42b7-9fe7-d646f4addc29',
    contribute: [
      {
        jd: 'Ship a high volume of internal apps, prototypes and automations fast',
        mine: 'Built this journal, my portfolio and an interview kit end to end with Claude Code, plus hackathon builds like Discharge IQ (3rd place) and SharkBait.',
      },
      {
        jd: 'Prompt engineering, RAG, agents and evals',
        mine: 'Prompt engineering and an agentic RAG assistant at ResMed, and an agent evaluation framework at Pfizer.',
      },
      {
        jd: 'Connect AI to real data and systems, with reliability, latency, cost and access controls in mind',
        mine: 'Connected an agent to SQL claims data with read-only access, and cut latency 37% while keeping HIPAA-aligned guardrails.',
      },
      {
        jd: 'Sit with non-technical users and translate their problems into software',
        mine: 'Turned nurses’ repetitive patient calls into a self-serve patient chatbot at ResMed.',
      },
    ],
  },
];
