// 根组件

const songs = [
  { id: 1, name: '庐州月' },
  { id: 2, name: '庐州' },
  { id: 3, name: '庐' },
  { id: 4, name: '月' },
]

const flag = true

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
      {flag && <a href="#">好好好</a>}
    </div>
  );
}

export default App;
