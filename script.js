const autoComplete = [
  'Html',
  'Css',
  'javaScript',
  'What is website ?',
  'Who is a web Developer ?',
  'React',
  'Github',
  'Portfolio',
  'data Structure',
  'Arrays',
  'Tutorial',
  'colors',
  'Design',
  'Ui/Ux',
  'Figma',
  'Canvas Tool',
  'Web Developer',
  'Web designer',
];
const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length) {
    result = autoComplete.filter((e) => {
      return e.toLowerCase().includes(input.toLowerCase());
    });
    // console.log(result);
  }
  displayResult(result);
  if (!result.length) {
    resultBox.innerHTML = '';
  }
};

function displayResult(result) {
  const content = result.map((list) => {
    return '<li onclick=selectInput(this)>' + list + '</li>';
  });
  resultBox.innerHTML = '<ul>' + content.join(' ') + '</ul>';
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = ' ';
}
