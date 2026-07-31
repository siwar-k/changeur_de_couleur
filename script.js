document.addEventListener("DOMContentLoaded", () => {
  // 1. On sélectionne les éléments dont on a besoin
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // 2. Fonction qui génère une couleur hexadécimale aléatoire
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // 3. Au clic sur le bouton, on change la couleur de fond de la boîte
  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
