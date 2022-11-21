//import React from 'react'
window.dataLayer = window.dataLayer || []

//Click Pass card and book pass
export function PassEventAnalytics(data) {
	const {card_data}=data
	window.dataLayer.push({
			'event':  'Pass Event',
			'ecommerce':  {
			'items': [{
				'item_id': card_data?.id,
				'item_name': card_data?.description,
				'price': card_data?.price,
				'item_brand': card_data?.event_category,
				'item_category': 'Games',
				'index': 0
			}],
			'currency': 'USD'
		}
		})
}
//Click single event card
export function SingleEventAnalytics(data) {
	
	window.dataLayer.push({
			'event':  data?.event_type,
			'ecommerce':  {
			'items': [{
				'item_id': 1,
				'item_name': data?.event_type,
				'price':' 0.00',
				'item_brand': 'Americans home games',
				'item_category': 'Games',
				'index': 1
			}],
			'currency': 'USD'
		}
		})
}
//Book single event
export function BookSingleEventAnalytics(data) {
	const {card_data}=data
	window.dataLayer.push({
			'event':  'Single Event',
			'ecommerce':  {
			'items': [{
				'item_id': card_data?.id,
				'item_name': 'Single Event',
				'price':card_data?.event_rate,
				'item_brand': 'Americans home games',
				'item_category': 'Games',
				'index': 4
			}],
			'currency': 'USD'
		}
		})
}
//Apply coupon code
export function ApplyCouponAnalytics(data) {	
	const user_ip = localStorage.getItem('user_ip')	
	window.dataLayer.push({
		'event':  'view_promotion',
		'ecommerce':  {
			'items': [{
			'promotion_id': data?.event_id,
			'promotion_name': data?.promocode,
			'creative_slot': data?.promocode,
			'location_id': user_ip
			}]
		}
		})
}

//Payment book
export function BookPaymentAnalytics(data,eventType) { 
	try {
	let eventArray=[]	
	if(eventType=='event'){
		eventArray.push(data?.mapco_qrcode[0]?.event)  
	}else{
		eventArray = data?.mapco_qrcode[0]?.event_category?.event_category_event.map((item) => item?.event ? item?.event : [])
    }
	
	const itemArray=[]
	const saveArray=[]
	
	eventArray?.length > 0 ? eventArray?.map((event, key)=>{		
		itemArray.push({
			'item_id': event?.id,
			'item_name':event?.slug,
			'price': event?.event_rate,
			'quantity': 1,
			'item_brand': event?.title,
			'item_category': 'Games',
			'item_variant': event?.title,
			'index': key
			
			})
	}):[]
	
	const eventCount=itemArray?.length

	window.dataLayer.push({
		'event':  'purchase',
		'ecommerce':  {
		'transaction_id': data?.anet_transaction_id ? data?.anet_transaction_id : data?.ticketech_code,
		'currency': 'USD',
		'tax': data?.processing_fee,
		'shipping': eventCount,
		'value': data?.total,
		'items': itemArray
	}
	})
	console.log('saveArray',saveArray)
	} catch (e) {
		console.log('saveArray',e)
		}
}



 