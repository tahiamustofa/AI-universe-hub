const btn = document.getElementById("btn");
const body = document.getElementById("body");

const sortDate = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools/`);

  const mainData = await res.json();

  const hubs = mainData.data.tools;

  hubs.forEach((hub) => {
    const hubID = document.getElementById("hubID");
    // hubID.textContent = '';
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                  <img class="w-full h-full" src="${
                    hub.image
                  }" alt="profile-picture" />
                </div>
                <div class="p-6 text-center">
                  <h4 class="mb-1 text-xl font-semibold text-slate-800">
                     ${hub.name}
                  </h4>
                  <p
                    class="text-sm font-semibold text-slate-500 uppercase">
                   ${hub.id}
                  </p>
                  <p
                    class="text-sm font-semibold text-slate-500 uppercase">published_in:
                   ${hub.published_in || "No available"}
                  </p>
                  <p class="text-base text-slate-600 mt-4 font-light ">
                        ${hub.description || "No description available"}
                  </p>

      <ul class="text-slate-600 mt-4 text-base font-bold text-start">Features: </br>
               <li> ${hub.features[0] || "No description available"} </<li>
                <li> ${hub.features[1] || "No features available"}</li>
              <li> ${hub.features[2] || "No features available"}</li>
              </ul>
                </div>

                `;
    hubID.appendChild(div);
  });
};
// sortDate();
sortDate();
const sorter = async (sortDate) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools/`);
  const mainData = await res.json();
  const hubs = mainData.data.tools;
  hubs
    .filter((data) => data.published_in === sortDate)
    .map((obj) => {
      const sortedDiv = document.createElement("div");
      sortedDiv.innerHTML = `
       <div class="m-2.5 absolute top-5 ms-auto rounded-md h-80 flex justify-center items-center">
                     <img class="w-full  h-full" src="${
                       obj.image
                     }" alt="profile-picture" />
                   </div>
                   <div class="p-6 text-center">
                     <h4 class="mb-1 text-xl font-semibold text-slate-800">
                        ${obj.name}
                     </h4>
                     <p
                       class="text-sm font-semibold text-slate-500 uppercase">
                      ${obj.id}
                     </p>
                     <p
                       class="text-sm font-semibold text-slate-500 uppercase">published_in:
                      ${obj.published_in || "No available"}
                     </p>
                     <p class="text-base text-slate-600 mt-4 font-light ">
                           ${obj.description || "No description available"}
                     </p>
   
            <ul class="text-slate-600 mt-4 text-base font-bold text-start">Features: </br>
                  <li> ${obj.features[0] || "No description available"} </<li>
                   <li> ${obj.features[1] || "No features available"}</li>
                 <li> ${obj.features[2] || "No features available"}</li>
                 </ul>
                   </div>
                     
                   `;
      body.appendChild(sortedDiv);
    });
};

btn.addEventListener("click", () => {
  const inputField = document.getElementById("inputField");
  const sortDate = inputField.value;

  sorter(sortDate);
});