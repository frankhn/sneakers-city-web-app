import { all } from 'redux-saga/effects';
import sneakersSaga from 'src/components/sneakers/store/saga';

export default function* rootSaga() {
  yield all([
    // public
    sneakersSaga()
  ]);
}
