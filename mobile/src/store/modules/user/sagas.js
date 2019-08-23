import { Alert } from "react-native";
import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "../../../services/api";

import { updatedProfileSuccess, updatedProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, "users", profile);
    Alert.alert("Sucesso!", "Perfil Atualizado com sucesso");

    yield put(updatedProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      "Falha na atualização",
      "Erro ao atualizar perfil, confira seus dados!"
    );
    yield put(updatedProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
