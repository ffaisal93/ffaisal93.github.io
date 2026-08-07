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

<div class="row row-cols-1 row-cols-md-2 g-4 mt-2">

  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Toxicogenomics &amp; Single-Cell FMs</h5>
        <p class="card-text">Machine learning for toxicogenomics and single-cell foundation models — learning biological response and cell-state representations from high-dimensional omics and single-cell data.</p>
        <a href="https://fahimfaisal.info/toxicogenomics_and_single_cell_fm_learning/" class="btn btn-sm btn-primary" target="_blank" rel="noopener">Open guide &rarr;</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Machine Learning &amp; LLMs</h5>
        <p class="card-text">Interview-grade deep dives on classical ML, transformers, attention, LLM inference, alignment/RLHF, scaling laws, and more — plus Anthropic certification prep.</p>
        <a href="https://fahimfaisal.info/ml_and_llm_learning/" class="btn btn-sm btn-primary" target="_blank" rel="noopener">Open guide &rarr;</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Agentic AI Evaluation</h5>
        <p class="card-text">Frameworks, metrics, benchmarks, tool-use and safety evaluation, and production monitoring for agentic AI systems &mdash; plus a 21-pattern design-patterns interview playbook and a long-horizon operations track.</p>
        <a href="https://fahimfaisal.info/agentic-ai-evaluation-guide/" class="btn btn-sm btn-primary" target="_blank" rel="noopener">Open guide &rarr;</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Production Agent Engineering</h5>
        <p class="card-text">A build-first guide to shipping agents: tool design and MCP, context engineering and memory, orchestration, evaluation and tracing, CI/CD, security, and deployment &mdash; with nine mini-projects and three end-to-end production systems.</p>
        <a href="https://fahimfaisal.info/learn-production-agent/" class="btn btn-sm btn-primary" target="_blank" rel="noopener">Open guide &rarr;</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">LLM Inference &amp; Serving</h5>
        <p class="card-text">Serving, containerizing, scaling, deploying, and monitoring LLM inference in production: vLLM, Triton, Kubernetes, autoscaling, canaries, drift detection.</p>
        <a href="https://fahimfaisal.info/llm-serving-inference-guide/" class="btn btn-sm btn-primary" target="_blank" rel="noopener">Open guide &rarr;</a>
      </div>
    </div>
  </div>

</div>


---

## Elsewhere on the web

Guides and books by other people that I keep coming back to. All of these are free to read online,
and all of them are genuinely good rather than merely popular.

### Foundations

- [Dive into Deep Learning](https://d2l.ai/) &mdash; an interactive book where every concept comes with runnable code in PyTorch, TensorFlow, and JAX. The closest thing to a standard textbook that you can actually execute.
- [Understanding Deep Learning](https://udlbook.github.io/udlbook/) &mdash; Simon Prince's book, free as a PDF, with unusually clear figures. Strong on the *why* behind architectures.
- [Mathematics for Machine Learning](https://mml-book.github.io/) &mdash; the linear algebra, calculus, and probability you actually need, without assuming you already have it.
- [The Little Book of Deep Learning](https://fleuret.org/francois/lbdl.html) &mdash; François Fleuret compresses the field into something you can read on a phone in an evening. Excellent for revision.
- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) &mdash; Jurafsky and Martin's NLP standard, updated for the LLM era and still free in draft.

### LLM internals

- [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) &mdash; Karpathy builds backprop, then a transformer, then a tokenizer, from nothing. If you only do one thing on this page, do this one.
- [LLM Visualization](https://bbycroft.net/llm) &mdash; a 3D walkthrough of a running transformer, token by token. Makes attention concrete in a way prose cannot.
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course) &mdash; practical, hands-on, and kept current with the ecosystem.
- [The Ultra-Scale Playbook](https://huggingface.co/spaces/nanotron/ultrascale-playbook) &mdash; how training actually works across thousands of GPUs: parallelism strategies, memory, and the engineering nobody writes down.

### Agents

- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) &mdash; Anthropic's short, opinionated piece on when to use an agent and when a workflow is the better call. The most useful thing written on agent architecture per word.
- [Hugging Face Agents Course](https://huggingface.co/learn/agents-course) &mdash; a free course covering agent fundamentals through deployment, with hands-on units.
- [Model Context Protocol](https://modelcontextprotocol.io/) &mdash; the spec and docs for the emerging standard for connecting agents to tools. Worth reading directly rather than through summaries.

### Systems and serving

- [CUDA Kernels: GPU &amp; Parallel Programming from First Principles](https://arpanpathak.github.io/gpu-parallel-book/) &mdash; Arpan Pathak's open book on GPU programming built up from fundamentals.
- [ML Engineering Open Book](https://github.com/stas00/ml-engineering) &mdash; Stas Bekman's field notes from training large models: hardware, debugging, and the failure modes you only meet at scale.
- [vLLM Documentation](https://docs.vllm.ai/) &mdash; the reference for high-throughput inference, and a good way to understand PagedAttention and continuous batching from the source.

### Practice

- [Made With ML](https://madewithml.com/) &mdash; design, develop, deploy, and iterate on production ML systems, with code.
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/course/2022/) &mdash; the course on everything around the model: data, testing, deployment, monitoring, and teams.
