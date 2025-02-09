document.addEventListener("DOMContentLoaded", function () {
    const debateForm = document.getElementById("debateForm");
    const debateInput = document.getElementById("debateInput");
    const debateOutput = document.getElementById("debateOutput");

    debateForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const topic = debateInput.value.trim();
        if (!topic) return;

        debateOutput.innerHTML = "⏳ Generating debate, please wait...";

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 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"
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: "You are an expert debater. Provide multiple arguments for and against the given topic." },
                        { role: "user", content: topic }
                    ]
                })
            });

            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                debateOutput.innerHTML = data.choices[0].message.content.replace(/\n/g, "<br>");
            } else {
                debateOutput.innerHTML = "⚠️ Error: Could not generate a debate.";
            }
        } catch (error) {
            debateOutput.innerHTML = "⚠️ Error: Something went wrong.";
        }
    });
});
