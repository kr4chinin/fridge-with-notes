import { useMemo } from 'react'

const useSortedNotes = (notes, sort) => {
	const sortedNotes = useMemo(() => {
		return sort && sort !== 'default'
			? [...notes].sort((a, b) => a[sort].localeCompare(b[sort]))
			: notes
	}, [sort, notes])

	return sortedNotes
}

export const useNotes = (notes, sort, query) => {
	const sortedNotes = useSortedNotes(notes, sort)
	const sortedAndSearchedNotes = useMemo(() => {
		return [
			...sortedNotes.filter(note =>
				note.title.toLowerCase().includes(query.toLowerCase())
			)
		]
	}, [query, sortedNotes])

	return sortedAndSearchedNotes
}
