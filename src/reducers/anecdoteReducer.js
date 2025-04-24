const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

//处理 VOTE action，更新对应轶事的投票数。
const anecdoteReducer = (state = initialState, action) => {

  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      return state.map(anecdote => {
        if (anecdote.id === action.payload) {
          return { ...anecdote, votes: anecdote.votes + 1 };
        }
        return anecdote;
      });

    case 'CREATE': // 恢复 CREATE 的处理逻辑
      return [...state, action.payload];


    default:
      return state;
  }
}

//定义 action type

//创建一个 action creator 函数来生成投票的 action 对象。
export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    payload: id
  };
};

//创建一个同步 action creator 函数来生成创建新轶事的 action 对象。
export const createAnecdote = (content) => {
  return {
    type: 'CREATE',
    payload: {
      content,
      id: getId(),
      votes: 0
    }
  };
};

export default anecdoteReducer