import { getPartnerDetails } from '../utils/helper'

export const getConfigDetails = () => {
  // switch ('demo') {
  // switch ('preStage') {
  switch ('staging') {
    // switch ('preprod') {
    // switch ('live') {
    case 'demo': //staging2
      return {
        baseURL: 'https://demo-api.parkengage.com/',
        adminUrl: 'https://demo-admin.parkengage.com',
        checkInUrl: 'https://demo-checkin.parkengage.com',
        transientURL: 'https://demo-transient.parkengage.com',
        portalURL: 'https://demo-customerportal.parkengage.com/navigating',
        FACILITY_ID: 1,
        FULL_SEASON: '502',
        HALF_SEASON: '506',
        SIX_PACK: '507',
        PARTNER_ID: getPartnerDetails()?.clients?.partner_id ? getPartnerDetails()?.clients?.partner_id : '356560',
        CLIENT_ID: getPartnerDetails()?.clients?.id ? getPartnerDetails()?.clients?.id : 'vikrant-tyagi356560',
        CLIENT_SECRET: getPartnerDetails()?.clients?.secret ? getPartnerDetails()?.clients?.secret : '9f3Blizhmt8qhkw62Y16qTJXa',

      }
    case 'preStage': //staging
      return {
        baseURL: 'https://pre-stage-api.parkengage.com/',
        checkInUrl: 'https://pre-stage-checkin.parkengage.com',
        adminUrl: 'https://pre-stage-admin.parkengage.com',
        transientURL: 'https://pre-stage-transient.parkengage.com',
        portalURL: 'https://pre-stage-customerportal.parkengage.com/navigating',
        FACILITY_ID: 195,
        FULL_SEASON: '502',
        HALF_SEASON: '506',
        SIX_PACK: '507',
        PARTNER_ID: getPartnerDetails()?.clients?.partner_id ? getPartnerDetails()?.clients?.partner_id : '356560',
        CLIENT_ID: getPartnerDetails()?.clients?.id ? getPartnerDetails()?.clients?.id : 'vikrant-tyagi356560',
        CLIENT_SECRET: getPartnerDetails()?.clients?.secret ? getPartnerDetails()?.clients?.secret : '9f3Blizhmt8qhkw62Y16qTJXa',

      }
    case 'staging': //staging
      return {
        baseURL: 'https://staging-api.parkengage.com/',
        adminUrl: 'https://staging-admin.parkengage.com',
        checkInUrl: 'https://staging-checkin.parkengage.com',
        transientURL: 'https://staging-transient.parkengage.com',
        portalURL: 'https://staging-customerportal.parkengage.com/navigating',
        FACILITY_ID: 195,
        FULL_SEASON: '502',
        HALF_SEASON: '506',
        SIX_PACK: '507',
        PARTNER_ID: getPartnerDetails()?.clients?.partner_id ? getPartnerDetails()?.clients?.partner_id : '356560',
        CLIENT_ID: getPartnerDetails()?.clients?.id ? getPartnerDetails()?.clients?.id : 'vikrant-tyagi356560',
        CLIENT_SECRET: getPartnerDetails()?.clients?.secret ? getPartnerDetails()?.clients?.secret : '9f3Blizhmt8qhkw62Y16qTJXa',

      }
    case 'preprod': //staging
      return {
        baseURL: 'https://preprod-api.parkengage.com/',
        adminUrl: 'https://preprod-admin.parkengage.com',
        checkInUrl: 'https://preprod-checkin.parkengage.com',
        transientURL: 'https://preprod-transient.parkengage.com',
        portalURL: 'https://preprod-customerportal.parkengage.com/navigating',
        FACILITY_ID: 195,
        FULL_SEASON: '502',
        HALF_SEASON: '506',
        SIX_PACK: '507',
        PARTNER_ID: getPartnerDetails()?.clients?.partner_id ? getPartnerDetails()?.clients?.partner_id : '3307',
        CLIENT_ID: getPartnerDetails()?.clients?.id ? getPartnerDetails()?.clients?.id : 'parking-payments3307',
        CLIENT_SECRET: getPartnerDetails()?.clients?.secret ? getPartnerDetails()?.clients?.secret : '8lNlwRoztlDAAbDxxBhtyGLbD',

      }
    case 'live': //live
      return {
        baseURL: 'https://api.parkengage.com/',
        adminUrl: 'https://partner.parkengage.com',
        checkInUrl: 'https://checkin.parkengage.com',
        transientURL: 'https://transient.parkengage.com',
        portalURL: 'https://customerportal.parkengage.com/navigating',
        FACILITY_ID: 32,
        FULL_SEASON: '80',
        HALF_SEASON: '81',
        SIX_PACK: '82',
        PARTNER_ID: getPartnerDetails()?.clients?.partner_id ? getPartnerDetails()?.clients?.partner_id : '3307',
        CLIENT_ID: getPartnerDetails()?.clients?.id ? getPartnerDetails()?.clients?.id : 'parking-payments3307',
        CLIENT_SECRET: getPartnerDetails()?.clients?.secret ? getPartnerDetails()?.clients?.secret : '8lNlwRoztlDAAbDxxBhtyGLbD',
      }
  }
}
