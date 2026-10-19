# Rajarshi Nandi

I build AI products where the model proposes, code validates and a person decides; the latest is AI Accountant, with a <a href="https://agentic-ai-accounting.vercel.app/demo">demo that runs in the browser</a>. I work AI-native with Claude Code, owning the product, the architecture and the verification. Sheffield, UK.

Shipped: AI Accountant, a full-stack LLM product on FastAPI, LangGraph, Claude, pgvector and Next.js, deployed on Vercel and Railway; ChronoAgent, a runtime monitor for multi-agent LLM systems; a Llama-3.2-1B fine-tune reaching 90.21% exact match on the Banking77 test split, trained in about 25 minutes on one free T4 GPU; voice-loop, a fully local two-way voice interface for the Claude Code CLI; and ledgerkb, a Python library for hybrid document search with character-exact provenance.

Twice before AI Accountant I built this pattern: at IBM, for a US property and casualty insurer, a backlog workflow that auto-approved low-risk standard policies and sent high-exposure risks to its underwriters; at a UK healthcare provider, the AI Usage Policy under which AI drafted and a contracted physician signed. Behind the repos sit more than three years of industry data work and an MSc in Data Science and Analytics at Leeds.

## Shipped

<a href="https://github.com/rajo69/agentic-ai-accounting">AI Accountant</a> goes between Xero's own AI categorisation and the quarterly sign-off, for UK sole traders, small businesses and the bookkeepers who sign off their books on Xero, now quarterly under Making Tax Digital for Income Tax. The reviewer sees a proposed category with written reasoning, a confidence tier and a risk flag on every line, decides, and the audit row records it. <a href="https://agentic-ai-accounting.vercel.app/demo">Demo</a> (no account) · <a href="https://youtu.be/icLQG596Ctg">2-minute video</a>

When one agent in a multi-agent LLM system starts to drift, <a href="https://github.com/rajo69/chronoagent">ChronoAgent</a> sees it in the agent's own behaviour and the allocator routes work away from it; a person is brought in when no agent clears the trust threshold. Under both MINJA and AgentPoison the signal that moved was KL divergence from a clean embedding baseline.

On one free T4 GPU, in about 25 minutes, the <a href="https://github.com/rajo69/banking77-llama-1b-lora">Banking77 fine-tune</a> of Llama-3.2-1B-Instruct with QLoRA, rsLoRA and NEFTune learns to tell 77 banking intents apart; a trie over the label set keeps every output a valid label (90.28% exact match with it, 90.21% without). <a href="https://huggingface.co/rajo0113/banking77-llama-1b-lora">Adapter on Hugging Face</a>

With <a href="https://github.com/rajo69/voice-loop">voice-loop</a>, a held Shift + Win dictates into the Claude Code CLI and Kokoro-82M reads the answer back; faster-whisper and the speech run in one warm daemon on your own machine, behind a non-blocking socket hook protected by a per-run token.

<a href="https://github.com/rajo69/ledgerkb">ledgerkb</a> turns two years of minutes, reports and email into ranked passages, each hit sliced back to the exact characters of its source; <code>--explain</code> shows where the dense, BM25 and heading-path arms each placed it. It needs no API key; 427 tests passing in CI.

## AI Accountant, in depth

Stack: Python, FastAPI, PostgreSQL with pgvector, LangGraph; Next.js and TypeScript; deployed on Vercel and Railway, open source under MIT.

- Claude Haiku 4.5 answers first and Claude Sonnet 4.6 takes over below 0.85 confidence. Each answer is structured output through Instructor and Pydantic, checked against the chart of accounts and given a confidence tier; one that fails goes to a person.
- A correction becomes a precedent for later proposals: the five nearest past decisions of the same firm come back as few-shot examples from pgvector, with local MiniLM embeddings in the same Postgres; no model is trained on client data.
- Bank reconciliation uses no model at all, money is Decimal end to end, and the figures in the management letter, profit and loss and VAT summary are computed in code; the model writes only the narrative.
- Each AI proposal and each human approval, correction or rejection gets its own audit row, with the model, confidence, reasoning and decision. A glass-box fuzzy inference engine adds a risk flag with the plain-language rules that fired.
- When Xero changed its OAuth scope scheme mid-build, I found the working granular scopes by testing them against the token endpoint; when an upstream SQLAlchemy release took the deployed API down, I pinned, redeployed and verified health and the OAuth redirect within the afternoon. <a href="https://github.com/rajo69/agentic-ai-accounting/blob/master/docs/ENGINEERING_RECORD.md">Engineering record</a>
- 117 backend tests run in CI. Six parallel review passes, run as Claude Code agents under one evidence standard (file, line, quoted code, severity), were followed by five defects fixed test-first, each pinned by a failing test. <a href="https://github.com/rajo69/agentic-ai-accounting/blob/master/docs/SELF_REVIEW.md">Self-review</a>

Built March to October 2026. My calls included the UK MTD and Xero framing, the review-layer positioning, what to build and what to cut, the stack, the two LangGraph workflows and Haiku first with Sonnet on low confidence; I also owned the verification: reading the diffs, running and testing the app, and deciding which review findings and which claims to accept. <a href="https://github.com/rajo69/agentic-ai-accounting#about">How it was built</a>

## Before this

At IBM (IBM Consulting, India), as an Application Developer from 2021 to 2023, I built production data pipelines, dashboards and ML models for a US property and casualty insurer; the backlog workflow above was one of them. In 2025, as the Data Analyst at ADHDNET, a UK healthcare provider, I wrote the organisation's AI Usage Policy.

MSc Data Science and Analytics, University of Leeds (2024) · BTech Electronics and Communication Engineering, Techno India Saltlake (2020)

Contact: rajarshin264@gmail.com
