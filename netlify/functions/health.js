export async function handler() {
  const monitorUrl = "https://o4510265954205696.ingest.de.sentry.io";

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