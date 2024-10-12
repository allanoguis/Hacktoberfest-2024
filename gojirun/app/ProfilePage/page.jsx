"use client"
import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
  },
  email: {
    fontSize: '16px',
    color: '#666',
    margin: '5px 0',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  statBox: {
    flex: '1 1 200px',
    backgroundColor: '#f0f0f0',
    padding: '15px',
    margin: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  statTitle: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '5px',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  achievementList: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
  },
  achievement: {
    backgroundColor: '#e0e0e0',
    padding: '5px 10px',
    margin: '5px',
    borderRadius: '15px',
    fontSize: '14px',
  },
  activityList: {
    listStyle: 'none',
    padding: '0',
  },
  activityItem: {
    padding: '10px 0',
    borderBottom: '1px solid #e0e0e0',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default function ProfilePage() {
  const [user, setUser] = useState({
    email: 'John@example.com',
    fullName: 'John Doe',
    profileImageUrl: '/placeholder.svg?height=100&width=100',
    level: 42,
    experiencePoints: 8700,
    totalExperiencePoints: 10000,
    achievements: ['First Win', 'Reach Level 10', 'Complete Tutorial', 'Win 100 Games'],
    recentActivity: [
      'Won a match in Fortnite',
      'Completed daily quest in World of Warcraft',
      'Reached level 30 in League of Legends',
      'Unlocked new character in Genshin Impact'
    ]
  });

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout clicked');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={user.profileImageUrl} alt={user.fullName} style={styles.avatar} />
        <div>
          <h1 style={styles.name}>{user.fullName}</h1>
          <p style={styles.email}>{user.email}</p>
        </div>
      </header>

      <div style={styles.statsContainer}>
        <div style={styles.statBox}>
          <p style={styles.statTitle}>Level</p>
          <p style={styles.statValue}>{user.level}</p>
        </div>
        <div style={styles.statBox}>
          <p style={styles.statTitle}>Experience</p>
          <p style={styles.statValue}>{`${user.experiencePoints} / ${user.totalExperiencePoints}`}</p>
        </div>
        <div style={styles.statBox}>
          <p style={styles.statTitle}>Achievements</p>
          <p style={styles.statValue}>{user.achievements.length}</p>
        </div>
      </div>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Achievements</h2>
        <ul style={styles.achievementList}>
          {user.achievements.map((achievement, index) => (
            <li key={index} style={styles.achievement}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Recent Activity</h2>
        <ul style={styles.activityList}>
          {user.recentActivity.map((activity, index) => (
            <li key={index} style={styles.activityItem}>{activity}</li>
          ))}
        </ul>
      </section>

      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
}