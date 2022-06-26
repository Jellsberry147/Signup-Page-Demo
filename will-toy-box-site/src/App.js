import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Will's Toy Box</header>
      <div className="intro">
        He'll give you the heebie-jeebies at a great price! I call that, service
        with a smile! uwu
      </div>
      <div className="contact">
        Get ahold of me at 555-555-5555... 555... 5 or check me out on the
        socials!
      </div>
      <footer>
        <p>Copyright © {new Date().getFullYear()} Smacky Inc.</p>
      </footer>
    </div>
  );
}

export default App;
