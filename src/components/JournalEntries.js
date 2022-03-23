import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './journal/JournalEntry';

export const JournalEntries = () => {

    const {notes}= useSelector(state=> state.notes)


  return (
    <div className='Journal__entries'>

        {
            notes.map(note=>(
                <JournalEntry key={note.id}
                {...note}
                />
            ))
        }

    </div>
  )
}
