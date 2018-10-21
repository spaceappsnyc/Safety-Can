import React from "react";

const RecentAlerts = () => (
  <div id="recent-alerts" class="area-notification">
    <p id="recent-alerts-title" class="area-notification-title">
      Recent alerts in your area
    </p>
    <ul id="recent-alerts-list" class="area-notification-list">
      <li class="area-notification-list-item">
        Heavy storm coming to Long Island
      </li>
      <li class="area-notification-list-item">
        Predicted flooding in The Bronx
      </li>
      <li class="area-notification-list-item">Heat wave coming to Manhattan</li>
    </ul>
  </div>
);

export default RecentAlerts;
