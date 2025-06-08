```javascript
import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      {/* Existing content of the activity card */}

      {/* Participants Section */}
      <div className="participants-section" style={{
        background: "#f9f9fb",
        borderRadius: "8px",
        padding: "1em",
        marginTop: "1em",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
      }}>
        <h4 style={{ margin: "0 0 0.5em 0", color: "#4a4a4a" }}>Participantes</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul style={{ paddingLeft: "1.2em", margin: 0 }}>
            {activity.participants.map((p, idx) => (
              <li key={idx} style={{ marginBottom: "0.3em", color: "#333" }}>
                {p}
              </li>
            ))}
          </ul>
        ) : (
          <span style={{ color: "#888" }}>Aún no hay participantes.</span>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
```