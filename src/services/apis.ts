import { baseUrl, drsBaseUrl, imageServerBaseUrl, midmBaseUrl, searchWebBaseUrl } from './constants';

export const getBasemidmCurationServiceUrl = () => `${baseUrl}/get_basemidm_curationService`;
export const getTotalAutoWordsUrl = () => `${searchWebBaseUrl}/ksearch/web/getTotalAutoWords`;
export const getMidmApiUrl = () => `${midmBaseUrl}/multitaske`;
export const getDrsRecommendGenieUrl = () => `${drsBaseUrl}/wasDRS/getRecommendGenie`;
export const getKtPocImageCdnUrl = () => `${imageServerBaseUrl}/ktpoc/images`;
