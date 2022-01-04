let players = [
    {
        name: "Kalle",
        points: 0
    }, 
    {
        name: "Johanna",
        points: 0
    }, 
    {
        name: "Lisa",
        points: 0
    }, 
    {
        name: "Pelle",
        points: 0
    }
]

function renderPointList() {
    document.body.innerHTML = "";

    let listContainer = document.createElement("div");

    players.sort(function(playerOne, playerTwo){return playerTwo.points - playerOne.points});

    for (let i = 0; i < players.length; i++) {
        const player = players[i];

        let playerContainer = document.createElement("div");
        playerContainer.style.margin = "50px";
        
        let nameHeader = document.createElement("h2");
        nameHeader.innerText = player.name;
        
        let pointText = document.createElement("h3");
        pointText.innerText = player.points;

        let btnContainer = document.createElement("div")
        btnContainer.style.display = "flex";

        let addBtn = document.createElement("p");
        addBtn.style.margin = "10px";
        addBtn.style.fontSize = "40px";
        addBtn.innerText = "+";

        addBtn.addEventListener("click", (event) => {
            console.log(event)
            player.points++
            renderPointList();
        })
        
        let subtractBtn = document.createElement("p");
        subtractBtn.style.margin = "10px";
        subtractBtn.style.fontSize = "40px";
        subtractBtn.innerText = "-";
        
        subtractBtn.addEventListener("click", () => {
            player.points--;
            renderPointList();
        })

        btnContainer.append(addBtn, subtractBtn);
        playerContainer.append(nameHeader, pointText, btnContainer);
        listContainer.append(playerContainer);

    }

    document.body.append(listContainer);
}


window.addEventListener("load", renderPointList);