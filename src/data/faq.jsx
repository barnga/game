import React from 'react';
import { Link } from 'react-router-dom';
import teacherView from '../assets/img/gameplay/teacher_view.png';
import playerView from '../assets/img/gameplay/player_view.png';

const faq = [
  {
    title: 'What is Barnga?',
    body: 'Barnga is a simulation card game that makes participants reevaluate their assumptions about cultural norms, helping them better understand cross-cultural communication. The idea was innovated by Sivasailam “Thiagi” Thiagarajan in 1980, while working for USAID in Gbarnga, Liberia. Thiagi was playing a card game with colleagues who came from places all around the world, but each of them had their own understanding or version of the same game that they were playing, which led to disagreement. While playing this game, he realized that conflicts don’t only arise from major cultural differences, but sometimes more subtle ones. Thiagi\'s goal was to draw out these subtleties of cross-cultural communication and make the understanding that he came upon accessible to everyone who played it.',
  },
  {
    title: 'Why play Barnga?',
    body: 'This game is best to be played as a bonding experience for groups when they are first starting to effectively communicate with each other. The goal of playing Barnga is to demonstrate to group members what happens when communication between people starts to break down. It could be used in an educational environment, for students that are still getting used to the norms of the classroom environment. It is also a very fun way to teach people about intercultural communication!',
  },
  {
    title: 'How do I play it?',
    body:
  <>
    <p>
      Click <Link to="/create">here</Link> to create a game that others can join.
      A minimum of 6 players to start the game.
      Once the game is started, players will be randomly split
      into groups and be automatically dealt a hand.
    </p>
    <h6>Facilitator view</h6>
    <img src={teacherView} alt="Facilitator's view of the game, in which they can spectate games, chat with players, and shuffle the groups." />
    <h6>Player view</h6>
    <img src={playerView} alt="Player's view of the game, which allows them to play cards, chat with other players, and draw on the game board." />
    <p>
      Facilitators can spectate and send messages to every group.
      The global chat can also be used to send messages to all players.
      Before facilitators shuffle the groups, players have access
      to their group&apos;s chat and rulesheet.
      The winner for each round is automatically decided by the computer,
      and their score is updated in the leaderboard.
      The facilitator can re-deal the cards in each of the rooms to allow players
      in those rooms to get familiar with their group&apos;s rules.
      When the rooms are shuffled, players will not be
      able to view their rulesheet or speak in their chat,
      although they will still be allowed to draw on the game board.
      Players will vote for the winner after each round.
    </p>
  </>,
  },
];

export default faq;
