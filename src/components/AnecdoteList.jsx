import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes);
    const filter = useSelector(state => state.filter || '');
    
    console.log('Anecdotes from store:', anecdotes); // 调试日志
    
    const dispatch = useDispatch();
    
    // 确保 anecdotes 是数组再进行操作
    const sortedAndFilteredAnecdotes = anecdotes && anecdotes.length 
        ? [...anecdotes]
            .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
            .sort((a, b) => b.votes - a.votes)
        : [];
    
    console.log('Filtered anecdotes:', sortedAndFilteredAnecdotes); // 调试日志

    if (!anecdotes || anecdotes.length === 0) {
        return <div>No anecdotes available</div>;
    }

    return (
        <div>
            {sortedAndFilteredAnecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnecdoteList;