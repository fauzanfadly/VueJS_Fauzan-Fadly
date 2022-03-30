export default {
  changeTheme(store, theme) {
    return store.commit("setTheme", theme);
  }
}