import { createContext } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  return (
<<<<<<< HEAD
    <ProfileContext.Provider value={{ profile: { name: 'Arthur' } }}>
=======
    <ProfileContext.Provider value={{ someValue: 'value' }}>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      {children}
    </ProfileContext.Provider>
  );
};
