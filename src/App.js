import './styles/App.css'
import React, { useEffect, useState } from 'react'
import { useNotes } from './hooks/useNotes'
import { getNotes } from './helpers/getNotes'
import { getId } from './helpers/getId'
import CreateNoteModal from './components/modal/CreateNoteModal'
import NoteForm from './components/NoteForm'
import Clock from './components/decor-components/clock/Clock'
import Fridge from './components/decor-components/fridge/Fridge'
import NoteModal from './components/modal/NoteModal'
import NoteModalContent from './components/NoteModalContent'
import { DeleteWelcomeNote } from './helpers/deleteWelcomeNote'

function App() {
	useEffect(() => {
		localStorage.setItem('fridge-auth', 'false')
	})

	DeleteWelcomeNote()

	const [notes, setNotes] = useState(() => getNotes())

	useEffect(() => {
		localStorage.setItem('fridge-auth', 'true')
		localStorage.removeItem('$0000')
	}, [notes])

	const [modalActive, setModalActive] = useState(false)
	const [noteModalActive, setNoteModalActive] = useState(false)
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [id, setId] = useState('')

	const sortedAndSearchedNotes = useNotes(notes, filter.sort, filter.query)

	const returnId = id => {
		setId(id)
	}

	const createNote = newNote => {
		newNote.id = getId()
		localStorage.setItem(
			newNote.id,
			JSON.stringify({
				title: newNote.title,
				body: newNote.body,
				date: newNote.date,
				isCompleted: false
			})
		)
		setNotes([newNote, ...notes])
		setModalActive(false)
	}

	const removeNote = id => {
		localStorage.removeItem(id)
		setNotes(notes.filter(note => note.id !== id))
	}

	return (
		<div className="App">
			<div className="global-container">
				<CreateNoteModal isActive={modalActive} setActive={setModalActive}>
					<NoteForm create={createNote} />
				</CreateNoteModal>
				<NoteModal isActive={noteModalActive} setActive={setNoteModalActive}>
					<NoteModalContent id={id} setNoteModalActive={setNoteModalActive} />
				</NoteModal>
				<Clock
					setModalActive={setModalActive}
					filter={filter}
					setFilter={setFilter}
				/>
				<Fridge
					notes={sortedAndSearchedNotes}
					removeNote={removeNote}
					setModalActive={setNoteModalActive}
					returnId={returnId}
				/>
			</div>
		</div>
	)
}

export default App
