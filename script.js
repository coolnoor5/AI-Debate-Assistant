document.addEventListener("DOMContentLoaded", function () {
    const debateForm = document.getElementById("debateForm");
    const userInput = document.getElementById("userInput");
    const output = document.getElementById("output");
    const xpCounter = document.getElementById("xpCounter");

    let userXP = 0; // Initialize XP counter

    debateForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const topic = userInput.value.trim();

        if (!topic) return;

        output.innerHTML = `<p><strong>You:</strong> ${topic}</p><p>Generating debate...</p>`;

        try {
            const response = await fetch("https://sulfuric-bloom-earwig.glitch.me/api/debate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ topic }),
            });

            const data = await response.json();
            if (data.error) {
                output.innerHTML = `<p style="color:red;">Error: ${data.error}</p>`;
            } else {
                output.innerHTML = `<p><strong>Debate:</strong></p><p>${data.response.replace(/\n/g, "<br>")}</p>`;

                userXP += 10; // Add XP automatically
                xpCounter.innerText = `Your XP: ${userXP}`;
            }
        } catch (error) {
            output.innerHTML = `<p style="color:red;">Failed to fetch debate. Try again later.</p>`;
        }
    });

    // ✅ Fix Sample Debate Topics - Clicking Should Show a Full Debate
    document.querySelectorAll(".debate-topic").forEach(topic => {
        topic.addEventListener("click", async function () {
            const topicText = this.textContent;
            output.innerHTML = `<p><strong>Topic:</strong> ${topicText}</p><p>Generating full debate...</p>`;

            try {
                const response = await fetch("https://sulfuric-bloom-earwig.glitch.me/api/debate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ topic: topicText }),
                });

                const data = await response.json();
                if (data.error) {
                    output.innerHTML = `<p style="color:red;">Error: ${data.error}</p>`;
                } else {
                    output.innerHTML = `<p><strong>Debate:</strong></p><p>${data.response.replace(/\n/g, "<br>")}</p>`;

                    userXP += 10; // Add XP automatically
                    xpCounter.innerText = `Your XP: ${userXP}`;
                }
            } catch (error) {
                output.innerHTML = `<p style="color:red;">Failed to fetch debate. Try again later.</p>`;
            }
        });
    });
});
