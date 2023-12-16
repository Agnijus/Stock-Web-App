import Overview from "./components/Overview";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <main className="app">
      <TopBar />
      <Sidebar />
      <Overview />
    </main>
  );
}

export default App;
