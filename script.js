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

// Debate Data
const debates = {
    "school_uniforms": {
        pros: [
            "Creates equality among students",
            "Reduces peer pressure",
            "Encourages discipline",
            "Saves time in the morning",
            "Prevents bullying based on clothing",
        ],
        cons: [
            "Limits self-expression",
            "Can be expensive for families",
            "Uncomfortable for some students",
            "Does not necessarily improve behavior",
        ],
        arguments: [
            "Uniforms improve student focus and reduce distractions.",
            "Self-expression through clothing is important for student identity.",
        ],
        counterArguments: [
            "Uniforms do not affect academic performance.",
            "Allowing dress choice teaches responsibility."
        ]
    },
    "social_media": {
        pros: [
            "Encourages global communication",
            "Allows for educational content sharing",
            "Can help businesses grow",
            "Raises awareness of important issues",
        ],
        cons: [
            "Leads to cyberbullying",
            "Can be addictive",
            "Exposes children to inappropriate content",
        ],
        arguments: [
            "Social media enhances learning and communication.",
            "Social media can be dangerous for young users."
        ],
        counterArguments: [
            "Proper education on digital safety is a better solution.",
            "Better regulations can help make social media safer."
        ]
    }
};

// Generate Debate
document.getElementById("generateDebate").addEventListener("click", function () {
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
});
