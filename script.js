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

    xp += 10;
    xpCounter.textContent = xp;
});

function getDebateArguments(topic) {
    const debates = {
        "ai-jobs": `
        <h3>🟢 20 Pros of AI in Jobs</h3>
        <ul>
            <li>1. Increased efficiency</li>
            <li>2. Cost reduction</li>
            <li>3. New job creation</li>
            <li>4. Automation of repetitive tasks</li>
            <li>5. Higher productivity</li>
        </ul>
        <h3>🔴 20 Cons of AI in Jobs</h3>
        <ul>
            <li>1. Job displacement</li>
            <li>2. Ethical concerns</li>
            <li>3. AI replacing human creativity</li>
        </ul>`,
    };

    return debates[topic] || "<p>No debate found.</p>";
}

// Expandable Sections
document.querySelectorAll(".expandable").forEach(header => {
    header.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
