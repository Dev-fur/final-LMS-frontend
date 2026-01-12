import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreationPage from "./pages/CreationPage";
import LoginPage from "./pages/LoginPage";
import MyBooks from "./components/students/MyBooks";
import BookSearch from "./components/students/BookSearch";
import Operation from "./components/staff/Operation";
import IssueReturn from "./components/staff/IssueReturn";
import OverdueList from "./components/staff/OverdueList";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/operaation" element={<Operation />} />
        <Route path="/students/my-books" element={<MyBooks />} />
        <Route path="/students/search" element={<BookSearch />} />
        <Route path="/issuereturn" element={<IssueReturn />} />
        <Route path="/Overduelist" element={<OverdueList />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
