import Welcome from "./Welcome.jsx";
import UsingWelcome from "./UsingWelcome.jsx";
import Course from "./Course.jsx";
import DisplayData from "./DisplayData.jsx";
import StudentDetails from "./StudentDetails.jsx";
import ClassList from "./ClassList.jsx";
import Counter from "./Counter.jsx";
import NameForm from "./NameForm.jsx";
import CourseList from "./CourseList.jsx";

function AllLessons() {
  return (
    <main style={{ padding: "20px" }}>
      <Welcome />
      <UsingWelcome />
      <hr />
      <Course />
      <hr />
      <DisplayData />
      <StudentDetails />
      <hr />
      <ClassList />
      <hr />
      <Counter />
      <hr />
      <NameForm />
      <hr />
      <CourseList />
    </main>
  );
}

export default AllLessons;
