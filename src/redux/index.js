import store from "./store/index";
import { getData, patchReading, setVisibilityFilter, setFilter } from "./actions/index";

window.store = store;
window.getData = getData;
window.patchReading = patchReading;
window.setVisibilityFilter = setVisibilityFilter;
window.setFilter = setFilter;
