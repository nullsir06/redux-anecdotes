import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state); // 获取 Redux 状态
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes); // 按票数降序排序
    //Array.prototype.sort方法方法会依次取出数组中的两个元素，需要一个比较函数来明确指定排序逻辑。
    // 直接传递 -1 是无效的，因为它无法告诉 sort 如何比较数组中的元素。
    const dispatch = useDispatch();

    return (
        <div>
            {sortedAnecdotes.map(anecdote => // 使用排序后的数组
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnecdoteList;