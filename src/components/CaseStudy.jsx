import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaCheck, FaArrowUpRightFromSquare } from "react-icons/fa6";
import BrandMark from "./BrandMark";
import dashboardHealthy from "../assets/case-study/dashboard-healthy.png";
import alertFiring from "../assets/case-study/alert-firing.png";
import "../styles/Header.css";
import "../styles/CaseStudy.css";

const failureSteps = [
  { number: "01", label: "Healthy", detail: "2 targets" },
  { number: "02", label: "Outage", detail: "0 replicas" },
  { number: "03", label: "Pending", detail: "30 seconds" },
  { number: "04", label: "Firing", detail: "alert active", state: "firing" },
  { number: "05", label: "Recovery", detail: "2 replicas", state: "recovery" },
];

const outcomes = [
  "Repeatable Helm deployments",
  "Monitoring and actionable alerting",
  "Automated recovery validation",
  "Self-healing verification in CI",
];

function CaseStudy() {
  return (
    <div className="case-study-page">
      <header className="header case-study-nav">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Łukasz Sulowski portfolio">
            <BrandMark />
            <span className="brand-name">Łukasz Sulowski</span>
          </a>
          <a className="case-study-back" href="/#projects">
            <FaArrowLeft aria-hidden="true" /> Back to portfolio
          </a>
        </div>
      </header>

      <main>
        <section id="reliability-case-study" className="case-study">
          <div className="case-study-inner">
        <header className="case-study-heading" data-reveal>
          <div>
            <p className="section-kicker">Case study 01</p>
            <h2>
              Kubernetes <span>Reliability Lab.</span>
            </h2>
          </div>
          <p>
            A production-minded environment for testing deployment,
            observability, failure detection, and recovery entirely locally.
          </p>
        </header>

        <div className="case-study-overview">
          <article className="case-study-card" data-reveal>
            <p className="case-study-label">01 — Challenge</p>
            <h3>Production-style testing without cloud cost.</h3>
            <p>
              I wanted a repeatable way to validate monitoring, alerting, and
              recovery behavior without depending on a paid cloud environment.
            </p>
          </article>

          <article
            className="case-study-card"
            data-reveal
            style={{ "--reveal-delay": "80ms" }}
          >
            <p className="case-study-label">02 — Solution</p>
            <h3>A small platform with real operational signals.</h3>
            <p>
              A kind cluster runs two application replicas deployed with Helm,
              while the monitoring stack discovers targets and evaluates
              reliability rules.
            </p>
            <div className="architecture-path" aria-label="Project architecture">
              <div>
                <span>User</span><i>→</i><span>Service</span><i>→</i><span>2 pods</span>
              </div>
              <div>
                <span>Prometheus</span><i>→</i><span>Alertmanager</span><i>+</i><span>Grafana</span>
              </div>
            </div>
          </article>
        </div>

        <div className="failure-drill">
          <div className="case-study-section-heading" data-reveal>
            <p className="case-study-label">Failure drill</p>
            <h3>From healthy service to verified recovery.</h3>
          </div>
          <ol className="failure-flow" data-reveal aria-label="Failure drill lifecycle">
            {failureSteps.map((step) => (
              <li key={step.label} data-state={step.state}>
                <span className="failure-step-number">{step.number}</span>
                <strong>{step.label}</strong>
                <span>{step.detail}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="case-study-debug" data-reveal>
          <div className="case-study-debug-copy">
            <p className="case-study-label">03 — What failed</p>
            <h3>The first alert rule missed a complete target disappearance.</h3>
            <p>
              When the service had no targets, Prometheus returned no time
              series instead of a zero value. The rule needed to handle the
              absence of the series explicitly.
            </p>
          </div>
          <div className="case-study-code" aria-label="Prometheus query correction">
            <div className="code-example code-example-old">
              <span>Original rule</span>
              <code>{'sum(up{namespace="reliability-lab"}) < 1'}</code>
            </div>
            <div className="code-example code-example-fixed">
              <span>Validated fix</span>
              <code>
                {'sum(up{namespace="reliability-lab"}) < 1\n'}
                {'or absent(up{namespace="reliability-lab"})'}
              </code>
            </div>
          </div>
        </div>

        <div className="case-study-evidence">
          <div className="case-study-section-heading" data-reveal>
            <p className="case-study-label">04 — Evidence</p>
            <h3>Observed, triggered, and resolved.</h3>
          </div>
          <div className="evidence-grid">
            <figure data-reveal>
              <img
                src={dashboardHealthy}
                alt="Grafana dashboard showing two healthy application targets"
                width="1440"
                height="960"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>Healthy baseline</span>
                Grafana reports two available targets and successful traffic.
              </figcaption>
            </figure>
            <figure
              data-reveal
              style={{ "--reveal-delay": "80ms" }}
            >
              <img
                src={alertFiring}
                alt="Prometheus showing the ReliabilityDemoUnavailable alert firing"
                width="1440"
                height="960"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>Active outage</span>
                Prometheus reports ReliabilityDemoUnavailable as firing.
              </figcaption>
            </figure>
          </div>
        </div>

            <div className="case-study-outcome" data-reveal>
          <div>
            <p className="case-study-label">05 — Outcome</p>
            <h3>A repeatable reliability test, not just a running cluster.</h3>
          </div>
          <ul>
            {outcomes.map((outcome) => (
              <li key={outcome}>
                <FaCheck aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
          <div className="case-study-actions">
            <a
              className="case-study-button case-study-button-primary"
              href="https://github.com/LukeySU/kubernetes-reliability-lab"
              target="_blank"
              rel="noreferrer"
            >
              View source <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
            <a
              className="case-study-button"
              href="https://github.com/LukeySU/kubernetes-reliability-lab/blob/main/docs/runbook.md"
              target="_blank"
              rel="noreferrer"
            >
              Read runbook <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="case-study-footer">
        <p>Case study · Kubernetes Reliability Lab</p>
        <a href="/#projects">Back to portfolio</a>
      </footer>
    </div>
  );
}

export default CaseStudy;
