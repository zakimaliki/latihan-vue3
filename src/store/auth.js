import axios from "axios";
import Cookies from "js-cookie";
export default {
    namespaced: true,
    state() {
        return {
            token: null,
            tokenExpirationDate: null,
            userLogin: {},
            isLogin: false,

        };
    },
    mutations: {
        setToken(state, { idToken, expiresIn }) {
            state.token = idToken;
            state.tokenExpirationDate = expiresIn;
            Cookies.set("tokenExpirationDate", expiresIn);
            Cookies.set("jwt", idToken);
        },
        setUserLogin(state, { userData, loginStatus }) {
            state.userLogin = userData;
            state.isLogin = loginStatus;
        },
    },
    actions: {
        async getRegisterData({ commit, dispatch }, payload) {
            const APIkey = "AIzaSyBjakIo47xN_m8FRYdkpwbhLkF5rxDs2F8";
            const authUrl =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
            try {
                const { data } = await axios.post(authUrl + APIkey, {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                });
                commit("setToken", {
                    idToken: data.idToken,
                    expiresIn: new Date().getTime() + Number.parseInt(data.expiresIn) * 1000
                })
                const newUserData = {
                    userId: data.localId, firstname: payload.firstname,
                    lastname: payload.lastname, username: payload.username,
                    email: payload.email, imageLink: payload.imageLink,
                };
                Cookies.set("UID", newUserData.userId);
                await dispatch("addNewUser", newUserData);
            } catch (err) {
                console.log(err);

            }
        },
        async addNewUser({ commit, state }, payload) {
            try {
                const { data } = await axios.post(
                    `https://vue-js-project-feed8-default-rtdb.firebaseio.com/user.json?auth=${state.token}`, payload);
                commit("setUserLogin", { userData: payload, loginStatus: true })
            } catch (err) {
                console.log(err);
            }
        },
    }
}