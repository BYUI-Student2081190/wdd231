// Create variables
const getString = window.location.search;

const myInfo = new URLSearchParams(getString);

document.getElementById("results").innerHTML = `
<p>Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Proxy ${myInfo.get("ordinance")} on ${myInfo.get("date")} in the ${myInfo.get("location")} Temple</p>
<p>Your Phone: ${myInfo.get("phone")}</p>
<p>Your Email is ${myInfo.get("email")}</p>
`;