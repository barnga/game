import * as Yup from 'yup';

const JoinGameSchema = Yup.object().shape({
  gameId: Yup.string().required().length(6),
  nickname: Yup.string().required().max(20),
});

export default JoinGameSchema;
