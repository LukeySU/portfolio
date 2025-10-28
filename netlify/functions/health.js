import fetch from "node-fetch";

exports.handler = async function () {
  
  try {
    await fetch("https://sentry.io/api/0/monitors/<TWÓJ_MONITOR_ID>/checkin/", {
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