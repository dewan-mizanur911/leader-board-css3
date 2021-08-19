// 1
document.getElementById("top-players").style.color = "rgba(71, 200, 255, 0.9)";
document.getElementById("top-blogs").style.color = "rgba(255, 77, 71, 0.9)";

// 2
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = "rgba(255, 77, 71, 0.3)";
    player.style.margin = '5px';
    player.style.padding = '5px';
    player.style.borderRadius = '5px';
}

// 3
document.getElementById("btn-add-item").addEventListener('click', function (event) {
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.innerText = "Item Added";
    list.appendChild(item);
    
    const listInput = document.getElementById('list-input');
    const newValue = parseFloat(listInput.value) + 1;
    listInput.value = newValue;
    if (listInput.value == 5) {
        event.target.setAttribute('disabled', true);
    }
});

        