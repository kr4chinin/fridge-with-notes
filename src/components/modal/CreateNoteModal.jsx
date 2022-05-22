import './styles/CreateNoteModal.css'

const ChangeNoteModal = ({ isActive, setActive, children }) => {
	return (
		<div
			className={isActive ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}
		>
			<div
				className={isActive ? 'modal__content active' : 'modal__content'}
				onClick={e => e.stopPropagation()}
			>
				<div>{children}</div>
			</div>
		</div>
	)
}

export default ChangeNoteModal
