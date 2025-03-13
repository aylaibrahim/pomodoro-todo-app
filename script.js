function displayCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    dateElement.textContent = `${day}-${month}-${year}`;
  }
  
  function displayCurrentTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
  }
  
  setInterval(displayCurrentTime, 1000);
  displayCurrentTime();
  displayCurrentDate();
  
  let timer;
  let timeLeft = 25 * 60;
  let isRunning = false;
  
  const pomodoroTime = document.getElementById('pomodoroTime');
  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    pomodoroTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateTimerDisplay();
        } else {
          clearInterval(timer);
          isRunning = false;
          alert('time is up, take a break');
        }
      }, 1000);
    }
  }
  
  function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
  }
  
  function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateTimerDisplay();
  }
  
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
  
  document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          li.style.textDecoration = 'line-through';
        } else {
          li.style.textDecoration = 'none';
        }
      });
  
      const span = document.createElement('span');
      span.textContent = taskText;
  
      li.appendChild(checkbox);
      li.appendChild(span);
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });

document.getElementById('refreshBtn').addEventListener('click', function () {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
});