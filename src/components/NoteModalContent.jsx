import '../components/modal/styles/NoteModal.css'

const NoteModalContent = ({ id }) => {
	function getNoteContent(id) {
		if (id) {
			return JSON.parse(localStorage.getItem(id))
		}
	}

	const note = getNoteContent(id)

	if (note) {
		return (
			<>
				<div className="note-modal__title">
					<h1 className="note-modal__title-h1">{note.title}</h1>
				</div>
				<div className="note-modal__body">{note.body}</div>
				<div>{note.date}</div>
			</>
		)
	}
}

export default NoteModalContent
