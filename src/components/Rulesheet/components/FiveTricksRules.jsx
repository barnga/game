import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { GameContext } from '../../../contexts/Contexts';

const FiveTricksRules = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];

  return (
    <>
      <Modal.Header closeButton>
        <h4 className="p-0 m-0">Rules</h4>
      </Modal.Header>
      <Modal.Body>
        <p>Rulesheet ID: {gameSettings.rulesheetId}</p>
      </Modal.Body>
    </>
  );
};

export default FiveTricksRules;
