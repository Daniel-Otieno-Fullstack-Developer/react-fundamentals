// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 8: Staff Profile Page

const yearJoined = 2024
const currentYear = 2026

function ProfileHeader() {
  return (
    <div className="row" style={{ gap: 14 }}>
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 12,
          background: '#0f2344',
          color: '#c9a227',
          display: 'grid',
          placeItems: 'center',
          fontSize: 22,
        }}
      >
        DO
      </div>
      <div>
        <h3 style={{ margin: 0 }}>Daniel Otieno Odero</h3>
        <p className="muted" style={{ margin: 0 }}>ICT Coordinator</p>
      </div>
    </div>
  )
}

function CoursesTaught() {
  return (
    <div>
      <h4 style={{ marginBottom: 4 }}>Courses I teach</h4>
      <ul style={{ marginTop: 0 }}>
        <li>IBM Full Stack Software Developer</li>
        <li>KNEC Diploma in ICT</li>
        <li>Web Design and AI Web Development</li>
      </ul>
    </div>
  )
}

function OfficeHours() {
  return (
    <p className="notice">
      Office hours: Monday to Friday, 2:00 - 4:00 pm in the ICT office.
    </p>
  )
}

export default function StaffProfilePage() {
  return (
    <div className="card">
      <ProfileHeader />
      <CoursesTaught />
      <OfficeHours />
      <p className="muted" style={{ marginBottom: 0 }}>
        At Delhi College for {currentYear - yearJoined} years
      </p>
    </div>
  )
}
