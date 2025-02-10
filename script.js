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

// Full Debate Data
const debates = {
    "school_uniforms": {
        pros: ["Creates equality among students", "Reduces peer pressure", /* ADD 18 MORE PROS */],
        cons: ["Limits self-expression", "Can be expensive for families", /* ADD 18 MORE CONS */],
        arguments: ["Uniforms improve student focus and reduce distractions.", /* ADD 9 MORE ARGUMENTS */],
        counterArguments: ["Uniforms do not impact students’ focus in the long term.", /* ADD 9 MORE COUNTERARGUMENTS */]
    },
    "social_media": {
        pros: ["Encourages global communication", "Allows for educational content sharing", /* ADD 18 MORE PROS */],
        cons: ["Leads to cyberbullying", "Can be addictive", /* ADD 18 MORE CONS */],
        arguments: ["Social media enhances learning and communication.", /* ADD 9 MORE ARGUMENTS */],
        counterArguments: ["Proper education on digital safety is a better solution.", /* ADD 9 MORE COUNTERARGUMENTS */]
    },
    "ai_jobs": {
        pros: [
            "AI increases efficiency in industries", "Reduces human error", "Enhances medical diagnostics",
            "Improves customer service automation", "Reduces operational costs", "AI can work 24/7 without breaks",
            "Creates new job opportunities in AI fields", "Boosts productivity in workplaces",
            "Enhances innovation and research", "Automates repetitive tasks", "Can improve education with AI tutors",
            "AI helps in scientific discoveries", "Assists in space exploration", "Enables personalized learning experiences",
            "AI reduces workload stress for employees", "AI enhances cybersecurity systems",
            "Assists in disaster response and recovery", "Optimizes supply chain logistics", "Boosts agricultural productivity",
            "Can help in financial forecasting and fraud detection"
        ],
        cons: [
            "Leads to job displacement", "Reduces demand for human workers", "AI lacks human emotional intelligence",
            "Ethical concerns in decision-making", "Privacy risks and data security issues", "AI is expensive to develop",
            "Bias in AI decision-making", "Can widen social inequality", "Lack of accountability for AI failures",
            "AI may replace creative roles", "Increases reliance on technology", "Potential for widespread unemployment",
            "Threats to job stability in traditional industries", "AI could be weaponized",
            "Legal and ethical uncertainties", "Potential for manipulation using deepfake technology",
            "AI-generated misinformation", "Could limit human creativity", "Lack of personal interaction in customer service",
            "Companies may exploit AI for unethical gains"
        ],
        arguments: [
            "AI enhances efficiency and reduces human error.",
            "AI-driven automation creates new career opportunities.",
            "AI improves accessibility for individuals with disabilities.",
            "AI-driven analysis leads to better medical diagnoses.",
            "AI optimizes workflow in companies, increasing productivity.",
            "AI can take over dangerous jobs, ensuring human safety.",
            "AI improves real-time language translation, enabling global communication.",
            "AI reduces traffic congestion through intelligent transportation systems.",
            "AI advancements lead to breakthrough discoveries in space exploration.",
            "AI-powered cybersecurity reduces fraud and cyberattacks."
        ],
        counterArguments: [
            "AI threatens job security, especially in manufacturing and customer service.",
            "AI lacks emotional intelligence and human creativity.",
            "Overreliance on AI could reduce critical thinking skills.",
            "AI may widen economic inequality by replacing low-income workers.",
            "Unregulated AI development poses ethical and privacy risks.",
            "AI can be biased if trained on flawed data.",
            "Jobs lost to AI may not be replaced with equivalent opportunities.",
            "AI decision-making lacks transparency and accountability.",
            "AI-based misinformation and manipulation are growing concerns.",
            "Humans should be prioritized over AI in creative and leadership roles."
        ]
    },
    "gun_control": {
        pros: ["Reduces gun-related crimes", "Lowers homicide rates", /* ADD 18 MORE PROS */],
        cons: ["Violates the right to bear arms", "Reduces personal protection ability", /* ADD 18 MORE CONS */],
        arguments: ["Stricter gun laws reduce homicide rates.", /* ADD 9 MORE ARGUMENTS */],
        counterArguments: ["Gun bans infringe on personal rights and self-defense.", /* ADD 9 MORE COUNTERARGUMENTS */]
    },
    "climate_change": {
        pros: ["Protects the environment", "Reduces global warming", /* ADD 18 MORE PROS */],
        cons: ["Expensive to implement", "Hurts industries like oil and coal", /* ADD 18 MORE CONS */],
        arguments: ["Climate action is needed to prevent global catastrophes.", /* ADD 9 MORE ARGUMENTS */],
        counterArguments: ["Climate change policies harm economies and jobs.", /* ADD 9 MORE COUNTERARGUMENTS */]
    },
    "free_education": {
        pros: ["Makes education accessible to all", "Reduces student debt", /* ADD 18 MORE PROS */],
        cons: ["Increases government spending", "May lower the quality of education", /* ADD 18 MORE CONS */],
        arguments: ["Free education leads to a more educated society.", /* ADD 9 MORE ARGUMENTS */],
        counterArguments: ["Government-funded education strains taxpayers.", /* ADD 9 MORE COUNTERARGUMENTS */]
    },
    "space_exploration": {
        pros: ["Encourages scientific advancements", "Can find new resources", /* ADD 18 MORE PROS */],
        cons: ["Extremely expensive", "Funds could be used for Earth’s problems", /* ADD 18 MORE CONS */],
        arguments: ["Space exploration is vital for human survival.", /* ADD 9 MORE ARGUMENTS */],
        counterArguments: ["We should focus on solving Earth’s problems first.", /* ADD 9 MORE COUNTERARGUMENTS */]
    },
    "animal_testing": {
        pros: ["Helps medical research", "Saves human lives", /* ADD 18 MORE PROS */],
        cons: ["Cruel and inhumane", "Not always accurate", /* ADD 18 MORE CONS */],
        arguments: ["Animal testing has led to major medical breakthroughs.", /* ADD 9 MORE ARGUMENTS */],
        counterArguments: ["Alternatives exist that don’t harm animals.", /* ADD 9 MORE COUNTERARGUMENTS */]
    }
};

// Generate Debate Function
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
