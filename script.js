//Dato un array di oggetti rappresentante un team di un’azienda, 
// creare una pagina dedicata  in cui mostrare una card per ciascun componente.

//Bonus

//Rendere l’esercizio responsive, mandando a capo le card
//Aggiungere un form di aggiunta membri che permetta di visualizzare 
//il nuovo membro sulla pagina (usate una foto qualunque,
// anche vostra se volete sentirvi parte del team! 😀)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardContainer = document.querySelector(".card-container"); //.card-container metto il punto perchè seleziono una classe e non un id

let cards = "";

function renderMarkup(name, role, email, img) {
  const markup = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-6 col-md-4 d-flex">
            <img src="${img}" class="fluido rounded-start" alt="...">
          </div>
          <div class="col-6 col-md-8">
            <div class="card-body bg-dark text-white fluido">
              <h5 class="card-title">${name}</h5>   
              <p class="card-text">${role}</p>
              <p class="card-text text-info">${email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return markup;
}

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  const { name, role, email, img } = member;
  const card = renderMarkup(name, role, email, img);

  cards += card;
}

cardContainer.innerHTML = cards;