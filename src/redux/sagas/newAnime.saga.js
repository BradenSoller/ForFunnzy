import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* addNewAnime(action) {
    console.log('action.payload', action.payload);
      try {
        const headers = {
          'content-type': 'multipart/form-data'
        }
        const response = yield axios({
          method: "POST",
          url: "/api/newanime/",
          headers: headers,
          data: action.payload
        });
        yield put({
          type: "FETCH_ALL_ANIME"
        
        })
      } catch (error) {
        console.log("Unable to post new animes to server", error);
      }
}
    
export default function* newAnimeSaga() { 
  yield takeLatest("ADD_NEW_ANIME", addNewAnime)

}