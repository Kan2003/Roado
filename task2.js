function validateTrips(shipment, trips) {
    // 1. Convert pickup and drop-off locations to Sets for efficient tracking
    const allPickups = new Set(shipment.pickups);
    const allDropoffs = new Set(shipment.dropoffs);
  
    // 2. Check if all pickups are covered in the trips
    for (const trip of trips) {
      for (const pickup of trip.pickups) {
        // Remove the pickup location from the Set if found in a trip
        allPickups.delete(pickup);
      }
    }
  
    // 3. Check if any pickups remain (meaning not covered in trips)
    if (allPickups.size > 0) {
      return false; // Not all pickups are included
    }
  
    // 4. Repeat the process for all drop-off locations
    for (const trip of trips) {
      for (const dropoff of trip.dropoffs) {
        allDropoffs.delete(dropoff);
      }
    }
  
    // 5. Check if any drop-offs remain (meaning not covered in trips)
    if (allDropoffs.size > 0) {
      return false; // Not all drop-offs are included
    }
  
    // 6. Check for valid warehouse usage (optional)
    const warehouseSet = new Set();
    for (const trip of trips) {
      if (trip.warehouse) {
        // Check if the warehouse is used in multiple trips
        if (warehouseSet.has(trip.warehouse)) {
          return false; // Warehouse used more than once
        }
        warehouseSet.add(trip.warehouse);
  
        // Check if pickups/dropoffs in the trip involve the warehouse
        if ((trip.pickups.length > 0 && !trip.dropoffs.includes(trip.warehouse)) ||
            (trip.dropoffs.length > 0 && !trip.pickups.includes(trip.warehouse))) {
          return false; // Pickups/dropoffs don't involve the warehouse
        }
      }
    }
  
    // 7. All checks passed, return true for valid trips
    return true;
  }
  
  // Example Usage
  const shipment = {
    pickups: ["A", "B"],
    dropoffs: ["C", "D"],
  };
  
  const validTrips = [
    { pickups: ["A"], warehouse: "W" },
    { pickups: ["B"], warehouse: "W" },
    { pickups: [], dropoffs: ["C"], warehouse: "W" },
    { pickups: [], dropoffs: ["D"], warehouse: "W" },
  ];
  
  const invalidTrips = [
    { pickups: ["A"], warehouse: "W1" },
    { pickups: ["B"], warehouse: "W2" },
    { pickups: [], dropoffs: ["C"], warehouse: "W3" },
    { pickups: [], dropoffs: ["D"], warehouse: "W4" },
  ];
  
  console.log(validateTrips(shipment, validTrips)); // true
  console.log(validateTrips(shipment, invalidTrips)); // false
  