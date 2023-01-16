export const getItem = (key: string) => {
	try {
		return JSON.parse(localStorage.getItem(key) || '')
	} catch (e) {
		console.log('Error getting data from localStorage', e)
		return null
	}
}

export const setItem = (key: string, value: (string | Object)) => {
	try {
		localStorage.setItem(key, JSON.stringify(value))
	} catch (e) {
		console.error('Error saving data in localStorage', e)
	}
}