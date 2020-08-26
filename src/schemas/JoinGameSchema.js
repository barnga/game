import * as Yup from 'yup';

const JoinGameSchema = Yup.object().shape({
  gameId: Yup.string().required(),
  nickname: Yup.string().required(),
});

export default JoinGameSchema;
