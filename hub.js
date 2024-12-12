const sortDate=async(sort)=>{
const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools/${sort}`)
const mainData =await res.json()
console.log(mainData.data)
const hubs =mainData.data.tools; 
console.log(hubs);

hubs.forEach(hub => {
    const hubID =document.getElementById('hubID');
const div= document.createElement('div');
div.innerHTML=`
<div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img class="w-full h-full" src="${hub.image}" alt="profile-picture" />
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
               ${hub.published_in || 'No available'}
              </p>
              <p class="text-base text-slate-600 mt-4 font-light ">
                    ${hub.description || 'No description available'}
              </p>
                
  <ul class="text-slate-600 mt-4 text-base font-bold text-start">Features: </br>
           <li> ${hub.features[0] || 'No description available'} </<li>
            <li> ${hub.features[1]  || 'No features available'}</li> 
          <li> ${hub.features[2]  || 'No features available'}</li> 
          </ul>
            </div>
            
            `
hubID.appendChild(div);
});

}
// sortDate();

const searchHandler=()=>{
const inputField= document.getElementById('inputField');
const sort = inputField.value;
console.log(sort)
sortDate(sort);
}
  