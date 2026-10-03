// Author: Daniel Otieno Odero - ICT Department, Delhi College
// Course: React Fundamentals - JSX and Components Assignment
// Task 7: Weekly Timetable

export default function WeeklyTimetable() {
  return (
    // A fragment <> </> groups elements without adding an extra <div>
    <>
      <h3>ICT Diploma · Week 6 timetable</h3>

      {/* JSX uses className instead of class, and every tag must close */}
      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>8:00 - 10:00</th>
            <th>10:30 - 12:30</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Web Design</td>
            <td>Visual Basic</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Java</td>
            <td>Computer Packages</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Systems Analysis</td>
            <td>Practical Lab</td>
          </tr>
        </tbody>
      </table>

      <p className="muted" style={{ fontSize: 13 }}>
        Lab 2 is on the first floor.
        <br />
        Bring your flash disk to every practical.
      </p>
    </>
  )
}
