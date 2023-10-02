import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    inputMessage;
    elements = [
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First Card",
            description: "First Description",
            alternativetext: "First card accessible description.",
            href: "https://www.example.com"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header: "Second Card",
            description: "Second Description",
            alternativetext: "Second card accessible description.",
            href: "https://www.example.com"
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: "Third Card",
            description: "Third Description",
            alternativetext: "Third card accessible description.",
            href: "https://www.example.com"
        },
        {
            src: "https://wallpapercave.com/dwp1x/ffwGSij.jpg",
            header: "Fourth Card",
            description: "Fourth Description",
            alternativetext: "Fourth card accessible description.",
            href: "https://www.example.com"
        }
    ];


    handleKeyUp(event) {
        this.inputMessage = event.target.value;
    };

    percentage = 10;
    changeHandler(event) {
        this.percentage = event.target.value;
        this.percentage > 100 ? 100 : this.percentage;
        this.percentage < 0 ? 0 : this.percentage;
    }
    handleClick() {
        this.template.querySelector('c-p2c-slider-component').resetSlider();
    }
}