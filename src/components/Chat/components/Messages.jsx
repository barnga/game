import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import Svg from '../../Svg';
import groupchat from '../../../assets/img/icons/theme/communication/group-chat.svg';
import themeColors from '../../../assets/scss/user-variables.scss';

const Messages = ({ global, admin, roomId }) => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    let subscribed = true;

    if (admin) {
      const handleMessagesUpdate = (data) => {
        if (data.roomId !== roomId) return;
        const { message } = data;

        if (subscribed) {
          setGameSettings((settings) => {
            const { roomMessages } = settings;
            const messages = settings.roomMessages[roomId] ?? [];
            messages.push(message);
            roomMessages[roomId] = messages;

            return ({
              ...settings,
              roomMessages,
            });
          });
        }
      };

      socket.on('messages update room', handleMessagesUpdate);

      return () => {
        subscribed = false;
        socket.off('messages update room', handleMessagesUpdate);
      };
    }

    const handleMessagesUpdate = (message) => {
      if (subscribed) {
        setGameSettings((settings) => ({
          ...settings,
          messages: settings.messages.concat(message),
        }));
      }
    };

    socket.on('messages update', handleMessagesUpdate);

    return () => {
      subscribed = false;
      socket.off('messages update', handleMessagesUpdate);
    };
  }, []);

  if (
    (admin && (gameSettings.roomMessages[roomId] ?? []).length === 0)
      || (!admin && gameSettings.messages?.length === 0)
  ) {
    return (
      <div className="d-flex flex-column flex-grow-1 overflow-auto justify-content-center align-items-center">
        <div className="text-center">
          <Svg src={groupchat} classNames="icon" alt="decoration" />
          <p>No messages</p>
        </div>
      </div>
    );
  }

  let backgroundDark = false;
  return (
    <div className="d-flex flex-column flex-grow-1 overflow-auto">
      {(admin ? gameSettings.roomMessages[roomId] : gameSettings.messages)?.map((message, idx) => {
        const messageList = admin ? gameSettings.roomMessages[roomId] : gameSettings.messages;
        const newSender = idx === 0
            || (messageList[idx - 1].sender.socketId !== message.sender.socketId);
        backgroundDark = (newSender && !message.global)
          ? !backgroundDark
          : backgroundDark; // Dont toggle if message is global

        const key = `${message.sender.socketId}_${idx}`;
        const backgroundColor = (backgroundDark ? '#ffffff' : themeColors.light);

        return (
          <div
            style={{
              backgroundColor: (message.global ? themeColors['primary-2'] : backgroundColor),
            }}
            key={key}
            className="px-3 pt-1"
          >
            {newSender ? <strong className="mb-0">{message.sender.nickname}</strong> : undefined}
            <p className="p-0 mb-0">{message.body}</p>
          </div>
        );
      })}
    </div>
  );
};

Messages.propTypes = {
  global: PropTypes.bool,
  admin: PropTypes.bool,
  roomId: PropTypes.string,
};

export default Messages;
