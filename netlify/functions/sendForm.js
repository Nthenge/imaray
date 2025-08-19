exports.handler = async (event, context) => {
  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  try {
    // Parse incoming form data
    const formData = JSON.parse(event.body || "{}");

    // Debug log (will appear in Netlify function logs)
    console.log("Received form data:", formData);

    // Your Google Script Web App URL
    const googleScriptUrl =
      "https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbwIJB-Eg5dPbbvHzNgs1PUEjPu7BxQfjyJBhNFwax80blHKCB4UZWBOhmptHkmOpwpAug/exec/exec";

    // Send data to Google Sheets via Google Apps Script
    const sheetRes = await fetch(googleScriptUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    // If Google Sheets script fails
    if (!sheetRes.ok) {
      throw new Error(`Google Script returned ${sheetRes.status}`);
    }

    const sheetData = await sheetRes.json();

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        message: "Form submitted successfully",
        googleResponse: sheetData,
      }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        message: "Error submitting form",
        error: error.message,
      }),
    };
  }
};
