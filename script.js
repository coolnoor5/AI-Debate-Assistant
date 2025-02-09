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
            <h3>🟢 Opening Statement (Pro):</h3>
            <p>Wearing school uniforms promotes equality, reduces distractions, and fosters a sense of unity.</p>
            <h3>🔴 Opening Statement (Con):</h3>
            <p>Mandatory uniforms take away students' individuality and freedom of expression.</p>
            <h3>⚖️ Counter-Argument:</h3>
            <p>While uniforms ensure equality, schools can allow creativity in accessories.</p>
        `,
        "social-media": `
            <h3>🟢 Opening Statement (Pro):</h3>
            <p>Age restrictions on social media protect young minds from harmful content and cyberbullying.</p>
            <h3>🔴 Opening Statement (Con):</h3>
            <p>Social media is a way for youth to express themselves and connect with others.</p>
            <h3>⚖️ Counter-Argument:</h3>
            <p>Instead of strict bans, parents and schools can teach responsible usage.</p>
        `,
    };
    
    return debates[topic] || "<p>No debate found.</p>";
}

function toggleTip(tipId) {
    let tip = document.getElementById(`tip${tipId}`);
    tip.classList.toggle("hidden");
}
