import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResultFrame.css';

const ResultFrame = ({ 
  imageUrl = "https://images.unsplash.com/photo-1611284446314-60a58ac0deb0?q=80&w=1974&auto=format&fit=crop",
  imageAlt = "Plastic waste on Kenyatta Avenue"
}) => {
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <div className="result-frame">
      {/* Back Button */}
      <button 
  onClick={() => navigate(-1)}
  className="mb-4 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow"
>
  ← Back
</button>

      
      {/* Header */}
      <div className="rf-header">
        <div className="rf-header-left">
          <h2 className="rf-title">AI Result Overview</h2>
          <span className="rf-error-badge">
            <i className="fas fa-exclamation-triangle"></i> Report Error
          </span>
        </div>
        <div className="rf-header-right">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>

      {/* Main content */}
      <div className="rf-content">
        {/* Left Column */}
        <div className="rf-info-panel">
          <div className="rf-waste-tag">
            <span className="rf-material">PLASTIC WASTE (94%)</span>
          </div>

          <div className="rf-location-street">
            <i className="fas fa-map-pin"></i> Kenyatta Avenue, CBD Nairobi
          </div>

          {/* Municipal Action */}
          <div className="rf-action-card">
            <h3>Suggested Municipal Action</h3>
            <p className="rf-action-desc">
              Based on volume and material type (Plastic), we recommend dispatching a 
              Light Response Vehicle from the CBD Depot. Priority should be given to clear 
              this area before the heavy foot traffic period begins.
            </p>
            <div className="rf-action-buttons">
              <button 
                className={`rf-btn-confirm ${isConfirmed ? 'rf-btn-confirmed' : ''}`}
                onClick={() => setIsConfirmed(true)}
                disabled={isConfirmed}
              >
                <i className="fas fa-check-circle"></i>
                {isConfirmed ? 'Confirmed' : 'Confirm Action'}
              </button>
              <button 
                className={`rf-btn-dismiss ${isDismissed ? 'rf-btn-dismissed' : ''}`}
                onClick={() => setIsDismissed(true)}
                disabled={isDismissed}
              >
                <i className="fas fa-times"></i>
                {isDismissed ? 'Dismissed' : 'Dismiss'}
              </button>
            </div>
          </div>

          {/* Report Details */}
          <div className="rf-details-card">
            <div className="rf-detail-item">
              <span className="rf-detail-label">LOCATION</span>
              <span className="rf-detail-value">Central Business District, Nairobi</span>
            </div>
            <div className="rf-detail-item">
              <span className="rf-detail-label">TIMESTAMP</span>
              <span className="rf-detail-value">October 24, 2023 • 14:32:01 EAT</span>
            </div>
          </div>

          {/* Zone Tag */}
          <div className="rf-zone-tag">
            <i className="fas fa-flag"></i> Nairobi CBD: Zone 1 (High Priority)
          </div>
        </div>

        {/* Right Column */}
        <div className="rf-detection-panel">
          <div className="rf-detection-card">
            <div className="rf-detection-header">
              <span className="rf-detection-label">DETECTED OBJECT</span>
              <span className="rf-risk-badge">
                <i className="fas fa-exclamation-circle"></i> High Risk
              </span>
            </div>
            
            <div className="rf-object-title">
              <i className="fas fa-trash-alt"></i>
              <span>Plastic Waste</span>
            </div>

            {/* Photo Section - Changeable */}
            <div className="rf-image-container">
              <img 
                src={imageUrl} 
                alt={imageAlt}
                className="rf-object-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultFrame;