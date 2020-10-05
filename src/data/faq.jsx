import React from 'react';
import { Link } from 'react-router-dom';

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
        Click <Link to="/create">here</Link> to create a game that others can join.
        You’ll need a minimum of 6 players to start the game.
        Once you start the game, players will be randomly split into groups and be automatically dealt a hand.
        As a facilitator, you’ll be able to spectate every group, and you’ll be able to send messages to everyone by using the global chat.
        In the first round, players will have access to all the methods of communication (the chat and the drawing tool).
        Winners in this round will be decided by the trump cards and the rules set at each of the tables.
        Each table will have a different rule sheet. The facilitator can re-deal the cards in each one of the rooms to allow the players
        in those rooms to get familiar with their table's rules and play more rounds under that rule set.
        When the rooms are shuffled, players will not be able to view their rulesheet or speak in their chat.
      </>,
  },
];

export default faq;
