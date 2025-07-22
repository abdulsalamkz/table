// async function getData() {
//   const response = await fetch("../JSon/hello.json");
//   const data = await response.json();
//   for (const key in data[0]) {
//     const th = document.createElement("th");
//     headRow.appendChild(th);
//     th.innerHTML = key;
//   }

//   data.forEach((element) => {
//     const tr = document.createElement("tr");
//     tbody.appendChild(tr);
//     for (const key in element) {
//       const td = document.createElement("td");
//       tr.appendChild(td);
//       td.innerHTML = element[key];
//     }
//   });
// }

// const body = document.getElementById("test");
// const table = document.createElement("table");
// const thead = document.createElement("thead");
// const tbody = document.createElement("tbody");
// body.appendChild(table);
// table.appendChild(thead);
// table.appendChild(tbody);

// const headRow = document.createElement("tr");
// thead.appendChild(headRow);
// const th = document.createElement("th");

// table.appendChild(tbody);



function renderTable(id, data) {
    const body = document.getElementById(id);
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    body.appendChild(table);
    table.appendChild(thead);
    const headRow = document.createElement("tr");
    thead.appendChild(headRow)
    for (const key in data[0]) {
        const th = document.createElement("th");
        th.innerHTML = key;
        headRow.appendChild(th);
    }

    table.appendChild(tbody);


    data.forEach((element) => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (const key in element) {
            const td = document.createElement("td");
            td.innerHTML = element[key];
            tr.appendChild(td);
        }
    });
}

async function getData() {
    const response = await fetch("../JSON/hello.json");
    const data = await response.json();
    renderTable("test", data);
}

getData();
