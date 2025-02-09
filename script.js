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
        pros: [
            "Creates equality among students", "Reduces peer pressure", "Encourages discipline",
            "Saves time in the morning", "Prevents bullying based on clothing",
            "Improves focus on academics", "Fosters a sense of belonging",
            "Promotes school identity", "Reduces clothing costs for parents",
            "Ensures appropriateness in dress code", "Helps students feel less judged",
            "Prepares students for dress codes in workplaces",
            "Eliminates distractions caused by fashion competition",
            "Reduces socioeconomic differences", "Allows students to focus on character over appearance",
            "Simplifies getting ready for school", "Helps teachers enforce a dress code more easily",
            "Creates a professional learning environment", "Encourages students to express creativity in other ways",
            "Studies suggest it improves attendance rates"
        ],
        cons: [
            "Limits self-expression", "Can be expensive for families", "Uncomfortable for some students",
            "Does not necessarily improve behavior", "Takes away individuality",
            "Restricts freedom of choice", "Not always practical for hot climates",
            "Some families struggle to afford uniforms", "May create resentment towards school policies",
            "Does not prevent bullying entirely", "Could reduce student engagement",
            "Can cause enforcement issues", "Students may feel forced into conformity",
            "Does not help with real-world self-expression",
            "Takes away an opportunity to learn responsibility through outfit choices",
            "Some uniforms are outdated and unappealing", "Can be difficult to replace quickly if lost",
            "May limit cultural dress expression", "Could make students feel like they have no personal style",
            "No clear evidence links uniforms to better academic performance"
        ],
        arguments: [
            "Uniforms improve student focus and reduce distractions.",
            "Uniforms reduce bullying based on clothing differences.",
            "School spirit and unity increase when students dress the same.",
            "Families save money because they buy fewer casual clothes.",
            "Uniforms encourage responsibility and discipline.",
            "Schools with uniforms report fewer dress code violations.",
            "Uniforms reduce social pressure to wear expensive brands.",
            "Students learn to appreciate equality in attire.",
            "Wearing uniforms can prepare students for professional dress codes.",
            "Having uniforms prevents inappropriate clothing choices."
        ],
        counterArguments: [
            "Uniforms do not impact students’ focus in the long term.",
            "Students should have the right to express their individuality.",
            "Forcing uniforms may create resentment and rebellion.",
            "There are better ways to encourage school unity.",
            "Dress codes can be enforced without requiring full uniforms.",
            "The cost of uniforms can still be high for some families.",
            "School should be a place of creativity and freedom.",
            "Students will still find ways to judge each other based on appearance.",
            "Uniforms do not teach students real-world decision-making.",
            "Strict uniform policies create unnecessary stress."
        ]
    },
    "social_media": {
        pros: [
            "Encourages global communication", "Allows for educational content sharing",
            "Can help businesses grow", "Raises awareness of important issues",
            "Connects people from different cultures", "Enhances digital literacy",
            "Gives young people a platform for activism", "Provides access to real-time news",
            "Can be used for online learning", "Helps students engage in discussions",
            "Builds networking opportunities", "Encourages creative expression",
            "Can be used to raise charity funds", "Helps businesses reach new customers",
            "Creates job opportunities in digital marketing", "Allows students to engage in debates online",
            "Can provide mental health support communities", "Helps students develop persuasive writing skills",
            "Encourages sharing of knowledge and research", "Can build online communities around shared interests"
        ],
        cons: [
            "Leads to cyberbullying", "Can be addictive", "Exposes children to inappropriate content",
            "Spreads misinformation", "Reduces face-to-face interaction",
            "Leads to a decline in mental health", "Encourages unrealistic beauty standards",
            "Creates distractions from academics", "Increases risk of privacy violations",
            "Can encourage unhealthy comparison with others", "May lead to social isolation",
            "Reduces time spent on physical activities", "Can promote harmful social trends",
            "Can lead to identity theft", "Young users may develop a dependency on social media validation",
            "Excessive screen time affects brain development in children",
            "May increase levels of anxiety and depression", "Can expose people to hate speech",
            "Encourages echo chambers and misinformation bubbles", "May be used as a tool for cyberstalking"
        ],
        arguments: [
            "Social media enhances learning and communication.",
            "It provides young people with a platform for activism.",
            "It helps businesses and entrepreneurs grow.",
            "It keeps people connected despite long distances.",
            "It encourages cultural exchange and education.",
            "It gives a voice to underrepresented communities.",
            "It helps people express creativity through art and writing.",
            "It allows students to engage in online discussions and debates.",
            "It provides free access to a wide range of educational resources.",
            "It allows users to stay updated on global news events."
        ],
        counterArguments: [
            "Proper education on digital safety is a better solution than restricting access.",
            "Social media can lead to anxiety, depression, and social isolation.",
            "It creates unrealistic expectations about life and body image.",
            "The risk of cyberbullying is a significant concern.",
            "Many young users are exposed to fake news and misinformation.",
            "Social media addiction negatively impacts sleep and concentration.",
            "It encourages mindless scrolling rather than meaningful interactions.",
            "It makes young people more vulnerable to online predators.",
            "Parents and schools should focus on guidance, not restrictions.",
            "Better regulations can help make social media safer rather than banning it."
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
