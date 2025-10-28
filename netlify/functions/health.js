import fetch from "node-fetch";

exports.handler = async function () {
  
  try {
    await fetch("https://sentry.io/api/0/monitors/https://o4510265954205696.ingest.de.sentry.io/checkinhttps://o4510265954205696.ingest.de.sentry.io/api/4510265988350032/cron/heartbeat/39cd8b4e3f3208aa1832ebf7fca25664/", {
      method: "POST",
    });
  } catch (err) {
    console.error("Sentry monitor checkin failed:", err);
  }

  
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "ok" }),
  };
};