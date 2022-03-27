import { action, makeObservable, observable } from 'mobx';

class LoaderState {
  loading = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      setLoading: action,
      toggleLoading: action,
    });
  }

  setLoading = (loadingState: boolean) => {
    this.loading = loadingState;
  };

  toggleLoading = () => {
    this.loading = !this.loading;
  };
}

export default new LoaderState();
