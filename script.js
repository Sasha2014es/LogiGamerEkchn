const buttons = document.querySelectorAll(".card button");

let cartCount = 0;

document.body.appendChild(cart);


        // Анімація
        cart.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.2)" },
            { transform: "scale(1)" }
        ], {
            duration: 300
        });

  

// Плавний скрол
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        window.scrollTo({
            top: 500,
            behavior: "smooth"
        });
    });
});

// Темна/світла тема
const themeBtn = document.createElement("button");

themeBtn.textContent = "🌙 Тема";
themeBtn.style.position = "fixed";
themeBtn.style.bottom = "20px";
themeBtn.style.right = "20px";
themeBtn.style.padding = "12px 20px";
themeBtn.style.border = "none";
themeBtn.style.borderRadius = "10px";
themeBtn.style.background = "#111";
themeBtn.style.color = "white";
themeBtn.style.cursor = "pointer";

document.body.appendChild(themeBtn);

let dark = false;

themeBtn.addEventListener("click", () => {

    dark = !dark;

    if(dark){
        document.body.style.background = "#121212";
        document.body.style.color = "white";

        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "#1e1e1e";
            card.style.color = "white";
        });

    } else {

        document.body.style.background = "#f5f5f5";

        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "white";
            card.style.color = "#222";
        });
    }
});
