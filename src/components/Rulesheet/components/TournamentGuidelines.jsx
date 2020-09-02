import React from 'react';
import { Modal } from 'react-bootstrap';

const TournamentGuidelines = () => (
  <>
    <Modal.Header closeButton>
      <h4 className="p-0 m-0">Tournament Guidelines</h4>
    </Modal.Header>
    <Modal.Body>
      <h5>Practice Game</h5>
      <p>
        You will have about 5 minutes to learn how to play a card game
        called Five Tricks and play a few rounds with your group.
      </p>
      <h5>Tournament</h5>
      <p>
        Based on the winner(s) of the practice game,
        players will switch groups and begin the actual tournament.
        If your group has 3-4 people, the player who has the highest
        score will move to the next highest-numbered group.
        If your group has more than four people:
      </p>
      <ul>
        <li>The top two players will move to the next highest-numbered group</li>
        <li>
          The player who has won the least number of rounds
          will move to the next lowest-numbered group
        </li>
        <li>Other players stay at their table</li>
      </ul>
      <p>Ties are resolved by alphabetical order.</p>
      <h5>Rules of the Tournament</h5>
      <ul>
        <li>Players may only communicate by drawing pictures on the drawing board</li>
        <li>Players may not write words on the drawing board</li>
        <li>No verbal communication (no talking, messaging, etc.)</li>
      </ul>
    </Modal.Body>
  </>
);

export default TournamentGuidelines;
