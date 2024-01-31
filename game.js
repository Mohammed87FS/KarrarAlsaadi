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
        const cells = Array.from(card.children);
        const size = 3; // Assuming a 3x3 Bingo card
        let isBingo = false;

        // Check rows and columns
        for (let i = 0; i < size; i++) {
            const row = cells.slice(i * size, i * size + size);
            const column = cells.filter((_, index) => index % size === i);
            if (row.every(cell => cell.classList.contains('marked')) || column.every(cell => cell.classList.contains('marked'))) {
                isBingo = true;
                break;
            }
        }

        // Check diagonals
        const diagonal1 = [cells[0], cells[4], cells[8]];
        const diagonal2 = [cells[2], cells[4], cells[6]];
        if (diagonal1.every(cell => cell.classList.contains('marked')) || diagonal2.every(cell => cell.classList.contains('marked'))) {
            isBingo = true;
        }

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
