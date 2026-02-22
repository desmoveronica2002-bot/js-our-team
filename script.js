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

//Aggiungere un form di aggiunta membri
// che permetta di visualizzare il nuovo membro sulla pagina

const tabelleDaCompilare = document.getElementById('nascondi');
tabelleDaCompilare.style.display = "none"; 

function compilaDati(){
  tabelleDaCompilare.style.display = 'block';

}

function conferma(){

  const nomeCognomeUtente = document.getElementById('nome_cognome').value;
  const specializzazioneUtente = document.getElementById('specializzazione').value;
  const mailUtente = document.getElementById('mail').value ;

    const markup = `
    <div class="elimina_colonna col-12 col-md-6 col-lg-4">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-6 col-md-4 d-flex">
            <img src="img/utente.png" class="fluido rounded-start" alt="...">
          </div>
          <div class="col-6 col-md-8">
            <div class="card-body bg-dark text-white fluido">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title mb-0">${nomeCognomeUtente}</h5>
                <button class="btn btn-primary btn-sm elimina"><i class="bi bi-trash"></i></button>
              </div>  
              <p class="card-text">${specializzazioneUtente}</p>
              <p class="card-text text-info">${mailUtente}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  cardContainer.innerHTML += markup; //Prendo quello che c’è già dentro il contenitore e aggiungo in fondo il nuovo markup
}

function fine(){
    document.getElementById("nome_cognome").value = "";
    document.getElementById("specializzazione").value = "";
    document.getElementById("mail").value = "";

    tabelleDaCompilare.style.display = "none"; 
}

// eliminare una card col cestino
  cardContainer.addEventListener("click", function(event) { //.addEventListener("click", ...) ascolta qualsiasi click dentro il contenitore

  if (event.target.closest(".elimina")) { //event => è l’evento (click)/.targhet è l'oggetto html/ .closest(".elimina") risale fino al bottone <button> con classe elimina (cestino)
    const card = event.target.closest(".elimina_colonna");
    card.remove();
  }

});
