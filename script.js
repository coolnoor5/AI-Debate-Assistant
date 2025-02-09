let xp = 0;

function earnXP() {
    xp += 10;  
    document.getElementById("xpCounter").innerText = xp;
    alert("🎉 You earned 10 XP!");
}

function generateDebate() {
    const topic = document.getElementById("debateInput").value;
    if (topic.trim() === "") {
        alert("Please enter a topic!");
        return;
    }

    let response = `For the topic "${topic}", here are some arguments: \n
    ✅ PRO: [Strong reason supporting the topic] \n
    ❌ CON: [Counterargument against the topic]`;

    document.getElementById("debateOutput").innerText = response;
}
