// XP System
let xp = 0;

function addXP() {
    xp += 10;
    document.getElementById("xpCounter").innerText = xp;
}

// Click-to-Expand Functionality
function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    section.style.display = section.style.display === "none" ? "block" : "none";
}

// Massive Debate Data
const debates = {
    "school_uniforms": {
        pros: ["Creates a sense of equality", "Reduces peer pressure", "Increases school spirit"],
        cons: ["Limits self-expression", "Can be expensive", "Does not stop bullying"],
        arguments: ["Uniforms improve focus on studies"],
        counterArguments: ["Studies show no improvement in grades"]
    },
    "social_media": {
        pros: ["Helps connect people", "Provides educational content", "Can raise awareness"],
        cons: ["Leads to cyberbullying", "Reduces face-to-face interaction", "Spreads misinformation"],
        arguments: ["Social media enhances learning"],
        counterArguments: ["Students are often distracted"]
    }
};

// Generate Debate Function
function generateDebate() {
    let topic = document.getElementById("debateTopic").value;
    let output = document.getElementById("debateOutput");

    if (debates[topic]) {
        let debate = debates[topic];
        output.innerHTML = `
            <h3>📢 Debate on ${topic.replace("_", " ")}</h3>
            <strong>✅ Pros:</strong> ${debate.pros.join(", ")}<br>
            <strong>❌ Cons:</strong> ${debate.cons.join(", ")}<br>
            <strong>📢 Arguments:</strong> ${debate.arguments.join(", ")}<br>
            <strong>🔄 Counter-Arguments:</strong> ${debate.counterArguments.join(", ")}
        `;
        addXP();
    } else {
        output.innerHTML = "❌ No debate found. Try another topic.";
    }
}
