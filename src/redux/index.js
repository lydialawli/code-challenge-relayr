import store from "./store/index";
import { getData, patchReading } from "./actions/index";

window.store = store;
window.getData = getData;
window.patchReading = patchReading;
