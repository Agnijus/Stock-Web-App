import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Overview from "./components/Overview";

function App() {
  return (
    <main className="app">
      <Sidebar />
      <div className="right-side">
        <TopBar />
        <Overview />
      </div>
    </main>
  );
}

export default App;
