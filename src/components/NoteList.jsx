import Note from './note/Note'
import '../styles/App.css'
import './note/styles/NotesAnimation.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const NoteList = ({ notes, remove, setModalActive, returnId }) => {
	return (
		<div>
			<TransitionGroup>
				{notes.map(note => (
					<CSSTransition key={note.id} timeout={600} classNames="note">
						<Note
							note={note}
							remove={remove}
							setModalActive={setModalActive}
							returnId={returnId}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default NoteList
