function StudentDetails() {
  const student = { name: "Amina", course: "Web Design" };
  const lessons = 12;

  return (
    <div>
      <h2>{student.name.toUpperCase()}</h2>
      <p>Course: {student.course}</p>
      <p>Lessons left: {lessons - 4}</p>
    </div>
  );
}

export default StudentDetails;
