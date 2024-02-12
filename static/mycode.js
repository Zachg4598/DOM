let history = [];

function spinRoulette() {
    const numbers = ["0", "34", "10", "21", "28", "4", "18", "9", "27", "22", "12", "3", "17", "20", "11", "33", "2", "10", "32", "00", "15", "8", "25", "1", "31", "20", "14", "30", "7", "24", "29", "35", "6", "13", "23", "19", "5", "36"];
    const index = Math.floor(Math.random() * numbers.length);
    const number = numbers[index];
    let colorClass, parityClass, passFailClass;

    if (number === "0" || number === "00") {
        colorClass = number === "0" ? "rouge" : "noir";
    } else {
        colorClass = index % 2 === 0 ? "noir" : "rouge";
    }

    const numberInt = parseInt(number);
    const isEven = numberInt % 2 === 0;
    parityClass = isEven ? "pair" : "impair";
    passFailClass = (number === "0" || number === "00") ? (number === "0" ? "manque" : "passe") : (numberInt <= 18 ? "manque" : "passe");

    const spin = {
        number,
        colorClass,
        parityClass,
        passFailClass
    };

    history.unshift(spin);
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('spinHistory');
    tableBody.innerHTML = '';

    history.forEach(spin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${spin.number}</td>
            <td class="${spin.colorClass}">${spin.colorClass.charAt(0).toUpperCase() + spin.colorClass.slice(1)}</td>
            <td class="${spin.parityClass}">${spin.parityClass.charAt(0).toUpperCase() + spin.parityClass.slice(1)}</td>
            <td class="${spin.passFailClass}">${spin.passFailClass.charAt(0).toUpperCase() + spin.passFailClass.slice(1)}</td>
        `;
        tableBody.appendChild(row);
    });
}

window.onload = function () {
    document.getElementById('spinButton').addEventListener('click', spinRoulette);
};
