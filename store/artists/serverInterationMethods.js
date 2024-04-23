import {appConfig} from "~/lib/appConfig.js";
import {makeGetReq} from "~/store/helpers/request.js";

export const fetchArtistList = async () => {
    return await makeGetReq(appConfig.artistsDomain);
};
