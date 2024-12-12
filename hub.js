const sortDate=async()=>{
const res = await fetch('https://openapi.programming-hero.com/api/ai/tool/01')
const mainData =await res.json()
const hub =mainData.data; 
console.log(hub);
const hubID =document.getElementById('hubID');
const div= document.createElement('div');
div.innerHTML=`
<div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img class="w-full h-full object-cover" src="${hub.logo}" alt="profile-picture" />
            </div>
            <div class="p-6 text-center">
              <h4 class="mb-1 text-xl font-semibold text-slate-800">
                Natalie Paisley
              </h4>
              <p
                class="text-sm font-semibold text-slate-500 uppercase">
               ${hub.tool_name}
              </p>
              <p
                class="text-sm font-semibold text-slate-500 uppercase">
               ${hub.pricing}
              </p>
              <p class="text-base text-slate-600 mt-4 font-light ">
                  The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
              </p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <button class="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Follow
              </button>
            </div>
            `

            hubID.appendChild(div);
}
sortDate();

