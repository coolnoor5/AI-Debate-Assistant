const API_KEY = "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"; // 🔴 Replace with your real OpenAI API key
const XP_INCREMENT = 10;
let xp = 0;

document.addEventListener("DOMContentLoaded", function () {
    const debateForm = document.getElementById("debate-topic");
    const submitButton = document.getElementById("submit-btn");
    const debateResponse = document.getElementById("debate-response");
    const xpCounter = document.getElementById("xp-count");

    // Function to generate debate when button is clicked
    submitButton.addEventListener("click", async function () {
        const topic = debateForm.value.trim();
        if (!topic) {
            debateResponse.innerHTML = "<p style='color: red;'>⚠️ Please enter a debate topic.</p>";
            return;
        }

        debateResponse.innerHTML = "⏳ Generating debate, please wait...";

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
            if (data.choices && data.choices.length > 0) {
                debateResponse.innerHTML = `<p>${data.choices[0].message.content.replace(/\n/g, "<br>")}</p>`;
                
                // Increase XP automatically
                xp += XP_INCREMENT;
                xpCounter.textContent = xp;
            } else {
                debateResponse.innerHTML = "<p style='color: red;'>⚠️ Unable to generate a debate. Please try again.</p>";
            }
        } catch (error) {
            debateResponse.innerHTML = "<p style='color: red;'>⚠️ Error: Something went wrong. Please try again.</p>";
        }
    });

    // Make sample debate topics clickable
    document.querySelectorAll("#sample-topics li").forEach((topic) => {
        topic.addEventListener("click", () => {
            debateForm.value = topic.textContent;
        });
    });
});
