// Theme Toggle (persists)
const themeBtn = document.getElementById("themeToggle");
const root = document.body;
function setTheme(mode){
  if(mode === "light"){ root.classList.add("light"); themeBtn.textContent = "☀️"; }
  else { root.classList.remove("light"); themeBtn.textContent = "🌙"; }
  localStorage.setItem("siteTheme", mode);
}
setTheme(localStorage.getItem("siteTheme") || "dark");
themeBtn.addEventListener("click", () => {
  const next = root.classList.contains("light") ? "dark" : "light";
  setTheme(next);
});

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp helpers
const WHATSAPP_NUMBER = "918975570113"; // 91 + your number

// Direct WhatsApp button (quick hello)
const directBtn = document.getElementById("whatsappDirect");
directBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I saw your portfolio and want to discuss a project.")}`;

// Contact form -> WhatsApp
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `New Project Inquiry:
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});
