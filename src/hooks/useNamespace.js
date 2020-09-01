import { useContext, useEffect } from 'react';
import { SocketContext } from '../contexts/Contexts';

const useNamespace = (id) => {
  // TODO: Get base url from .env instead of localhost:7000
  const { namespace } = useContext(SocketContext);
  const [, setUrl] = namespace || [];

  useEffect(() => {
    setUrl(id);
  }, [id]);
};

export default useNamespace;
