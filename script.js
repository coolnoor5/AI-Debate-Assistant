function getDebate() {
    const userInput = document.getElementById("userInput").value;
    if (!userInput.trim()) {
        alert("Please enter a debate topic!");
        return;
    }

    fetch("https://your-glitch-project.glitch.me/api/debate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = data.response || "Error: Could not fetch argument.";
    })
    .catch(error => console.error("Error:", error));
}

// XP Rewards System
let xp = 0;

function earnXP() {
    xp += 10;
    document.getElementById("xp-count").innerText = xp;
}
