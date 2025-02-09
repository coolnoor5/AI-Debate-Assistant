function toggleTip(id) {
    let tip = document.getElementById(id);
    if (tip.style.display === "none") {
        tip.style.display = "block";
    } else {
        tip.style.display = "none";
    }
}

let xp = 0;

function generateDebate() {
    let topic = document.getElementById("debateTopic").value;
    if (topic === "") {
        alert("Please enter a debate topic.");
        return;
    }

    alert("AI is generating arguments for: " + topic);
    xp += 10;
    document.getElementById("xpCount").innerText = xp;
}
