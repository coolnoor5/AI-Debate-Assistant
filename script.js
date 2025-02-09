document.addEventListener("DOMContentLoaded", function () {
    const debateForm = document.getElementById("debate-form");
    const debateInput = document.getElementById("debate-input");
    const debateOutput = document.getElementById("debate-output");
    const xpCounter = document.getElementById("xp-counter");
    
    let userXP = 0;

    debateForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const debateTopic = debateInput.value.trim();
        
        if (debateTopic === "") {
            debateOutput.innerHTML = "<p>Please enter a debate topic!</p>";
            return;
        }

        // Call the AI backend on Glitch
        fetch("https://sulfuric-bloom-earwig.glitch.me/api/debate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ topic: debateTopic }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                debateOutput.innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                debateOutput.innerHTML = `
                    <h3>Debate Topic: ${debateTopic}</h3>
                    <h4>Pro Arguments:</h4>
                    <p>${data.pros.join("<br>")}</p>
                    <h4>Con Arguments:</h4>
                    <p>${data.cons.join("<br>")}</p>
                    <h4>Counterarguments:</h4>
                    <p>${data.counters.join("<br>")}</p>
                `;

                // Earn XP when user generates a debate
                userXP += 10;
                xpCounter.innerHTML = `Your XP: ${userXP}`;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            debateOutput.innerHTML = "<p>Something went wrong. Try again later.</p>";
        });

        debateInput.value = "";
    });
});
