const allModals = document.getElementsByClassName("modal")
const modalOverlay = document.getElementById("modalOverlay")
const modelViewer = document.getElementsByTagName("model-viewer");



// ================== About Me Typeit ===================

const aboutTypeIt = new TypeIt(".aboutMeContent", {
  cursorChar: "█",
  startDelay: 250,
  waitUntilVisible: true,
})


// ================= Opening Modal EventHandler ===================
function openModal(event) {

  const selector = event.target.id

  let currentModal = document.getElementById(`${selector}Modal`);
  currentModal.style.visibility = 'visible';
  currentModal.style.height = '80vh'
  modalOverlay.style.visibility = 'visible';
}
// ================ NavBar ========================

const aboutMeButton = document.getElementById('aboutMe');
const openModalWrap = (event) => {
  openModal(event);
  if(aboutTypeIt.is('frozen')) {
    aboutTypeIt.unfreeze();  
  } else {
    aboutTypeIt
    .pause(1000)
    .type("Hello!")
    .pause(1700)
    .break()
    .type("I’m Agustin Jaralampidis. ")
    .pause(1000)
    .type("Creative Developer")
    .pause(800)
    .type(" ... uhm ...")
    .pause(1000)
    .delete(12)
    .type(" kind of ...")
    .pause(2000)
    .delete(12)
    .move(-18)
    .type('A ')
    .move(18)
    .type(' in progress.')
    .pause(2000)
    .break()
    .break()
    .type("An <a href='https://www.instagram.com/agustin_jaralampidis/' target='_blank' >Artist</a> who studied <a title='Click to see my Indsustrial Design portfolio' id='industrialDesign' >Industrial Design</a> and works as a <a href='https://wearepsh.com/' target='_blank'>Developer at PSH</a>.")
    .exec(() => {
      const industrialDesignButton = document.getElementById('industrialDesign');
      industrialDesignButton.addEventListener('click', openModal)
    } )
    .break()
    .pause(3500)
    .break()
    .type("I would love to <b>Design & Develop</b> for your project!")
    .break()
    .type("Please feel free to contact me at <a href='mailto:ajaralampidis@gmail.com'>ajaralampidis@gmail.com</a>.")
    .break()
    .pause(2500)
    .break()
    .type("Thanks for your time :)")
    .break()
    .type("<i>- Agus</i>")
    .break()
    .pause(2000)
    .break()
    .type("<i>pd: In a mobile device you can see the cube in Augumented Reality, give it a try!</i>")
    .go();
  }

}
aboutMeButton.addEventListener('click', openModalWrap)

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', openModal)

const webDevButton = document.getElementById('webDevCV');
webDevButton.addEventListener('click', openModal)

// ================ AR Button =====================


const arButton = document.getElementById("arButton");
const errorModal = document.getElementById("arErrorModal")

arButton.addEventListener("click", modelViewer[0].activateAR)

modelViewer[0].addEventListener('ar-status', (event) => {

  if(event.detail.status === 'failed'){
    errorModal.style.visibility = 'visible';
    currentModal.style.height = '80vh'
    modalOverlay.style.visibility = 'visible';
    arButton.removeEventListener("click", modelViewer[0].activateAR)
    arButton.addEventListener('click', openModal)
    arButton.classList.add("disabled");
  }
    
});

window.addEventListener('load', (event) => {

  if (!modelViewer[0].canActivateAR) {
    arButton.removeEventListener("click", modelViewer[0].activateAR)
    arButton.addEventListener('click', openModal)
    arButton.classList.add("disabled");
  }
});





// ================== close modals when click on overlay ===================


function overlayCloseModal () {
  for (let modal of allModals) {
    modal.style.height = '0px'
    modal.style.visibility = 'hidden';
  }
  modalOverlay.style.visibility = 'hidden'

  if(!aboutTypeIt.is('completed')){
    aboutTypeIt.freeze()
  }

}
modalOverlay.addEventListener('click', overlayCloseModal)


// ====================== Pic Button ============================= //
/* 

const picButton = document.getElementById("picButton")
const downloadButton = document.getElementById("downloadButton")


async function downloadScreenshot() {
  // const pic = modelViewer[0].toDataURL().replace("image/png", "image/octet-stream");
  // window.location.href = pic;

  let idealPic = await modelViewer[0].toBlob({qualityArgument: 0.92, idealAspect: true})
  // idealPic.replace("image/png", "image/octet-stream")
  const idealPicurl = URL.createObjectURL(idealPic, {type: 'image/png'})
  // window.location.href = idealPicurl;
  downloadButton.href = idealPicurl
}


picButton.addEventListener('click', downloadScreenshot)

*/
