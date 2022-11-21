
export const EMPTY_ARRAY = Object.freeze([])
export const EMPTY_OBJECT = Object.freeze({})

export const formId = 'ipg_form'

export const CURRENCY = {
	usd: 'USD',
	euro: 'EURO',
	inr: 'INR'
}

export const STATUS = {
	active: 'Active',
	inactive: 'Inactive'
}

export const EVENT_TYPES = {
	EVENT: 'event',
	BUNDLE_PASS: 'bundle-pass',
	PARTY_PASS: 'party-pass',
	SIMPLE: 'simple-pass'
}

export const EVENT_TYPES_VALUES = {
	EVENT: 'Single Event',
	BUNDLE_PASS: 'Full Season',
	PARTY_PASS: 'Half Season',
	SIMPLE: '6 Pack'
}


export const EVENT_TYPES_VALUES_LOGS = {
	EVENT: 'SINGLE EVENT',
	BUNDLE_PASS: 'FULL SEASON',
	PARTY_PASS: 'HALF SEASON',
	SIMPLE: '6 PACK'
}

export const DEFAULT_EVENT_RATE = '0.00'
export const DEFAULT_IMAGE = 'blank-image'



export const MONTH_NAMES = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]
export const DAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]
export const EXPIRY_MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
export const EXPIRY_YEARS = [
	{
		val: '22',
		label: '2022'
	},
	{
		val: '23',
		label: '2023'
	},
	{
		val: '24',
		label: '2024'
	},
	{
		val: '25',
		label: '2025'
	},
	{
		val: '26',
		label: '2026'
	},
	{
		val: '27',
		label: '2027'
	},
	{
		val: '28',
		label: '2028'
	},
	{
		val: '29',
		label: '2029'
	},
	{
		val: '30',
		label: '2030'
	},
	{
		val: '31',
		label: '2031'
	},
	{
		val: '32',
		label: '2032'
	},
	{
		val: '33',
		label: '2033'
	},
	{
		val: '34',
		label: '2034'
	},
	{
		val: '35',
		label: '2035'
	},
	{
		val: '36',
		label: '2036'
	},
	{
		val: '37',
		label: '2037'
	},
	{
		val: '38',
		label: '2038'
	},
	{
		val: '39',
		label: '2039'
	},
	{
		val: '40',
		label: '2040'
	},
	{
		val: '41',
		label: '2041'
	},
	{
		val: '42',
		label: '2042'
	},
	{
		val: '43',
		label: '2043'
	},
	{
		val: '44',
		label: '2044'
	},
	{
		val: '45',
		label: '2045'
	},
	{
		val: '46',
		label: '2046'
	},
	{
		val: '47',
		label: '2047'
	},
	{
		val: '48',
		label: '2048'
	},
	{
		val: '49',
		label: '2049'
	},
	{
		val: '50',
		label: '2050'
	}


]

export const MONTHNAME = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
export const MONTHNAMESMALL = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]
export const WEEKDAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

export const CARDTYPES =
{
	VS: 'VS',
	MC: 'MC'
}


export const signupPayload = {
	'firstname': '',
	'lastname': '',
	'email': '',
	'phone': '',
	'address1': '',
	'address2': '',
	'city': '',
	'state': '',
	'zipcode': '',
	'password': '',
	'cpassword': '',
}

export const vehicleArray = [{ 'license_plate': '', 'make_model': '' }]
export const vehicleTableHeader = ['License Plate', 'Make / Modal', 'Status', 'Action']
export const bookingTableHeader = ['Ticket Number', 'License Plate ', 'Check-in Date & Time', 'Amount', 'Vehicle', 'Action']

export const validPassword = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')

export const userProfilePayload = {
	'email': '',
	'phone': '',
	'license_number': '',
	'address': '',
	'address2': '',
	'city': '',
	'state': '',
	'zipcode': ''
}
export const validEmail = new RegExp('/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/')
export const validLicenceNumber = new RegExp('^(?=.*[0-9]).{7,13}$')
