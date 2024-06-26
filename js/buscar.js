async function buscar(){

    const resposta = await fetch("https://660f44ac356b87a55c510d02.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json();
    
    console.log("Resposta", respostaDadosAgenda);

    const cards = document.getElementById("cards_games")

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
        var data = new Date(itemAgenda.dataJogo)
         return `
         
         <div class="cardItem">
         <div class="dataGame"> 
             <img src="../imagens/calendar-solid.svg" alt=""> ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}
         </div>
         <img class="img-background" src="${itemAgenda.urlImagens}" alt="">
         <div class="descricao">
             <p> <strong>${itemAgenda.nome}</strong> </p>
             <p> ${itemAgenda.descricao} </p>
             <p><strong>Gamers: </strong></p>

             <div class="gamers">
             ${
                itemAgenda.gamers.map((gamerItem) => {
                    return `<div class="gamerItem">@${gamerItem}</div>`
                }).join('')
             }
             </div>

           
         </div>  
         <div class="assistir">
                 <a class="assistirItem"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
         </div>
     </div>
         
         `
    }).join('');
} 


buscar();
