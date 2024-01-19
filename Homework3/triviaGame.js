const questions = [
    {
      question: 'Care este capitala Franței?',
      options: ['Londra', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Cine a scris "Romeo și Julieta"?',
      options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
      correctAnswer: 'William Shakespeare'
    },
    {
      question: 'Care este cel mai înalt vârf al lumii?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
      correctAnswer: 'Mount Everest'
    },
    {
      question: 'Câți ani a durat Războiul de 100 de Ani?',
      options: ['50 ani', '75 ani', '100 ani', '116 ani'],
      correctAnswer: '116 ani'
    },
    {
      question: 'Care este capitala Japoniei?',
      options: ['Pekin', 'Seul', 'Tokyo', 'Hanoi'],
      correctAnswer: 'Tokyo'
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    const currentQuestion = questions[currentQuestionIndex];
  
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
  
    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement('button');
      optionButton.className = 'option';
      optionButton.textContent = option;
      optionButton.addEventListener('click', function () {
        checkAnswer(option);
      });
      optionsElement.appendChild(optionButton);
    });
  
    scoreElement.textContent = `Score: ${score}`;
  }
  
  function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endGame();
    }
  }
  
  function endGame() {
    alert(`Game over! Your final score is: ${score}`);
    resetGame();
  }
  
  function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
  }
  
  // Start the game
  displayQuestion();
  