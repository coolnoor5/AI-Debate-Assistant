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

// Random Debate Challenge Generator (Fixed)
function generateChallenge() {
    let topics = [
        "Should homework be banned?",
        "Should social media be restricted for children?",
        "Is climate change the biggest global threat?",
        "Should university education be free?",
        "Is AI replacing too many human jobs?",
        "Should governments increase space exploration funding?",
        "Should video games be considered a sport?",
        "Are electric cars the future of transportation?"
    ];
    let randomTopic = topics[Math.floor(Math.random() * topics.length)];
    document.getElementById("challengeOutput").innerText = `🎯 Your debate topic: ${randomTopic}`;
}

// Expanded Live Debate Simulator with More Topics
const liveDebateTopics = {
    "school_uniforms": [
        { 
            ai: "I believe school uniforms create equality. What do you think?", 
            options: ["Uniforms promote discipline.", "Uniforms limit self-expression."], 
            correct: "Uniforms limit self-expression."
        },
        { 
            ai: "Some argue that uniforms prevent bullying. What's your stance?", 
            options: ["It doesn’t stop bullying completely.", "Bullying has nothing to do with clothes."], 
            correct: "It doesn’t stop bullying completely."
        }
    ],
    "ai_jobs": [
        { 
            ai: "AI is improving efficiency. Should we embrace it?", 
            options: ["Yes, AI reduces human error.", "No, AI is replacing jobs."], 
            correct: "No, AI is replacing jobs."
        }
    ],
    "free_education": [
        { 
            ai: "Should university education be free?", 
            options: ["Yes, it makes education accessible to all.", "No, free education lowers quality."], 
            correct: "Yes, it makes education accessible to all."
        },
        { 
            ai: "Who should pay for free education?", 
            options: ["The government should fund it.", "Students should pay their own way."], 
            correct: "The government should fund it."
        }
    ],
    "climate_change": [
        { 
            ai: "Is climate change the biggest threat to humanity?", 
            options: ["Yes, we must act now.", "No, other issues are more pressing."], 
            correct: "Yes, we must act now."
        }
    ]
};

// Live Debate Simulation Function
function startDebate(topic) {
    let debateArea = document.getElementById("debateSimulation");
    debateArea.innerHTML = ""; // Clear previous content
    let debateRounds = liveDebateTopics[topic];

    let index = 0;
    
    function continueDebate() {
        if (index >= debateRounds.length) {
            debateArea.innerHTML += "<p>🎉 Debate Complete! You successfully argued your stance!</p>";
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
            debateArea.innerHTML += "<p>❌ Incorrect! Try Again.</p>";
        }
    };

    continueDebate();
}
