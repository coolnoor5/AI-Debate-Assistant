const XP_INCREMENT = 10;
let xp = 0;

document.getElementById("generate-debate").addEventListener("click", function () {
    const topic = document.getElementById("debate-topics").value;
    const debateResponse = document.getElementById("debate-response");
    const xpCounter = document.getElementById("xp-count");

    if (!topic) {
        debateResponse.innerHTML = "<p style='color: red;'>⚠️ Please select a debate topic.</p>";
        return;
    }

    let arguments = getDebateArguments(topic);
    debateResponse.innerHTML = arguments;

    xp += XP_INCREMENT;
    xpCounter.textContent = xp;
});

function getDebateArguments(topic) {
    const debates = {
        "school-uniforms": `
            <div class="bubble">🟢 Pro: Uniforms create equality and reduce peer pressure.</div>
            <div class="bubble">🔴 Con: Uniforms limit student expression and individuality.</div>
            <div class="bubble">⚖️ Counter-Argument: While uniforms limit creativity, they help students focus on learning.</div>
        `,
        "social-media": `
            <div class="bubble">🟢 Pro: Protects kids from harmful content.</div>
            <div class="bubble">🔴 Con: Limits freedom of expression.</div>
            <div class="bubble">⚖️ Counter-Argument: Instead of bans, parents should guide responsible usage.</div>
        `,
    };
    
    return debates[topic] || "<p>No debate found.</p>";
}

function toggleTip(tipId) {
    let tip = document.getElementById(`tip${tipId}`);
    tip.classList.toggle("hidden");
}
