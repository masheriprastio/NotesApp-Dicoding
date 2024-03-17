import React from 'react'

export default function DeleteButton({onDelete,id}) {
    return <button className='note-item__delete-button' onClick={() => onDelete(id)}><img src="images/delete-icon.png"></img> Delete</button>
}
