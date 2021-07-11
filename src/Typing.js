const Texts = ['Akash','Ahmed','Samrat']
let count = 0;
let currentText = '';
let index = 0;
let letter = "";



(function type() {
  if(count === Texts.length) {
    count = 0
}
  currentText = Texts[count]
  letter = currentText.slice(0,++index);
  document.querySelector('.type>h3').textContent = letter
  if(letter.length === currentText.length) {
    count ++;
    index=0
  }
setTimeout(type,500);
})();
