class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    image: string;
  
    constructor(id: number, name: string, channel: string, seasons: number, description: string, image: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.image = image;
    }
  }
  
  const series: Serie[] = [
    new Serie(1,"Friends","NBC",10,"Friends is an American television sitcom created by David Crane and Marta Kauffman. It aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. The show revolves around six friends in their 20s and 30s who live in Manhattan, New York City.","https://aux.iconspalace.com/uploads/13934642041588894148.png"),
    new Serie(2, "Breaking Bad", "AMC", 5, "A high school chemistry teacher diagnosed with terminal cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.", "https://img1.evosis.org/series/208/icon/icon0.X256.png"),
    new Serie(3, "Game of Thrones", "HBO", 8, "Set in the fictional world of Westeros, the show follows the power struggles between noble families as they fight for control of the Iron Throne and the Seven Kingdoms.", "https://i.pinimg.com/originals/3a/1c/ce/3a1cce7747265a9d386d5e1eebb3483f.jpg"),
    new Serie(4, "The Crown", "Netflix", 4, "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.", "https://tvandshow.files.wordpress.com/2018/01/the-crown-4.jpg?w=256&h=256"),
    new Serie(5, "Chernobyl", "HBO", 1, "A dramatization of the 1986 nuclear accident in Ukraine, depicting the efforts of scientists and government officials to contain the disaster and its aftermath.", "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_1080,w_1080,x_236,y_0/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1557122795/900tHlUYUkp7Ol04XFSoAaEIXcT_jchgqm"),
  ];
  
  const tableBody = document.getElementById("table-body");

if (tableBody) {
  series.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td class="serie-name">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    const nameCell = row.getElementsByTagName("td")[1];
    const descriptionContainer = document.getElementById("description-container");
    nameCell.addEventListener("click", () => {
      // Acciones a realizar cuando se haga clic en el nombre de la serie
      if (descriptionContainer) {
        descriptionContainer.innerHTML = `
          <div id="description-box">
            <h2>${serie.name}</h2>
            <img src="${serie.image}" alt="${serie.name}" />
            <p>${serie.description}</p>
          </div>
        `;
      }
    });
    nameCell.addEventListener("mouseover", () => {
      nameCell.style.color = "blue";
    });
    nameCell.addEventListener("mouseout", () => {
      nameCell.style.color = "";
    });
    tableBody.appendChild(row);
  });
}

  
  const promedio = series.reduce((total, serie) => total + serie.seasons, 0) / series.length;
  const promedioDiv = document.getElementById("promedio");
  if (promedioDiv) {
    promedioDiv.textContent = `Seasons average: ${promedio.toFixed(2)}`;
  }
  
