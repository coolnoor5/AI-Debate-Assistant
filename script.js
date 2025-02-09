const API_KEY = "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"; // Replace with your actual API key
const XP_INCREMENT = 10;
let xp = 0;

document.addEventListener("DOMContentLoaded", function () {
    const debateForm = document.getElementById("debate-topic");
    const submitButton = document.getElementById("submit-btn");
    const debateResponse = document.getElementById("debate-response");
    const xpCounter = document.getElementById("xp-count");

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
                        { role: "system", content: "You are an AI debate assistant. Provide a structured debate including pros, cons, counterarguments, and a conclusion for any given topic." },
                        { role: "user", content: `Debate the topic: ${topic}` }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                debateResponse.innerHTML = `<p>${data.choices[0].message.content.replace(/\n/g, "<br>")}</p>`;
                xp += XP_INCREMENT;
                xpCounter.textContent = xp;
            } else {
                throw new Error("AI did not return a valid response.");
            }
        } catch (error) {
            debateResponse.innerHTML = `<p style='color: red;'>⚠️ Error: ${error.message}</p>`;
        }
    });

    document.querySelectorAll("#sample-topics li").forEach((topic) => {
        topic.addEventListener("click", () => {
            debateForm.value = topic.textContent;
        });
    });
});
