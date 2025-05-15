// app.js for Oscilloscope Knowledge Check Quiz

const correctAnswers = {
    q1: "Voltage",
    q2: "Shrink the waveform",
    q3: "Time",
    q4: "Stabilizing the waveform",
    q5: "The scope’s ADC isn't fully utilized"
};

function checkAnswers() {
    let score = 0;
    let feedback = [];
    for (let i = 1; i <= 5; i++) {
        const q = document.querySelector(`input[name='q${i}']:checked`);
        if (!q) {
            feedback.push(`<p>Question ${i}: <span class='incorrect'>No answer selected.</span> Correct answer: <b>${correctAnswers[`q${i}`]}</b></p>`);
            continue;
        }
        if (q.value === correctAnswers[`q${i}`]) {
            score++;
            feedback.push(`<p>Question ${i}: <span class='correct'>Correct!</span></p>`);
        } else {
            feedback.push(`<p>Question ${i}: <span class='incorrect'>Incorrect.</span> Correct answer: <b>${correctAnswers[`q${i}`]}</b></p>`);
        }
    }
    document.getElementById('results').innerHTML = `<h2>Your Score: ${score}/5</h2>` + feedback.join('');
}

window.checkAnswers = checkAnswers;
