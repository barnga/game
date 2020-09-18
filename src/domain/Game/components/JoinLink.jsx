import React, { useState, useRef, useContext } from 'react';
import {
  Button, Modal, InputGroup, Form, FormControl,
} from 'react-bootstrap';
import { useParams } from 'react-router';
import Svg from '../../../components/Svg';
import clipboard from '../../../assets/img/icons/theme/general/clipboard.svg';
import clipboardCheck from '../../../assets/img/icons/theme/communication/clipboard-check.svg';
import { GameContext } from '../../../contexts/Contexts';

const JoinLink = () => {
  const { gameId } = useParams();
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];
  const { adminToken } = gameSettings || {};

  const [showModal, setShowModal] = useState(true);
  const [copiedStudent, setCopiedStudent] = useState(false);
  const [copiedTeacher, setCopiedTeacher] = useState(false);

  const playerLinkTextArea = useRef();
  const teacherLinkTextArea = useRef();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const copyStudent = () => {
    playerLinkTextArea.current?.select();
    document.execCommand('copy');

    setCopiedTeacher(false);
    setCopiedStudent(true);
  };

  const copyTeacher = () => {
    teacherLinkTextArea.current?.select();
    document.execCommand('copy');

    setCopiedTeacher(true);
    setCopiedStudent(false);
  };

  console.log(gameState);
  const playerLink = `${window.location.protocol}//${window.location.host}/p/${gameId}`;
  const teacherLink = `${window.location.protocol}//${window.location.host}/p/${gameId}?token=${adminToken}`;

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow} block>
        Share
      </Button>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Student join link</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                ref={playerLinkTextArea}
                value={playerLink}
                readOnly
              />
              <InputGroup.Append>
                <Button
                  variant={copiedStudent ? 'outline-success' : 'outline-secondary'}
                  onClick={copyStudent}
                >
                  <Svg src={copiedStudent ? clipboardCheck : clipboard} classNames="icon" alt="Copy" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Admin join link</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                ref={teacherLinkTextArea}
                value={teacherLink}
                readOnly
              />
              <InputGroup.Append>
                <Button
                  variant={copiedTeacher ? 'outline-success' : 'outline-secondary'}
                  onClick={copyTeacher}
                >
                  <Svg src={copiedTeacher ? clipboardCheck : clipboard} classNames="icon" alt="Copy" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JoinLink;
