// 根组件
import './Jsx.css';

const songs = [
  { id: 1, name: '庐州月' },
  { id: 2, name: '庐州' },
  { id: 3, name: '庐' },
  { id: 4, name: '月' },
]

const flag = true
const styleObj = {
  color: 'blue'
}
const showGreen = true

function App() {
  return (
    <div className="App">
      <h2>hello world</h2>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
      <h3>{flag ? 'vue好玩' : 'react好玩'}</h3>
      {flag ? <a href="#">好好好</a> : null}

      <h2 style={{ color: 'red' }}>红色字体</h2>
      <h2 style={styleObj}>蓝色字体</h2>
      <h2 className={showGreen ? 'green' : ''}>绿色标题</h2>
    </div>
  );
}

export default App;
