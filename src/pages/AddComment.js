import React, { useState, useEffect } from 'react'
import CommentModel from '../models/comment'

const AddComment = (props) => {
    const [postId, setPostId] = useState(props.match.params.id)
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState(localStorage.getItem('id'))

    const handleSubmit = (e) => {
        e.preventDefault()
        CommentModel.create({
            postId,
            content,
            userId,
        }).then(data => {
            props.history.push('/')
        })
    }

    return (
        <div>
            Add Comment
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea
                        onChange={(e) => { setContent(e.target.value) }}
                        rows="5"
                        cols="40"
                        type="text"
                        id="content"
                        name="content"
                        value={content}
                    />
                </div>
                <button type="submit">Post Comment</button>
            </form>
        </div>
    )
}

export default AddComment