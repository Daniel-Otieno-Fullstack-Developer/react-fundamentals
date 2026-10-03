// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 4: Matatu Route Board

// A style object: property names are camelCase and values are strings
// (or numbers, which React treats as pixels).
const routeNumberStyle = {
  width: 72,
  height: 72,
  borderRadius: '50%',
  backgroundColor: '#c9a227',
  color: '#0f2344',
  fontSize: 30,
  fontWeight: 'bold',
  display: 'grid',
  placeItems: 'center',
}

export default function MatatuRouteBoard() {
  return (
    <div
      className="card"
      style={{ backgroundColor: '#0f2344', color: 'white', maxWidth: 400 }}
    >
      <div className="row" style={{ gap: 16 }}>
        <div style={routeNumberStyle}>46</div>
        <div>
          <p style={{ margin: 0, color: '#c9a227', fontSize: 12 }}>ROUTE</p>
          <h3 style={{ color: 'white', margin: 0 }}>Eastleigh → Kencom</h3>
        </div>
      </div>
      <p>
        Fare: <strong>KES 80</strong> · Peak hours: <strong>KES 100</strong>
      </p>
      <p style={{ fontSize: 13, opacity: 0.75, marginBottom: 0 }}>
        Stage: First Avenue, opposite Delhi College
      </p>
    </div>
  )
}
