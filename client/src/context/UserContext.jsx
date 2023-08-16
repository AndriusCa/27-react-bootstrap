import { createContext, useState } from "react";

const initialUser = {
  loggedIn: false,
};
const initialBooks = []

export function UserContextValues() {
  const [user, setUser] = useState(initialUser);
  const [books, setBooks] = useState(initialBooks);

  function loginUser() {
    setUser((prev) => ({ ...prev, loggedIn: true }));
  }

  function updateBooks(newBooks) {
    setBooks(newBooks);
  }

  return {
    user,
    books,
    loginUser,
    updateBooks,
  };
}

export const UserContext = createContext(undefined);

export function UserContextProvider({ children }) {
  return (
    <UserContext.Provider value={UserContextValues()}>
      {children}
    </UserContext.Provider>
  );
}
