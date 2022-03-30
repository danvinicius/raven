import { createStore } from "vuex";

export default createStore({
  state: {
    login: false,
    token: "",
    user: {
      _id: "",
      name: "",
      city: "",
      email: "",
    },
  },
  mutations: {
    //use commit
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
    UPDATE_TOKEN(state, payload) {
      state.token = payload;
      localStorage.setItem("token", payload);
    },
  },
  actions: {
    //use dispatch
  },
  modules: {},
});
