import { useContext, useEffect } from 'react';
import { SocketContext } from '../contexts/Contexts';

const useNamespace = (id) => {
  const { namespace } = useContext(SocketContext);
  const [, setUrl] = namespace || [];

  useEffect(() => {
    setUrl(id);
  }, [id]);
};

export default useNamespace;
