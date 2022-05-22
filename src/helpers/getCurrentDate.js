export const getCurrentDate = () => {
	return `${new Date().toISOString().slice(0, 10)} ${new Date()
		.toLocaleTimeString()
		.slice(0, 5)}`
}
