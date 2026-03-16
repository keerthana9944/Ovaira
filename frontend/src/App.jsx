import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";
import Plot from "react-plotly.js";

export default function App() {
  const inputRefs = useRef([]);

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);

  const [form, setForm] = useState({
    glucose: "", 
    lactate: "", 
    sodium: "", 
    potassium: "", 
    chloride: "",
    cortisol: "", 
    skin_temperature: "", 
    stress_level: "", 
    heart_rate: "",
    sweat_rate: "", 
    estradiol: "", 
    progesterone: "", 
    lh: "", 
    fsh: "",
    testosterone: "", 
    shbg: "", 
    crp: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInputKeyDown = async (e, index, totalFields) => {
    if (e.key !== "Enter") {
      return;
    }

    e.preventDefault();

    if (loading) {
      return;
    }

    if (index < totalFields - 1) {
      inputRefs.current[index + 1]?.focus();
      return;
    }

    const hasEnteredData = Object.values(form).some(
      (value) => String(value).trim() !== ""
    );

    if (!hasEnteredData) {
      return;
    }

    const submitted = await submitSensor();
    if (submitted) {
      inputRefs.current[index]?.blur();
    }
  };

  // ✅ SUBMIT SENSOR DATA
  const submitSensor = async () => {
    try {
      await axios.post("https://ayira-backend.onrender.com/api/sensor/add",
        Object.fromEntries(
          Object.entries(form).map(([k, v]) => [k, Number(v)])
        )
      );

      setMessage("Sensor data submitted successfully");
      setIsError(false);
      return true;

    } catch {
      setMessage("Failed to submit sensor data");
      setIsError(true);
      return false;
    }
  };

  // ✅ GENERATE REPORT
  const generateReport = async () => {
    setLoading(true);
    try {

      const res = await axios.post("https://ayira-backend.onrender.com/api/reports/daily");

      setMessage(res.data.summary);
      setIsError(false);

      const all = await axios.get("https://ayira-backend.onrender.com/api/reports/all");
      setReports(all.data);
      return true;

    } catch {
      setMessage("Failed to generate report");
      setIsError(true);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const parseReportDate = (timestamp) => {
    if (!timestamp) {
      return null;
    }

    if (typeof timestamp === "string" && /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(timestamp)) {
      return new Date(timestamp.replace(" ", "T") + "Z");
    }

    return new Date(timestamp);
  };

  const formatReportTime = (timestamp) => {
    const date = parseReportDate(timestamp);

    if (!date || Number.isNaN(date.getTime())) {
      return "Invalid time";
    }

    return date.toLocaleString();
  };

  // ✅ CHART DATA
  const chartData = reports.map(r => {
    const match = r.summary.match(/PCOS\s*Risk\s*Score\s*[:\-]?\s*(\d+)/i);

    return {
      time: formatReportTime(r.generated_at),
      risk: match ? Number(match[1]) : 0
    };
  });

  // ✅ RISK LEVEL FUNCTION
  const getRiskLevel = (score) => {
    if (score <= 30) return { label: "LOW RISK", color: "green" };
    if (score <= 60) return { label: "MODERATE RISK", color: "orange" };
    return { label: "HIGH RISK", color: "red" };
  };

  // ✅ LATEST REPORT
  const latestReport = [...reports].sort(
    (a, b) => {
      const bTime = parseReportDate(b.generated_at)?.getTime() || 0;
      const aTime = parseReportDate(a.generated_at)?.getTime() || 0;
      return bTime - aTime;
    }
  )[0];

  const latestSummary = latestReport ? latestReport.summary : "";

  const latestScoreMatch =
    latestSummary.match(/PCOS\s*Risk\s*Score\s*[:\-]?\s*(\d+)/i);

  const latestScore = latestScoreMatch
    ? Number(latestScoreMatch[1])
    : null;

  const latestRisk =
    latestScore !== null ? getRiskLevel(latestScore) : null;

  // ✅ INSIGHTS
  const getInsights = (summary) => {
    if (!summary) return [];

    const insights = [];

    if (summary.includes("LH Surge"))
      insights.push("LH surge detected");

    if (summary.includes("Low Progesterone"))
      insights.push("Low progesterone - possible anovulation");

    if (summary.includes("High Cortisol"))
      insights.push("High cortisol - elevated stress");

    if (summary.includes("High CRP"))
      insights.push("Elevated CRP - inflammation");

    if (summary.includes("High Testosterone"))
      insights.push("Elevated testosterone - PCOS indicator");

    return insights;
  };

  const insights = getInsights(latestSummary);

  const latestSummaryWithScoreRemoved = latestSummary
    ? latestSummary.replace(/PCOS\s*Risk\s*Score\s*[:\-]?\s*\d+\s*%?/i, "").trim()
    : "";

  const plotLayout = {
    title: {
      text: "PCOS Risk Trend",
      font: { family: "'Space Grotesk', sans-serif", size: 20, color: "#311046" }
    },
    paper_bgcolor: "rgba(255,255,255,0)",
    plot_bgcolor: "#fff4fa",
    margin: { l: 45, r: 18, t: 56, b: 52 },
    xaxis: {
      title: "Time",
      color: "#5c2a6e",
      gridcolor: "#f3d5e8",
      tickfont: { size: 11 }
    },
    yaxis: {
      title: "Risk Score",
      range: [0, 100],
      color: "#5c2a6e",
      gridcolor: "#f3d5e8"
    }
  };

  const fieldKeys = Object.keys(form);

  return (
    <div className="app">
      <div className="container">
        <div className="titleBlock">

           <h1>AYIRA</h1>
           <p>AI for Your Integrated Reproductive Awareness</p>
        </div>

        <section className="panel">
          <div className="panelHeader">
            <h2 className="sectionTitle">Manual Health Data Input</h2>
            <p className="sectionSubtext">Enter biomarker values to generate a fresh risk profile and report.</p>
          </div>

          <div className="inputGrid">
            {fieldKeys.map((key, index) => (
              <div className="inputBox" key={key}>
                <label>
                  {key
                    .replaceAll("_", " ")
                    .replace(/\b\w/g, c => c.toUpperCase())
                  }
                </label>

                <input
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  onKeyDown={(e) => handleInputKeyDown(e, index, fieldKeys.length)}
                  autoFocus={index === 0}
                  placeholder={`Enter ${key}`}
                />
              </div>
            ))}
          </div>

          <div className="buttonRow">
            <button onClick={submitSensor} className="secondaryBtn">
              Submit Sensor Data
            </button>

            <button
              onClick={generateReport}
              disabled={loading}
              className="primaryBtn"
            >
              {loading ? "Generating..." : "Generate Report"}
            </button>
          </div>

          {message && (
            <div className={isError ? "errorBox" : "successBox"}>
              {message}
            </div>
          )}
        </section>

        {latestRisk && (
          <section className="riskBanner" style={{ borderColor: latestRisk.color }}>
            <p>Current PCOS Status</p>
            <strong style={{ color: latestRisk.color }}>
              {latestRisk.label} ({latestScore}%)
            </strong>
          </section>
        )}

        <div className="resultsGrid">
          {insights.length > 0 && (
            <section className="reportCard">
              <h3>Health Insights</h3>
              <ul className="insightsList">
                {insights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {latestSummary && (
            <section className="reportCard">
              <h3>Latest Summary</h3>
              <p>{latestSummaryWithScoreRemoved || latestSummary}</p>
            </section>
          )}
        </div>

        {reports.length > 0 && (
          <section className="historySection">
            <h3>Report History</h3>
            {reports.map((r) => (
              <div key={r.id} className="reportCard historyCard">
                <small>{formatReportTime(r.generated_at)}</small>
                <p>{r.summary}</p>
              </div>
            ))}
          </section>
        )}

        {chartData.length > 0 && (
          <section className="chartSection">
            <Plot
              data={[
                {
                  x: chartData.map((d) => d.time),
                  y: chartData.map((d) => d.risk),
                  type: "scatter",
                  mode: "lines+markers",
                  name: "PCOS Risk Score",
                  line: { color: "#c61c6f", width: 4, shape: "spline" },
                  marker: {
                    size: 8,
                    color: "#fa255e",
                    line: { color: "#6c1e71", width: 1.5 }
                  },
                  fill: "tozeroy",
                  fillcolor: "rgba(250, 37, 94, 0.16)",
                  hovertemplate: "Risk: %{y}%<br>%{x}<extra></extra>"
                }
              ]}
              layout={plotLayout}
              config={{ responsive: true, displaylogo: false }}
              className="riskPlot"
            />
          </section>
        )}

      </div>
    </div>
  );
}
