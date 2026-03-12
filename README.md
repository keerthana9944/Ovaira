# AYIRA – AI for Your Integrated Reproductive Awareness

## AI-Powered PCOS Risk Intelligence & Preventive Reproductive Health Platform

AYIRA is a biomarker-driven AI platform designed for early PCOS risk detection, continuous hormonal health monitoring, and preventive care, with a special focus on underserved and rural populations.

It transforms reproductive healthcare from reactive diagnosis → predictive intelligence.

## Problem

PCOS affects millions of women, yet:

- Diagnosis is delayed by years
- Symptoms are normalized and ignored
- Hormonal health awareness is low
- Rural populations lack access to continuous monitoring
- Preventive care is almost non-existent

Healthcare today is symptom-based, not data-driven.

## Solution

AYIRA provides:

- AI-generated PCOS risk scoring
- Biomarker-based health insights
- Longitudinal risk tracking
- Early awareness & preventive care

Through a simple, accessible digital interface.

## Key Features (Current Prototype)

### Manual Biomarker Input

Users can enter:

- Glucose
- Cortisol
- LH / FSH
- Testosterone
- Estradiol
- Progesterone
- CRP
- Heart rate
- Stress level
- Skin temperature
- Electrolytes

### AI Risk Engine

Generates:

- PCOS Risk Score (0–100)

Risk Level:

- Low
- Moderate
- High

Based on:

- LH/FSH ratio
- Hyperandrogenism indicators
- Inflammation markers
- Metabolic stress

### Health Insights Engine

Automatically detects:

- LH surge
- Low progesterone
- Elevated cortisol
- High CRP
- Elevated testosterone

### Risk Trend Visualization

Interactive chart showing:

- PCOS risk progression over time
- Health trajectory

### Automated Report Generation

Each report includes:

- Biomarker averages
- Derived clinical indicators
- Risk score
- Risk level
- AI-generated health summary

### Offline-First Architecture

The current AYIRA prototype is designed as an **offline-first system**.

- All biomarker data is stored locally using SQLite
- AI risk analysis runs on-device
- Reports are generated without requiring internet connectivity

This makes AYIRA:

- usable in low-resource and rural settings
- privacy-preserving
- independent of continuous cloud access

Future versions will support secure cloud synchronization while retaining offline functionality for accessibility.


## Implementation Phases

### Phase 1 – Digital AI Prototype (Current Stage)

Manual data → AI analysis → Report generation → Risk visualization

This phase validates:

- Risk model logic
- Data pipeline
- User workflow
- Health intelligence layer

### Phase 2 – Real-Time Smart Biomarker Integration

Wearable sensors → BLE → AYIRA → AI analysis → Live health insights

Planned capabilities:

- Non-invasive biomarker acquisition
- Continuous monitoring
- Real-time risk prediction
- Personalized recommendations

### Target Users

AYIRA is designed primarily for:

- Women and adolescent girls
- Rural and underserved populations
- Individuals with limited access to hormonal diagnostics
- Preventive healthcare users

### Social Impact

AYIRA aims to:

- Break myths around menstrual and hormonal health
- Promote early PCOS risk awareness
- Enable self-monitoring and preventive care
- Provide accessible reproductive health intelligence

With a special focus on:

- Teenage girls in rural areas
- where symptoms are often ignored and diagnosis is delayed.

### Future Clinical Collaboration

We aim to collaborate with:

- Fertility centres
- Gynecologists
- Diagnostic labs

For:

- Clinical validation
- Data-driven treatment support
- Research integration

### Future Roadmap

- AI health chatbot for reproductive health queries
- Symptom tracker
- Personalized lifestyle & nutrition guidance
- Multilingual support for rural accessibility
- Wearable integration
- Cloud health records
- Clinical decision support dashboard

### Tech Stack

**Frontend**

- React (Vite)
- Plotly.js
- Axios
- Custom CSS (responsive UI)

**Backend**

- Node.js
- Express.js
- SQLite

### System Architecture

User Input → Express API → AI Risk Engine → SQLite Database → Report Generation → React Dashboard

### How It Works

- User enters biomarker values
- Data stored in database
- AI engine computes risk score
- Report is generated
- Risk trend is visualized

### Founding Team

AYIRA is built by an interdisciplinary team combining technology and biomedical research.

**Nukabatni Herald Keerthana – Founder & Technology Lead**

- Full-stack development
- AI risk engine
- System architecture
- Data visualization
- Product design

**U. Sree Chandrika – Co-founder & Research Lead**

- Biomarker research
- Clinical range mapping
- Scientific validation
- Health model grounding

### Local Setup

**Backend**
cd backend
npm install
npm start

**Frontend**
cd frontend
npm install
npm run dev

### Innovation

AYIRA shifts PCOS care from:

symptom-based detection -> biomarker-driven predictive intelligence

### Prototype Status

**Completed**

- Manual biomarker input
- AI risk score generation
- Health insights
- Report generation
- Risk trend visualization

### In Progress

- Chatbot
- Symptom tracker
- Multilingual interface
- Wearable integration

### Vision

To build the world’s first continuous AI-powered reproductive health intelligence platform for early detection, preventive care, and rural accessibility.

**Empowering women with AI-driven reproductive health intelligence for early PCOS risk detection and preventive care**"# ayira-keerthana" 
