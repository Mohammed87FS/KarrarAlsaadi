document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('bingo-card');
  const bingoMessage = document.getElementById('bingo-message');
  document.getElementById('refresh-button').addEventListener('click', function() {
      location.reload();
  });

  function generateBingoCard() {
      card.innerHTML = '';
      let cardContents = [
          'PETER KLIEN SPRICHT ÜBER DIE FPÖ',
          'PETER KLIEN SAGT "GUTE NACHT ÖSTERREICH"',
          'ALKOHOL IST IM BILD ZU SEHEN',
          'PETER KLIEN SAGT "SIE WERDEN LACHEN, ES WIRD ERNST"',
          'VERSAGEN DER ÖSTERREICHISCHEN POLITIK IST THEMA',
          'PETER KLIEN VERÄPPELT ÖSTERREICHER:INNEN',
          'PETER KLIEN SPRICHT ÜBER DIE ÖVP',
          'ROTES ORF-MIKROFON IST IM BILD ZU SEHEN',
          'DAS PUBLIKUM IM STUDIO LACHT'
      ];

      for (let i = 0; i < 9; i++) {
          const cell = document.createElement('div');
          cell.classList.add('bingo-cell');
          cell.textContent = cardContents[i]; // Add text content instead of an image
          card.appendChild(cell);

          cell.addEventListener('click', function() {
              this.classList.toggle('marked');
              checkBingo();
          });
      }
  }

  function checkBingo() {
      const firstRowCells = Array.from(card.children).slice(0, 3);
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
