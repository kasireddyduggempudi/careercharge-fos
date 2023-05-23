import Courses from "../../components/courses/Courses";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './CoursesView.css';

function CoursesView() {
    return (
        <>
            <Header />
            <div className="coursesContainer">
                <Courses />
            </div>
            <Footer />
        </>
    );
}

export default CoursesView;