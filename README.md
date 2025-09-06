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
- **Prototype & iterate AI apps fast** with LangChain/LangGraph, HuggingFace, RAG + vector DBs (Pinecone), and Streamlit.  
- **Ship to production** on **GCP**, with clean and reproducible repos.  
- **Collaborate across teams** (data engineers, scientists, stakeholders) to deliver tangible ROI.  

**Selected outcomes:**  
- 📈 Improved marketing ROI by **14%** and revenue by **6%**.  
- 💰 Helped secure **$45K** in investments with data-driven strategies.  
- ⚙️ Reduced churn by **9%** with predictive modeling.  
- 📊 Cut processing time by **23%** with hardened ETL pipelines.  

---

### 🧰 Tech I Work With
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
</p>

---

### 🌟 Featured Projects
**1) Job Lens AI — Resume↔JD Fit + Interview Prep**  
Semantic matching + skill gap analysis using **Groq LLM API (Llama 3.1 8B)**, **LangChain**, and **Streamlit** on **GCP**.  
🔗 [GitHub Repo](https://github.com/rajo69/job_lens_ai)

**2) Robust CNN — Hybrid Adversarial Training (CIFAR-10)**  
Boosted robustness by **6100%** while keeping **88%** accuracy; MATLAB on HPC.  
🔗 [GitHub Repo](https://github.com/rajo69/Enhancing-Neural-Network-Robustness-using-Hybrid-Adversarial-Training)

**3) Time-Series + Text Analytics**  
Forecasted consumer spending & analyzed hotel reviews with R (time-series + NLP).  
🔗 [GitHub Repo](https://github.com/rajo69/Time-Series-Forecasting-Text-Analytics)  
🔗 [Shiny App Demo](https://rgox6k-rajarshi-nandi.shinyapps.io/Shiny_Mushroom_App/)

---

### 🧩 Typical RAG App Architecture
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
