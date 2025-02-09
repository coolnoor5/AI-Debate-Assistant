let xp = 0;

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatHistory = document.getElementById("chat-history");
    chatHistory.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    fetch("https://your-glitch-project.glitch.me/api/debate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: userInput })
    })
    .then(response => response.json())
    .then(data => {
        chatHistory.innerHTML += `<p><strong>AI:</strong> ${data.response}</p>`;
        chatHistory.scrollTop = chatHistory.scrollHeight;

        // Add XP points
        xp += 10;
        document.getElementById("xp-counter").textContent = xp;
    })
    .catch(error => console.error("Error:", error));
}
