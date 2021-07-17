import FlashCard1 from "./flashcard1.js";

const $template = document.createElement('template');
$template.innerHTML = `
 <div class = 'add-flash-card'>


   <div>

`
export default class addFlashCard extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true))
        this.$flashCards = this.querySelector('.add-flash-card')
    }

    // divMarker(text) {
    //     var div = document.createElement('div')
    //     var h3_question = document.createElement('h3')
    //     var h3_answer = document.createElement('h3')

    //     h3_question.innerHTML = text.question;
    //     h3_answer.innerHTML = text.answer;
    //     div.appendChild(h3_question)
    //     div.appendChild(h3_answer)
    //     this.$flashCards.appendChild(div)
        
    // }
    static get observedAttributes() {
        return ['content']
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'content') {
            let data = JSON.parse(newValue)
            console.log(data);
            this.$flashCards.innerHTML = ``
            for(let doc of data){
                let flashcard = new FlashCard1()
                flashcard.setAttribute('question', doc.question)
                flashcard.setAttribute('answer', doc.answer)
                this.$flashCards.appendChild(flashcard)
            }
            
        }
    }
}

window.customElements.define('add-flash-card', addFlashCard)