import { useState, useEffect } from "react";

function CountDown() {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return (
      <div style={styles.container}>
        <h2 style={styles.finishedText}>🎉 Countdown Finished! 🎉</h2>
      </div>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎯 Countdown Timer 🎯</h1>
      <div style={styles.timer}>
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Minutes" value={minutes} />
        <TimeBox label="Seconds" value={seconds} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div style={styles.timeBox}>
      <div style={styles.timeValue}>{value}</div>
      <div style={styles.timeLabel}>{label}</div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #8360c3, #2ebf91)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
    padding: '20px'
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '40px',
    animation: 'pulse 2s infinite'
  },
  timer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  timeBox: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '20px 30px',
    minWidth: '100px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    transition: 'transform 0.5s',
  },
  timeValue: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  timeLabel: {
    fontSize: '1rem',
    opacity: 0.8,
  },
  finishedText: {
    fontSize: '2.5rem',
    animation: 'fadeIn 2s forwards'
  }
};

export default CountDown;
