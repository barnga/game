import generateId from './generateId';

localStorage.setItem('sessionId', generateId(15));
localStorage.setItem('role', null);
