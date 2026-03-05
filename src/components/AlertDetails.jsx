import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlertDetails.css';

const AlertDetails = ({ 
  photoUrl = "https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=2904&auto=format&fit=crop",
  photoAlt = "Photo of plastic waste",
  mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=36.8219%2C-1.2921%2C36.8349%2C-1.2800&layer=mapnik&marker=-1.2860%2C36.8284"
}) => {
  const navigate = useNavigate();
  const [isAssigning, setIsAssigning] = useState(false);
  const [isResolving, setIsResolving] = useState(false);

  const handleAssign = () => {
    setIsAssigning(true);
    setTimeout(() => setIsAssigning(false), 1000);
  };

  const handleResolve = () => {
    setIsResolving(true);
    setTimeout(() => setIsResolving(false), 1000);
  };

  return (
    <div className="alert-details">
      {/* Back Button */}
      <button 
  onClick={() => navigate(-1)}
  className="mb-4 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow"
>
  ← Back
</button>

      
      <h1 className="alert-title">ALERT DETAILS</h1>

      {/* Photo Section */}
      <div className="alert-photo-wrapper">
        <img src={photoUrl} alt={photoAlt} className="alert-photo" />
      </div>

      {/* Grid Layout */}
      <div className="alert-grid">
        {/* Left Column */}
        <div className="alert-left">
          {/* Report Info */}
          <div className="info-section">
            <h2>REPORT INFO</h2>
            <ul className="info-list">
              <li><span>Report ID:</span> #102</li>
              <li><span>Date:</span> Feb 15, 10:45 AM</li>
              <li><span>Reporter:</span> Anonymous</li>
            </ul>
          </div>

          {/* AI Result */}
          <div className="info-section">
            <h2>AI RESULT</h2>
            <table className="ai-table">
              <thead>
                <tr>
                  <th></th>
                  <th>PRIORITY</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Plastic</td><td>70%</td></tr>
                <tr><td>Organic</td><td>20%</td></tr>
                <tr><td>Mixed</td><td>10%</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="alert-right">
          {/* Priority Box */}
          <div className="priority-box">
            <div className="priority-high">HIGH</div>
            <div className="priority-action">Critical Action</div>
          </div>

          {/* Location with Map */}
          <div className="location-section">
            <h2>LOCATION</h2>
            <div className="location-address">
              Nairobi, Kenya<br />
              Maji Mazuri, Kasarani District
            </div>
            <div className="map-container">
              <iframe
                title="Location map"
                src={mapUrl}
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="alert-actions">
        <button 
          className={`btn-assign ${isAssigning ? 'loading' : ''}`}
          onClick={handleAssign}
          disabled={isAssigning}
        >
          <i className="fas fa-users"></i>
          {isAssigning ? 'Assigning...' : 'Assign Crew'}
        </button>
        <button 
          className={`btn-resolve ${isResolving ? 'loading' : ''}`}
          onClick={handleResolve}
          disabled={isResolving}
        >
          <i className="fas fa-check-circle"></i>
          {isResolving ? 'Resolving...' : 'Mark Resolved'}
        </button>
      </div>
    </div>
  );
};

export default AlertDetails;