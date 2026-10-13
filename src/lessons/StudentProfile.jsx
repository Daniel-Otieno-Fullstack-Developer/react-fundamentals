function StudentProfile({ name, course }) {
  return (
    <div className="profile">
      <h3>{name}</h3>
      <p>Studying: {course}</p>
    </div>
  );
}

export default StudentProfile;
