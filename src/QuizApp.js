let QuizData = [
  {
    question : 'Who is js inventor?',
    a: 'William Gomez',
    b:'Rayn daal',
    c:'Ecma',
    d:'Kuale',
    correct:'c',
  },

  {
    question : 'Fetch api?',
    a: 'Load Data from Url',
    b:'create data own',
    c:'Count data 0wn',
    d:'Numeric items',
    correct:'a'
  },
  {
    question : 'Does JavaScript Use Libaries?',
    a: 'Vue Js',
    b:'React Js ',
    c:'Matarel Ui',
    d:'TailwindCss',
    correct:'b'
  },
]

// selectors...
const a_text = document.getElementById('a_text')
 const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const question = document.getElementById('question')
const submitBtn = document.getElementById('submit')
const answers = document.querySelectorAll('.answer')
const showScore = document.getElementById('showScore')

//  imlement codes
let currentQuiz = 0
let score = 0
loadData()
    // selected dynamic data
 function getSelectedData() {
     let answer = undefined;3   
    answers.forEach(answerEl => {
      if(answerEl.checked){
         answer = answerEl.id
      
      }
      
    })

    return answer
 }

//  dselected datas

function dselectedAnswer() {
  answers.forEach(answer => {
    answer.checked = false
  })
}
// Load Quiz data.....
function loadData() {

  dselectedAnswer()
  const currentQuizData = QuizData[currentQuiz]
  question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// eventlistener...
submitBtn.addEventListener('click',function(){
const answer = getSelectedData()

if(answer){
  if(answer === QuizData[currentQuiz].correct) {
    score++;
    


  }
   currentQuiz++;
   
   if(currentQuiz < QuizData.length){
       loadData()
   }else{
     // problem is not solve
       
       
       alert('finished')
       showScore.innerHTML = `<div class='alert alert-success'>you have given correct answer is${score} / ${QuizData.length}`
   }
  }

})