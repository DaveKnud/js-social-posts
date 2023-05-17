//Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//Milestone2 Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

const elContainer = document.getElementById("container")

//Creazione Ciclo forEach
posts.forEach((info) => {
    console.log(info.id + info.content + info.media + info.author + info.likes + info.created);
        
    elContainer.innerHTML += 
        `<div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src= ${info.author.image}  alt="Phil Mangione">  
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author"> ${info.author.name}</div>
                        <div class="post-meta__time"> ${info.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text"> ${info.content}</div>
            <div class="post__image">
                <img src=${info.media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id=${info.id} class="js-likes-counter">${info.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div> 
`;
    }
);

//Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
//Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
const counters = document.querySelectorAll(".likes__counter");
console.log(counters);

const buttons = document.querySelectorAll(".like-button");

buttons.forEach((element, i) => {
    element.addEventListener("click",
        function(event){
            element.classList.add("like-button--liked");
            event.preventDefault();
            let elContatoreIesimo = counters[i];
            let elValoreContatore = parseInt(elContatoreIesimo.innerHTML);
            console.log(elValoreContatore);
            elValoreContatore++;
            elContatoreIesimo.innerHTML = elValoreContatore;
        }
    )
});

