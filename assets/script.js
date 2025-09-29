const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

// Passo 2: Variáveis de controle
let currentIndex = 0; // Começamos na primeira imagem (índice 0)
const totalImages = images.length; // Guarda o número total de imagens que temos

// Passo 3: A função que avança para a próxima imagem
function nextImage() {
  
  // Avança para o próximo índice
  currentIndex = (currentIndex + 1) % totalImages;
  
  // Calcula a posição que o carrossel deve rolar
  const offset = currentIndex * carousel.offsetWidth;
  
  // Executa a rolagem suave
  carousel.scrollTo({
    left: offset,
    behavior: 'smooth'
  });
}

// Passo 4: O temporizador que automatiza tudo
setInterval(nextImage, 3000); // Chama a função nextImage a cada 3000 milissegundos (ou 3 segundos)