console.log("APP JS LOADED");

const eventList = document.getElementById("event-list");
console.log(eventList);

if (eventList) {
  eventList.innerHTML = `
    <div class="bg-white p-4 rounded shadow">
      <h3 class="font-bold text-lg">TEST EVENT</h3>
      <p class="text-gray-500">Jakarta • 2026</p>
    </div>
  `;
}

