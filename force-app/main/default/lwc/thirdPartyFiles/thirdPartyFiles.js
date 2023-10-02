import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';
import ANIMATE from '@salesforce/resourceUrl/animate'

export default class ThirdPartyFiles extends LightningElement {
    currentDate;
    isLibLoaded = false;
    renderedCallback() {
        if (!this.isLibLoaded) {
            Promise.all ([
                loadScript(this, MOMENT+'/moment/moment.min.js'),
                loadStyle(this, ANIMATE+'/animate/animate.min.css')
            ]).then(() => {
                this.setDateOnScreen();
            }).catch(error => {
                console.error(error)
            })
            this.isLibLoaded = true;
        }
    }

    setDateOnScreen() {
        this.currentDate = moment().format('LLLL');
    }

    handleShake() {
        let processingFormula = el => el.classList.add('animate__bounce');
        this.processStyles(processingFormula);
    }

    removeBounce() {
        let processingFormula = el => el.classList.remove('animate__bounce');
        this.processStyles(processingFormula);
    }

    processStyles(processingFormula) {
        let elements = this.template.querySelectorAll('p');
        elements.forEach(processingFormula);
    }

}