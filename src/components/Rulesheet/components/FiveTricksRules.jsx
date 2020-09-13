import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { GameContext } from '../../../contexts/Contexts';
import rulesheetTrumps from '../../../data/rulesheetTrumps';

const FiveTricksRules = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];
  const trumpCard = rulesheetTrumps[gameSettings.rulesheetId];

  return (
    <>
      <Modal.Header closeButton>
        <h4 className="p-0 m-0">How to Play Five Tricks</h4>
      </Modal.Header>
      <Modal.Body>
        <h5>Number of Players</h5>
        <p>4 - 6</p>
        <h5>Cards</h5>
        <p>
          Only 28 cards are used: Ace, 2, 3, 4, 5, 6, and 7 in
          each suit. Ace is the lowest card.
        </p>
        <h5>Deal</h5>
        <p>Each player is automatically dealt between 4 - 7 cards at the start of each game.</p>
        <h5>Starting a Game</h5>
        <p>
          A player will be randomly chosen to start each game.
          Other players take turns playing a card.
          When it is your turn to play a card, your game board will display a green outline.
          The cards played (one from each player) constitute a “trick”.
          For the last trick, there may not be enough cards for everyone to play.
        </p>
        <h5>Winning Tricks</h5>
        <p>
          When each player has played a card, the highest card wins the trick.
          The one who played this card gets a point,
          which is displayed on the leaderboard. This marks the end of a round.
        </p>
        <h5>Continuation</h5>
        <p>
          The winner of the trick leads the next round which is played as before.
          This process is repeated until all cards have been played.
        </p>
        <h5>Following Suit</h5>
        <p>
          The first player for each round may play any suit.
          All other players must play a card of the same suit as the first card.
          If you do not have a card of the first suit, play a card of any other suit.
          The trick is won by the highest card of the original lead suit.
        </p>
        {trumpCard && (
          <>
            <h5>Trump Cards</h5>
            <p>
              In this game, {trumpCard} are trumps.
              You may play a {trumpCard} any time you want
              to- even if you have a card of the first suit. This is called trumping.
              You win the trick even if the {trumpCard} you played is a low card.
              However, some other player may also play a trump
              (If they do not have a card of the first suit).
              In this case, the highest trump wins the trick.
            </p>
          </>
        )}
        <h5>End/Win</h5>
        <p>
          Game ends when all cards have been played.
          The player who has won the most tricks wins the game.
        </p>
      </Modal.Body>
    </>
  );
};

export default FiveTricksRules;
