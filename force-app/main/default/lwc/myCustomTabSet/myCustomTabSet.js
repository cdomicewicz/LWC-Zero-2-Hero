import { LightningElement } from 'lwc';

export default class MyCustomTabSet extends LightningElement {
    handleTabClick1() {
        console.log("Tab 1 clicked!")
    }
    handleTabClick2() {
        console.log("Tab 2 clicked!")
    }
    handleTabClick3() {
        console.log("Tab 3 clicked!")
    }
}