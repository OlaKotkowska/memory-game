
  const cardElements = ["airplane", "airplane", "animal", "animal", "apple", "apple", "crown", "crown", "eye", "eye", "heart", "heart", "home", "home", "star", "star", "world", "world"];
  let cards = document.querySelectorAll("div");
  //zamiana listy węzłów na tablicę
  cards=[...cards];
  const startTime = new Date().getTime();
  //który element jest kliknięty
  let activeCard = "";
  //przechowuje pare
  const activeCards = [];
  //ile par mamy razem/9 mini zwyciestw
  const gamePairs = cards.length/2
  let gameResult = 0;//licznik
  let moveCunter = 0;//licznik

// mini gra
  const clickCard = function (){
    activeCard = this;
    activeCard.classList.remove("hidden");
    if(activeCards.length === 0){
      activeCards[0] = activeCard;
      return;
    }else{
      cards.forEach(function (card){
        card.removeEventListener("click",clickCard )
      })
      activeCards[1] = activeCard;
      console.log(activeCards);
      setTimeout(function(){
        if(activeCards[0].className === activeCards[1].className){
          console.log("wygrana")
          activeCards.forEach(function(card){
            card.classList.add("off")
          })
          gameResult++;
          moveCunter++;
          if(gameResult == gamePairs){
            console.log("Wygrana Gra")
            const endTime = new Date().getTime();
            const gameTime = (endTime - startTime)/1000
            alert(`Wygrana! Twój czas to: ${gameTime} sekund`)
            location.reload();//przeładowuje po wygranej stronę
          }
        }
        else{
          console.log("przegrana")
          activeCards.forEach(function(card){
            card.classList.add("hidden")
          })
          // moveCunter++;
          // console.log(moveCunter)
          // pScore = document.querySelector('.gameScore');
          // console.log(pScore)
          // pScore.innerHTML = moveCunter;
          // pScore.innerText = "moveCunter";
        }

        // pScore = document.querySelector('.gameScore');
        // pScore.innerHTML = "";

        activeCard = "";
        activeCards.length = 0;

        cards.forEach(function(card){
          card.addEventListener("click",clickCard)
        })

      },700)


    }

    console.log("klik")
  }

  const init = function(){
    cards.forEach(function(card){

      const position = Math.floor(Math.random()*cardElements.length);
      card.classList.add(cardElements[position]);
      cardElements.splice(position,1);
    })

    setTimeout(function(){

      cards.forEach(function(card){
        card.classList.add("hidden")
        card.classList.add("hoverDiv")
        card.addEventListener("click",clickCard)
      })
    },2000)
  }
init();
