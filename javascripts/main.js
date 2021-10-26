/* 

=================================
=================================

      Get Window Size

=================================
=================================

*/

window.addEventListener('resize', e => {
  console.log(`W: ${window.innerWidth}; H: ${window.innerHeight}`);
});




/* 

=================================
=================================

      Side Nav [Drop Down Menu]

=================================
=================================

*/

// Getting Elements
const dropDownButtons = document.querySelectorAll('#side-nav .sub-menu');
const dropDownLists = document.querySelectorAll('#side-nav .sub-menu ul');
const hamburgerButton = document.querySelector('#menu-toggle');

// Adding Events to All Drop Down Buttons
dropDownButtons.forEach((dropDownButton, key) => {
  dropDownButton.addEventListener('click', (e) => {

    // Close All Opened Menu
    dropDownLists.forEach(dropDownList => {
      dropDownList.classList.remove('open');
    });

    dropDownLists[key].classList.toggle('open');
    
  });
});

hamburgerButton.addEventListener('click', () => {
  console.log(1);
  document.querySelector('#side-nav').classList.toggle('show');
});