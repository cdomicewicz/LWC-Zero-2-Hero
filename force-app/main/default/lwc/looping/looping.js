import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carList = ["Ferrari", "Porsche", "McLaren", "Bugatti", "Maybach"];
    ceoList = [
        {
            id: 1,
            company: 'Google',
            name: 'Cezary Domicewicz'
        },
        {
            id: 2,
            company: 'Facebook',
            name: 'Klaudia Kozłwoska'
        },
        {
            id: 3,
            company: 'Microsoft',
            name: 'Anna Domicewicz'
        },
        {
            id: 4,
            company: 'Apple',
            name: 'Marek Springer'
        },
        {
            id: 5,
            company: 'Jeronimo Martins',
            name: 'Stanisław Szmajdziński'
        }
    ];


}