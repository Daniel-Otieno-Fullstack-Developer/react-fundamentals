// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 6: Campus Parts

// Small pieces of the college contact card, used by Task6.jsx.
// A file can have many NAMED exports but only ONE default export.

export function Logo() {
  return (
    <div className="row" style={{ gap: 10 }}>
      <span className="badge gold" style={{ fontSize: 16 }}>DC</span>
      <strong style={{ color: '#0f2344' }}>Delhi College</strong>
    </div>
  )
}

export function Address() {
  return (
    <p style={{ margin: '10px 0' }}>
      First Avenue, Eastleigh
      <br />
      P.O. Box 12345 - 00610, Nairobi
    </p>
  )
}

export default function ContactCard() {
  return (
    <div>
      <p style={{ margin: 0 }}>Phone: 0712 345 678</p>
      <p style={{ margin: 0 }}>Email: ict@delhicollege.co.ke</p>
    </div>
  )
}
