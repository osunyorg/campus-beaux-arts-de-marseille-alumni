var personContent = document.querySelector('.persons__page main'),
    heroFigure,
    heroImage;

function setPersonSingleMinHeight() {
  if (!personContent) {
    return;
  }

  heroFigure = personContent.querySelector('.hero figure');

  if (!heroFigure) {
    return;
  }

  heroImage = heroFigure.querySelector('img');

  if (!heroImage) {
    return;
  }

  function updatePersonSingleMinHeight() {
    var height = heroFigure.offsetHeight;
    console.log(height)

    if (window.innerWidth >= 992) {
      personContent.style.minHeight = 'calc(' + height + 'px + var(--header-height))';
    } else {
      personContent.style.minHeight = '0';
    }
  }

  heroImage.addEventListener('load', updatePersonSingleMinHeight);
  window.addEventListener('resize', updatePersonSingleMinHeight);

  updatePersonSingleMinHeight();
}


setPersonSingleMinHeight();