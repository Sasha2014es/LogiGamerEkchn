// Темна/світла тема
const themeBtn = document.createElement("button");
themeBtn.textContent = "🌙 Змінити тему";
themeBtn.style.position = "fixed";
themeBtn.style.bottom = "20px";
themeBtn.style.right = "20px";
themeBtn.style.padding = "12px 20px";
themeBtn.style.border = "none";
themeBtn.style.borderRadius = "10px";
themeBtn.style.background = "#111";
themeBtn.style.color = "white";
themeBtn.style.cursor = "pointer";
themeBtn.style.zIndex = "1000"; // Щоб кнопка завжди була зверху

document.body.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
    // Перемикаємо клас .dark-theme на тегу body
    document.body.classList.toggle("dark-theme");
    
    // Міняємо іконку в залежності від теми
    if(document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "☀️ Світла тема";
    } else {
        themeBtn.textContent = "🌙 Темна тема";
    }
});

// Плавний скрол (ваш код)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: 500, behavior: "smooth" });
    });
});
