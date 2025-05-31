import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';
import { findUserByEmail, users } from '../data/users';

// values and functions that will be provided by the AuthContext
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (email: string, name: string, password: string) => boolean;
  isAuthenticated: boolean;
}

// create context that will hold the interface values and functions
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// provide the context to all child components
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // hold user, if logged in, or null, if not logged in
  const [user, setUser] = useState<User | null>(null);
  // isAuthenticated is true if user is not null
  const isAuthenticated = !!user;

  // login function
  const login = (email: string, password: string): boolean => {
    // check if a user email exists in the users data
    // In a real app, you would validate the password
    const foundUser = findUserByEmail(email);
    // If user is found, set the user as the current user found
    if (foundUser) {
      setUser(foundUser);
      // return that the user is logged in
      return true;
    }
    // If user is not found, return false
    return false;
  };

  // logout function
  const logout = () => {
    // clear the user sate
    setUser(null);
  };

  // register function
  const register = (email: string, name: string, password: string): boolean => {
    // Check if user already exists
    if (findUserByEmail(email)) {
      return false;
    }

    // create a new user object to hold the new user data
    // In a real app, you would hash the password and store it in a database
    const newUser: User = {
      id: `${users.length + 1}`,
      email: email,
      name: name,
      wishlist: [],
      orders: []
    };

    // add new user to the users array
    // In a real app, you would add this user to your database
    users.push(newUser);

    // set the new user as the current user
    // For this demo, we'll just set the current user
    setUser(newUser);
    return true;
  };

  // Makes all auth-related values/functions available to child components through context.
  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};