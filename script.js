document.addEventListener("DOMContentLoaded", function () {
    const debateForm = document.getElementById("debate-form");
    const debateInput = document.getElementById("debate-topic");
    const responseBox = document.getElementById("debate-response");

    debateForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const topic = debateInput.value.trim();

        if (!topic) {
            responseBox.innerHTML = "<p style='color: red;'>Please enter a debate topic.</p>";
            return;
        }

        responseBox.innerHTML = "<p>Generating debate...</p>";

        try {
            const response = await fetch("https://debate-assistant-api.onrender.com/api/debate", { // Your Render API
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ topic })
            });

            const data = await response.json();

            if (data.error) {
                responseBox.innerHTML = `<p style="color: red;">Error: ${data.error}</p>`;
            } else {
                responseBox.innerHTML = `<h3>Debate:</h3><p>${data.debate.replace(/\n/g, "<br>")}</p>`;
            }
        } catch (error) {
            responseBox.innerHTML = "<p style='color: red;'>Failed to fetch debate. Please try again.</p>";
        }
    });
});
