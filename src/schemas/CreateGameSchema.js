import * as Yup from 'yup';

const CreateGameSchema = Yup.object().shape({
  playersPerTable: Yup.number().min(3).max(6).default(4),
  nickname: Yup.string().max(20).default('Admin'),
});

export default CreateGameSchema;
