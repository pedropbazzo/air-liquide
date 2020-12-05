import Axios from 'axios'
import { put, takeEvery, all } from 'redux-saga/effects'
import { updateToDoItems } from './actions'
import * as types from './actionTypes'

function* fetchToDoItemsWorker() {
  try {
    const { data: list } = yield Axios.get(
      'https://my.api.mockaroo.com/epilist?key=52d6c330'
    )
    // const list = [{ name: 'Foo' }, { name: 'Bar' }, { name: 'Baz' }]
    interface ListItem {
      name: string
    }

    const items = list.map((item: ListItem) => ({ ...item, checked: false }))

    yield put(updateToDoItems(items))
  } catch (err) {
    throw err
  }
}

function* fetchToDoItemsWatcher() {
  yield takeEvery(types.FETCH_TO_DO_ITEMS, fetchToDoItemsWorker)
}

export default function* rootSaga() {
  yield all([fetchToDoItemsWatcher()])
}
