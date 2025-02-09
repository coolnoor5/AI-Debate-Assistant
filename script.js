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
        "climate-change": `
            <div class="bubble">🟢 Pro: Climate change is the biggest crisis today due to rising sea levels and extreme weather.</div>
            <div class="bubble">🔴 Con: Some argue that economic stability should be prioritized over climate policies.</div>
            <div class="bubble">⚖️ Counter-Argument: Ignoring climate change will lead to more economic disasters in the future.</div>
        `,
    };
    
    return debates[topic] || "<p>No debate found.</p>";
}

function toggleTip(tipId) {
    let tip = document.getElementById(`tip${tipId}`);
    tip.classList.toggle("hidden");
}
