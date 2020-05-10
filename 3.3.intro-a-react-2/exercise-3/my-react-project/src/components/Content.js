import React from 'react';

const Content = props => {
  const contentContent = (
    <main className="App-main">
      <p className="App-main-content">{props.content}</p>
    </main>
  );
  return contentContent;
};

export default Content;
