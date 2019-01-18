function renderTable(columns, rows) {
    let root = document.getElementById("root");
    let table = document.createElement('TABLE');
    let tableBody = document.createElement('TBODY');

    table.appendChild(tableBody);

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (let j = 0; j < columns; j++) {
            let td = document.createElement('TD');
            td.textContent = 1 + i * columns + j;
            tr.appendChild(td);
        }
    }
    root.appendChild(table);
}

renderTable(5, 5);

let element = document.getElementById("root");
element.onclick = function (event) {
    let target = event.target;
    if (target.tagName !== 'TD') return;
    alert(target.textContent);
};