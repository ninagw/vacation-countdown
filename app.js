const trip = {
    destination: "Tokio",
    departureDate: new Date("2026-10-14T10:00:00"),
    bookingDate: new Date("2026-01-01T00:00:00"),
    checklist: [
      { text: "Reisepass", done: true },
      { text: "Flugticket", done: true },
      { text: "Adapter", done: false },
      { text: "Kamera", done: false }
    ]
  };
  
  const quotes = [
    "Bald geht das Abenteuer los!",
    "Die Vorfreude ist die schönste Freude.",
    "Jeder Tag bringt dich näher ans Ziel.",
    "Packliste fertig? Fast geschafft!"
  ];
  
  function updateCountdown() {
    const now = new Date();
    const diff = trip.departureDate - now;
  
    if (diff <= 0) {
      document.getElementById("days").textContent = "0";
      document.getElementById("time").textContent = "Die Reise beginnt!";
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("days").textContent = days;
    document.getElementById("time").textContent =
      `${hours.toString().padStart(2, "0")}:` +
      `${minutes.toString().padStart(2, "0")}:` +
      `${seconds.toString().padStart(2, "0")}`;
  
    const total = trip.departureDate - trip.bookingDate;
    const elapsed = now - trip.bookingDate;
    const progress = Math.max(0, Math.min(100, (elapsed / total) * 100));
  
    document.getElementById("progress").style.width = `${progress}%`;
  }
  
  function renderChecklist() {
    const list = document.getElementById("checklist");
    list.innerHTML = "";
  
    trip.checklist.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.done ? "☑" : "☐"} ${item.text}`;
      list.appendChild(li);
    });
  }
  
  function showQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = `“${quote}”`;
  }
  
  updateCountdown();
  renderChecklist();
  showQuote();
  setInterval(updateCountdown, 1000);
  
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }