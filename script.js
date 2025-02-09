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
        pros: ["Creates equality among students", "Reduces peer pressure", /* ADD 18 MORE PROS HERE */],
        cons: ["Limits self-expression", "Can be expensive for families", /* ADD 18 MORE CONS HERE */],
        arguments: ["Uniforms improve student focus and reduce distractions.", /* ADD 9 MORE ARGUMENTS */],
        counterArguments: ["Uniforms do not impact students’ focus in the long term.", /* ADD 9 MORE COUNTERARGUMENTS */]
    },
    "social_media": {
        pros: ["Encourages global communication", "Allows for educational content sharing", /* ADD 18 MORE PROS HERE */],
        cons: ["Leads to cyberbullying", "Can be addictive", /* ADD 18 MORE CONS HERE */],
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
        pros: [
            "Reduces gun-related crimes", "Lowers homicide rates", "Prevents mass shootings",
            "Stronger background checks prevent weapons falling into wrong hands",
            "Decreases accidental firearm deaths", "Reduces suicide rates involving guns",
            "Increases public safety", "Stricter laws lead to fewer illegal gun sales",
            "Encourages responsible gun ownership", "Lessens gang-related gun violence",
            "Prevents untrained individuals from handling firearms",
            "Promotes peaceful conflict resolution", "Limits access to assault weapons",
            "Stronger gun laws correlate with lower violent crime rates",
            "Reduces gun thefts and illegal resales", "Protects law enforcement officers",
            "Prevents domestic violence incidents from escalating into fatalities",
            "Supports initiatives to decrease firearm accessibility for criminals",
            "Improves national security", "Encourages use of alternative self-defense tools"
        ],
        cons: [
            "Violates the right to bear arms", "Reduces personal protection ability",
            "Gun bans do not stop criminals from obtaining weapons",
            "Gun ownership deters crime", "May lead to black market firearm sales",
            "Strict laws do not necessarily reduce gun-related deaths",
            "Limits personal freedom and self-defense rights",
            "Takes away sport shooting opportunities",
            "Some gun laws disproportionately affect law-abiding citizens",
            "Self-defense is harder without firearm access",
            "Restricts rural citizens who rely on guns for protection",
            "Reduces citizens’ ability to resist government tyranny",
            "Gun-free zones attract criminals",
            "Background checks can be invasive to personal privacy",
            "Gun laws do not address root causes of violence",
            "Criminals will always find ways to access firearms",
            "Gun control does not prevent knife or other weapon-related crimes",
            "Firearm bans do not stop gang-related activities",
            "Law enforcement may struggle to enforce gun restrictions",
            "Banning guns gives more power to criminals with illegal weapons"
        ],
        arguments: [
            "Stricter gun laws have been shown to reduce homicide rates.",
            "Gun control laws prevent access to weapons by dangerous individuals.",
            "A decrease in gun availability leads to a decrease in mass shootings.",
            "Background checks help keep guns away from criminals.",
            "Gun control increases overall public safety.",
            "Countries with strict gun laws report fewer gun-related deaths.",
            "Firearm restrictions prevent unqualified individuals from handling weapons.",
            "Reducing access to guns leads to lower suicide rates.",
            "Stronger gun laws support responsible gun ownership.",
            "Limiting access to high-capacity weapons reduces fatality risks."
        ],
        counterArguments: [
            "Gun bans infringe on personal rights and self-defense.",
            "Criminals will still find ways to obtain firearms illegally.",
            "Law-abiding citizens should not be punished for others' actions.",
            "Gun control does not reduce overall violence.",
            "Other weapons can still be used in violent crimes.",
            "Stricter laws could lead to an increase in illegal firearm trade.",
            "Personal safety should not depend on government regulations.",
            "Self-defense situations require quick firearm access.",
            "Gun bans disproportionately affect citizens in high-crime areas.",
            "Gun-free zones do not prevent crime; they invite criminals."
        ]
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
