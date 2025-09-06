<!--
README for: github.com/rajo69 (profile)
Tip: Keep this crisp. Update "Featured" + "Now" regularly.
-->

<h1 align="center">Hi, I'm Rajarshi Nandi 👋</h1>
<p align="center">
  <b>AI Engineer</b> • Rapid Prototyping • RAG & LangChain/LangGraph • Streamlit • GCP Deployments
  <br/>
  Turning ideas into shipped AI apps with measurable ROI.
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/rajarshi-nandi/">LinkedIn</a> •
  <a href="https://github.com/rajo69">GitHub</a> •
  <a href="mailto:rajarshin264@gmail.com">Email</a>
</p>

---

### 🚀 What I Do
- **Prototype & iterate AI apps fast** using LangChain/LangGraph, HuggingFace, RAG + vector DBs (Pinecone), and Streamlit.
- **Ship to prod** on **GCP** (and lightweight CI/CD) with clean, reproducible repos.
- **Collaborate across functions** (data engineers, scientists, stakeholders) to deliver tangible outcomes.

**Selected outcomes**
- 📈 Improved marketing ROI by **14%** and revenue by **6%** through ML-driven forecasting.
- 💰 Helped secure **$45K** in investments with data-driven strategies.
- ⚙️ Reduced churn by **9%** with predictive modeling.
- 📊 Cut processing time by **23%** by hardening ETL + data quality.

---

### 🧰 Tech I Reach For
<p>
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB"/>
  <img alt="LangChain" src="https://img.shields.io/badge/LangChain-0D9488"/>
  <img alt="LangGraph" src="https://img.shields.io/badge/LangGraph-0891B2"/>
  <img alt="HuggingFace" src="https://img.shields.io/badge/HuggingFace-FFCC4D"/>
  <img alt="RAG" src="https://img.shields.io/badge/RAG-6B7280"/>
  <img alt="Pinecone" src="https://img.shields.io/badge/Pinecone-2563EB"/>
  <img alt="Streamlit" src="https://img.shields.io/badge/Streamlit-FF4B4B"/>
  <img alt="GCP" src="https://img.shields.io/badge/GCP-4285F4"/>
  <img alt="Groq LLM API" src="https://img.shields.io/badge/Groq%20LLM-111827"/>
  <img alt="SQL" src="https://img.shields.io/badge/SQL-3B82F6"/>
  <img alt="scikit-learn" src="https://img.shields.io/badge/scikit--learn-F7931E"/>
  <img alt="pandas" src="https://img.shields.io/badge/pandas-150458"/>
  <img alt="NumPy" src="https://img.shields.io/badge/NumPy-013243"/>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED"/>
  <img alt="Cursor" src="https://img.shields.io/badge/Cursor%20(no/low%20code)-0F172A"/>
  <img alt="Lovable" src="https://img.shields.io/badge/Lovable%20(no/low%20code)-0F172A"/>
</p>

---

### 🌟 Featured Projects
<!-- Pin these repos on your GitHub profile to match this section -->

**1) Job Lens AI — Resume↔JD Fit + Interview Prep**  
Semantic match scoring + interview themes & skill gaps. Built with **Groq LLM API (Llama 3.1 8B)**, **LangChain**, **Streamlit**, concurrent processing on **GCP**.  
Repo: https://github.com/rajo69/job_lens_ai  
<!-- TODO: Add live demo link if hosted -->

**2) Robust CNN: Hybrid Adversarial Training (CIFAR-10)**  
Improved robustness by **6100%** while maintaining **88%** accuracy; MATLAB on HPC.  
Repo: https://github.com/rajo69/Enhancing-Neural-Network-Robustness-using-Hybrid-Adversarial-Training

**3) Time-Series + Text: Consumer Spend & Hotel Reviews (R)**  
Forecasting + NLP to surface drivers of service/location; accuracy comparison & visualization.  
Repo: https://github.com/rajo69/Time-Series-Forecasting-Text-Analytics  
Shiny demo (mushrooms ML): https://rgox6k-rajarshi-nandi.shinyapps.io/Shiny_Mushroom_App/

> Want the deeper engineering story? Most READMEs include architecture, setup, and “Why it works”.

---

### 🧩 Typical RAG App Architecture (example)
```mermaid
flowchart LR
  A[Docs / Data Sources] --> B[Chunk & Clean]
  B --> C[Embedder (HF / OpenAI / Instructor)]
  C --> D[(Vector DB: Pinecone)]
  E[User Query] --> F[Query Planner (LangGraph)]
  F --> G[Retriever]
  G --> D
  D --> H[Context Assembler]
  H --> I[LLM (Groq / HF Inference)]
  I --> J[Streamlit UI]
  J --> K[Observability (LangSmith / logs)]
