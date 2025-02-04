import React, { useContext, useState } from 'react';
import { Modal, Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { GameContext } from '../../contexts/Contexts';
import TournamentGuidelines from './components/TournamentGuidelines';
import FiveTricksRules from './components/FiveTricksRules';

const Rulesheet = ({ isTeacher }) => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];
  const [showPage, setShowPage] = useState(1);
  const pages = isTeacher ? [<TournamentGuidelines />] : (
    [<TournamentGuidelines />, <FiveTricksRules />]
  );

  return (
    <Modal
      centered
      show={gameSettings?.showRules}
      onHide={() => setGameSettings((settings) => ({
        ...settings,
        showRules: false,
      }))}
    >
      {pages[showPage - 1]}
      <Modal.Footer>
        <Pagination>
          {pages.map((page, idx) => {
            const pageNumber = idx + 1;
            return (
              <Pagination.Item
                active={showPage === pageNumber}
                onClick={() => setShowPage(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </Modal.Footer>
    </Modal>
  );
};

Rulesheet.propTypes = {
  isTeacher: PropTypes.bool,
};

export default Rulesheet;
