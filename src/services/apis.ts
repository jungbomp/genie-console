import { baseUrl, midmBaseUrl, searchWebBaseUrl } from './constants';

export const getBasemidmCurationServiceUrl = () => `${baseUrl}/get_basemidm_curationService`;
export const getTotalAutoWordsUrl = () => `${searchWebBaseUrl}/ksearch/web/getTotalAutoWords`;
export const getMidmApiUrl = () => `${midmBaseUrl}/multitaske`;
