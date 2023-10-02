import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames = ['Cezary', 'Klaudia', 'Marek', 'Ania'];

    fetchDetaislHandler(){
        const e = this.template.querySelector('h1');
        e.style.border="1px solid red";
        console.log(e.innerText);

        const ue = this.template.querySelectorAll('.name');
        Array.from(ue).forEach(element => {console.log(element.innerText)
            element.setAttribute('title', element.innerText)});

        //lwc:dom="manual" demo
        const childElement = this.template.querySelector(".child");
        childElement.innerHTML = '<p>Progrmatically attached text</p>';
    };
}
