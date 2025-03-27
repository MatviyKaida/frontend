document.addEventListener("DOMContentLoaded", async () => {
    const questionContainer = document.getElementById("question-container");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");

    let questions = [];
    let currentQuestionIndex = 0;
    let answers = [];

    async function loadQuestions() {
        const response = await fetch("questions.json");
        questions = await response.json();
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "block";
            return;
        }

        const q = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <h2>${q.question}</h2>
            <img src="${q.svg}" alt="Зображення питання">
            <div>
                ${q.options.map((opt, index) => 
                    `<label>
                        <input type="radio" name="answer" value="${index}">
                        ${opt}
                    </label><t>`
                ).join("")}
            </div>
        `;
    }

    nextBtn.addEventListener("click", () => {
        const selected = document.querySelector("input[name='answer']:checked");
        if (!selected) return alert("Виберіть відповідь!");

        answers.push(parseInt(selected.value, 10));
        currentQuestionIndex++;
        showQuestion();
    });

    submitBtn.addEventListener("click", async () => {
        const email = localStorage.getItem("loggedInUser");

        if(!email) {
            location = "login.html";
        }

        const correctAnswers = questions.map(q => q.correct);
        const score = answers.filter((ans, i) => ans === correctAnswers[i]).length;

        const result = {
            email: email,
            date: new Date().toISOString().split("T")[0],
            score
        };
        await fetch("/results", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(result)
        });
        if(email) {
            alert(`Тест завершено! Ваш результат: ${score}/${questions.length}\n Попередній результат: ${localStorage.getItem("lastScore")}/${questions.length}`);
            localStorage.setItem("lastScore", score);
        }
        
    });

    loadQuestions();
});
