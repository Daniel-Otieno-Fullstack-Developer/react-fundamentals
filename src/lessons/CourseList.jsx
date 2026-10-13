function CourseList() {
  const isLoggedIn = true;
  const courses = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Log in.</p>}

      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
