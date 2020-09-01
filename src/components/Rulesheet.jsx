import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { GameContext } from '../contexts/Contexts';

const Rulesheet = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  return (
    <Modal
      centered
      show={gameSettings?.showRules}
      onHide={() => setGameSettings((settings) => ({ ...settings, showRules: false }))}
    >
      <Modal.Header closeButton>
        <h2 className="p-0 m-0">Rules</h2>
      </Modal.Header>
      <Modal.Body>
        <p>Rulesheet ID: {gameSettings.rulesheetId}</p>
      </Modal.Body>
    </Modal>
  );
};

export default Rulesheet;
