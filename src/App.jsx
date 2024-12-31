import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar styles
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container">
      <h1>Flight Schedule</h1>

      {/* Calendar Component */}
      <Calendar
        id="my-calendar"
        onChange={setSelectedDate} // Update selected date onChange
        value={selectedDate} // Set the current selected date
      />

      {/* Display Selected Date */}
      <p>Selected Date: {selectedDate.toDateString()}</p>

      {/* Button */}
      <button onClick={() => alert(`Date selected: ${selectedDate.toDateString()}`)}>
        Continue
      </button>
    </div>
  );
}

export default App
