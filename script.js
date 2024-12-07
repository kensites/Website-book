// search brou
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content');

// Menu Show
if (searchButton) {
  searchButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Mencegah event bubbling
    searchContent.classList.add('show-search');
  });
}

// Menu Hide
if (searchClose) {
  searchClose.addEventListener('click', (event) => {
    event.stopPropagation(); // Mencegah event bubbling
    searchContent.classList.remove('show-search');
  });
}

// Close search when clicking outside of it
document.addEventListener('click', (event) => {
  // Cek apakah klik terjadi di luar searchContent
  if (searchContent.classList.contains('show-search') && !searchContent.contains(event.target) && event.target !== searchButton) {
    searchContent.classList.remove('show-search');
  }
});

// const searchButton = document.getElementById('search-button'),
//       searchClose = document.getElementById('search-close'),
//       searchContent = document.getElementById('search-content'),
//       searchOverlay = document.getElementById('search-overlay'); // Elemen background

// // Menu Show
// if (searchButton) {
//   searchButton.addEventListener('click', (event) => {
//     event.stopPropagation(); // Mencegah event bubbling
//     searchContent.classList.add('show-search');
//     searchOverlay.classList.add('active'); // Tampilkan overlay
//   });
// }

// // Menu Hide
// if (searchClose) {
//   searchClose.addEventListener('click', (event) => {
//     event.stopPropagation(); // Mencegah event bubbling
//     searchContent.classList.remove('show-search');
//     searchOverlay.classList.remove('active'); // Sembunyikan overlay
//   });
// }

// // Mencegah penutupan saat mengklik di dalam searchContent
// if (searchContent) {
//   searchContent.addEventListener('click', (event) => {
//     event.stopPropagation(); // Jangan teruskan ke document
//   });
// }

// // Close search when clicking outside of it (on overlay)
// if (searchOverlay) {
//   searchOverlay.addEventListener('click', () => {
//     searchContent.classList.remove('show-search');
//     searchOverlay.classList.remove('active');
//   });
// }

// const searchButton = document.getElementById('search-button'),
//       searchClose = document.getElementById('search-close'),
//       searchContent = document.getElementById('search-content'),
//       searchOverlay = document.getElementById('search-overlay');

// // Menu Show
// if (searchButton) {
//   searchButton.addEventListener('click', (event) => {
//     event.stopPropagation(); // Mencegah event bubbling
//     searchContent.classList.add('show-search');
//     searchOverlay.classList.add('active'); // Tampilkan overlay
//   });
// }

// // Menu Hide
// if (searchClose) {
//   searchClose.addEventListener('click', (event) => {
//     event.stopPropagation(); // Mencegah event bubbling
//     searchContent.classList.remove('show-search');
//     searchOverlay.classList.remove('active'); // Sembunyikan overlay
//   });
// }

// // Mencegah penutupan saat mengklik di dalam searchContent
// if (searchContent) {
//   searchContent.addEventListener('click', (event) => {
//     event.stopPropagation(); // Jangan teruskan ke document
//   });
// }

// // Close search when clicking outside of it (on overlay)
// if (searchOverlay) {
//   searchOverlay.addEventListener('click', () => {
//     searchContent.classList.remove('show-search');
//     searchOverlay.classList.remove('active');
//   });
// }


// login button

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content');

// Show Login
if (loginButton) {
  loginButton.addEventListener('click', () => {
    loginContent.classList.add('show-login');
  });
}

// Hide Login
if (loginClose) {
  loginClose.addEventListener('click', () => {
    loginContent.classList.remove('show-login');
  });
}

// Close login when clicking outside of it
document.addEventListener('click', (event) => {
  if (loginContent.classList.contains('show-login') && !loginContent.contains(event.target) && event.target !== loginButton) {
    loginContent.classList.remove('show-login');
  }
});

// Close login with Esc key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && loginContent.classList.contains('show-login')) {
    loginContent.classList.remove('show-login');
  }
});


// shadow header
const shadowHeader = () => {
  const header = document.getElementById('header');

  // When the scroll is greater than 50 viewport height, add the shadow-header class
  this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);


// swiper
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});

// swiper satunya
let swiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    1150: {
     slidesPerView: 4,
     centeredSlides: false,
    }
  }
})

// swiper testimonial

let swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    }
  }
})

// new swiper
let swiperNew = new Swiper('.new__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  breakpoints: {
    1150: {
      slidesPerView: 3,
    }
  }
})

// show scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// scroll link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id')
    const sectionsClass = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll', scrollActive)

// dark light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

  // Optional parameters
  
// const loginButton = document.getElementById('login-button'),
//       loginClose = document.getElementById('login-close'),
//       loginContent = document.getElementById('login-content')
//       // login show

//       if (loginButton) {
//         loginButton.addEventListener('click', () => {
//           loginContent.classList.add('show-login')
//         })
//       }
      
//       /* ===== LOGIN HIDDEN ===== */
//       /* Validate if constant exists */
//       if (loginClose) {
//         loginClose.addEventListener('click', () => {
//           loginContent.classList.remove('show-login')
//         })
//       }


// // Search Form
// const searchForm = document.querySelector('.search__form');
// const searchInput = document.querySelector('.search__input');
// const searchIcon = document.querySelector('.search__icon');
// const searchClose = document.querySelector('.search__close');

// // Show/Hide Search
// searchIcon.addEventListener('click', () => {
//   searchForm.classList.add('active');
//   searchIcon.classList.add('hide');
//   searchClose.classList.add('show');
// });

// // Hide Search
// searchClose.addEventListener('click', () => {
//   searchForm.classList.remove('active');
//   searchIcon.classList.remove('hide');
//   searchClose.classList.remove('show');
//   searchInput.value = '';
// });