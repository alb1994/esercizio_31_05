let team = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "immagine":"Wayne-barnett-founder-ceo.jpg",
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "immagine":"angela-caroll-chief-editor.jpg",
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "immagine":"walter-gordon-office-manager.jpg",
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "immagine":"angela-lopez-social-media-manager.jpg",
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "immagine":"scott-estrada-developer.jpg",
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "immagine":"barbara-ramos-graphic-designer.jpg",
    }
];
//mando l'array al console.log
for(let i = 0; i < team.length; i++){
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i].immagine);
};
//mando l array al dom 
let dom = document.getElementById('dom')
for(let i=0; i< team.length; i++){
    dom.innerHTML += team[i].nome+'<br>';
    dom.innerHTML += team[i].ruolo+'<br>';
    dom.innerHTML += team[i].immagine+'<br>';
}