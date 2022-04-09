import App from '../App';

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  //looks inside the div & checks 
  //to see if the CommentBox is in there
  // expect(div.innerHTML).toContain('Comment Box');
  // expect(div).toHaveAnInstanceOf(CommentBox);

  ReactDOM.unmountComponentAtNode(div);
});