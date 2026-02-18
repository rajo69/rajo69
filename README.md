# Rajarshi Nandi

**Research interests:** Robustness and reliability of learned models under real-world distribution mismatch · Uncertainty estimation and calibration · Multimodal learning under incomplete or noisy inputs · Trustworthy AI for deployment in safety-critical domains

MSc Data Science & Analytics, University of Leeds (2023–2024)
📧 rajarshin264@gmail.com · [LinkedIn](https://linkedin.com/in/rajarshi-nandi/)

---

## Research

My work sits at the intersection of **adversarial robustness** and **deployment-time reliability** — investigating how models behave when the data they encounter differs from what they were trained on, and how to design systems that respond to this mismatch safely and efficiently.

My Master's thesis explored the accuracy-robustness trade-off in deep neural networks through a curriculum adversarial training approach, finding that the *timing* of adversarial exposure during training critically determines whether it helps or harms generalisation. A key finding was that hybrid, schedule-aware strategies can preserve clean-data performance while meaningfully improving resilience — suggesting that context-sensitive, adaptive mechanisms are more effective than static training regimes.

This raised a broader question I find compelling across many deployment contexts: how do we design models that remain reliable and well-calibrated when the data they encounter after deployment differs — sometimes subtly, sometimes dramatically — from what they were trained on? And how should models signal or act on that uncertainty rather than producing confident but untrustworthy outputs?

---

## Projects

### [Hybrid Adversarial Training for Neural Network Robustness](https://github.com/rajo69/Enhancing-Neural-Network-Robustness-using-Hybrid-Adversarial-Training)
*Master's Thesis · University of Leeds · 2024*

Investigated the robustness-accuracy Pareto frontier in ResNet-18 (CIFAR-10) by designing a curriculum learning schedule that transitions from clean to adversarial training at a principled epoch boundary. Evaluated against FGSM and PGD attacks. Employed Grad-CAM to analyse how feature generalisation changes across training regimes — finding that curriculum-aware training produces more object-level, interpretable representations than either purely clean or purely adversarial approaches. Run on Leeds ARC4 HPC cluster.

`PyTorch` `MATLAB` `Adversarial Training (FGSM/PGD)` `Curriculum Learning` `Grad-CAM` `HPC`

---

### [Multimodal Vision-Language Integration](https://github.com/rajo69/Image-Caption-Generator-using-ResNet-152-and-RNN)
*Academic Project · University of Leeds · 2024*

Built an encoder-decoder image captioning model pairing ResNet-152 visual features with an RNN language decoder, trained on MS COCO. Observed significant performance degradation when visual encoder features were applied to out-of-distribution images — highlighting the fragility of cross-modal systems under input distribution mismatch and motivating interest in robust multimodal architectures.

`PyTorch` `ResNet-152` `RNN` `MS COCO` `Transfer Learning` `Encoder-Decoder`

---

### [RAG API for Regulatory Compliance (UKGC)](https://github.com/rajo69/ukgc-lccp-rag-api)
*Personal Project · 2026*

Designed a retrieval pipeline addressing the semantic context collapse that standard chunking methods introduce when processing hierarchically structured documents. By injecting metadata that preserves document structure during embedding, retrieval accuracy improved from 42% to 89% — demonstrating that architectural decisions about information representation have substantial downstream reliability consequences.

`Python` `LangChain` `Vector Retrieval` `FastAPI` `Semantic Search`

---

## Technical Skills

**Deep Learning:** PyTorch · TensorFlow · HuggingFace Transformers · Adversarial Training · Computer Vision · Grad-CAM  
**Research Areas:** Distribution Shift · Uncertainty Estimation · Robustness · Multimodal Learning · Continual Adaptation  
**Infrastructure:** Leeds ARC4 HPC · Linux · Docker · Git · OCI  
**Languages:** Python · MATLAB · SQL

---

## Currently Exploring

- Mechanisms for controlling adaptation in models deployed under distribution shift — when should a model update itself, and when should it abstain or defer?
- Uncertainty-aware and calibrated inference in safety-critical deployment contexts where overconfident predictions carry real consequences
- Multimodal architectures that remain reliable under missing, corrupted, or temporally drifting input modalities
- Lightweight approaches to continual learning that avoid catastrophic forgetting while adapting to individual data distributions over time
