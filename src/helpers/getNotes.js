export const getNotes = () => {
	let values = []
	let noteParams = []

	let keysArray = Object.keys(localStorage).filter(
		el => el.length === 5 && /\$\d{4}$/.test(el)
	)

	let i = keysArray.length

	while (i--) {
		values.push({
			key: keysArray[i],
			value: JSON.parse(localStorage.getItem(keysArray[i]))
		})
	}

	values.map(note =>
		noteParams.push({
			id: note.key,
			title: note.value.title,
			body: note.value.body,
			date: note.value.date,
			isCompleted: note.value.isCompleted
		})
	)

	return noteParams
}
