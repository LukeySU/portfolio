export async function handler() {
  const monitorUrl = "https://o4510265954205696.ingest.de.sentry.io/api/4510265988350032/cron/hearbeat/39cd8b4ef3f2e8aa1832ebf7fca25664/";

  try {
    
    await fetch(`${monitorUrl}?status=ok`, { method: "POST" });
  } catch (err) {
    console.error("Sentry monitor checkin failed:", err);
  }

  
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "ok" }),
  };
}