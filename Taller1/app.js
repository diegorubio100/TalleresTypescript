"use strict";
class Serie {
    constructor(id, name, channel, seasons) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
}
const series = [
    new Serie(1, "Friends", "NBC", 10),
    new Serie(2, "Breaking Bad", "AMC", 5),
    new Serie(3, "Game of Thrones", "HBO", 8),
    new Serie(4, "The Crown", "Netflix", 4),
    new Serie(5, "Chernobyl", "HBO", 1),
    new Serie(6, "The Sopranos", "HBO", 6),
    new Serie(7, "The Office", "NBC", 9),
];
const tableBody = document.getElementById("table-body");
if (tableBody) {
    series.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
        tableBody.appendChild(row);
    });
}
const promedio = series.reduce((total, serie) => total + serie.seasons, 0) / series.length;
const promedioDiv = document.getElementById("promedio");
if (promedioDiv) {
    promedioDiv.textContent = `Seasons average: ${promedio.toFixed(2)}`;
}
