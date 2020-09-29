import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StrokesContext } from '../../../contexts/Contexts';

const ClearButton = ({ teacher, roomId }) => {
  const { strokesState } = useContext(StrokesContext) || {};
  const [strokesSettings, setStrokesSettings] = strokesState || [];

  return (
    <Button
      block
      variant="outline-primary"
      onClick={() => {
        if (teacher) {
          const { roomStrokes } = strokesSettings;
          roomStrokes[roomId] = {};

          setStrokesSettings((settings) => ({
            ...settings,
            roomStrokes,
          }));
        } else {
          setStrokesSettings((settings) => ({
            ...settings,
            strokes: {},
          }));
        }
      }}
    >
      Clear
    </Button>
  );
};

ClearButton.propTypes = {
  teacher: PropTypes.bool,
  roomId: PropTypes.string,
};

export default ClearButton;
