import logo from './logo.svg';
import './App.css';
import CommentBox from './components/CommentBox';
import CommentList from './components/commentList';
function App() {
  return (
    <div className="App">
      <CommentBox />
      <CommentList/>
    </div>
  );
}

export default App;
