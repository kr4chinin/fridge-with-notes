import './styles/Note.css'
import '../../helpers/getCurrentDate'
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Note = ({ note, remove, setModalActive, returnId }) => {
	const [isCompletedState, setIsCompletedState] = useState(false)

	const handleCheck = () => {
		setIsCompletedState(true)
		localStorage.setItem(
			note.id,
			JSON.stringify({
				title: note.title,
				body: note.body,
				date: note.date,
				isCompleted: true
			})
		)
	}

	const isCompleted = note.isCompleted || isCompletedState

	const handleOpenNoteModal = () => {
		if (!isCompleted) setModalActive(true)
		returnId(note.id)
	}

	return (
		<div
			className={
				isCompleted ? 'note completed' : 'note'
			}
		>
			<div className="note__title">
				<h1
					className={
						isCompleted
							? 'note__title-h1 completed'
							: 'note__title-h1'
					}
					onClick={handleOpenNoteModal}
				>
					{note.title}
				</h1>
				<div className="note-btns">
					<button
						className={
							isCompleted
								? 'note-btn--complete completed'
								: 'note-btn--complete'
						}
						onClick={handleCheck}
					>
						<FontAwesomeIcon icon={faCheck} />
					</button>
					<button className="note-btn--delete" onClick={() => remove(note.id)}>
						<FontAwesomeIcon icon={faTrashCan} />
					</button>
				</div>
			</div>
			<div
				className={
					isCompleted
						? 'note__body completed'
						: 'note__body'
				}
				onClick={handleOpenNoteModal}
			>
				{note.body}
			</div>
			<div
				className={
					isCompleted
						? 'note__date completed'
						: 'note__date'
				}
			>
				{note.date}
			</div>
		</div>
	)
}

export default Note
