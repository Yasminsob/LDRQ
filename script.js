const form = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const questionNames = ["q1", "q2", "q3", "q4"];
    questionNames.forEach(qn => {
        const selected = document.querySelector(`input[name="${qn}"]:checked`);
        if (selected) {
            localStorage.setItem(qn, selected.value); 
        }
    });

    calculateResults();
});

function calculateResults() {
    let counts = {'A': 0, 'B': 0, 'C': 0};
    const questionNames = ["q1", "q2", "q3", "q4"];
    
    questionNames.forEach(qn => {
        const value = localStorage.getItem(qn); 
        if (value) {
            counts[value]++;
        }
    });

    displayResult(counts);
}

function displayResult(counts) {
    let resultText = "";
    
    if (counts['A'] >= counts['B'] && counts['A'] >= counts['C']) {
        resultText = "Your connection thrives on constant updates and digital interactions!";
    } else if (counts['B'] >= counts['A'] && counts['B'] >= counts['C']) {
        resultText = "Your bond is strongest when you can see each other, even if just digitally!";
    } else {
        resultText = "You value the traditional, tangible expressions of affection!";
    }
    resultDiv.innerHTML = resultText;
}

document.addEventListener('DOMContentLoaded', () => {
    const questionNames = ["q1", "q2", "q3", "q4"];
    questionNames.forEach(qn => {
        const value = localStorage.getItem(qn);
        if (value) {
            const radio = document.querySelector(`input[name="${qn}"][value="${value}"]`);
            if (radio) {
                radio.checked = true;
            }
        }
    });

    
    calculateResults();
});

function clearStorage() {
    const questionNames = ["q1", "q2", "q3", "q4"];
    questionNames.forEach(qn => {
        localStorage.removeItem(qn);
    });
    window.location.reload(); 
}
