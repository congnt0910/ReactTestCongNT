
import configureStore from './configureStore'
import rootSaga from '../sagas'

const store = configureStore();
store.runSaga(rootSaga);
var event = [];

// add change event when component mounted
function onChange(callback) {
    if (typeof callback === "function") {
        event.push(callback);
    }
}

// remove change event when component unmount
function removeOnChange(callback) {
    event.some((cb, index)=> {
        if (cb === callback) {
            delete event[index];
            return true;
        }
        return false
    });
}

function emitChange() {
    event.forEach((cb)=> {
        if (cb) {
            cb();
        }
    })
}

store.subscribe(emitChange);

export {store, onChange, removeOnChange}