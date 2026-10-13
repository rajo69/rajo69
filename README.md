# Rajarshi Nandi

I build AI products where the model proposes, code validates and a person decides. I work AI-native with Claude Code, owning the product, the architecture and the verification. Sheffield, UK.

## AI Accountant

**A review layer for Xero books that AI has already categorised.** Every transaction gets a proposed category with written reasoning, a confidence tier and a risk flag; a person decides, and every decision is recorded. It is built for UK sole traders, small businesses and the bookkeepers who sign off their books on Xero, now quarterly under Making Tax Digital for Income Tax.

**<a href="https://agentic-ai-accounting.vercel.app/demo">Try the demo</a>** (synthetic company, runs in the browser, no account) · <a href="https://youtu.be/icLQG596Ctg">2-minute video</a> · <a href="https://github.com/rajo69/agentic-ai-accounting">Repo</a>

- **Validated model output.** Claude Haiku 4.5 first, Claude Sonnet 4.6 below 0.85 confidence. Every answer is structured output through Instructor and Pydantic, checked against the chart of accounts and given a confidence tier; one that fails goes to a person.
- **Retrieval, not training.** A correction becomes a precedent for later proposals: the five nearest past decisions of the same firm come back as few-shot precedents from pgvector, using local MiniLM embeddings in the same Postgres.
- **Figures computed in code.** Bank reconciliation uses no model at all, money is Decimal end to end, and every figure in the management letter, profit and loss and VAT summary is computed in code; the model writes only the narrative.
- **An audit row for every decision.** Every AI proposal and every human approval, correction or rejection gets its own row, with the model, confidence, reasoning and decision. A glass-box fuzzy inference engine adds a risk flag with the plain-language rules that fired.
- **Shipped against upstream changes.** When Xero changed its OAuth scope scheme mid-build, I found the working granular scopes by testing them against the token endpoint; when an upstream SQLAlchemy release took the deployed API down, I pinned, redeployed and verified health and the OAuth redirect within the afternoon. <a href="https://github.com/rajo69/agentic-ai-accounting/blob/master/docs/ENGINEERING_RECORD.md">Engineering record</a>
- **Tested and reviewed.** 117 backend tests run in CI, and offline evals have pass/fail gates, a calibration table and a budget guard; my rule for metrics is that every published number sits next to a provenance file with the commit, fixture version, prompt version, model id and date. Six parallel review passes, run as Claude Code agents under one evidence standard (file, line, quoted code, severity), were followed by five defects fixed test-first, each pinned by a failing test. <a href="https://github.com/rajo69/agentic-ai-accounting/blob/master/docs/SELF_REVIEW.md">Self-review</a>

Stack: Python, FastAPI, PostgreSQL with pgvector, LangGraph; Next.js and TypeScript; deployed on Vercel and Railway.

Built March to October 2026. My calls included the UK MTD and Xero framing, the review-layer positioning, what to build and what to cut, the stack, the two LangGraph workflows and Haiku first with Sonnet on low confidence; I also owned the verification: reading the diffs, running and testing the app, and deciding which review findings and which claims to accept. <a href="https://github.com/rajo69/agentic-ai-accounting#about">How it was built</a> · deployed on Vercel and Railway, open source under MIT.

## Also built

- **<a href="https://github.com/rajo69/chronoagent">ChronoAgent</a>**, a runtime monitor for multi-agent LLM systems. It tracks six behavioural signals per agent per step, fuses Bayesian online changepoint detection with the Chronos-T5 forecaster into a live per-agent health score, routes work away from drifting agents and escalates to a human. 1,508 tests and an enforced 80% coverage floor in CI.
- **<a href="https://github.com/rajo69/banking77-llama-1b-lora">Banking77 fine-tune</a>**. I fine-tuned Llama-3.2-1B-Instruct with QLoRA, rsLoRA and NEFTune for 77-class intent classification, from no correct labels when prompted zero-shot to 90.21% exact match on the Banking77 test split, trained in about 25 minutes on one free T4 GPU. Trie-based constrained decoding lets it emit only valid labels (90.28%). <a href="https://huggingface.co/rajo0113/banking77-llama-1b-lora">Adapter on Hugging Face</a>.
- **<a href="https://github.com/rajo69/voice-loop">voice-loop</a>**, a fully local two-way voice interface for the Claude Code CLI. faster-whisper speech-to-text and Kokoro-82M ONNX speech run in one warm daemon, behind a non-blocking socket hook protected by a per-run token.

## Before this

The same principle runs through more than three years of industry data work. At IBM (IBM Consulting, India), as an Application Developer from 2021 to 2023, I built production data pipelines, dashboards and ML models for a US property and casualty insurer, and designed a human-in-the-loop workflow that auto-approved low-risk standard policies and escalated high-exposure risks to its underwriters. Then, as the Data Analyst at ADHDNET, a UK healthcare provider, in 2025, I wrote the organisation's AI Usage Policy, with a contracted physician signing off everything AI drafted or summarised.

MSc Data Science and Analytics, University of Leeds (2024) · BTech Electronics and Communication Engineering, Techno India Saltlake (2020)

Contact: rajarshin264@gmail.com
