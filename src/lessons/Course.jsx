function Course() {
  const title = "Web Design";

  return (
    <div className="course">
      <h2>{title}</h2>
      <img src="/favicon.svg" alt="Logo" />
      <p>Total lessons: {4 + 8}</p>
    </div>
  );
}

export default Course;
