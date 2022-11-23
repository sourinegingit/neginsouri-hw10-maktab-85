let panes = document.querySelectorAll('.pane');
for(let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.onclick = () => pane.remove();
}