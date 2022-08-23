import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
<<<<<<< HEAD
    email: 'test@test.com',
=======
    email: '',
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  });
  const updateUser = (newUser) => {
    setUser({ ...newUser });
  };
<<<<<<< HEAD
  return (
    <UserContext.Provider value={{ user, updateUser }}>
=======

  return (
    <UserContext.Provider
      value={{
        user: { name: 'Provider', email: 'provider@provider.com' },
        updateUser,
      }}>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      {children}
    </UserContext.Provider>
  );
};
