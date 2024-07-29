//? [Sistema de Temas]
const getStoredTheme = () => localStorage.getItem('theme')
const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())
  

//* Dropdowns abrirem ao passar o mouse
$('.auto-open').mouseleave(function() {
  $(this).find('.dropdown-menu').removeClass('grow-menu');
});

$('.auto-open').mouseenter(function() {
  $(this).find('.dropdown-menu').addClass('grow-menu');
});

//* Dropdowns abrirem ao clicar
$('.auto-open').click(function() {
  $(this).find('.dropdown-menu').toggleClass('grow-menu');
});

//* Navbar toggle
$('.navbar-toggler').click(function() {
  $('.navbar-collapse').toggleClass('show');
});

//quando se apertar em um link com o id theme-switch
$('#theme-switch').click(function() {
  const currentTheme = getStoredTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Determina o novo tema baseado no atual
  setStoredTheme(newTheme); // Armazena o novo tema
  setTheme(newTheme); // Aplica o novo tema
  updateThemeIcon(newTheme); // Atualiza o ícone do tema
  
});

$(document).ready(function() {
   // Usa a função existente para obter o tema atual
  updateThemeIcon(getStoredTheme());
  console.log('theme-switch loaded');
  
});

function updateThemeIcon(theme){
  //ids light-icon e dark-icon
  if(theme === 'dark'){
    $('#dark-icon').hide();
    $('#light-icon').show();
  } else {
    $('#light-icon').hide();
    $('#dark-icon').show();
  }
}