import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';
import { Row, Container, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/aboutus/AboutUs';
import CourseCard from './components/coursecard/CourseCard';
import Courses from './components/courses/Courses';
import Footer from './components/footer/Footer';
import NotFoundView from './views/404';
import ListBlogsView from './views/blog/ListBlogsView';

function App() {
  return (
    // <div>
    //   <Header />
    //   <HomePage />
    //   <AboutUs />
    //   <Courses />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePageView />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/blog' element={<ListBlogsView />}></Route>
        <Route path='*' element={<NotFoundView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePageView(){
    return (
    <div>
      <Header />
      <HomePage />
      <AboutUs />
      <Courses />
      <Footer />
    </div>
    )
}

export default App;
