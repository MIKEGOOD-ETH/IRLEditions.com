const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent("IRL Editions demo request");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nCampaign idea:\n${message}`);

    window.location.href = `mailto:hello@irleditions.com?subject=${subject}&body=${body}`;
  });
}
