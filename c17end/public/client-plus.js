plus();

function plus(){
  const val1 = document.querySelector('#val1');
  const val2 = document.querySelector('#val2');
  const answer = document.querySelector('#answer');

  function inputHandler(){
    answer.textContent = Number(val1.value) + Number(val2.value);
  }

  val1.addEventListener('input', inputHandler);
  val2.addEventListener('input', inputHandler);
}