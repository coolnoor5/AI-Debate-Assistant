document.addEventListener("DOMContentLoaded", function () {
    // 🏆 XP Counter
    let xp = 0;
    document.getElementById("xp-count").innerText = xp;

    // 🔽 Expand Click-to-Expand Sections
    document.querySelectorAll(".expandable").forEach((btn) => {
        btn.addEventListener("click", function () {
            let content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });

    // 🎙️ Debate Data
    const debates = {
        "Should school uniforms be mandatory?": {
            pros: [
                "Promotes equality among students.",
                "Reduces peer pressure and bullying.",
                "Saves money for families.",
                "Encourages discipline.",
                "Improves student focus.",
            ],
            cons: [
                "Suppresses individuality.",
                "Can be expensive for some families.",
                "May not be comfortable for all students.",
                "Does not improve academic performance.",
                "Creates enforcement challenges.",
            ],
            arguments: [
                "Mandatory uniforms ensure that students focus on learning, not fashion.",
                "Allowing students to choose their clothing helps develop individuality and confidence.",
            ],
            counterarguments: [
                "Creativity can still be expressed through extracurricular activities.",
                "Uniforms can be designed to be comfortable and affordable.",
            ],
        },
        "Should social media have age restrictions?": {
            pros: [
                "Protects young users from harmful content.",
                "Reduces cyberbullying risks.",
                "Encourages healthier social interactions.",
                "Prevents data privacy violations.",
                "Limits exposure to inappropriate advertisements.",
            ],
            cons: [
                "Difficult to enforce effectively.",
                "Could limit learning opportunities.",
                "May encourage lying about age.",
                "Parents should regulate, not laws.",
                "Social media can be educational.",
            ],
            arguments: [
                "Young minds are impressionable and need protection from harmful online influences.",
                "Education about responsible usage is better than restrictions.",
            ],
            counterarguments: [
                "Proper digital education can be more effective than bans.",
                "Social media platforms should invest in better moderation instead of age restrictions.",
            ],
        },
    };

    // 🎯 Generate Full Debate
    document.getElementById("generate-debate").addEventListener("click", function () {
        let topic = document.getElementById("debate-topic").value;
        let output = document.getElementById("debate-output");

        if (debates[topic]) {
            let debateData = debates[topic];
            let debateHTML = `<h3>Pros:</h3><ul>`;
            debateData.pros.forEach((pro) => (debateHTML += `<li>${pro}</li>`));
            debateHTML += `</ul><h3>Cons:</h3><ul>`;
            debateData.cons.forEach((con) => (debateHTML += `<li>${con}</li>`));
            debateHTML += `</ul><h3>Arguments:</h3><ul>`;
            debateData.arguments.forEach((arg) => (debateHTML += `<li>${arg}</li>`));
            debateHTML += `</ul><h3>Counterarguments:</h3><ul>`;
            debateData.counterarguments.forEach((ctr) => (debateHTML += `<li>${ctr}</li>`));
            debateHTML += `</ul>`;

            output.innerHTML = debateHTML;

            // 🏆 Increase XP
            xp += 50;
            document.getElementById("xp-count").innerText = xp;
        } else {
            output.innerHTML = "<p style='color:red;'>No debate found.</p>";
        }
    });
});
