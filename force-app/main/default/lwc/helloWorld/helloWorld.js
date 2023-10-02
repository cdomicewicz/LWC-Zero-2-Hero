import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Zero to Hero!";
    user = {
        name: "Cezary",
        surname: "Domicewicz"
    }
    title = "aura";
    changeHandler(event) {
        this.title = event.target.value;
    };

    address = {
        city : "Myślibórz",
        postcode : 74300,
        country : "Poland"
    };
    trackHandler(event) {
        this.address = {...this.address, "city" : event.target.value};
    }

    num1 = 2;
    num2 = 3;
    users = ["Cezary", "Klaudia", "Marek", "Ania"];
    
    get firstUser() {
        return this.users[0].toUpperCase();
    }

    get multiply() {
        return this.num1 * this.num2;
    }

    condition1 = true;
    condition2 = true;

}