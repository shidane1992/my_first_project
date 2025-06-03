import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeSwitcher";
import Clicker from "./components/Clicker";
import Dashboard from "./components/Dashboard";
import  Inputer from "./components/Inputer";
import { Tiriye } from "./components/Counter";
import WelcomeMessage from "./components/WelcomeMessage";
import Notification from "./components/Notification";
function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Dashboard isLoggedIn={true} />
      <Inputer />
      <Greeting name="Abdinasir " surname="shidane" />
      <Clicker />
      <WelcomeMessage isLoggedIn={true} />
      <Notification hasNewMessages={true}/>;
      <Tiriye />
    </>
  );
}

export default App;
