export const getConfigDetails = () => {
  switch ('demo') {
    // switch ('staging') {
    // switch ('live') {
    case 'demo': //staging2
      return {
        baseURL: '',
      }
    case 'staging': //staging
      return {
        baseURL: '',
        FACILITY_ID: 195,
        FULL_SEASON: '502',
        HALF_SEASON: '506',
        SIX_PACK: '507',
      }
    case 'live': //live
      return {
        baseURL: '',
        FACILITY_ID: 32,
        FULL_SEASON: '80',
        HALF_SEASON: '81',
        SIX_PACK: '82',
      }
  }
}
