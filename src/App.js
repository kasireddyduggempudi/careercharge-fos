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
import Testing from './views/testing';
import Blog from './views/blog/Blog';
import CreateEditBlog from './components/admin/CreateEditBlog';
import AdminListBlogsView from './views/admin/AdminListBlogsView';
import CreateBlogView from './views/admin/CreateBlogView';
import EditBlogView from './views/admin/EditBlogView';

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
        <Route path='/blogs' element={<ListBlogsView />}></Route>
        <Route path='/admin/blogs' element={<AdminListBlogsView />}></Route>
        <Route path='/admin/blogs/create' element={<CreateBlogView />}></Route>
        <Route path='/admin/blogs/:blogId/edit' element={<EditBlogView />}></Route>
        <Route path='/blogs/:blogId' element={<Blog />}></Route>
        <Route path='/testing' element={<Testing />}></Route>
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
