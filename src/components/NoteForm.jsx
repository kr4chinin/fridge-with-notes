import '../components/modal/styles/NoteModal.css'
import { useState } from 'react'
import { getCurrentDate } from '../helpers/getCurrentDate'

const NoteForm = ({ create }) => {
	const [note, setNote] = useState({ title: '', body: '' })

	const addNewNote = e => {
		e.preventDefault()
		const newNote = {
			...note,
			date: getCurrentDate()
		}
		create(newNote)
		setNote({ title: '', body: '' })
	}

	return (
		<form className="content-container">
			<input
				className="input-title"
				type="text"
				value={note.title}
				placeholder="Название"
				onChange={e => setNote({ ...note, title: e.target.value })}
			/>
			<textarea
				className="input-body"
				type="text"
				value={note.body}
				placeholder="Текст"
				onChange={e => setNote({ ...note, body: e.target.value })}
			/>
			<button className="btn-create-note" onClick={addNewNote}>
				Создать заметку
			</button>
		</form>
	)
}

export default NoteForm
