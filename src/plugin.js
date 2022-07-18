class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  updateTimer({ days, hours, mins, secs }) {
    const timerDiv = document.querySelector(this.selector);
    const daysEl = timerDiv.querySelector('[data-value="days"]');
    const hoursEl = timerDiv.querySelector('[data-value="hours"]');
    const minsEl = timerDiv.querySelector('[data-value="mins"]');
    const secsEl = timerDiv.querySelector('[data-value="secs"]');

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = mins;
    secsEl.textContent = secs;
  }

  start() {
    setInterval(() => {
      const targetDate = this.targetDate;
      const deltaTime = targetDate - Date.now();
      const timeComponents = this.getTimeComponents(deltaTime);

      this.updateTimer(timeComponents);
    }, 1000);
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 16, 2022"),
});

timer1.start();
