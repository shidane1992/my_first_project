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
import UserList from "./components/UserList";
import NameForm from "./components/NameForm";
function App() {
  return (
    <>
      <Clicker />
      <ThemeToggle />
      <UserList />
      <NameForm />
      <Header />
      <Dashboard isLoggedIn={true} />
      <Inputer />
      <Greeting name="Abdinasir " surname="shidane" />
      <WelcomeMessage isLoggedIn={true} />
      <Notification hasNewMessages={true} />;
      <Tiriye />
    </>
  );
}

export default App;
