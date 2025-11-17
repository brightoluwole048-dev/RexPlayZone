const games = [
    { name: "Asphalt 8", file: "asphalt8.html" },
    { name: "Asphalt 9", file: "asphalt9.html" },
    { name: "BGMI", file: "bgmi.html" },
    { name: "Call of Mini", file: "call_of_mini.html" },
    { name: "Clash of Clans", file: "clash.html" },
    { name: "Clash Royale", file: "clash_royale.html" },
    { name: "CODM", file: "codm.html" },
    { name: "CODM ALT", file: "codm_alt.html" },
    { name: "Dead By Day", file: "deadbyday.html" },
];

function searchGame() {
    let input = document.getElementById("search").value.toLowerCase();
    let results = document.getElementById("results");

    results.innerHTML = "";

    if (input.trim() === "") {
        results.style.display = "none";
        return;
    }

    let matched = games.filter(game =>
        game.name.toLowerCase().includes(input)
    );

    if (matched.length === 0) {
        results.innerHTML = "<p>No game found 😢</p>";
    } else {
        matched.forEach(game => {
            results.innerHTML += `
                <a href="${game.file}" class="result-item">${game.name}</a>
            `;
        });
    }

    results.style.display = "block";
     }
