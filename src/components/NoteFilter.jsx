import '../styles/App.css'

const NoteFilter = ({ filter, setFilter }) => {
	return (
		<div className="sort-container">
			<input
				className="search-sort"
				placeholder="Search..."
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>
			<select
				className="select-sort"
				onChange={e => setFilter({ ...filter, sort: e.target.value })}
			>
				<option value="default">Sort by</option>
				<option value="title">Title</option>
				<option value="body">Content</option>
			</select>
		</div>
	)
}

export default NoteFilter
