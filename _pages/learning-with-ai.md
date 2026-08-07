---
layout: page
title: Learning with AI
permalink: /learning-with-ai/
description: Open, searchable study guides and interactive books I build and maintain on modern AI — from ML foundations to building, evaluating, and serving agents and LLMs in production.
nav: true
nav_order: 5.5
---

A growing collection of open study guides I maintain. Each one is a full,
searchable book you can read online. Pick a track below.

<style>
  .guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 1.4rem;
    margin: 1.6rem 0 2.4rem;
  }
  .guide-card {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.05rem 1.05rem;
    border: 1px solid var(--global-divider-color, #e0e0e0);
    border-radius: 8px;
    background: var(--global-card-bg-color, transparent);
  }
  .guide-card .guide-title {
    font-size: 0.98rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 0 0 0.45rem;
  }
  .guide-card .guide-desc {
    font-size: 0.8rem;
    line-height: 1.5;
    opacity: 0.8;
    margin: 0 0 0.9rem;
    flex-grow: 1;
  }
  .guide-card .guide-link {
    font-size: 0.78rem;
    font-weight: 500;
    text-decoration: none;
  }
  .plain-links {
    font-size: 0.82rem;
    opacity: 0.85;
    margin-top: 1.6rem;
  }
  .plain-links a { margin-right: 1.1rem; }
</style>

<div class="guide-grid">

  <div class="guide-card">
    <div class="guide-title">Machine Learning &amp; LLMs</div>
    <div class="guide-desc">Classical ML, transformers, attention, LLM inference, alignment/RLHF, and scaling laws.</div>
    <a class="guide-link" href="https://fahimfaisal.info/ml_and_llm_learning/" target="_blank" rel="noopener">Open guide &rarr;</a>
  </div>

  <div class="guide-card">
    <div class="guide-title">Production Agent Engineering</div>
    <div class="guide-desc">Build-first: tool design and MCP, context engineering, memory, orchestration, CI/CD, security, deployment.</div>
    <a class="guide-link" href="https://fahimfaisal.info/learn-production-agent/" target="_blank" rel="noopener">Open guide &rarr;</a>
  </div>

  <div class="guide-card">
    <div class="guide-title">Agentic AI Evaluation</div>
    <div class="guide-desc">Metrics, benchmarks, tool-use and safety evaluation, monitoring, plus a design-patterns playbook.</div>
    <a class="guide-link" href="https://fahimfaisal.info/agentic-ai-evaluation-guide/" target="_blank" rel="noopener">Open guide &rarr;</a>
  </div>

  <div class="guide-card">
    <div class="guide-title">LLM Inference &amp; Serving</div>
    <div class="guide-desc">vLLM, Triton, Kubernetes, autoscaling, canary deploys, monitoring, and drift detection.</div>
    <a class="guide-link" href="https://fahimfaisal.info/llm-serving-inference-guide/" target="_blank" rel="noopener">Open guide &rarr;</a>
  </div>

  <div class="guide-card">
    <div class="guide-title">Toxicogenomics &amp; Single-Cell FMs</div>
    <div class="guide-desc">ML for toxicogenomics and single-cell foundation models: biological response and cell-state representations.</div>
    <a class="guide-link" href="https://fahimfaisal.info/toxicogenomics_and_single_cell_fm_learning/" target="_blank" rel="noopener">Open guide &rarr;</a>
  </div>

</div>

---

## Elsewhere on the web

Guides and books by other people that I keep coming back to. All free to read online.

### Foundations

- [Dive into Deep Learning](https://d2l.ai/) &mdash; an interactive book where every concept comes with runnable code in PyTorch, TensorFlow, and JAX.
- [Understanding Deep Learning](https://udlbook.github.io/udlbook/) &mdash; Simon Prince's book, free as a PDF, with unusually clear figures.
- [Mathematics for Machine Learning](https://mml-book.github.io/) &mdash; the linear algebra, calculus, and probability you actually need.
- [The Little Book of Deep Learning](https://fleuret.org/francois/lbdl.html) &mdash; the field compressed into an evening's reading. Good for revision.

### LLM internals

- [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) &mdash; Karpathy builds backprop, then a transformer, then a tokenizer, from nothing.
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course) &mdash; practical, hands-on, and kept current with the ecosystem.
- [The Ultra-Scale Playbook](https://huggingface.co/spaces/nanotron/ultrascale-playbook) &mdash; how training actually works across thousands of GPUs.

### Agents

- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) &mdash; when to use an agent and when a workflow is the better call.
- [Hugging Face Agents Course](https://huggingface.co/learn/agents-course) &mdash; agent fundamentals through deployment, with hands-on units.
- [Model Context Protocol](https://modelcontextprotocol.io/) &mdash; the spec and docs for the emerging standard for connecting agents to tools.

### Systems and serving

- [CUDA Kernels: GPU &amp; Parallel Programming from First Principles](https://arpanpathak.github.io/gpu-parallel-book/) &mdash; GPU programming built up from fundamentals.
- [ML Engineering Open Book](https://github.com/stas00/ml-engineering) &mdash; field notes from training large models: hardware, debugging, failure modes at scale.

### Practice

- [Made With ML](https://madewithml.com/) &mdash; design, develop, deploy, and iterate on production ML systems, with code.
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/course/2022/) &mdash; everything around the model: data, testing, deployment, monitoring, teams.

<p class="plain-links">
  <a href="https://crackmlinterview.com/" target="_blank" rel="noopener">crackmlinterview.com</a>
  <a href="https://neetcode.io/" target="_blank" rel="noopener">neetcode.io</a>
</p>
