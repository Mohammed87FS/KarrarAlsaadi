document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('bingo-card');
    const bingoMessage = document.getElementById('bingo-message');
    document.getElementById('refresh-button').addEventListener('click', function() {
        location.reload();
      });
    function generateBingoCard() {
    
      card.innerHTML = '';
      let images = [
        '\img.jpg', 
        '\img2.jpg', 
        '\img3.jpg', 
        '\img4.jpg',
         '\img5.jpg',
          '\img6.jpg', 
          '\img7.jpg',
         '\img8.jpg',
         '\img9.jpg'     
      ];
  
      // Shuffle images array
      images.sort(() => 0.5 - Math.random());
  
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        cell.setAttribute('data-row', Math.floor(i / 3));
        cell.setAttribute('data-col', i % 3);
        const img = document.createElement('img');
        img.src = images[i];
        img.alt = 'Bingo image';
        cell.appendChild(img);
        card.appendChild(cell);
  
        cell.addEventListener('click', function() {
          this.classList.toggle('marked');
          if (checkBingo()) {
            bingoMessage.textContent = 'Bingo!';
            bingoMessage.classList.add('show');
          } else {
            bingoMessage.classList.remove('show');
          }
        });
      }
    }
  
    function checkBingo() {
        const rows = 3;
        const cols = 3;
        let cardArray = Array.from(document.querySelectorAll('.bingo-cell')).map(cell => cell.classList.contains('marked'));
      
        for (let row = 0; row < rows; row++) {
          if (cardArray.slice(row * cols, (row + 1) * cols).every(val => val)) {
            showRefreshButton();
            return true;
          }
        }
      
        for (let col = 0; col < cols; col++) {
          if (cardArray.filter((_, index) => index % cols === col).every(val => val)) {
            showRefreshButton();
            return true;
          }
        }
      
        if (cardArray.filter((_, index) => index % (cols + 1) === 0).every(val => val)) {
          showRefreshButton();
          return true;
        }
        if (cardArray.filter((_, index) => index % (cols - 1) === 0 && index !== 0 && index !== cardArray.length - 1).every(val => val)) {
          showRefreshButton();
          return true;
        }
      
        return false;
      }
      
      function showRefreshButton() {
        bingoMessage.textContent = 'Bingo!';
        bingoMessage.classList.add('show');
        const refreshButton = document.getElementById('refresh-button');
        refreshButton.style.display = 'block';
      }
      
  
    generateBingoCard(); 
  });
  