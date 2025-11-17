const games = [
    // FOOTBALL
    { name: "eFootball", link: "https://apkpure.com/efootball-2024/jp.konami.efootball/download" },
    { name: "FIFA", link: "https://apkpure.com/fifa-soccer/com.ea.gp.fifamobile/download" },
    { name: "Dream League Soccer (DLS)", link: "https://apkpure.com/dream-league/com.firsttouchgames.dls7/download" },
    { name: "PES", link: "https://apkpure.com/efootball-pes-2021/jp.konami.pesam/download" },
    { name: "Football League 2026", link: "https://apkpure.com/football-league-2023/com.mobilefootie.footballeague/download" },

    // RACING
    { name: "Asphalt 8", link: "https://apkpure.com/asphalt-8/com.gameloft.android.ANMP.GloftA8HM/download" },
    { name: "Asphalt 9", link: "https://apkpure.com/asphalt-9/com.gameloft.android.ANMP.GloftA9HM/download" },
    { name: "CSR Racing", link: "https://apkpure.com/csr-racing/com.naturalmotion.csrracing/download" },
    { name: "CarX Drift Racing", link: "https://apkpure.com/carx-drift-racing/com.CarXTech.carxdrift/download" },
    { name: "Payback 2", link: "https://apkpure.com/payback-2/com.apex_designs.payback2/download" },
    { name: "Street Racing", link: "https://apkpure.com/street-racing/com.CactusGames.StreetRacing/download" },

    // SHOOTING
    { name: "COD Mobile", link: "https://apkpure.com/call-of-duty-mobile/com.activision.callofduty.shooter/download" },
    { name: "PUBG Mobile", link: "https://apkpure.com/pubg-mobile/com.tencent.ig/download" },
    { name: "Free Fire", link: "https://apkpure.com/free-fire/com.dts.freefireth/download" },
    { name: "Critical Ops", link: "https://apkpure.com/critical-ops/com.criticalforceentertainment.criticalops/download" },

    // ACTION / FIGHTING
    { name: "Shadow Fight", link: "https://apkpure.com/shadow-fight/com.nekki.shadowfight/download" },
    { name: "Mortal Kombat", link: "https://apkpure.com/mortal-kombat/com.wb.goog.mkx/download" },
    { name: "Ninja Arashi", link: "https://apkpure.com/ninja-arashi/com.blackpanther.ninjaarashi/download" },
    { name: "God of War", link: "https://apkpure.com/ps2-god-of-war-android/com.ps2.godofwar.android/download" },
    { name: "Spider-Man", link: "https://apkpure.com/spider-man-psp/com.psp.spiderman/download" },
    { name: "The Flash", link: "https://apkpure.com/the-flash-mobile/com.flash.game/download" },

    // OTHER GAMES
    { name: "GTA 5", link: "https://apkpure.com/gta-5-mobile/com.gtav.mobile/download" },
    { name: "PPSSPP", link: "https://apkpure.com/ppsspp/org.ppsspp.ppsspp/download" },
    { name: "Minecraft", link: "https://apkpure.com/minecraft/com.mojang.minecraftpe/download" },
    { name: "Roblox", link: "https://apkpure.com/roblox/com.roblox.client/download" }
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
                <a href="${game.link}" class="result-item" target="_blank">
                    ${game.name}
                </a>
            `;
        });
    }

    results.style.display = "block";
        }
