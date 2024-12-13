const hubID = document.getElementById("hubID");

const fetchData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools/`);
  const mainData = await res.json();
  const getTools = mainData.data.tools;
  renderHubs(getTools);
};

const renderHubs = (data) => {
  hubID.innerHTML = ""; // Clear existing content
  data.forEach((hub) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
        <img class="w-full h-full" src="${hub.image}" alt="profile-picture" />
      </div>
      <div class="p-6 text-center">
        <h4 class="mb-1 text-xl font-semibold text-slate-800">
          ${hub.name}
        </h4>
        <p class="text-sm font-semibold text-slate-500 uppercase">
          ${hub.id}
        </p>
        <p class="text-sm font-semibold text-slate-500 uppercase">
          Published in: ${hub.published_in || "No available"}
        </p>
        <p class="text-base text-slate-600 mt-4 font-light">
          ${hub.description || "No description available"}
        </p>
        <ul class="text-slate-600 mt-4 text-base font-bold text-start">
          Features:</br>
          <li>${hub.features[0] || "No features available"}</li>
          <li>${hub.features[1] || "No features available"}</li>
          <li>${hub.features[2] || "No features available"}</li>
        </ul>
      </div>`;
    hubID.appendChild(div);
  });
};

const btnClickForSort = async()=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools/`);
  const mainData = await res.json();
  const hubs =mainData.data.tools;
  const sortedHubs = hubs.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
  renderHubs(sortedHubs);
}
fetchData();
