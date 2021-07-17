let scores, roundScore, activePlayer, gamePlaying;

init();

//ROLL DICE
document.getElementById('rollBtn').addEventListener('click', function() {
    if (gamePlaying) {
        let randomDice = Math.floor(Math.random() * 6) + 1;

        //DISPLAY RESULT
        let displayDice = document.getElementById('dice');
        displayDice.style.display = 'block';
        displayDice.src = 'images/dice-' + randomDice + '.png';


        //ADD SCORE TO CURRENTSCORE
        if (randomDice !== 1) {
            roundScore += randomDice;
            document.querySelector('#currentScore-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

//HOLD SCORE
document.querySelector('#holdBtn').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.getElementById('globalScore-' + activePlayer).textContent = scores[activePlayer];
    }

    //CHECK IF THERE IS A WINNER
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
        document.querySelector('#dice').style.display = 'none';
        document.querySelector('#player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('#player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
});

//NEXT PLAYER
function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;

    document.getElementById('currentScore-1').textContent = '0';
    document.getElementById('currentScore-2').textContent = '0';

    document.querySelector('#player-1-panel').classList.toggle('active');
    document.querySelector('#player-2-panel').classList.toggle('active');

    document.querySelector('#dice').style.display = 'none';
};



//NEW GAME
document.querySelector('#newGameBtn').addEventListener('click', (init));

function init() {

    scores = [0, 0];
    activePlayer = 1;
    roundScore = 0;
    gamePlaying = true;


    document.getElementById('dice').style.display = 'none';

    document.getElementById('globalScore-1').textContent = '0';
    document.getElementById('globalScore-2').textContent = '0';
    document.getElementById('currentScore-1').textContent = '0';
    document.getElementById('currentScore-2').textContent = '0';
    document.querySelector('#name-1').classList.remove('winner');
    document.querySelector('#name-2').classList.remove('winner');
    document.querySelector('#name-1').textContent = 'Player 1';
    document.querySelector('#name-2').textContent = 'Player 2';
    document.querySelector('#player-1-panel').classList.remove('active');
    document.querySelector('#player-2-panel').classList.remove('active');
    document.querySelector('#player-1-panel').classList.remove('winner');
    document.querySelector('#player-2-panel').classList.remove('winner');
    document.querySelector('#player-1-panel').classList.add('active');

};