function init() {
    const playerName = document.querySelector(".playerName");
    const rematchBtn = document.querySelector(".startAgain");
    const items = document.querySelectorAll(".item");
    const convartArrray = Array.from(items);
    let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentPlayer = "playerOne";
  
    items.forEach((item) =>
      item.addEventListener("click", (e) => {
        const index = convartArrray.indexOf(e.target);
        if (
          items[index].classList.contains("playerOne") ||
          items[index].classList.contains("computer")
        ) {
          return;
        }
  
        items[index].classList.add("playerOne");
        const spliceNr = positions.indexOf(index + 1);
        positions.splice(spliceNr, 1);
  
        if (result("playerOne", items)) {
          playerName.innerHTML = "Player X Wins the game";
          document.body.classList.add("displayBtn");
          return;
        }
  

        if (positions.length === 0) {
          playerName.innerHTML = "You are Tuff, It's Draw";
          document.body.classList.add("displayBtn");
          console.log("Nothing Left");
          return;
        }
  
  
  
        const random = Math.floor(Math.random() * positions.length);
        const computerIndex = positions[random];
        items[computerIndex - 1].classList.add("computer");
  
        
        positions.splice(random, 1);
  
       
        if (result("computer", items)) {
          playerName.innerHTML = "Computer Win!";
          document.body.classList.add("displayBtn");
          return;
        }
      })
    );
  
    rematchBtn.addEventListener("click", () => {
      location.reload();
    });
  }
  
  function result(player, items) {
    function check(pos1, pos2, pos3) {
      console.log(items);
      if (
        items[pos1].classList.contains(player) &
        items[pos2].classList.contains(player) &
        items[pos3].classList.contains(player)
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    if (check(0, 3, 6)) return true;
    else if (check(1, 4, 7)) return true;
    else if (check(2, 5, 8)) return true;
    else if (check(0, 1, 2)) return true;
    else if (check(3, 4, 5)) return true;
    else if (check(6, 7, 8)) return true;
    else if (check(0, 4, 8)) return true;
    else if (check(2, 4, 6)) return true;
  }
  
init();
  