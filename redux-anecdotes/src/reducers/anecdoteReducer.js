const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id;
      const anecdoteToVote = state.find((anecdote) => anecdote.id === id);
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : votedAnecdote
      );
    case 'NEW_ANECDOTE':
      return [...state, action.data];

    case 'INIT_ANECDOTES':
      return action.data;

    default:
      return state;
  }
};

export const createAnecdote = (anecdote) => {
  return { type: 'NEW_ANECDOTE', data: asObject(anecdote) };
};

export const voteAnecdote = (id) => {
  return { type: 'VOTE', data: { id } };
};

export const initializeAnecdotes = (anecdotes) => {
  return { type: 'INIT_ANECDOTES', data: anecdotes };
};

export default anecdoteReducer;
