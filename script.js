// Чекаємо, поки весь HTML завантажиться
document.addEventListener("DOMContentLoaded", () => {
    
    // Створюємо кнопку
    const themeBtn = document.createElement("button");
    themeBtn.textContent = "🌙 Темна тема";
    
    // Стилі кнопки
    Object.assign(themeBtn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        background: "#111",
        color: "white",
        cursor: "pointer",
        zIndex: "1000",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
    });

    document.body.appendChild(themeBtn);

    // Логіка перемикання
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            themeBtn.textContent = "☀️ Світла тема";
            themeBtn.style.background = "#fff";
            themeBtn.style.color = "#111";
        } else {
            themeBtn.textContent = "🌙 Темна тема";
            themeBtn.style.background = "#111";
            themeBtn.style.color = "white";
        }
    });
});
