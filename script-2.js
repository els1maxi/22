let money = 1000; 
let bet = 10; 
let rounds = 0; 

while (money > 0 && money < 2000) { 
    let color = prompt("Зробіть вашу ставку на чорний або червоний колір:");
    let betAmount = parseInt(prompt(`У вас є $${money}. Скільки ви хочете поставити?`));

    if (betAmount <= 0 || betAmount > money) {
        alert("Недопустима сума ставки!");
        continue;
    }

    let rouletteResult = Math.random() < 0.5 ? "чорний" : "червоний";

    if (color === rouletteResult) {
        money += betAmount;
        alert(`Ви виграли $${betAmount}!`);
        bet = 10; 
    } else {
        money -= betAmount;
        alert(`Ви програли $${betAmount}.`);
        bet *= 2; 
    }

    rounds++;
}

if (money <= 0) {
    alert(`Ви втратили всі гроші після ${rounds} раундів.`);
} else {
    alert(`Вітаємо! Ви подвоїли свої гроші після ${rounds} раундів.`);
}
