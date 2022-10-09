import { data } from "../data.js";
let contendorEncuesta = document.querySelector(".contenedor_encuesta");
let btnSiguientePregunta = document.querySelector(".siguiente_pregunta");
let btnRegistraUser = document.querySelector(".btn-primario")
let inputRegistraUser = document.querySelector(".input_buscar")

function Encueta() {
  this.questions = [];
  this.indexCurrentQuestion = 0;

  this.agregaQuestion = function (question) {
    this.questions.push(question);
  };

  this.muestraActualQuestion = function () {
    if (this.indexCurrentQuestion < this.questions.length) {
      this.questions[this.indexCurrentQuestion].getElement();
    } else {
      contendorEncuesta.classList.add("hidden");
    }
  };
}



function FormaEncuesta(question, options) {
  this.question = question;
  this.options = options;

  this.getElement = function () {
    let title = document.createElement("h1");
    title.textContent = "Sistema de Encuestas";
    contendorEncuesta.append(title);

    let questionTitle = document.createElement("h2");
    questionTitle.classList.add("question_titulo");
    questionTitle.textContent = this.question;
    contendorEncuesta.append(questionTitle);

    let questionOption = document.createElement("ul");
    questionOption.classList.add("question_options");

    this.options.forEach((option, index) => {
      let elOption = document.createElement("li");
      elOption.classList.add("option");
      elOption.textContent = option;
      elOption.id = index + 1;
      elOption.addEventListener("click", this.checkOptions);
      questionOption.append(elOption);
    });
    contendorEncuesta.append(questionOption);
  };

  this.checkOptions = (event) => {
    let valueOption = event.target.outerText;
    console.log("test2", valueOption);

    let anwserSelected = event.target; 
    anwserSelected.classList.add("option_select");

    

    console.log("test", anwserSelected);
    

    btnSiguientePregunta.addEventListener("click", (elemento) => {
      contendorEncuesta.textContent = "";
      encuesta.indexCurrentQuestion++;
      encuesta.muestraActualQuestion();

    });
  };
}


let option1 = new FormaEncuesta(data[0].question, data[0].options);
let option2 = new FormaEncuesta(data[1].question, data[1].options);
let option3 = new FormaEncuesta(data[2].question, data[2].options);
let option4 = new FormaEncuesta(data[3].question, data[3].options);

let encuesta = new Encueta();
encuesta.agregaQuestion(option1);
encuesta.agregaQuestion(option2);
encuesta.agregaQuestion(option3);
encuesta.agregaQuestion(option4);

console.log("instacia", option1);

option1.getElement();


/*

historial = {}
function agregaHistorial(user) {
    historial.push({
        user: user,
    });
  }


  btnRegistraUser.addEventListener('click', (elemento) => {
    const history = elemento.target.outerText
    agregaHistorial
  }) 

  function inicioEncuesta(){


  }

  */