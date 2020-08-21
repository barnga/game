import React from 'react';
import { useParams } from 'react-router';
import Players from './Players';

const WaitingRoom = () => {
  const { gameId } = useParams();

  return (
    <section className="pb-0 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <h1>Game ID: {gameId}</h1>
            <hr />
            <div className="d-flex justify-content-center align-items-center">
              <Players />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingRoom;
