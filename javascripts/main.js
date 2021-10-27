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


const socialMediaFooterUl = document.querySelector('#main-footer .social-media-footer ul');

if (socialMediaFooterUl.children.length === 0) {
  socialMediaFooterUl.parentElement.style.display = 'none';
}

console.log(socialMediaFooterUl.children.length);