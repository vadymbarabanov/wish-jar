import { action, makeObservable, observable } from "mobx"

class Counter {
    counter = 0;

    constructor() {
        makeObservable(this, {
            counter: observable,
            increase: action,
            decrease: action,
        })
    }

    increase = () => {
        console.log(this.counter);
        ++this.counter

        console.log(this.counter);

    }

    decrease = () => {
        --this.counter
    }
}

export const counter = new Counter()