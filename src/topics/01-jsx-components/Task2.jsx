// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 2: Student ID Card

// Ordinary JavaScript values, shown in the JSX with curly braces { }
const studentName = 'Amina Wanjiru'
const admissionNumber = 'DC/ICT/2026/014'
const course = 'IBM Full Stack Software Developer'
const intakeYear = 2026

// "Amina Wanjiru" -> "AW"
const initials = studentName
  .split(' ')
  .map((word) => word[0])
  .join('')

export default function StudentIdCard() {
  return (
    <div className="card" style={{ maxWidth: 380, borderTop: '6px solid #0f2344' }}>
      <p className="badge gold">DELHI COLLEGE · STUDENT ID</p>
      <div className="row" style={{ marginTop: 12, gap: 14 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: '#0f2344',
            color: '#c9a227',
            display: 'grid',
            placeItems: 'center',
            fontSize: 24,
          }}
        >
          {initials}
        </div>
        <div>
          <h3 style={{ margin: 0 }}>{studentName}</h3>
          <p style={{ margin: 0 }}>Adm. No: {admissionNumber}</p>
        </div>
      </div>
      <p>Course: {course}</p>
      <p className="muted">Valid until December {intakeYear + 1}</p>
    </div>
  )
}
