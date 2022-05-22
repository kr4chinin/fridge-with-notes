import React from 'react'

export default React.memo(function ClockFakeBtns() {
	return (
		<div className="fake-btns">
			<div className="fake-btns-container">
				<div className="fake-btn red" />
				<div className="fake-btn green" />
				<div className="fake-btn yellow" />
			</div>
			<div className="fake-decoration">
				<div className="line" />
			</div>
		</div>
	)
})
