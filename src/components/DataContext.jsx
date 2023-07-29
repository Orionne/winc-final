import React, { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

DataContext.displayName = "DataContext";

export const DataContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch(`http://localhost:3000/categories`);
    const fetchedCategories = await response.json();
    setCategories(fetchedCategories);
  };
  const fetchUsers = async () => {
    const response = await fetch(`http://localhost:3000/users`);
    const fetchedUsers = await response.json();
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    fetchCategories();
    fetchUsers();
  }, []);

  return (
    <DataContext.Provider
      value={{
        categories,
        users,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      "useCategories must be used within a CategoryContextProvider"
    );
  }
  return context;
};
