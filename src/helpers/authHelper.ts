const authHelper = {
  getToken: () => localStorage.getItem("user_jwt"),
  isAuthenticated: localStorage.getItem("user_jwt") && true,
  authenticate(jwt: string, cb?: () => void) {
    this.isAuthenticated = true;
    localStorage.setItem("user_jwt", jwt);
    if (cb) {
      setTimeout(cb, 100);
    }
  },
  signout(cb?: () => void) {
    localStorage.removeItem("user_jwt");
    this.isAuthenticated = false;
    if (cb) {
      setTimeout(cb, 100);
    }
  }
};

export default authHelper;
