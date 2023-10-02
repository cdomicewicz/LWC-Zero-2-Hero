import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    correctAnswers = 0;
    selected = {};
    isSubmited = false;

    quizQuestions = [
        {
            id: "Question 1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            answer: "c"
        },
        {
            id: "Question 2",
            question: "Which of the file is invalid in an LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            answer: "b"
        },
        {
            id: "Question 3",
            question: "Which of the follwing is not a directive?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            answer: "c"
        },
        {
            id: "Question 4",
            question: "Which of the follwing is not available in Apex but is available in Java?",
            answers: {
                a: "casting",
                b: "inheriting",
                c: "streaming API"
            },
            answer: "c"
        }
    ];

    changeHandler(event) {
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        console.log("type", event.target.type);
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]:value};
    };

    submitHandler(event) {
        // form always refresh page - button inside form - it must be prevented
        event.preventDefault();
        this.correctAnswers = this.quizQuestions.filter(item =>this.selected[item.id] === item.answer).length;
        this.isSubmited = true;
        console.log("Correct answers", this.correctAnswers);

    }

    resetHandler() {
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmited = false;
    }

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.quizQuestions.length);
    }

    get isScoredFull() {
        return `slds-text-heading_large ${this.quizQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

}