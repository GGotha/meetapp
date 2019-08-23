import { Alert } from "react-native";
import { takeLastest, call, put, all } from "redux-saga/effects";

import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password
    });

    const { token, user } = response.data;

    // if (user.provider) {
    //   Alert.alert('Erro no Login', 'O usuário não é prestador de serviço')
    //   return
    // }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // history.push('/dashboard')
  } catch (err) {
    Alert.alert(
      "Falha na autenticação",
      "Houve um erro no login, verifique seus dados"
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, "users", {
      name,
      email,
      password,
      provider: true
    });
    // history.push('/')
  } catch (err) {
    Alert.alert(
      "Falha no cadastro",
      "Houve um erro no cadastro, verifique seus dados"
    );

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/')
}

export default all([
  takeLastest("persist/REHYDRATE", setToken),
  takeLastest("@auth/SIGN_IN_REQUEST", signIn),
  takeLastest("@auth/SIGN_UP_REQUEST", signUp),
  takeLastest("@auth/SIGN_OUT", signOut)
]);
