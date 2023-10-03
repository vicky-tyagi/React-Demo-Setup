
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

export const newpasswordValidation = (value) => {
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)
}


export const permission_Portal_obj = {
	'Main Menu': [
		{
			'id': 852,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Home',
			'display_name': 'Home',
			'description': null,
			'web': '/home',
			'type': '0',
			'parent_id': null,
			'list_order': '1',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 853,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'About',
			'display_name': 'About',
			'description': null,
			'web': '/about',
			'type': '0',
			'parent_id': null,
			'list_order': '2',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 855,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Events',
			'display_name': 'Events',
			'isDiv': 2,
			'subValues': [{
				'id': 1,
				'partner_id': '356560',
				'rm_id': null,
				'customer_permission_id': '6',
				'name': 'Action',
				'display_name': 'Action',
				'description': null,
				'web': '/action',
				'type': '0',
				'parent_id': null,
				'list_order': '4',
				'created_at': '2023-09-25 02:09:38',
				'updated_at': '2023-09-25 02:09:38',
				'is_default': '1',
			}, {
				'id': 2,
				'partner_id': '356560',
				'rm_id': null,
				'customer_permission_id': '6',
				'name': 'Another action',
				'display_name': 'Another action',
				'description': null,
				'web': '/another-action',
				'type': '0',
				'parent_id': null,
				'list_order': '4',
				'created_at': '2023-09-25 02:09:38',
				'updated_at': '2023-09-25 02:09:38',
				'is_default': '1',
			}, {
				'id': 3,
				'partner_id': '356560',
				'rm_id': null,
				'customer_permission_id': '6',
				'name': 'Something else here',
				'display_name': 'Something else here',
				'description': null,
				'web': '/something-else-here',
				'type': '0',
				'parent_id': null,
				'list_order': '4',
				'created_at': '2023-09-25 02:09:38',
				'updated_at': '2023-09-25 02:09:38',
				'is_default': '1',
			}],
			'description': null,
			'web': '/events',
			'type': '0',
			'parent_id': null,
			'list_order': '3',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 854,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Download Ticket',
			'display_name': 'Download Ticket',
			'description': null,
			'web': '/download-ticket',
			'type': '0',
			'parent_id': null,
			'list_order': '4',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 855,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Raise Concern',
			'display_name': 'Raise Concern',
			'description': null,
			'web': '/raise-concern',
			'type': '0',
			'parent_id': null,
			'list_order': '5',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 855,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Contact',
			'display_name': 'Contact',
			'description': null,
			'web': '/contact',
			'type': '0',
			'parent_id': null,
			'list_order': '6',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		}
	],
	'Access Permissions': [
		{
			'id': 862,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'display_reservation_widget',
			'display_name': 'Display Reservation Widget',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '1',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 863,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_login_access',
			'display_name': 'Login Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '2',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 864,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_signup_access',
			'display_name': 'Signup Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '3',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 865,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_account_access',
			'display_name': 'Account Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '4',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 866,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_profile_access',
			'display_name': 'Profile Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '5',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 867,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_receipt_login_access',
			'display_name': 'Receipt Login Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '6',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 868,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_receipt_signup_access',
			'display_name': 'Receipt Signup Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '7',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 869,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_receipt_account_access',
			'display_name': 'Receipt Account Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '8',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 870,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_receipt_profile_access',
			'display_name': 'Receipt Profile Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '9',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 871,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_customer_portal_access',
			'display_name': 'Customer Portal Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '10',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 872,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_e_ticket_portal_access',
			'display_name': 'e-ticket Portal Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '11',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 873,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'is_e_receipt_portal_access',
			'display_name': 'e-Receipt Portal Access',
			'description': null,
			'web': null,
			'type': '2',
			'parent_id': null,
			'list_order': '12',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		}
	],
	'Account Menu': [
		{
			'id': 856,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Permit Account',
			'display_name': 'Permit Account',
			'description': null,
			'web': '/permit-Account',
			'type': '1',
			'parent_id': null,
			'list_order': '5',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 857,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Pass List',
			'display_name': 'Pass List',
			'description': null,
			'web': '/pass-List',
			'type': '1',
			'parent_id': null,
			'list_order': '6',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 858,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Vehicle Details',
			'display_name': 'Vehicle Details',
			'description': null,
			'web': '/vehicle-List',
			'type': '1',
			'parent_id': null,
			'list_order': '8',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 859,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Payment Settings',
			'display_name': 'Payment Settings',
			'description': null,
			'web': '/payment-List',
			'type': '1',
			'parent_id': null,
			'list_order': '9',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 860,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Booking History',
			'display_name': 'Booking History',
			'description': null,
			'web': '/booking-History',
			'type': '1',
			'parent_id': null,
			'list_order': '10',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		},
		{
			'id': 861,
			'partner_id': '356560',
			'rm_id': null,
			'customer_permission_id': '6',
			'name': 'Receipts',
			'display_name': 'Receipts',
			'description': null,
			'web': '/Receipts',
			'type': '1',
			'parent_id': null,
			'list_order': '11',
			'created_at': '2023-09-25 02:09:38',
			'updated_at': '2023-09-25 02:09:38',
			'is_default': '1',
			'title': 'Demo Partner Customer Permissions'
		}
	]
}