async function scrapeQRCodeData(imageURL) {
  const url = "https://www.qr-code-generator.com/";

  // Send a GET request to the website
  const response = await fetch(url);
  const html = await response.text();

  // Create a virtual DOM element from the response HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Find the form on the webpage
  const form = doc.getElementById("#input");

  // Extract the necessary input fields or parameters from the form
  // and construct the payload to be sent with the POST request

  const payload = new URLSearchParams();
  payload.append("image_url", imageURL);
  // Add other required parameters as needed

  // Send a POST request to the form's action URL with the payload
  const formActionURL = form.getAttribute("action");
  const postResponse = await fetch(formActionURL, {
    method: "POST",
    body: payload,
  });
  const postHTML = await postResponse.text();

  // Create a virtual DOM element from the POST response HTML
  const postDoc = parser.parseFromString(postHTML, "text/html");

  // Extract the QR code image and data from the parsed HTML
  const qrCodeImage = postDoc.getElementById("qr-code-image");
  const qrCodeData = postDoc.getElementById("qr-code-data");

  // Return the QR code image URL and data
  return {
    qrCodeImageURL: qrCodeImage.src,
    qrCodeData: qrCodeData.innerText.trim(),
  };
}

// Usage example
const imageURL = "https://example.com/image.jpg";
scrapeQRCodeData(imageURL)
  .then((result) => {
    console.log("QR Code Image URL:", result.qrCodeImageURL);
    console.log("QR Code Data:", result.qrCodeData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
