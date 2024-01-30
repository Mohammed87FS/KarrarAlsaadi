document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('bingo-card');
  const bingoMessage = document.getElementById('bingo-message');
  document.getElementById('refresh-button').addEventListener('click', function() {
      location.reload();
  });

  function generateBingoCard() {
      card.innerHTML = '';
      let images = [
          'img.jpg', // Ensure paths are correct
          'img2.jpg',
          'img3.jpg',
          'img4.jpg',
          'img5.jpg',
          'img6.jpg',
          'img7.jpg',
          'img8.jpg',
          'img9.jpg'
      ];

      for (let i = 0; i < 9; i++) {
          const cell = document.createElement('div');
          cell.classList.add('bingo-cell');
          const img = document.createElement('img');
          img.src = images[i];
          img.alt = 'Bingo image ' + (i + 1); // Added dynamic alt text
          cell.appendChild(img);
          card.appendChild(cell);

          cell.addEventListener('click', function() {
              this.classList.toggle('marked');
              checkBingo();
          });
      }
  }

  function checkBingo() {
      const firstRowCells = Array.from(card.children).slice(0, 3); // Get only the first row cells
      const isBingo = firstRowCells.every(cell => cell.classList.contains('marked'));

      if (isBingo) {
          showRefreshButton();
      } else {
          bingoMessage.classList.remove('show');
      }
  }

  function showRefreshButton() {
      bingoMessage.textContent = 'Bingo!';
      bingoMessage.classList.add('show');
      const refreshButton = document.getElementById('refresh-button');
      refreshButton.style.display = 'block';
  }

  generateBingoCard();
});
