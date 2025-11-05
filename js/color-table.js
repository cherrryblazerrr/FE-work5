const table = document.getElementById('my-table');
const colorPicker = document.getElementById('color-picker');
const rows = 6;
const cols = 6;

let count = 1;

for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
        const td = document.createElement('td');
        td.textContent = count;
        tr.appendChild(td);

        if (i === 0 && j === 0) {
            td.addEventListener('mouseenter', () => {
                td.style.backgroundColor =
                    '#' + Math.floor(Math.random() * 16777215).toString(16);
            });

            td.addEventListener('click', () => {
                td.style.backgroundColor = colorPicker.value;
            });

            td.addEventListener('dblclick', () => {
                const firstRow = table.rows[0];
                for (let cell of firstRow.cells) {
                    cell.style.backgroundColor = colorPicker.value;
                }
            });
        }

        count++;
    }
    table.appendChild(tr);
}