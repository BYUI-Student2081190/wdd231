// Get DOM variables
const section = document.getElementById("thankYouInfo");

// Get things from the URL
const formData = new URLSearchParams(window.location.search);

section.innerHTML = `
<p>Chamber Join Request made by ${formData.get("firstName")} ${formData.get("lastName")}</p>
<p>Your email: ${formData.get("email")}</p>
<p>Mobile Phone: ${formData.get("phoneNum")}</p>
<p>Buisness Name: ${formData.get("orgName")}</p>
<p>Request Made: ${formData.get("formTimeStamp")}</p>
`;