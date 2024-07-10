// script.js

// Question 1: Remove states starting with vowels
function removeStates() {
    const states = document.getElementById('states').value.split(',').map(s => s.trim());
    const result = states.filter(state => !/^[aeiouAEIOU]/.test(state));
    document.getElementById('states-result').textContent = `Filtered States: ${result.join(', ')}`;
}

// Question 2: Reverse words in a string
function reverseWords() {
    const str = document.getElementById('reverse-string').value;
    const result = str.split(' ').reverse().join(' ');
    document.getElementById('reverse-string-result').textContent = `Reversed: ${result}`;
}

// Question 3: Replace part of string with array.splice
function replaceWithSplice() {
    let arr = ['I', 'N', 'D', 'I', 'A'];
    arr.splice(3, 3, 'O', 'N', 'E', 'S', 'I', 'A');
    document.getElementById('splice-result').textContent = `Result: ${arr.join('')}`;
}

// Question 4: Count vowels and consonants
function countVowelsAndConsonants() {
    const str = document.getElementById('count-string').value;
    const vowels = str.match(/[aeiouAEIOU]/g) || [];
    const consonants = str.match(/[^aeiouAEIOU\s\d]/g) || [];
    document.getElementById('count-result').textContent = `Vowels: ${vowels.length}, Consonants: ${consonants.length}`;
}

// Question 5: Replace word in sentence
function correctSentence() {
    const sentence = document.getElementById('sentence').value;
    const wrong = document.getElementById('wrong-word').value;
    const correct = document.getElementById('correct-word').value;
    const result = sentence.replace(wrong, correct);
    document.getElementById('correct-result').textContent = `Corrected: ${result}`;
}

// Question 6: Filter numbers greater than 5
function filterNumbers() {
    const inputArr = document.getElementById('input-array').value.split(',').map(Number);
    const result = inputArr.filter(num => num > 5);
    document.getElementById('filter-result').textContent = `Filtered: ${result.join(', ')}`;
}

// Question 7: Calculate average scores
function calculateAverages() {
    const students = [
        { name: "Ram", scores: [80, 70, 60] },
        { name: "Mohan", scores: [80, 70, 90] },
        { name: "Sai", scores: [60, 70, 80] },
        { name: "Hemang", scores: [90, 90, 80, 80] }
    ];

    const result = students.map(student => {
        const avg = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
        return { name: student.name, average: avg };
    });

    document.getElementById('averages-result').textContent = `Averages: ${JSON.stringify(result)}`;
}

// Question 8: Repeated sum of digits
function repeatedSum() {
    let num = parseInt(document.getElementById('repeated-sum-number').value, 10);
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }
    document.getElementById('repeated-sum-result').textContent = `Result: ${num}`;
}

// Question 9: Count number of words
function countWords() {
    const paragraph = document.getElementById('paragraph').value;
    const wordCount = paragraph.trim().split(/\s+/).length;
    document.getElementById('word-count-result').textContent = `Word Count: ${wordCount}`;
}

// Question 10: Reverse a string
function reverseString() {
    const str = document.getElementById('reverse-input').value;
    const result = str.split('').reverse().join('');
    document.getElementById('reverse-result').textContent = `Reversed: ${result}`;
}

// Question 11: Calculate average for students
function calculateStudentAverages() {
    const students = [
        { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
        { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
        { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    ];

    const result = students.map(student => {
        const subjects = Object.values(student);
        const avg = subjects.reduce((acc, score) => acc + score, 0) / subjects.length;
        return { average: avg };
    });

    document.getElementById('student-averages-result').textContent = `Averages: ${JSON.stringify(result)}`;
}
