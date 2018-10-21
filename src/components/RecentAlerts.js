import React from "react";

const RecentAlerts = () => (
  <div id="recent-alerts" class="area-notification" style={{ paddingTop: '60px' }}>
    <p id="recent-alerts-title" class="area-notification-title">
      Recent alerts in your area
    </p>
    <ul id="recent-alerts-list" class="area-notification-list">
      <li class="area-notification-list-item">Volcanic eruption</li>
      <li class="area-notification-list-item">Mudslide of doom</li>
      <li class="area-notification-list-item">Thanos is here</li>
    </ul>
  </div>
);

export default RecentAlerts;
