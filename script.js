// script.js
function submitExam() {
    let score = 0;
    let totalQuestions = 3;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "Paris") score++;
    if (q2 && q2.value === "4") score++;
    if (q3 && q3.value === "Mars") score++;

    let result = document.getElementById("result");
    result.innerHTML = `You scored ${score} out of ${totalQuestions}.`;

    // Optional: Disable form after submission
    document.getElementById("examForm").style.display = "none";
}
