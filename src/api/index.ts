type PromiseCallback = (v?: any) => void;

type GetLocalStorage = (
  key: string,
  errorMessage?: string
) => (resolve: PromiseCallback, reject: PromiseCallback) => void;

const getLocalStorage: GetLocalStorage = (
  key,
  errorMessage = "Error message"
) => (resolve, reject) => {
  const data = localStorage.getItem(key);
  if (data) {
    resolve(JSON.parse(data));
  } else {
    reject({
      message: errorMessage,
    });
  }
};

export const requestTransactions = () =>
  new Promise(getLocalStorage("transactions"));
export const requestCategoies = () =>
  new Promise(getLocalStorage("categories"));
