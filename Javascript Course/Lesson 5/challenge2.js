(function() {



    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }


    //Callback is referring to the score

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans == this.correct) {
            console.log('Correct!');
            sc = callback(true);

        } else {
            console.log('What the hell dumguy?!');

            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------');
    }

    var q1 = new Question('Is your favorite color blue?', ['Yes', 'No'], 0);

    var q2 = new Question('What is your job?', ['Monkey', 'Designer', 'Web Developer', 'All The Above'], 3);

    var questions = [q1, q2];


    //  Keeping Score of all the correct answers

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++
            }
            return sc;
        }
    }

    var keepScore = score();


    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = (prompt('Please select the correct answer or type exit to quit'));


        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();


})();