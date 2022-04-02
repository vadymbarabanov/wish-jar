import { action, makeObservable, observable } from 'mobx';

type Callback = () => void;

export class NavigationState {
  newPasswordCallback: null | Callback = null;
  verificationCallback: null | Callback = null;

  constructor() {
    makeObservable(this, {
      newPasswordCallback: observable,
      verificationCallback: observable,
      setNewPasswordCallback: action,
      setVerificationCallback: action,
    });
  }

  setNewPasswordCallback = (callback: Callback) => {
    this.newPasswordCallback = callback;
  };

  setVerificationCallback = (callback: Callback) => {
    this.verificationCallback = callback;
  };
}

export default new NavigationState();
