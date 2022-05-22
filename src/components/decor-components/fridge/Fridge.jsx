import './Fridge.css'
import NoteList from '../../NoteList'
import FridgeTop from './fridge-details/FridgeTop'
import FridgeLegs from './fridge-details/FridgeLegs'
import BigHandle from './fridge-details/BigHandle'

const Fridge = ({ notes, removeNote, setModalActive, returnId }) => {
	return (
		<div>
			<div className="fridge__body">
				<FridgeTop />
				<div className="fridge__body-container">
					<BigHandle />
					<div className="notes-container">
						<NoteList
							notes={notes}
							remove={removeNote}
							setModalActive={setModalActive}
							returnId={returnId}
						/>
					</div>
				</div>
			</div>
			<FridgeLegs />
		</div>
	)
}

export default Fridge
