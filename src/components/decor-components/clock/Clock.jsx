import NoteFilter from '../../NoteFilter'
import './Clock.css'
import ClockFakeBtns from './clock-details/ClockFakeBtns'
import ClockLegs from './clock-details/ClockLegs'
import ClockTop from './clock-details/ClockTop'

const Clock = ({ setModalActive, filter, setFilter }) => {
	return (
		<div>
			<div className="clock__body-container">
				<ClockTop />
				<div className="clock__body">
					<button
						onClick={() => setModalActive(true)}
						className="open-modal-btn"
					>
						Create a note
					</button>
					<div className="clock__sort">
						<NoteFilter filter={filter} setFilter={setFilter} />
						<ClockFakeBtns />
					</div>
				</div>
			</div>
			<ClockLegs />
		</div>
	)
}

export default Clock
