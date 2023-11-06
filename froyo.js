document.getElementById("countButton").addEventListener("click", function () {
    const input = document.getElementById("flavorInput").value;
    const flavors = input.split(",").map(flavor => flavor.trim());

    const flavorCount = {};

    flavors.forEach(flavor => {
        if (flavor in flavorCount) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    });

    const tbody = document.querySelector("#flavorTable tbody");
    tbody.innerHTML = "";

    for (const flavor in flavorCount) {
        const row = document.createElement("tr");
        const flavorCell = document.createElement("td");
        const countCell = document.createElement("td");

        flavorCell.textContent = flavor;
        countCell.textContent = flavorCount[flavor];

        row.appendChild(flavorCell);
        row.appendChild(countCell);

        tbody.appendChild(row);
    }
});
