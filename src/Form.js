import React from 'react';
import './Form.css';

export default function Form (props) {
  return (
    <div className="Form">
      <form>
        <input className="Form-field"
          aria-label="Search"
          placeholder="I want to see..."
          type="search"
          name="query"
          autoFocus="autofocus"
          value={props.query}
          onChange={props.onChange}
        />
        <input className="Form-button"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}
