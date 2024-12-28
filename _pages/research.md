---
layout: page
title: Research
permalink: /research/
description:
nav: true
nav_order: 1
horizontal: false
---
## 1. **DIALECTBENCH: A NLP Benchmark for Dialects, Varieties, and Closely-Related Languages**
DIALECTBENCH is the first large-scale benchmark for NLP on dialects, varieties, and related languages. It aggregates task-varied datasets (10 tasks covering 281 varieties) to evaluate NLP performance across non-standard language varieties. The study uncovers significant performance disparities between standard and non-standard varieties, advocating for greater inclusivity in NLP benchmarks. Language clusters with larger performance divergences across tasks are identified, providing substantial evidence of differences in vocabulary, pronunciation, and grammar between standard and non-standard varieties. This benchmark paves the way for more comprehensive evaluation of NLP systems on diverse language varieties. [Explore DIALECTBENCH](https://fahimfaisal.info/DialectBench.io/).

## 2. **Dataset Geography: Mapping Language Data to Language Users**
This project explores the geographical representativeness of NLP datasets. It quantifies how well these datasets align with the expected needs of language speakers worldwide. The study also introduces a method for "good-enough" entity linking without requiring prior entity recognition. The work highlights geographical and economic factors influencing dataset distributions. Current datasets often fail to represent language users equitably, as shown by maps that reveal significant overrepresentation of regions like the USA and Western Europe, while underrepresenting areas such as East Africa. This encourages researchers to consider the geographical context of their datasets to ensure global applicability of NLP systems. [Learn more about this project](https://nlp.cs.gmu.edu/project/datasetmaps/).

## 3. **Geographic and Geopolitical Biases of Language Models**
Pretrained language models (PLMs) often fail to represent users from underrepresented world regions due to biases in training data. This study proposes a Geographic-Representation Probing Framework to evaluate and quantify geographic biases in PLMs. The framework uses entity-country mappings to reveal how PLMs over-amplify geopolitical favoritism during inference. The findings show that while PLMs map well to country-level associations, their knowledge is unevenly distributed across languages. Geopolitical favoritism is amplified in large-scale models despite notions of geographical proximity, highlighting the critical need to address these biases to make language models more equitable globally. [Read the full paper](https://aclanthology.org/2023.mrl-1.12/).

## 4. **Phylogeny-Inspired Adaptation of Multilingual Models to New Languages**
This work focuses on improving the cross-lingual transfer of multilingual language models (MLMs) using language phylogenetic information. By structuring training around linguistically related languages, the study achieves significant improvements in performance for both syntactic and semantic tasks, especially on languages unseen during pre-training. Adapter-based training on diverse language families (e.g., Germanic, Uralic, Tupian) delivers over 20% performance improvement compared to strong baselines. The research demonstrates the effectiveness of leveraging linguistic relationships to enhance model adaptability to low-resource languages. [Read the full paper](https://aclanthology.org/2022.aacl-main.34/).


