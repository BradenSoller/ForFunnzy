import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";

 function* getAllAnime() {
        try {
          const response = yield axios({
            method: "GET",
            url: "/api/anime",
          });
          yield put({
            type: "SET_ANIME",
            payload: response.data,
          });
        } catch (error) {
          console.log("Unable to get pending events from server", error);
        }

 }

 function* StatusChange(action) {
  try {
    const editedStatus = action.payload;

    const response = yield axios({
      method: "PUT",
      url: `/api/anime/status/${editedStatus}`,
    });

    yield put({
      type: "FETCH_ALL_ANIME",
    });
  } catch (err) {
    console.log("submitStatusChange failed.", err);
  }
}

export default function* AnimeSaga() { 
  yield takeLatest("FETCH_ALL_ANIME", getAllAnime),
  yield takeLatest("CHANGE_STATUS", StatusChange)

  
}