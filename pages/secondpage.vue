
<template>

<div class="font-body">
  <!-- <Tutorial/> -->

<div class="max-w-md mx-auto bg-white border-t-4  border-indigo-800 rounded-br-lg rounded-bl-lg shadow-md overflow-hidden max-w-full">
  <div class="p-4 float-right">
<a href="#" class="block mt-1 text-lg  font-medium hover:none" style="text-align: left;
font: normal normal 600 14px/17px Roboto;letter-spacing: 0.84px;color: #319795;opacity: 1;"> Login</a>
  </div>
</div>
<div class="topbg text-center text-4xl pt-8" style="background: rgb(235,244,255) !important;
background: linear-gradient(125deg, rgba(235,244,255,1) 0%, rgba(230,255,250,1) 100%) !important;">

  <h1 class="tracking-normal font-large text-5xl" style="text-align: center;
font: normal normal large 42px/50px Roboto;letter-spacing: 1.26px;color: #2D3748;opacity: 1;">Deine Job <br> website</h1>
  <div class="pb-0">
  <img src="../static/assets/img/undraw_agreement_aajr.png" class="m-auto">
  </div>

  <div class="max-w-md mx-auto bg-white mt-0 mb-0 pt-3 border-indigo-600 rounded-tr-lg rounded-tl-lg  overflow-hidden max-w-full ">

<button class="text-white text-base py-2 px-20 rounded" style="background: transparent linear-gradient(95deg, #319795 0%, #3182CE 100%) 0% 0% no-repeat padding-box;
border-radius: 12px;opacity: 1; color:white;font: normal normal medium 14px/17px Roboto;">
Kostenlos Registrieren
</button>
<hr class="mt-4 mb-4">
</div>
</div>

  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-0 pb-0 pl-2 flex-row">
        <li class="-mb-px mr-0 last:mr-0 flex-auto text-center border" style="background:#81E6D9">
          <a class="text-xs font-bold uppercase px-2 py-3 rounded-tl-lg rounded-bl-lg  block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-300 bg-white': openTab !== 1, 'text-white myColor': openTab === 1}">
            <i class="fas fa-space-shuttle text-base mr-1" ></i> Arbeitnehmer
          </a>
        </li>
        <li class="-mb-px mr-0 last:mr-0 flex-auto text-center border" style="background:#81E6D9">
          <a class="text-xs font-bold uppercase px-2 py-3   block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-300 bg-white': openTab !== 2, 'text-white myColor': openTab === 2}">
            <i class="fas fa-cog text-base mr-1"></i> Arbeitgeber
          </a>
        </li>
        <li class="-mb-px mr-0 last:mr-0 flex-auto text-center border" style="background:#81E6D9">
          <a class="text-xs font-bold uppercase px-2 py-3  rounded-tr-lg rounded-br-lg   block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-green-300 bg-white': openTab !== 3, 'text-white myColor': openTab === 3}">
            <i class="fas fa-briefcase text-base mr-1"></i> Temporärbüro
          </a>
        </li>
      </ul>
      </div>
  </div>

      <div class="bg-white mb-0 shadow-lg rounded mx-auto">
        <div class="px-0 py-5 ">
          <div class="tab-content tab-space ">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
             <p class="text-xl mt-8 mb-8 font-medium float-right px-8">
               Drei einfache Schritte zu deinem neuen Job
               </p>
               <!-- <div class="rounded float-left h-64 w-64 flex flex-col justify-center items-center absolute -left-2.5" style="background:#F7FAFC;  border-radius:50%;">



<h1 class="text-7xl align-middle">1</h1>
               </div> -->
               <div class="text-center">
               <img src="../static/assets/img/undraw_Profile_data_re_v81r.png" class="text-center inline-block"/>
               </div>

<div class="relative">
     <a href="#" class="relative mt-0">
        <div class="h-auto flex flex-wrap content-center -left-3.5" style="background: transparent url('img/undraw_Profile_data_re_v81r.png') 0% 0% no-repeat padding-box;
opacity: 1;">
            <img src="../static/assets/img/bg1.png" class="" alt="">
        </div>
    </a>
    <a class="inset-0 z-20 bg-transparent  mt-0 pt-8 ml-2 flex-col items-center justify-center  opacity-100 absolute" style="background: #F7FAFC 0% 0% no-repeat padding-box;
opacity: 0.5;">
     <span class="text-9xl">  1. </span> <span class="text-xl">Erstellen dein Lebenslauf</span>
      <!-- <p  class="mx-auto">Description</p> -->
      </a>
   
  </div>
<svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(230, 255, 250, 1)" offset="0%"></stop><stop stop-color="rgba(235, 244, 255, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,112L60,106.7C120,101,240,91,360,96C480,101,600,123,720,109.3C840,96,960,48,1080,34.7C1200,21,1320,43,1440,61.3C1560,80,1680,96,1800,85.3C1920,75,2040,37,2160,34.7C2280,32,2400,64,2520,72C2640,80,2760,64,2880,56C3000,48,3120,48,3240,40C3360,32,3480,16,3600,24C3720,32,3840,64,3960,85.3C4080,107,4200,117,4320,125.3C4440,133,4560,139,4680,128C4800,117,4920,91,5040,74.7C5160,59,5280,53,5400,50.7C5520,48,5640,48,5760,53.3C5880,59,6000,69,6120,72C6240,75,6360,69,6480,56C6600,43,6720,21,6840,10.7C6960,0,7080,0,7200,16C7320,32,7440,64,7560,74.7C7680,85,7800,75,7920,77.3C8040,80,8160,96,8280,88C8400,80,8520,48,8580,32L8640,16L8640,160L8580,160C8520,160,8400,160,8280,160C8160,160,8040,160,7920,160C7800,160,7680,160,7560,160C7440,160,7320,160,7200,160C7080,160,6960,160,6840,160C6720,160,6600,160,6480,160C6360,160,6240,160,6120,160C6000,160,5880,160,5760,160C5640,160,5520,160,5400,160C5280,160,5160,160,5040,160C4920,160,4800,160,4680,160C4560,160,4440,160,4320,160C4200,160,4080,160,3960,160C3840,160,3720,160,3600,160C3480,160,3360,160,3240,160C3120,160,3000,160,2880,160C2760,160,2640,160,2520,160C2400,160,2280,160,2160,160C2040,160,1920,160,1800,160C1680,160,1560,160,1440,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path></svg>
    <div class="pt-10 pb-0 mt-0 mb-0 myColor" style="background:#E6FFFA !important" >

      <div class="curved-div">
 <span class="text-9xl"> 2. </span> <span class="text-xl">Erstellen dein Lebenslauf</span>

 <div class="text-center px-10 mt-3">
               <img src="../static/assets/img/undraw_task_31wc@2x.png" class="text-center inline-block"/>
               </div>

</div>






            </div>
  <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(230, 255, 250, 1)" offset="0%"></stop><stop stop-color="rgba(235, 244, 255, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,112L60,106.7C120,101,240,91,360,96C480,101,600,123,720,109.3C840,96,960,48,1080,34.7C1200,21,1320,43,1440,61.3C1560,80,1680,96,1800,85.3C1920,75,2040,37,2160,34.7C2280,32,2400,64,2520,72C2640,80,2760,64,2880,56C3000,48,3120,48,3240,40C3360,32,3480,16,3600,24C3720,32,3840,64,3960,85.3C4080,107,4200,117,4320,125.3C4440,133,4560,139,4680,128C4800,117,4920,91,5040,74.7C5160,59,5280,53,5400,50.7C5520,48,5640,48,5760,53.3C5880,59,6000,69,6120,72C6240,75,6360,69,6480,56C6600,43,6720,21,6840,10.7C6960,0,7080,0,7200,16C7320,32,7440,64,7560,74.7C7680,85,7800,75,7920,77.3C8040,80,8160,96,8280,88C8400,80,8520,48,8580,32L8640,16L8640,160L8580,160C8520,160,8400,160,8280,160C8160,160,8040,160,7920,160C7800,160,7680,160,7560,160C7440,160,7320,160,7200,160C7080,160,6960,160,6840,160C6720,160,6600,160,6480,160C6360,160,6240,160,6120,160C6000,160,5880,160,5760,160C5640,160,5520,160,5400,160C5280,160,5160,160,5040,160C4920,160,4800,160,4680,160C4560,160,4440,160,4320,160C4200,160,4080,160,3960,160C3840,160,3720,160,3600,160C3480,160,3360,160,3240,160C3120,160,3000,160,2880,160C2760,160,2640,160,2520,160C2400,160,2280,160,2160,160C2040,160,1920,160,1800,160C1680,160,1560,160,1440,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path></svg>

            <div class="pt-0 pb-0" >

              <div class="relative ">
     <a href="#" class="relative mt-0">
        <div class="h-auto flex flex-wrap content-center -left-3.5">
            <img src="../static/assets/img/bg1.png" class="" alt="">
        </div>
    </a>
    <a class="absolute inset-0 z-10 bg-transparent  mt-8 ml-2 flex-col items-center justify-center  opacity-100">
     <span class="text-9xl">  3. </span> <span class="text-xl">Erstellen dein Lebenslauf</span>
      <!-- <p  class="mx-auto">Description</p> -->
      </a>
   
  </div>



 <div class="text-right px-10 mt-3">
               <img src="../static/assets/img/undraw_personal_file_222m.png" class="text-center inline-block"/>
               </div>


            </div>



            </div>

<div>


  

   <!-- <div class="absoulte">
             <span class="text-9xl">  1. </span> <span class="text-xl">Erstellen dein Lebenslauf</span>
             </div> -->


         
         


          
          </div>
          </div>

          
            </div>
                  <div  v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
             <p class="text-xl mt-8 mb-8 font-medium float-right px-8">
               Drei einfache Schritte zu deinem neuen Job we
               </p>
               <!-- <div class="rounded float-left h-64 w-64 flex flex-col justify-center items-center absolute -left-2.5" style="background:#F7FAFC;  border-radius:50%;">

<h1 class="text-7xl align-middle">1</h1>
               </div> -->
               <div class="text-center">
               <img src="../static/assets/img/undraw_Profile_data_re_v81r.png" class="text-center inline-block"/>
               </div>

<div class="relative">
     <a href="#" class="relative mt-0">
        <div class="h-auto flex flex-wrap content-center -left-3.5">
            <img src="../static/assets/img/bg1.png" class="" alt="">
        </div>
    </a>
    <a class="inset-0 z-10 bg-transparent  mt-0 pt-8 ml-2 flex-col items-center justify-center  opacity-100 absolute">
     <span class="text-9xl">  1. </span> <span class="text-xl">Erstellen dein Lebenslauf</span>
      <!-- <p  class="mx-auto">Description</p> -->
      </a>
   
  </div>
<svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(230, 255, 250, 1)" offset="0%"></stop><stop stop-color="rgba(235, 244, 255, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,112L60,106.7C120,101,240,91,360,96C480,101,600,123,720,109.3C840,96,960,48,1080,34.7C1200,21,1320,43,1440,61.3C1560,80,1680,96,1800,85.3C1920,75,2040,37,2160,34.7C2280,32,2400,64,2520,72C2640,80,2760,64,2880,56C3000,48,3120,48,3240,40C3360,32,3480,16,3600,24C3720,32,3840,64,3960,85.3C4080,107,4200,117,4320,125.3C4440,133,4560,139,4680,128C4800,117,4920,91,5040,74.7C5160,59,5280,53,5400,50.7C5520,48,5640,48,5760,53.3C5880,59,6000,69,6120,72C6240,75,6360,69,6480,56C6600,43,6720,21,6840,10.7C6960,0,7080,0,7200,16C7320,32,7440,64,7560,74.7C7680,85,7800,75,7920,77.3C8040,80,8160,96,8280,88C8400,80,8520,48,8580,32L8640,16L8640,160L8580,160C8520,160,8400,160,8280,160C8160,160,8040,160,7920,160C7800,160,7680,160,7560,160C7440,160,7320,160,7200,160C7080,160,6960,160,6840,160C6720,160,6600,160,6480,160C6360,160,6240,160,6120,160C6000,160,5880,160,5760,160C5640,160,5520,160,5400,160C5280,160,5160,160,5040,160C4920,160,4800,160,4680,160C4560,160,4440,160,4320,160C4200,160,4080,160,3960,160C3840,160,3720,160,3600,160C3480,160,3360,160,3240,160C3120,160,3000,160,2880,160C2760,160,2640,160,2520,160C2400,160,2280,160,2160,160C2040,160,1920,160,1800,160C1680,160,1560,160,1440,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path></svg>
    <div class="pt-10 pb-0 mt-0 mb-0 myColor" style="background:#E6FFFA !important" >

      <div class="curved-div">
 <span class="text-9xl"> 2. </span> <span class="text-xl">Erstellen dein Lebenslauf</span>

 <div class="text-center px-10 mt-3">
               <img src="../static/assets/img/undraw_about_me_wa29.png" class="text-center inline-block"/>
               </div>

</div>






            </div>
  <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(230, 255, 250, 1)" offset="0%"></stop><stop stop-color="rgba(235, 244, 255, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,112L60,106.7C120,101,240,91,360,96C480,101,600,123,720,109.3C840,96,960,48,1080,34.7C1200,21,1320,43,1440,61.3C1560,80,1680,96,1800,85.3C1920,75,2040,37,2160,34.7C2280,32,2400,64,2520,72C2640,80,2760,64,2880,56C3000,48,3120,48,3240,40C3360,32,3480,16,3600,24C3720,32,3840,64,3960,85.3C4080,107,4200,117,4320,125.3C4440,133,4560,139,4680,128C4800,117,4920,91,5040,74.7C5160,59,5280,53,5400,50.7C5520,48,5640,48,5760,53.3C5880,59,6000,69,6120,72C6240,75,6360,69,6480,56C6600,43,6720,21,6840,10.7C6960,0,7080,0,7200,16C7320,32,7440,64,7560,74.7C7680,85,7800,75,7920,77.3C8040,80,8160,96,8280,88C8400,80,8520,48,8580,32L8640,16L8640,160L8580,160C8520,160,8400,160,8280,160C8160,160,8040,160,7920,160C7800,160,7680,160,7560,160C7440,160,7320,160,7200,160C7080,160,6960,160,6840,160C6720,160,6600,160,6480,160C6360,160,6240,160,6120,160C6000,160,5880,160,5760,160C5640,160,5520,160,5400,160C5280,160,5160,160,5040,160C4920,160,4800,160,4680,160C4560,160,4440,160,4320,160C4200,160,4080,160,3960,160C3840,160,3720,160,3600,160C3480,160,3360,160,3240,160C3120,160,3000,160,2880,160C2760,160,2640,160,2520,160C2400,160,2280,160,2160,160C2040,160,1920,160,1800,160C1680,160,1560,160,1440,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path></svg>
            <div class="pt-0 pb-0" >

              <div class="relative ">
     <a href="#" class="relative mt-0">
        <div class="h-auto flex flex-wrap content-center -left-3.5" style="background: #F7FAFC 0% 0% no-repeat padding-box;
opacity: 1;top: 1410px;
left: -54px;
width: 304px;
height: 303px;">
            <img src="../static/assets/img/bg1.png" class="" alt="">
        </div>
    </a>
    <a class="absolute inset-0 z-10 bg-transparent  mt-8 ml-2 flex-col items-center justify-center  opacity-100">
     <span class="text-9xl">  3. </span> <span class="text-xl">Erstellen dein Lebenslauf</span>
      <!-- <p  class="mx-auto">Description</p> -->
      </a>
   
  </div>



 <div class="text-right px-10 mt-3">
               <img src="../static/assets/img/undraw_swipe_profiles1_i6mr.png" class="text-center inline-block"/>
               </div>


            </div>



            </div>

      
         
                <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
             <p class="text-xl mt-8 mb-8 font-medium float-right px-8">
             Drei einfache Schritte zur Vermittlung neuer Mitarbeiter
               </p>
               <!-- <div class="rounded float-left h-64 w-64 flex flex-col justify-center items-center absolute -left-2.5" style="background:#F7FAFC;  border-radius:50%;">

<h1 class="text-7xl align-middle">1</h1>
               </div> -->
               <div class="text-center">
               <img src="../static/assets/img/undraw_Profile_data_re_v81r.png" class="text-center inline-block"/>
               </div>

<div class="relative">
     <a href="#" class="relative mt-0">
        <div class="h-auto flex flex-wrap content-center -left-3.5">
            <img src="../static/assets/img/bg1.png" class="" alt="">
        </div>
    </a>
    <a class="inset-0 z-10 bg-transparent  mt-0 pt-8 ml-2 flex-col items-center justify-center  opacity-100 absolute">
     <span class="text-9xl">  1. </span> <span class="text-xl">Erstellen dein Lebenslauf</span>
      <!-- <p  class="mx-auto">Description</p> -->
      </a>
   
  </div>
<svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(230, 255, 250, 1)" offset="0%"></stop><stop stop-color="rgba(235, 244, 255, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,112L60,106.7C120,101,240,91,360,96C480,101,600,123,720,109.3C840,96,960,48,1080,34.7C1200,21,1320,43,1440,61.3C1560,80,1680,96,1800,85.3C1920,75,2040,37,2160,34.7C2280,32,2400,64,2520,72C2640,80,2760,64,2880,56C3000,48,3120,48,3240,40C3360,32,3480,16,3600,24C3720,32,3840,64,3960,85.3C4080,107,4200,117,4320,125.3C4440,133,4560,139,4680,128C4800,117,4920,91,5040,74.7C5160,59,5280,53,5400,50.7C5520,48,5640,48,5760,53.3C5880,59,6000,69,6120,72C6240,75,6360,69,6480,56C6600,43,6720,21,6840,10.7C6960,0,7080,0,7200,16C7320,32,7440,64,7560,74.7C7680,85,7800,75,7920,77.3C8040,80,8160,96,8280,88C8400,80,8520,48,8580,32L8640,16L8640,160L8580,160C8520,160,8400,160,8280,160C8160,160,8040,160,7920,160C7800,160,7680,160,7560,160C7440,160,7320,160,7200,160C7080,160,6960,160,6840,160C6720,160,6600,160,6480,160C6360,160,6240,160,6120,160C6000,160,5880,160,5760,160C5640,160,5520,160,5400,160C5280,160,5160,160,5040,160C4920,160,4800,160,4680,160C4560,160,4440,160,4320,160C4200,160,4080,160,3960,160C3840,160,3720,160,3600,160C3480,160,3360,160,3240,160C3120,160,3000,160,2880,160C2760,160,2640,160,2520,160C2400,160,2280,160,2160,160C2040,160,1920,160,1800,160C1680,160,1560,160,1440,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path></svg>
    <div class="pt-10 pb-0 mt-0 mb-0 myColor" style="background:#E6FFFA !important" >

      <div class="curved-div">
 <span class="text-9xl"> 2. </span> <span class="text-xl">Erhalte Vermittlungs- angebot von Arbeitgeber</span>

 <div class="text-center px-10 mt-3">
               <img src="../static/assets/img/undraw_job_offers_kw5d.png" class="text-center inline-block"/>
               </div>

</div>






            </div>
  <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(230, 255, 250, 1)" offset="0%"></stop><stop stop-color="rgba(235, 244, 255, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,112L60,106.7C120,101,240,91,360,96C480,101,600,123,720,109.3C840,96,960,48,1080,34.7C1200,21,1320,43,1440,61.3C1560,80,1680,96,1800,85.3C1920,75,2040,37,2160,34.7C2280,32,2400,64,2520,72C2640,80,2760,64,2880,56C3000,48,3120,48,3240,40C3360,32,3480,16,3600,24C3720,32,3840,64,3960,85.3C4080,107,4200,117,4320,125.3C4440,133,4560,139,4680,128C4800,117,4920,91,5040,74.7C5160,59,5280,53,5400,50.7C5520,48,5640,48,5760,53.3C5880,59,6000,69,6120,72C6240,75,6360,69,6480,56C6600,43,6720,21,6840,10.7C6960,0,7080,0,7200,16C7320,32,7440,64,7560,74.7C7680,85,7800,75,7920,77.3C8040,80,8160,96,8280,88C8400,80,8520,48,8580,32L8640,16L8640,160L8580,160C8520,160,8400,160,8280,160C8160,160,8040,160,7920,160C7800,160,7680,160,7560,160C7440,160,7320,160,7200,160C7080,160,6960,160,6840,160C6720,160,6600,160,6480,160C6360,160,6240,160,6120,160C6000,160,5880,160,5760,160C5640,160,5520,160,5400,160C5280,160,5160,160,5040,160C4920,160,4800,160,4680,160C4560,160,4440,160,4320,160C4200,160,4080,160,3960,160C3840,160,3720,160,3600,160C3480,160,3360,160,3240,160C3120,160,3000,160,2880,160C2760,160,2640,160,2520,160C2400,160,2280,160,2160,160C2040,160,1920,160,1800,160C1680,160,1560,160,1440,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path></svg>

            <div class="pt-0 pb-0" >

              <div class="relative ">
     <a href="#" class="relative mt-0">
        <div class="h-auto flex flex-wrap content-center -left-3.5">
            <img src="../static/assets/img/bg1.png" class="" alt="">
    <a class="absolute inset-0 z-10 bg-transparent  mt-4 ml-2 pb-6 flex-col items-center justify-center  opacity-100">
               <img src="../static/assets/img/undraw_business_deal_cpi9.png" class="text-center inline-block"/>
     <span class="text-9xl">  3. </span> <span class="text-xl">Vermittlung nach Provision oder Stundenlohn</span>
      <!-- <p  class="mx-auto">Description</p> -->
      </a>
        </div>
    </a>
   

 <div class="text-right px-10 mt-3">
               </div>
  </div>




            </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<script lang="ts">
import Vue from 'vue'
import "static/assets/css/index.css";


export default Vue.extend({})
</script>

<script>
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
