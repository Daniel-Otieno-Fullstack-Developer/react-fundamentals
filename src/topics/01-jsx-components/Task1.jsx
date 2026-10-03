// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 1: Hello, Delhi College

// A component is a JavaScript function that returns JSX.
// Its name must start with a capital letter.
export default function HelloCollege() {
  return (
    // JSX must have ONE parent element - this <div> wraps everything
    <div>
      <h2>Hello, Delhi College!</h2>
      <p>Welcome to React Fundamentals. This is my very first component.</p>
      <p className="muted">ICT Department · Eastleigh, Nairobi</p>
    </div>
  )
}
