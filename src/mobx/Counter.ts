import { action, makeObservable, observable } from 'mobx';

export default class Counter {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => {
    ++this.count;
    console.log(this.count);
  };

  decrease = () => {
    --this.count;
  };
}

export const counter = new Counter();
