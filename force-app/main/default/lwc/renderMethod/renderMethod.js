import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedButton = "";
    render() {
        return this.selectedButton === "SignUp" ? signupTemplate : this.selectedButton === "SignIn" ? signinTemplate : renderTemplate;
    }
    handleClick(event) {
        this.selectedButton = event.target.label;
    }
}