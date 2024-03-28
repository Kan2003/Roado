function getUserActivity(userData) {
    // Initialize an empty object to store monthly user activity data
    const monthlyUsers = {};
  
    for (const user of userData) {
      // Extract user ID for easier reference
      const userId = user.userId;
  
      // Flags to track user activity within the loop
      let loggedInThisMonth = false;
      let potentiallyActive = false;
  
      for (const login of user.logins) {
        // Convert the "logged_in" timestamp string to a Date object
        const loginDate = new Date(login.logged_in);
  
        // Extract the month (0-indexed) from the login date
        const month = loginDate.getMonth();
  
        // Monthly Logged-In Users:
        // 1. Check if a record exists for the extracted month in "monthlyUsers"
        if (!monthlyUsers[month]) {
          // 2. If not, create a new Set to store unique user IDs for that month
          monthlyUsers[month] = new Set();
        }
        // 3. Add the current user's ID to the Set for the corresponding month
        monthlyUsers[month].add(userId);
        // Update flag to indicate the user logged in this month
        loggedInThisMonth = true;
  
        // Monthly Active Users (Considering Inactivity):
        // 1. Define an inactivity threshold in milliseconds (e.g., 30 days)
        const inactivityThreshold = 30 * 24 * 60 * 60 * 1000;
  
        // 2. Use spread operator (...) to iterate through all "lastSeenAt" timestamps
        //    and convert them to Date objects
        const latestSeenAt = Math.max(...user.logins.map(l => new Date(l.lastSeenAt)));
  
        // 3. Check if the user logged in this month and if the latest "lastSeenAt"
        //    exceeds the inactivity threshold relative to the "logged_in" time
        if (loggedInThisMonth && latestSeenAt.getTime() - loginDate.getTime() > inactivityThreshold) {
          // User is considered potentially active for the month
          potentiallyActive = true;
        }
      }
  
      // Store user activity for the month (optional):
      // This section demonstrates storing the count of active users per month
      if (monthlyUsers[month]) {
        // Check if an "activeUsers" property already exists for the month
        if (monthlyUsers[month].activeUsers) {
          // If it does, increment the count if the user is potentially active
          monthlyUsers[month].activeUsers += potentiallyActive ? 1 : 0;
        } else {
          // If it doesn't, create the property and set the initial count
          monthlyUsers[month].activeUsers = potentiallyActive ? 1 : 0;
        }
      }
    }
  
    // Return the final "monthlyUsers" object containing user activity data
    return monthlyUsers;
  }
  
  // Example Usage
  const userData = [
    // User data with login timestamps and potentially missing "logged_out"
    {
      userId: 1,
      logins: [
        { logged_in: "2024-03-15", lastSeenAt: "2024-03-20" },
        { logged_in: "2024-02-10", lastSeenAt: "2024-02-25" }, // Previous month
      ],
    },
    // Another user
    {
      userId: 2,
      logins: [
        { logged_in: "2024-03-22", lastSeenAt: "2024-03-27" },
      ],
    },
  ];
  
  const monthlyActivity = getUserActivity(userData);
  console.log(monthlyActivity);
  