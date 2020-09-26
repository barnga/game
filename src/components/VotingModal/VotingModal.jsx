import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { GameContext } from '../../contexts/Contexts';
import VotingModalForm from './components/VotingModalForm';

const VotingModal = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || {};

  return (
    <Modal
      centered
      show={gameSettings?.showVoting}
      onHide={() => setGameSettings((settings) => ({
        ...settings,
        showVoting: false,
      }))}
    >
      <Modal.Header>
        <div>
          <h4 className="p-0 m-0 mb-2">Vote for the Winner</h4>
          <span>
            Choose one player to win the round.
            In the event of a tie, the winner will be decided by random chance.
            The round will not end until all players have voted.
          </span>
        </div>
      </Modal.Header>
      <Modal.Body>
        <VotingModalForm />
      </Modal.Body>
    </Modal>
  );
};

export default VotingModal;
