
class TypeWriter {
    constructor(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait);
    this.type();
    this.isDeleting = false;
    }

    type() {
    const current = this.wordIndex % this.words.length;
    //console.log(current);

    const fullTxt = this.words[current];
    //console.log(fullTxt);

    if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span>${this.txt}</span>`;

    let typeSpeed = 50;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
    } 
    else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
    }

    //console.log("hello");
    setTimeout(() => this.type(), typeSpeed);
    }
}



document.addEventListener('DOMContentLoaded', init);


function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    //console.log(words);
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}
