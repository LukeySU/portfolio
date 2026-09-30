import React from "react";
import { FaCheck } from "react-icons/fa6";
import BrandMark from "./BrandMark";
import TermLink from "./TermLink";
import dashboardHealthy from "../assets/case-study/dashboard-healthy.webp";
import dashboardHealthySmall from "../assets/case-study/dashboard-healthy-720.webp";
import alertFiring from "../assets/case-study/alert-firing.webp";
import alertFiringSmall from "../assets/case-study/alert-firing-720.webp";
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
  React.useEffect(() => {
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousTitle = document.title;
    const previousHref = canonical?.href;

    document.title = "Kubernetes Reliability Lab — Case Study | Łukasz Sulowski";
    canonical?.setAttribute(
      "href",
      "https://lukaszsulowski.eu/case-study/kubernetes-reliability-lab",
    );

    return () => {
      document.title = previousTitle;
      if (previousHref) canonical.setAttribute("href", previousHref);
    };
  }, []);

  return (
    <div className="case-study-page">
      <header className="header case-study-nav">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Łukasz Sulowski portfolio">
            <BrandMark />
            <span className="brand-name">Łukasz Sulowski</span>
          </a>
          <TermLink size="small" href="/#projects">
            Back to portfolio
          </TermLink>
        </div>
      </header>

      <main>
        <section id="reliability-case-study" className="case-study">
          <div className="case-study-inner">
        <header className="case-study-heading" data-reveal>
          <div>
            <p className="section-kicker">Case study 01</p>
            <h1>
              Kubernetes <span>Reliability Lab.</span>
            </h1>
          </div>
          <p>
            A production-minded environment for testing deployment,
            observability, failure detection, and recovery entirely locally.
          </p>
        </header>

        <div className="case-study-overview">
          <article className="case-study-card" data-reveal>
            <p className="case-study-label"><span className="section-index" aria-hidden="true">01 /</span> Challenge</p>
            <h2>Production-style testing without cloud cost.</h2>
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
            <p className="case-study-label"><span className="section-index" aria-hidden="true">02 /</span> Solution</p>
            <h2>A small platform with real operational signals.</h2>
            <p>
              A kind cluster runs two application replicas deployed with Helm,
              while the monitoring stack discovers targets and evaluates
              reliability rules.
            </p>
            <div className="architecture-path" aria-label="Project architecture">
              <div>
                <span className="tech-chip">User</span><i>→</i>
                <span className="tech-chip">Service</span><i>→</i>
                <span className="tech-chip">2 pods</span>
              </div>
              <div>
                <span className="tech-chip">Prometheus</span><i>→</i>
                <span className="tech-chip">Alertmanager</span><i>+</i>
                <span className="tech-chip">Grafana</span>
              </div>
            </div>
          </article>
        </div>

        <div className="failure-drill">
          <div className="case-study-section-heading" data-reveal>
            <p className="case-study-label">Failure drill</p>
            <h2>From healthy service to verified recovery.</h2>
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
            <p className="case-study-label"><span className="section-index" aria-hidden="true">03 /</span> What failed</p>
            <h2>The first alert rule missed a complete target disappearance.</h2>
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
            <p className="case-study-label"><span className="section-index" aria-hidden="true">04 /</span> Evidence</p>
            <h2>Observed, triggered, and resolved.</h2>
          </div>
          <div className="evidence-grid">
            <figure data-reveal>
              <img
                src={dashboardHealthy}
                srcSet={`${dashboardHealthySmall} 720w, ${dashboardHealthy} 1440w`}
                sizes="(max-width: 760px) 88vw, 610px"
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
                srcSet={`${alertFiringSmall} 720w, ${alertFiring} 1440w`}
                sizes="(max-width: 760px) 88vw, 610px"
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
            <p className="case-study-label"><span className="section-index" aria-hidden="true">05 /</span> Outcome</p>
            <h2>A repeatable reliability test, not just a running cluster.</h2>
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
            <TermLink
              variant="primary"
              size="small"
              href="https://github.com/LukeySU/kubernetes-reliability-lab"
              target="_blank"
              rel="noreferrer"
            >
              View source
            </TermLink>
            <TermLink
              size="small"
              href="https://github.com/LukeySU/kubernetes-reliability-lab/blob/main/docs/runbook.md"
              target="_blank"
              rel="noreferrer"
            >
              Read runbook
            </TermLink>
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
