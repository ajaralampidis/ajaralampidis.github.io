// import Siema from 'siema.min.js'

// ================ NavBar ========================
const contactButton = document.getElementById('contact');
const webDevButton = document.getElementById('webDev');
const artButton = document.getElementById('art');
const industrialDesignButton = document.getElementById('industrialDesign');
const multimediaButton = document.getElementById('multimedia');

// ================= Modals ========================
let modalOverlay = document.getElementById('modalOverlay'); // not a modal but the overlay
let allModals = document.getElementsByClassName('modal') // all modal Html collection (not an array but kind of)
let contactModal = document.getElementById('contactModal');
let webDevModal = document.getElementById('artModal');
let artModal = document.getElementById('artModal');
let industrialDesignModal = document.getElementById('industrialDesignModal');
let multimediaModal = document.getElementById('multimediaModal');

// ================= Opening Modal EventHandler ===================
function openModal(event) {

  const selector = event.target.id

  modalOverlay.style.visibility = 'visible';

  switch (selector) {
    case 'contact':
      contactModal.style.visibility = 'visible';
      contactModal.style.height = '80vh'
      break;
    case 'webDev':
      webDevModal.style.visibility = 'visible';
      webDevModal.style.height = '80vh'
      break;
    case 'art':
      artModal.style.visibility = 'visible';
      artModal.style.height = '80vh'
      break;
    case 'industrialDesign':
      industrialDesignModal.style.visibility = 'visible';
      industrialDesignModal.style.height = '80vh'
      break;
    case 'multimedia':
      multimediaModal.style.visibility = 'visible';
      multimediaModal.style.height = '80vh'
      break;
  }
}

// ===================== NavBar button eventListeners ===================

contactButton.addEventListener('click', openModal)
webDevButton.addEventListener('click', openModal)
artButton.addEventListener('click', openModal)
industrialDesignButton.addEventListener('click', openModal)
multimediaButton.addEventListener('click', openModal)



// ================== close modals when click on overlay ===================

function overlayCloseModal () {
  for (let modal of allModals) {
    modal.style.height = '0px'
    modal.style.visibility = 'hidden';
  }
  modalOverlay.style.visibility = 'hidden'
}
modalOverlay.addEventListener('click', overlayCloseModal)

// ================= carousel 








/*

===================== NavBar ==========================

<a class="navElement" id='contact'>
<span class="navElementIndicator"> > </span> Contact Me !
</a>

<a class="navElement" id='webDev'>
<span class="navElementIndicator"> > </span> Web Development
</a>

<a class="navElement" id='art'>
<span class="navElementIndicator"> > </span> Art & Illustration
</a>

<a class="navElement" id='industrialDesign'>
<span class="navElementIndicator"> > </span> Industrial Design
</a>

<a class="navElement" id='multimedia'>
<span class="navElementIndicator"> > </span> Multimedia
</a>


===================== Modals ================================

  <div class='modalOverlay'></div>

  <div id='contactModal' class="modal div"> hola</div>

  <div id='webDevModal' class="modal embed" >
    <embed src="" type="aplication/pdf" frameborder='0' allowfullscreen>
  </div>

  <div id='artModal' class="modal div"> </div>

  <div id='industrialDesignModal' class="embed modal">
    <embed src="./assets/Portfolio-Agustin-Jaralampidis-Small.pdf" type="application/pdf" frameborder="0" allowfullscreen>
  </div>

  <div id='multimediaModal' class="modal div"> </div>


*/
