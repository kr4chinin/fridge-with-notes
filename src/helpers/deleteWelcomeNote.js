import { getCurrentDate } from './getCurrentDate'

export const DeleteWelcomeNote = () => {
	if (!JSON.parse(localStorage.getItem('fridge-auth'))) {
		localStorage.setItem(
			'$0000',
			JSON.stringify({
				title: 'Welcome to Note app!',
				body: "Consider that all data is stored in your browser's local storage!",
				date: getCurrentDate(),
				isCompleted: false
			})
		)
	}
}
