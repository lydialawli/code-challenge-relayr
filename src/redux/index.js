import store from "./store/index";
import { getData, patchReading, setVisibilityFilter } from "./actions/index";

window.store = store;
window.getData = getData;
window.patchReading = patchReading;
window.setVisibilityFilter = setVisibilityFilter;
