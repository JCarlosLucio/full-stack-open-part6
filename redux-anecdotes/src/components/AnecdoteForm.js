import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.createAnecdote(content);
    props.setNotification(`you added '${content}'`, 5);
  };

  return (
    <React.Fragment>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" type="text" />
        </div>
        <button type="submit">create</button>
      </form>
    </React.Fragment>
  );
};

export default connect(null, { createAnecdote, setNotification })(AnecdoteForm);
