import { createContext } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  return (
    <ProfileContext.Provider value={{ profile: { name: 'Arthur' } }}>
      {children}
    </ProfileContext.Provider>
  );
};
