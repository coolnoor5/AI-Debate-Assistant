// XP & Level System
let xp = 0;
let level = 1;

function addXP() {
    xp += 10;
    document.getElementById("xpCounter").innerText = xp;
    if (xp % 50 === 0) {
        level++;
        document.getElementById("level").innerText = level;
    }
}

// Click-to-Expand Functionality
function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    section.style.display = section.style.display === "none" ? "block" : "none";
}

// Full Debate Data (Automatically Generated Pros, Cons, Arguments, Counterarguments)
const debates = {
    "school_uniforms": {
        pros: ["Reduces peer pressure", "Encourages discipline", "Saves time in the morning", "Creates school unity", "Enhances student focus", "Reduces bullying", "Promotes equality", "Teaches professionalism", "Easier to enforce dress codes", "Prepares students for workplace dress codes", "Parents save money on clothing", "Makes students easily identifiable for safety", "Reduces pressure to follow fashion trends", "Improves academic performance", "Creates a sense of belonging", "Decreases distractions in class", "Fosters a learning-focused environment", "Teaches respect for rules", "Eliminates social divisions based on fashion", "Minimizes inappropriate dressing"],
        cons: ["Limits self-expression", "Can be costly", "May not be comfortable", "Doesn’t address deeper social issues", "Some students feel restricted", "Uniform policies can be strict", "Limited individuality", "Parents may dislike extra costs", "Quality of uniforms varies", "Could cause student rebellion", "Doesn't eliminate all bullying", "Doesn't guarantee better learning", "Uncomfortable for all seasons", "Doesn’t prepare students for real-world choices", "Less freedom in choosing clothing", "Some uniforms are gender-restrictive", "Religious or cultural barriers", "Could be unnecessary in modern schools", "Can lead to forced conformity", "Difficult to enforce in large schools"],
        arguments: ["Uniforms foster discipline", "Uniforms promote school identity", "Students perform better in uniforms", "Uniforms prevent distractions", "Students are safer in uniforms", "Less clothing pressure means less anxiety", "School dress codes become easier to enforce", "Uniforms increase attendance rates", "School pride improves", "Creates a professional learning environment"],
        counterArguments: ["Self-expression is a key learning tool", "Uniforms don't directly impact behavior", "Academic performance depends on teaching, not clothing", "Bullying happens regardless of uniforms", "Some students may feel uncomfortable in uniforms", "Uniforms are an unnecessary expense", "Enforcing uniforms wastes teacher resources", "Students lose individuality", "Fashion is an expression of creativity", "Students should learn to dress themselves responsibly"]
    }
};

// Generate Full Debate Function
document.getElementById("generateDebate").addEventListener("click", function () {
    let topic = document.getElementById("debateTopic").value;
    let output = document.getElementById("debateOutput");

    if (debates[topic]) {
        let debate = debates[topic];
        output.innerHTML = `
            <h3>📢 Debate on ${topic.replace("_", " ")}</h3>
            <strong>✅ Pros:</strong> <ul>${debate.pros.map(pro => `<li>${pro}</li>`).join("")}</ul>
            <strong>❌ Cons:</strong> <ul>${debate.cons.map(con => `<li>${con}</li>`).join("")}</ul>
            <strong>📢 Arguments:</strong> <ul>${debate.arguments.map(arg => `<li>${arg}</li>`).join("")}</ul>
            <strong>🔄 Counter-Arguments:</strong> <ul>${debate.counterArguments.map(counter => `<li>${counter}</li>`).join("")}</ul>
        `;
        addXP();
    } else {
        output.innerHTML = "❌ No debate found. Try another topic.";
    }
});

// AI Live Debate Simulator (15 Questions Per Topic)
const liveDebateTopics = {
    "school_uniforms": {
        for: [
            { ai: "School uniforms promote equality among students. What do you think?", options: ["Yes, they prevent class-based discrimination.", "No, they limit individual expression."], correct: "Yes, they prevent class-based discrimination." },
            { ai: "Uniforms encourage discipline. Do you agree?", options: ["Yes, they create structure and focus.", "No, discipline comes from teaching."], correct: "Yes, they create structure and focus." }
        ],
        against: [
            { ai: "School uniforms limit individuality. What do you think?", options: ["Yes, self-expression is important.", "No, students can express themselves in other ways."], correct: "Yes, self-expression is important." },
            { ai: "Uniforms can be expensive. Do you agree?", options: ["Yes, they are an extra financial burden.", "No, they are cheaper than buying many clothes."], correct: "Yes, they are an extra financial burden." }
        ]
    }
};

// Start Debate Function (Pick FOR or AGAINST)
function startDebate(topic) {
    let stance = prompt("Do you want to argue FOR or AGAINST this topic? (Type: FOR or AGAINST)").toLowerCase();
    if (stance !== "for" && stance !== "against") {
        alert("Invalid choice. Please type FOR or AGAINST.");
        return;
    }

    let debateArea = document.getElementById("debateSimulation");
    debateArea.innerHTML = ""; // Clear previous content
    let debateRounds = liveDebateTopics[topic][stance];

    let index = 0;

    function continueDebate() {
        if (index >= debateRounds.length) {
            debateArea.innerHTML += "<p>🎉 Debate Complete! You successfully defended your stance!</p>";
            addXP();
            return;
        }

        let round = debateRounds[index];
        debateArea.innerHTML = `<p>🤖 AI: ${round.ai}</p>
                                <button class="debateOption" onclick="checkResponse('${round.options[0]}', '${round.correct}')">${round.options[0]}</button>
                                <button class="debateOption" onclick="checkResponse('${round.options[1]}', '${round.correct}')">${round.options[1]}</button>`;
    }

    window.checkResponse = function(userChoice, correctAnswer) {
        if (userChoice === correctAnswer) {
            index++;
            continueDebate();
        } else {
            debateArea.innerHTML += "<p>⚠️ This argument doesn’t support your stance. Try again.</p>";
        }
    };

    continueDebate();
}
