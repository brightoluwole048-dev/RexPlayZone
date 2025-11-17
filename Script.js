const games = [
    { name: "Asphalt 9", link: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM" },
    { name: "Call of Duty Mobile", link: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter" },
    { name: "PUBG Mobile", link: "https://play.google.com/store/apps/details?id=com.tencent.ig" },
    { name: "Free Fire", link: "https://play.google.com/store/apps/details?id=com.dts.freefireth" },
    { name: "Dream League Soccer 2024", link: "https://play.google.com/store/apps/details?id=com.firsttouchgames.dls7" },
    { name: "GTA San Andreas", link: "https://play.google.com/store/apps/details?id=com.rockstargames.gtasa" },
    { name: "Pes 2021", link: "https://pes-2021.en.uptodown.com/android" },
    { name: "Mortal Kombat", link: "https://play.google.com/store/apps/details?id=com.wb.goog.mkx" },
    { name: "Fortnite Mobile", link: "https://www.epicgames.com/fortnite/en-US/mobile" },
    { name: "Roblox", link: "https://play.google.com/store/apps/details?id=com.roblox.client" }
];

function searchGame() {
    const input = document.getElementById("search").value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = "";

    if (input === "") return;

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(input)
    );

    if (filteredGames.length === 0) {
        resultsContainer.innerHTML = "<p>No results found</p>";
        return;
    }

    filteredGames.forEach(game => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.innerHTML = `
            <a href="${game.link}" target="_blank">${game.name}</a>
        `;
        resultsContainer.appendChild(div);
    });
     }
