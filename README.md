# Ovaira – AI for Reproductive Health Awareness

## AI-Powered PCOS Awareness, Risk Intelligence & Preventive Health Platform

**Ovaira** is an AI-powered reproductive health platform designed to help women understand hormonal health, monitor key biomarkers, and gain early awareness of potential PCOS risks.

The platform focuses on **preventive health, early awareness, and accessible reproductive health knowledge**, especially for individuals who may not have easy access to medical resources or reliable health education.

Ovaira shifts reproductive healthcare from **reactive diagnosis → proactive awareness and monitoring.**

---

# Problem

Polycystic Ovary Syndrome (PCOS) affects millions of women worldwide, yet:

* Diagnosis is often delayed for several years
* Symptoms are frequently normalized or ignored
* Awareness about hormonal health remains limited
* Many women lack access to reliable reproductive health information
* Preventive monitoring tools are rarely available

As a result, many individuals only learn about PCOS **after symptoms become severe**.

Current healthcare systems largely focus on **treatment after diagnosis**, rather than **early awareness and prevention**.

---

# Solution

**Ovaira** provides a digital platform that enables users to:

* Track hormonal and metabolic biomarkers
* Understand potential PCOS risk patterns
* Monitor reproductive health trends
* Access reliable educational resources
* Ask reproductive health questions through an AI chatbot

Through a **simple and accessible web interface**, Ovaira empowers users with knowledge and data-driven insights into their hormonal health.

---

# Key Features

## Manual Biomarker Tracking

Users can manually enter key health and biomarker values, including:

* Glucose
* Cortisol
* LH / FSH
* Testosterone
* Estradiol
* Progesterone
* CRP
* Heart Rate
* Stress Level
* Skin Temperature
* Electrolytes

Tracking these values over time helps users observe **patterns in hormonal and metabolic health.**

---

## AI-Powered PCOS Risk Analysis

Ovaira analyzes biomarker data to generate a:

**PCOS Risk Score (0–100)**

Risk levels include:

* Low Risk
* Moderate Risk
* High Risk

The risk engine evaluates indicators such as:

* LH / FSH imbalance
* Hyperandrogenism markers
* Inflammation indicators
* Metabolic stress signals

This helps users identify **early warning signs** and seek medical advice when necessary.

---

## Health Insights Engine

The system automatically detects potential health signals such as:

* Possible LH surge
* Low progesterone levels
* Elevated cortisol levels
* High CRP indicating inflammation
* Elevated testosterone levels

These insights help users better understand **how biomarker changes relate to reproductive health.**

---

## Risk Trend Visualization

Ovaira provides interactive charts that display:

* PCOS risk progression over time
* Biomarker trends
* Overall hormonal health trajectory

This allows users to observe **long-term patterns in their reproductive health.**

---

## AI Health Chatbot

The integrated chatbot allows users to ask questions about:

* PCOS
* Hormonal health
* Menstrual cycles
* Lifestyle and health habits
* Preventive reproductive care

The chatbot acts as a **digital reproductive health assistant**, improving accessibility to reliable health information.

---

## Health Awareness Articles

Ovaira includes curated educational content covering topics such as:

* PCOS awareness
* Hormonal health basics
* Understanding the menstrual cycle
* Lifestyle habits for hormonal balance
* Preventive reproductive health tips

This helps users gain **clear, accessible knowledge about reproductive health.**

---

# Offline-First Architecture

Ovaira is designed with an **offline-first architecture**.

* Health data is stored locally using **SQLite**
* Core risk analysis runs locally
* Reports can be generated without internet access

This allows Ovaira to remain usable in **low-connectivity environments**, making it more accessible for rural and underserved communities.

Future versions may include **secure cloud synchronization**.

---

# Target Users

Ovaira is designed for:

* Women and adolescent girls
* Individuals interested in PCOS awareness
* Users monitoring hormonal health
* Communities with limited access to reproductive health education

---

# Social Impact

Ovaira aims to:

* Increase awareness about PCOS
* Encourage early monitoring of hormonal health
* Reduce stigma around menstrual and reproductive health discussions
* Provide accessible digital reproductive health guidance

With a strong focus on **young women and underserved communities.**

---

# Future Roadmap

Planned improvements include:

* Symptom tracking system
* Personalized lifestyle recommendations
* Multilingual support for improved accessibility
* Doctor consultation integration
* Expanded health education resources
* Advanced AI health insights

---

# Tech Stack

## Frontend

* React (Vite)
* Plotly.js
* Axios
* Custom CSS

## Backend

* Node.js
* Express.js
* SQLite

---

# System Architecture

User Input
    ↓
Express API
    ↓
AI Risk Engine
    ↓
SQLite Database
    ↓
Report Generation
    ↓
React Dashboard

---

# How It Works

1. User manually enters biomarker values
2. Data is stored in the database
3. AI risk engine analyzes the data
4. PCOS risk score is generated
5. Health insights are produced
6. Risk trends are visualized on the dashboard

---


# Local Setup

## Backend

```bash
cd backend
npm install
npm run dev
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Innovation

Ovaira brings a **data-driven approach to reproductive health awareness** by combining:

* Biomarker tracking
* AI-powered insights
* Health education
* Conversational AI assistance

This approach encourages **early awareness and preventive reproductive healthcare.**

---

# Vision

To build an **AI-powered reproductive health awareness platform** that empowers women to understand, monitor, and take control of their hormonal health through data-driven insights and accessible education.


