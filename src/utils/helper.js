import pickBy from 'lodash/pickBy'
import { STORAGE_KEY } from '../constants'
import {
  DAYS,
  EVENT_TYPES,
  EVENT_TYPES_VALUES,
  EVENT_TYPES_VALUES_LOGS,
  MONTHNAME,
  MONTH_NAMES,
} from '../constants/globalConstants'
import moment from 'moment'
import CryptoJS from 'crypto-js'
import { getConfigDetails } from '../services/config'
import Resizer from 'react-image-file-resizer'


let userAgent = navigator.userAgent || navigator.vendor
 const iOS = (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) || /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
 ? true:false
 
//   Sat Apr 01 2023 17:05:00 GMT+0530 (India Standard Time)
export const formatDate = (date) => {
  let date_final
  if (iOS) {
    let arr = date.split(/[- :]/)
    const newDate = new Date(
      arr[0],
      arr[1] - 1,
      arr[2],
      arr[3],
      arr[4],
      arr[5]
    )
    date_final = MONTH_NAMES[newDate.getMonth()] + ' ' + newDate.getDate()
  } else {
    let format_date = new Date(date)
    date_final =
      MONTH_NAMES[format_date.getMonth()] + ' ' + format_date.getDate()
  }
  return date_final
}

export const formatDateDays = (date) => {
  let date_final
  if (iOS) {
    let arr = date.split(/[- :]/)
    const newDate = new Date(
      arr[0],
      arr[1] - 1,
      arr[2],
      arr[3],
      arr[4],
      arr[5]
    )
    date_final = DAYS[newDate.getDay()]
  } else {
    let format_date = new Date(date)
    date_final = DAYS[format_date.getDay()]
  }
  return date_final
}

export const formatAMPM = (date) => {
  let strTime
  if (iOS) {
    let arr = date.split(/[- :]/)
    const newDate = new Date(
      arr[0],
      arr[1] - 1,
      arr[2],
      arr[3],
      arr[4],
      arr[5]
    )
    let hours = newDate.getHours()
    let minutes = newDate.getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes ? (minutes < 10 ? '0' + minutes : minutes) : '00'
    strTime = hours + ':' + minutes + ' ' + ampm
  } else {
    let hours = new Date(date).getHours()
    let minutes = new Date(date).getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes ? (minutes < 10 ? '0' + minutes : minutes) : '00'
    strTime = hours + ':' + minutes + ' ' + ampm
  }
  return strTime
}

export const dateFormatter = (date, format) => moment(date).format(format)
// export const dateFormatterMonth = (date, format) => moment(date).format(format)

export function formatMonthYear(date) {
  let date_final
  if (iOS) {
	let arr = date.split(/[- :]/)
    const newDate = new Date(
      arr[0],
      arr[1] - 1,
      arr[2],
      arr[3],
      arr[4],
      arr[5]
    )
    date_final =
      MONTHNAME[newDate.getMonth()] + ' ' + newDate.getFullYear()
  } else {
    let format_date = new Date(date)
    date_final =
      MONTHNAME[format_date.getMonth()] + ' ' + format_date.getFullYear()
  }

  return date_final
}



export const getEventType = (event) => {
  switch (event) {
    case EVENT_TYPES.EVENT:
      return EVENT_TYPES_VALUES.EVENT
    case EVENT_TYPES.BUNDLE_PASS:
      return EVENT_TYPES_VALUES.BUNDLE_PASS
    case EVENT_TYPES.PARTY_PASS:
      return EVENT_TYPES_VALUES.PARTY_PASS
    case EVENT_TYPES.SIMPLE:
      return EVENT_TYPES_VALUES.SIMPLE
    default:
      return EVENT_TYPES_VALUES.EVENT
  }
}
// export const getEventTypeById = (event_id, log) => {
//   switch (event_id) {
//     case `${getConfigDetails().FULL_SEASON}`:
//       return log ? EVENT_TYPES_VALUES_LOGS.BUNDLE_PASS : EVENT_TYPES_VALUES.BUNDLE_PASS
//     case `${getConfigDetails().HALF_SEASON}`:
//       return  log ? EVENT_TYPES_VALUES_LOGS.PARTY_PASS : EVENT_TYPES_VALUES.PARTY_PASS
//     case `${getConfigDetails().SIX_PACK}`:
//       return log ? EVENT_TYPES_VALUES_LOGS.SIMPLE : EVENT_TYPES_VALUES.SIMPLE
//     default:
//       return log ? EVENT_TYPES_VALUES_LOGS.EVENT : EVENT_TYPES_VALUES.EVENT
//   }
// }

export const getEventTypeByPassType = (pass_type,is_full_season, log) => {
  // switch (event_id) {
   if(pass_type == EVENT_TYPES?.BUNDLE_PASS && is_full_season == 1){
      return log ? EVENT_TYPES_VALUES_LOGS.BUNDLE_PASS : EVENT_TYPES_VALUES.BUNDLE_PASS
   } else if(pass_type == EVENT_TYPES?.BUNDLE_PASS && is_full_season != 1){
      return  log ? EVENT_TYPES_VALUES_LOGS.PARTY_PASS : EVENT_TYPES_VALUES.PARTY_PASS
   } else if(pass_type == EVENT_TYPES?.PARTY_PASS){
      return log ? EVENT_TYPES_VALUES_LOGS.SIMPLE : EVENT_TYPES_VALUES.SIMPLE
   } else{
      return log ? EVENT_TYPES_VALUES_LOGS.EVENT : EVENT_TYPES_VALUES.EVENT
  }
}

export const getEventCount = (eventId) => {
  // const halfSeasonEvents = localStorage.getItem('userChooseEvents')
  const eventDetails = JSON.parse(localStorage.getItem(EVENT_TYPES?.EVENT))

  switch (eventId) {
    case getConfigDetails().HALF_SEASON:
      return eventDetails?.all_event?.length/2
    case getConfigDetails().FULL_SEASON:
      return eventDetails?.all_event?.length
    case getConfigDetails().SIX_PACK:
      return 6
    default:
      return 1
  }
}

export const getSanitizedValues = (values) =>
  pickBy(values, (value) => {
    const expression = !(
      value === 0 ||
      value === '' ||
      value === undefined ||
      value === null ||
      Number.isNaN(value) ||
      value?.length === 0
    )
    return expression
  })

const setLocalStorage = (userData) => {
  userData.map((data) => {
    localStorage.setItem(data.key, data.value)
  })
}

export const getLoginDetailFromSession = () =>
  localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN)

export const getBearerToken = () => localStorage.getItem(STORAGE_KEY.ID_TOKEN)

export const setLoginDetailInSession = (loggedInUserData) => {
  const userData = [
    {
      key: STORAGE_KEY.ACCESS_TOKEN,
      value: loggedInUserData?.AccessToken,
    },
    {
      key: STORAGE_KEY.REFRESH_TOKEN,
      value: loggedInUserData?.RefreshToken,
    },
    {
      key: STORAGE_KEY.ID_TOKEN,
      value: loggedInUserData?.IdToken,
    },
    {
      key: STORAGE_KEY.TOKEN_TYPE,
      value: loggedInUserData?.TokenType,
    },
  ]
  setLocalStorage(userData)
}

export function isLoggedIn() {
  return !!localStorage.getItem('accessToken')
}

export function isArrayWithLength(arr) {
  return Array.isArray(arr) && arr.length
}

export function getAllowedRoutes(routes) {
  const role = localStorage.getItem('userRole')
  return routes.filter(({ permission }) => {
    if (!permission) return true
    else if (!isArrayWithLength(permission)) return true
    else return permission.indexOf(role) !== -1
  })
}

export function classes() {
  return [...arguments].join(' ')
}

export const clearSessionDetails = () => {
  localStorage.clear()
}

export const restrictInputValues = (event) => {
  if (!`${event.target.value}${event.key}`.match(/^[0-9]{0,6}$/)) {
    // block the input if result does not match
    event.preventDefault()
    event.stopPropagation()
    return false
}
} 

export const getEventLogName = (pass_type, is_full_season) => `MAPCO - BOOK NOW - ${getEventTypeByPassType(pass_type, is_full_season, 'log')}`

	
export const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return pattern.test(email)
}

export const fileChangedHandler = (event, fileId, setUpdateFileState, fileWidth, fileHeight) => {
    let fileInput = false
    let file = document.getElementById(fileId).files[0]
    fileInput = file && (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/gif')
      if(fileInput) {
        try {
            Resizer.imageFileResizer(
                file,
                fileWidth,
                fileHeight,
                'PNG', // fileType(JPEG, PNG,WEBP)
                100,  // quality compression(for jpeg)
                0, // rotation(0-100)
                (uri) => {
                    new Promise((resolve, reject) => {
                        const img = new Image()
                        // the following handler will fire after a successful loading of the image
                        img.onload = () => {
                            const { naturalWidth: width, naturalHeight: height } = img
                            resolve({ width, height })
                            setUpdateFileState({[fileId] : uri})
                        }
                        // and this handler will fire if there was an error with the image (like if it's not really an image or a corrupted one)
                        img.onerror = () => {
                            reject('There was some problem with the image.')
                        }
                        img.src = URL.createObjectURL(uri)
                    })
                },
                'file' // outputType( base64, blob or file)
            )
        } catch (err) {
            setUpdateFileState({fileId : ''})
        }
      }else {
        setUpdateFileState({fileId : ''})
    }
}

export const encryptionHandler = (d) => {
  var nonceString = d.name_on_card + ':' + d.card_number + ':' + d.expiration_date + ':' + d.security_code + ':' + d.zip_code
  var CryptoJSAesJson = {
      stringify: function (cipherParams) {
          var j = {
              ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
              iv: '',
              s: ''
          }
          if (cipherParams.iv)
              j.iv = cipherParams.iv.toString()
          if (cipherParams.salt)
              j.s = cipherParams.salt.toString()
          return JSON.stringify(j)
      },
      parse: function (jsonStr) {
          var j = JSON.parse(jsonStr)
          var cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(j.ct) })
          if (j.iv)
              cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
          if (j.s)
              cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
          return cipherParams
      }
  }
  var encrypted = CryptoJS.AES.encrypt(JSON.stringify(nonceString), 'Tw5qNOJLe5GFe7rjFsentNNQBsRHstbNzTP/18lkjnY=', { format: CryptoJSAesJson }).toString()
  return encrypted
}