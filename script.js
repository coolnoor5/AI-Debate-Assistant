const API_KEY = "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"; //
const XP_INCREMENT = 10;
let xp = 0;

// Function to handle sending the debate topic
document.getElementById("submit-btn").addEventListener("click", async () => {
    const topic = document.getElementById("debate-topic").value;
    const debateResponse = document.getElementById("debate-response");
    const xpCounter = document.getElementById("xp-count");

    debateResponse.innerHTML = "⏳ Generating debate...";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are an expert debater. Provide multiple arguments for and against the given topic, along with counterarguments and a conclusion." },
                    { role: "user", content: topic }
                ]
            })
        });

        const data = await response.json();
        const result = data.choices[0].message.content;
        debateResponse.innerHTML = `<p>${result.replace(/\n/g, "<br>")}</p>`;

        xp += XP_INCREMENT;
        xpCounter.textContent = xp;
    } catch (error) {
        debateResponse.innerHTML = "⚠️ Unable to generate a debate. Please try again.";
    }
});

// Handle sample debate topics click events
document.querySelectorAll("#sample-topics li").forEach((topic) => {
    topic.addEventListener("click", () => {
        document.getElementById("debate-topic").value = topic.textContent;
    });
});
