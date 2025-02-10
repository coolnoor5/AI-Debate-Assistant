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

// Full Debate Data (Automatically Generated Pros, Cons, Arguments, Counterargument
const debates = {
    "school_uniforms": {
        pros: [
            "Reduces peer pressure and social comparison.",
            "Encourages discipline and professionalism.",
            "Saves time and reduces stress in the morning.",
            "Creates a sense of unity and belonging.",
            "Reduces bullying related to clothing choices.",
            "Teaches students about dress codes and expectations.",
            "Helps parents save money on clothing expenses.",
            "Increases school safety by identifying students easily."
        ],
        cons: [
            "Limits students' freedom of self-expression.",
            "Uniforms can be expensive for some families.",
            "Not all students find uniforms comfortable.",
            "Does not directly improve academic performance.",
            "Does not eliminate bullying entirely.",
            "May not be inclusive of all cultures and beliefs.",
            "Uniforms can feel restrictive and outdated.",
            "Enforcing uniform policies can take focus away from education."
        ],
        arguments: [
            "Uniforms help maintain discipline and order in schools.",
            "Students can focus more on studies rather than fashion trends.",
            "Wearing uniforms promotes school pride and identity.",
            "A common dress code creates a level playing field.",
            "Uniforms reduce the pressure to buy expensive clothes."
        ],
        counterArguments: [
            "Creativity and individuality should be encouraged in students.",
            "School performance is affected by teaching quality, not dress codes.",
            "Dress codes should be flexible and inclusive.",
            "Forcing uniforms does not guarantee respect or discipline.",
            "Students should learn to make responsible clothing choices."
        ]
    },
    "ai_jobs": {
        pros: [
            "AI increases efficiency in many industries.",
            "Reduces human error in critical tasks.",
            "Creates new job opportunities in tech fields.",
            "Automates repetitive tasks, freeing up time for creative work.",
            "Improves decision-making through data analysis.",
            "Enhances accessibility for people with disabilities.",
            "AI can be used to solve complex global problems.",
            "AI contributes to medical advancements and research."
        ],
        cons: [
            "AI is replacing human jobs at a fast rate.",
            "Machines lack emotional intelligence and creativity.",
            "AI systems can be biased and unethical.",
            "High costs make AI adoption difficult for some companies.",
            "AI can be used to invade privacy and collect sensitive data.",
            "Over-reliance on AI may lead to skill loss in humans.",
            "AI may reinforce social inequalities.",
            "Not all jobs can or should be automated."
        ],
        arguments: [
            "AI allows businesses to operate faster and more efficiently.",
            "AI improves healthcare by diagnosing diseases more accurately.",
            "Automation leads to lower costs and higher productivity.",
            "AI helps in disaster prediction and crisis management.",
            "AI can assist in solving environmental issues."
        ],
        counterArguments: [
            "AI should not replace human workers in essential jobs.",
            "Over-dependence on AI can be dangerous.",
            "AI decision-making lacks human ethical reasoning.",
            "Technology should be used to support workers, not replace them.",
            "AI should be carefully regulated to prevent abuse."
        ]
    },
    "climate_change": {
        pros: [
            "Promoting renewable energy reduces carbon emissions.",
            "Protecting the environment ensures sustainability.",
            "Reducing pollution improves air and water quality.",
            "Encouraging green policies creates new job opportunities.",
            "Climate action helps prevent extreme weather events.",
            "Sustainable living conserves natural resources.",
            "Investing in climate-friendly technology boosts innovation.",
            "Mitigating climate change improves global health."
        ],
        cons: [
            "Transitioning to green energy is expensive.",
            "Climate policies may slow down economic growth.",
            "Some climate solutions require heavy government intervention.",
            "Job losses in traditional energy sectors may increase.",
            "Climate change solutions take time to show results.",
            "Some developing countries struggle with implementing green policies.",
            "Not all countries agree on climate action policies.",
            "Renewable energy is not always reliable."
        ],
        arguments: [
            "Green energy creates new jobs and business opportunities.",
            "Reducing carbon footprints improves global health.",
            "Sustainable agriculture ensures food security.",
            "Protecting biodiversity preserves ecosystems.",
            "Encouraging eco-friendly habits benefits everyone."
        ],
        counterArguments: [
            "Green energy is expensive and requires infrastructure investment.",
            "Some industries rely on fossil fuels for economic stability.",
            "Climate change action requires global cooperation.",
            "Green policies may impact low-income communities unfairly.",
            "Some climate actions may take years to show real effects."
        ]
    },
    "free_education": {
        pros: [
            "More students would have access to quality education.",
            "Reduces student debt and financial stress.",
            "Encourages lifelong learning and career development.",
            "Creates a more educated workforce and economy.",
            "Increases opportunities for students from low-income families.",
            "Reduces economic inequality across communities.",
            "Higher education leads to more innovation and research.",
            "Allows students to focus on learning rather than finances."
        ],
        cons: [
            "Providing free education is costly for governments.",
            "Might reduce the perceived value of education.",
            "Could lead to overcrowding in universities.",
            "Funding free education may increase taxes.",
            "Not all students take education seriously if it's free.",
            "Could lower the quality of education due to lack of funding.",
            "Colleges may struggle to maintain resources and faculty.",
            "Some students might take advantage of the system."
        ],
        arguments: [
            "Education should be a basic human right.",
            "Free education increases equality and opportunity.",
            "An educated society leads to economic growth.",
            "Students should not have to go into debt to learn.",
            "Investing in education leads to long-term benefits."
        ],
        counterArguments: [
            "Free education puts a heavy burden on taxpayers.",
            "Not all students value free education equally.",
            "Higher education should be based on merit, not accessibility.",
            "Private funding can improve education quality.",
            "Free education may not be sustainable in the long run.",
        ]
        },
        "gun_control": {
        pros: [
            "Stronger gun laws reduce crime rates.",
            "Background checks help prevent guns from reaching criminals.",
            "Gun control reduces the risk of mass shootings.",
            "Strict regulations ensure safer gun ownership.",
            "Less access to guns leads to fewer suicides.",
            "Countries with strict gun control have lower gun-related deaths.",
            "Regulating firearms protects children and families.",
            "Gun laws help reduce illegal weapons circulation."
        ],
        cons: [
            "Gun control restricts personal freedoms.",
            "Law-abiding citizens may struggle to defend themselves.",
            "Criminals will still find ways to obtain guns illegally.",
            "Gun bans may lead to increased black market activity.",
            "Gun ownership is a constitutional right in some countries.",
            "More guns in society can act as a deterrent to crime.",
            "Banning guns may not stop violent crimes.",
            "Self-defense becomes harder for individuals without guns."
        ],
        arguments: [
            "Fewer guns lead to fewer accidental shootings.",
            "Background checks prevent criminals from accessing firearms.",
            "Gun control lowers homicide and suicide rates.",
            "Stricter regulations ensure safer gun storage.",
            "Guns should be for trained individuals only."
        ],
        counterArguments: [
            "Criminals will still access firearms illegally.",
            "Self-defense is harder with strict gun laws.",
            "Gun bans don't eliminate violence completely.",
            "Gun ownership is protected in many national laws.",
            "Legal gun owners are not the issue, criminals are."
        ]
    },
    "space_exploration": {
        pros: [
            "Expands human knowledge about the universe.",
            "Encourages technological innovation.",
            "Could lead to future human colonization of other planets.",
            "Space research benefits life on Earth (e.g., satellites, GPS).",
            "Promotes international collaboration and peace.",
            "May provide alternative resources from space mining.",
            "Inspires future generations in science and engineering.",
            "Improves climate monitoring and disaster response."
        ],
        cons: [
            "Space exploration is extremely expensive.",
            "There are urgent problems on Earth that need funding first.",
            "Space missions pose significant safety risks.",
            "The environmental impact of rocket launches is concerning.",
            "Space research does not provide immediate benefits to most people.",
            "Risk of spreading Earth-based contamination to other planets.",
            "Resources for space travel could be better used for healthcare or poverty.",
            "Privatization of space exploration may create inequalities."
        ],
        arguments: [
            "Exploring space helps ensure the survival of humanity.",
            "New space technologies benefit industries worldwide.",
            "Learning about space helps us understand Earth's history.",
            "Space travel may become commercialized, making it accessible.",
            "Scientific curiosity and advancement should always be pursued."
        ],
        counterArguments: [
            "Focusing on Earth’s problems should be a priority.",
            "The risks of space travel outweigh the benefits.",
            "The costs do not justify the results.",
            "Space colonization is unrealistic in the near future.",
            "The private sector may monopolize space resources."
        ]
    },
    "animal_testing": {
        pros: [
            "Ensures the safety of medicines and vaccines.",
            "Helps in the development of life-saving treatments.",
            "Provides valuable biological data for research.",
            "Alternative testing methods are not yet fully reliable.",
            "Animal testing has led to major medical advancements.",
            "Regulations exist to minimize animal suffering.",
            "Human testing is riskier without prior animal testing.",
            "Many industries, including cosmetics, rely on animal testing."
        ],
        cons: [
            "Animal testing is cruel and inhumane.",
            "Many tests on animals do not translate well to humans.",
            "Alternatives like computer models exist.",
            "Testing can cause long-term suffering to animals.",
            "Some drugs pass animal testing but fail on humans.",
            "Animals have rights and should not be used in experiments.",
            "The conditions in testing labs are often unethical.",
            "Animal testing can be expensive and time-consuming."
        ],
        arguments: [
            "Animal testing has led to the discovery of vaccines.",
            "It is currently the most reliable testing method available.",
            "Ensures consumer safety in medical and cosmetic products.",
            "Biomedical research relies heavily on animal testing.",
            "Minimizing risks for humans justifies limited animal testing."
        ],
        counterArguments: [
            "Animal testing is outdated and unethical.",
            "Technological alternatives can replace animal testing.",
            "Many successful medicines were developed without animal testing.",
            "Different species react differently to substances.",
            "Animal suffering should not be justified for human benefit."
        ]
    },
    "social_media": {
        pros: [
            "Social media helps people stay connected.",
            "It raises awareness about social issues.",
            "Useful for businesses and marketing opportunities.",
            "Provides a platform for education and learning.",
            "Enables people to network and find job opportunities.",
            "Gives people access to news and global events.",
            "Can be a source of entertainment and creativity.",
            "Encourages social activism and community support."
        ],
        cons: [
            "Increases risks of cyberbullying and online harassment.",
            "Can negatively affect mental health and self-esteem.",
            "Reduces face-to-face social interactions.",
            "Encourages addiction and excessive screen time.",
            "Spreads misinformation and fake news easily.",
            "Privacy concerns with personal data sharing.",
            "Can be a distraction from school or work.",
            "Social media algorithms may create echo chambers."
        ],
        arguments: [
            "Social media bridges communication gaps worldwide.",
            "It creates career opportunities in digital marketing and content creation.",
            "It can be a tool for education and awareness.",
            "People can express themselves creatively through social media.",
            "It fosters global connections and networking."
        ],
        counterArguments: [
            "Social media harms mental health, especially for youth.",
            "It can spread misinformation at an alarming rate.",
            "Addiction to social media affects productivity.",
            "Online privacy concerns are increasing.",
            "It reduces real-life social interactions."
        ]   
    }
};
// Generate Full Debate Function
document.getElementById("generateDebate").addEventListener("click", function () {
    let topic = document.getElementById("debateTopic").value;
    let output = document.getElementById("debateOutput");

    if (debates[topic]) { // ✅ This now correctly checks if the topic exists in debates object
        let debate = debates[topic];
        output.innerHTML = `
            <h3>📢 Debate on ${topic.replace("_", " ")}</h3>
            <strong>✅ Pros:</strong> <ul>${debate.pros.map(pro => `<li>${pro}</li>`).join("")}</ul>
            <strong>❌ Cons:</strong> <ul>${debate.cons.map(con => `<li>${con}</li>`).join("")}</ul>
            <strong>📢 Arguments:</strong> <ul>${debate.arguments.map(arg => `<li>${arg}</li>`).join("")}</ul>
            <strong>🔄 Counter-Arguments:</strong> <ul>${debate.counterArguments.map(counter => `<li>${counter}</li>`).join("")}</ul>
        `;
        addXP(); // ✅ Ensures XP is added when a debate is generated
    } else {
        output.innerHTML = "❌ No debate found. Try another topic.";
    }
});

// Start Debate Function (Pick FOR or AGAINST)
const liveDebateTopics = {
    "school_uniforms": {
        question: "Should school uniforms be mandatory?",
        for: [
            { ai: "School uniforms promote equality among students. What do you think?", options: ["Yes, they prevent class-based discrimination.", "No, they limit individual expression."], correct: "Yes, they prevent class-based discrimination." },
            { ai: "Uniforms encourage discipline. Do you agree?", options: ["Yes, they create structure and focus.", "No, discipline comes from teaching."], correct: "Yes, they create structure and focus." },
            { ai: "Studies show that uniforms improve academic performance. Do you agree?", options: ["Yes, fewer distractions mean better focus.", "No, learning depends on teaching methods."], correct: "Yes, fewer distractions mean better focus." },
            { ai: "Do you think uniforms reduce bullying?", options: ["Yes, they eliminate fashion competition.", "No, bullying happens regardless of clothes."], correct: "Yes, they eliminate fashion competition." },
            { ai: "Uniforms create a sense of belonging. Agree or disagree?", options: ["Agree, it builds school spirit.", "Disagree, identity should come from actions, not clothing."], correct: "Agree, it builds school spirit." }
        ],
        against: [
            { ai: "School uniforms limit individuality. Do you agree?", options: ["Yes, self-expression is important.", "No, students can express themselves in other ways."], correct: "Yes, self-expression is important." },
            { ai: "Uniforms can be expensive for families. What's your take?", options: ["Yes, they are an extra financial burden.", "No, they are cheaper than buying many clothes."], correct: "Yes, they are an extra financial burden." },
            { ai: "Do uniforms actually eliminate bullying?", options: ["No, bullying is about behavior, not clothes.", "Yes, uniforms help by reducing differences."], correct: "No, bullying is about behavior, not clothes." },
            { ai: "Some students feel uncomfortable in uniforms. Should they have a choice?", options: ["Yes, students should wear what’s comfortable.", "No, dress codes matter more."], correct: "Yes, students should wear what’s comfortable." },
            { ai: "Would you prefer schools offer optional uniforms?", options: ["Yes, students should have a choice.", "No, consistency is key."], correct: "Yes, students should have a choice." }
        ]
    },
    "ai_jobs": {
        question: "Is AI taking over human jobs?",
        for: [
            { ai: "AI improves efficiency and productivity. What do you think?", options: ["Yes, AI makes work faster and more efficient.", "No, AI reduces job opportunities for humans."], correct: "Yes, AI makes work faster and more efficient." },
            { ai: "AI reduces human error. Do you think this is a benefit?", options: ["Yes, it leads to fewer mistakes.", "No, humans still play a critical role."], correct: "Yes, it leads to fewer mistakes." },
            { ai: "AI can create new jobs in technology. Do you support this?", options: ["Yes, it opens new opportunities.", "No, it takes away more jobs than it creates."], correct: "Yes, it opens new opportunities." }
        ],
        against: [
            { ai: "AI is replacing human workers at a fast rate. Should we be concerned?", options: ["Yes, automation is leading to job loss.", "No, AI just improves efficiency."], correct: "Yes, automation is leading to job loss." },
            { ai: "Machines lack emotional intelligence. Does this limit AI?", options: ["Yes, humans are needed for social jobs.", "No, AI can learn emotions too."], correct: "Yes, humans are needed for social jobs." }
        ]
    },
    "climate_change": {
        question: "Is climate change the biggest global threat?",
        for: [
            { ai: "Climate change affects millions. Should governments take stronger action?", options: ["Yes, climate policies should be stricter.", "No, economic growth should be prioritized."], correct: "Yes, climate policies should be stricter." },
            { ai: "Switching to renewable energy is necessary. Do you agree?", options: ["Yes, it reduces carbon emissions.", "No, fossil fuels are still necessary."], correct: "Yes, it reduces carbon emissions." }
        ],
        against: [
            { ai: "Fossil fuels are still important for economic stability. Do you agree?", options: ["Yes, they support economic growth.", "No, they harm the environment too much."], correct: "Yes, they support economic growth." },
            { ai: "Are climate policies more harmful than helpful?", options: ["Yes, they limit economic progress.", "No, saving the planet is more important."], correct: "Yes, they limit economic progress." }
        ]
    },
    "gun_control": {
        question: "Should stricter gun control laws be implemented?",
        for: [
            { ai: "Stricter gun laws reduce crime rates. What do you think?", options: ["Yes, gun laws prevent crime.", "No, criminals will still get guns."], correct: "Yes, gun laws prevent crime." },
            { ai: "Background checks help prevent guns from reaching criminals. Agree?", options: ["Yes, they stop dangerous people.", "No, background checks are unnecessary."], correct: "Yes, they stop dangerous people." },
            { ai: "Countries with strict gun laws have fewer mass shootings. Do you agree?", options: ["Yes, fewer guns mean fewer shootings.", "No, mass shootings will still happen."], correct: "Yes, fewer guns mean fewer shootings." },
            { ai: "Gun control protects families and children. What's your opinion?", options: ["Yes, it makes society safer.", "No, self-defense is more important."], correct: "Yes, it makes society safer." },
            { ai: "Should military-style weapons be restricted to law enforcement only?", options: ["Yes, civilians don't need them.", "No, people should have access."], correct: "Yes, civilians don't need them." }
        ],
        against: [
            { ai: "Gun control restricts personal freedoms. Do you agree?", options: ["Yes, it limits rights.", "No, safety is more important."], correct: "Yes, it limits rights." },
            { ai: "Law-abiding citizens should have the right to defend themselves. Agree?", options: ["Yes, self-defense is a right.", "No, police should handle security."], correct: "Yes, self-defense is a right." },
            { ai: "Criminals will still find ways to get guns. Do you agree?", options: ["Yes, illegal weapons will still exist.", "No, fewer legal guns reduce crime."], correct: "Yes, illegal weapons will still exist." },
            { ai: "More armed citizens can deter crime. What's your stance?", options: ["Yes, armed citizens prevent violence.", "No, more guns create more danger."], correct: "Yes, armed citizens prevent violence." },
            { ai: "Gun bans may lead to increased black market activity. Do you agree?", options: ["Yes, bans push sales underground.", "No, bans reduce gun access overall."], correct: "Yes, bans push sales underground." }
        ]
    },
    "space_exploration": {
        question: "Should governments fund space exploration?",
        for: [
            { ai: "Space exploration expands human knowledge. Agree?", options: ["Yes, we learn more about the universe.", "No, it's a waste of money."], correct: "Yes, we learn more about the universe." },
            { ai: "Space technology benefits life on Earth. What's your stance?", options: ["Yes, satellites and GPS help us.", "No, space research is too expensive."], correct: "Yes, satellites and GPS help us." },
            { ai: "Exploring space helps us find alternative resources. Do you support this?", options: ["Yes, space mining can help Earth.", "No, space is not a solution."], correct: "Yes, space mining can help Earth." },
            { ai: "Space travel may be necessary for humanity’s survival. Agree?", options: ["Yes, Earth has limited resources.", "No, we should fix Earth first."], correct: "Yes, Earth has limited resources." },
            { ai: "International space collaboration promotes peace. What do you think?", options: ["Yes, space unites countries.", "No, space competition creates conflict."], correct: "Yes, space unites countries." }
        ],
        against: [
            { ai: "Space exploration is too expensive. Do you agree?", options: ["Yes, money should be spent on Earth.", "No, investing in space is worth it."], correct: "Yes, money should be spent on Earth." },
            { ai: "We should focus on solving problems on Earth first. Do you support this?", options: ["Yes, climate change is more urgent.", "No, space research helps Earth too."], correct: "Yes, climate change is more urgent." },
            { ai: "Space travel is too risky. What do you think?", options: ["Yes, it's too dangerous for astronauts.", "No, risks lead to progress."], correct: "Yes, it's too dangerous for astronauts." },
            { ai: "Space missions don’t provide immediate benefits. Do you agree?", options: ["Yes, they take too long to see results.", "No, long-term investment is needed."], correct: "Yes, they take too long to see results." },
            { ai: "Private companies should fund space exploration instead. Agree?", options: ["Yes, governments shouldn't pay for it.", "No, space should be public, not private."], correct: "Yes, governments shouldn't pay for it." }
        ]
    },
    "animal_testing": {
        question: "Is animal testing justified?",
        for: [
            { ai: "Animal testing is necessary for medical research. Do you agree?", options: ["Yes, it helps develop treatments.", "No, alternative methods exist."], correct: "Yes, it helps develop treatments." },
            { ai: "Many life-saving drugs were discovered through animal testing. Agree?", options: ["Yes, it has saved lives.", "No, human trials are better."], correct: "Yes, it has saved lives." },
            { ai: "Animal testing ensures product safety. What's your stance?", options: ["Yes, it protects consumers.", "No, it causes unnecessary suffering."], correct: "Yes, it protects consumers." },
            { ai: "There are strict laws that minimize animal suffering. Do you agree?", options: ["Yes, regulations protect animals.", "No, laws are not strict enough."], correct: "Yes, regulations protect animals." },
            { ai: "Alternatives to animal testing are not yet fully reliable. Agree?", options: ["Yes, animal data is still needed.", "No, modern technology is enough."], correct: "Yes, animal data is still needed." }
        ],
        against: [
            { ai: "Animal testing is cruel and inhumane. Do you agree?", options: ["Yes, animals should not suffer.", "No, human safety comes first."], correct: "Yes, animals should not suffer." },
            { ai: "Many animal tests fail to predict human responses. Agree?", options: ["Yes, animals and humans are different.", "No, animals provide accurate data."], correct: "Yes, animals and humans are different." },
            { ai: "There are alternative methods like computer models. Do you support this?", options: ["Yes, technology can replace testing.", "No, alternative methods are not perfect."], correct: "Yes, technology can replace testing." },
            { ai: "Animals have rights and should not be used for experiments. Agree?", options: ["Yes, ethical concerns matter.", "No, human life is more important."], correct: "Yes, ethical concerns matter." },
            { ai: "Some successful drugs were developed without animal testing. Do you agree?", options: ["Yes, alternative methods work.", "No, animal testing is still necessary."], correct: "Yes, alternative methods work." }
        ]
    },
    "social_media": {
        question: "Should social media have age restrictions?",
        for: [
            { ai: "Social media can be harmful to young children. Agree?", options: ["Yes, it affects mental health.", "No, kids should have freedom."], correct: "Yes, it affects mental health." },
            { ai: "Age restrictions help protect children from online dangers. Do you support this?", options: ["Yes, kids need online safety.", "No, parents should control access."], correct: "Yes, kids need online safety." },
            { ai: "Too much social media can cause addiction. What do you think?", options: ["Yes, kids should limit usage.", "No, social media is harmless."], correct: "Yes, kids should limit usage." }
        ],
        against: [
            { ai: "Parents should control social media use, not governments. Agree?", options: ["Yes, it's a parenting issue.", "No, laws are needed."], correct: "Yes, it's a parenting issue." },
            { ai: "Many kids learn important skills from social media. Agree?", options: ["Yes, it can be educational.", "No, it's mostly a distraction."], correct: "Yes, it can be educational." }
        ]
    },
};

// Start Debate Function (Pick FOR or AGAINST)
function startDebate(topic) {
    let debateArea = document.getElementById("debateSimulation");
    debateArea.innerHTML = `<p>Debate Topic: <strong>${liveDebateTopics[topic].question}</strong></p>
                            <div class="for-against-container">
                                <button class="for-btn" onclick="startDebateSession('${topic}', 'for')">FOR</button>
                                <button class="against-btn" onclick="startDebateSession('${topic}', 'against')">AGAINST</button>
                            </div>`;
}

function startDebateSession(topic, stance) {
    let debateArea = document.getElementById("debateSimulation");
    debateArea.innerHTML = ""; // Clear previous content
    let debateRounds = stance === "for" ? liveDebateTopics[topic].for : liveDebateTopics[topic].against;

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
// Attach Click-to-Expand to All Sections
document.querySelectorAll(".expandable").forEach(button => {
    button.addEventListener("click", function () {
        let targetId = this.getAttribute("data-target");
        let section = document.getElementById(targetId);
        section.style.display = (section.style.display === "none" || section.style.display === "") ? "block" : "none";
    });
});

// Ensure Live Debate Starts
document.querySelectorAll(".debateOption").forEach(button => {
    button.addEventListener("click", function () {
        let topic = this.getAttribute("data-topic");
        startDebate(topic);
    });
});
// Random Debate Topic Generator
function generateChallenge() {
    let topics = [
        "Should school uniforms be mandatory?",
        "Is AI taking over human jobs?",
        "Should social media have age restrictions?",
        "Should stricter gun control laws be implemented?",
        "Is climate change the biggest global threat?",
        "Should university education be free for all?",
        "Should governments fund space exploration?",
        "Is animal testing justified?"
    ];

    // Select a random topic
    let randomTopic = topics[Math.floor(Math.random() * topics.length)];

    // Display the random topic in the output area
    document.getElementById("challengeOutput").innerText = `🗣️ Debate Topic: ${randomTopic}`;
}
