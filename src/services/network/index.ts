import API_PATHS from "./apiPath";
import NetworkService from "./NetworkService";

export default { ...NetworkService, API: { ...API_PATHS } };