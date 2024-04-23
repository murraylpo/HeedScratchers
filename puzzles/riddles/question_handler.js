function checkQuestion1() {
    let reward = 25;
    if (document.getElementById('q1_option3').checked) {
        document.getElementById('result1').innerHTML = "Correct! You earned " + reward + " points!"
        addPoints(reward);
        play();
    } else {
        document.getElementById('result1').innerHTML = "Incorrect!"
    }
}

function checkQuestion2() {
    let reward = 25;
    if (document.getElementById('q2_option2').checked) {
        document.getElementById('result2').innerHTML = "Correct! You earned " + reward + " points!"
        addPoints(reward);
        play();
    } else {
        document.getElementById('result2').innerHTML = "Incorrect!"
    }
}

function checkQuestion3() {
    let reward = 25;
    if (document.getElementById('q3_option2').checked) {
        document.getElementById('result3').innerHTML = "Correct! You earned " + reward + " points!"
        addPoints(reward);
        play();
    } else {
        document.getElementById('result3').innerHTML = "Incorrect!"
    }
}

function checkQuestion4() {
    let reward = 25;
    if (document.getElementById('q4_option4').checked) {
        document.getElementById('result4').innerHTML = "Correct! You earned " + reward + " points!"
        addPoints(reward);
        play();
    } else {
        document.getElementById('result4').innerHTML = "Incorrect!"
    }
}

function checkQuestion5() {
    let reward = 25;
    if (document.getElementById('q5_option4').checked) {
        document.getElementById('result5').innerHTML = "Correct! You earned " + reward + " points!"
        addPoints(reward);
        play();
    } else {
        document.getElementById('result5').innerHTML = "Incorrect!"
    }
}