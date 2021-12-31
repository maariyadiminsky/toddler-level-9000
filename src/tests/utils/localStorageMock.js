class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  }
  
  let originalLocalStorage;
  export const createMock = () => {
    originalLocalStorage = global.localStorage;
    global.localStorage = new LocalStorageMock();
  }

  export const removeMock = () => {
      localStorage.clear();
      global.localStorage = originalLocalStorage;
  }