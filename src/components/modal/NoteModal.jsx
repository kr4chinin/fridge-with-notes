import './styles/NoteModal.css'

const CreateNoteModal = ({ isActive, setActive, children }) => {
	return (
		<div
			className={isActive ? 'note-modal active' : 'note-modal'}
			onClick={() => setActive(false)}
		>
			<div
				className={
					isActive ? 'note-modal__content active' : 'note-modal__content'
				}
				onClick={e => e.stopPropagation()}
			>
				<div>{children}</div>
			</div>
		</div>
	)
}

export default CreateNoteModal
