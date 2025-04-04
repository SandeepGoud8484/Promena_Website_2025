"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContactUsContextType {
  contactusform: boolean;
  toggleContactUs: () => void;
  formErrors: Record<string, unknown>;
  setFormErrors: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}

// Create the context with an initial undefined value
const ContactUsContext = createContext<ContactUsContextType | undefined>(undefined);

// Define the props for the provider
interface ContactUsProviderProps {
  children: ReactNode;
}

// Create a provider component
export const ContactUsProvider: React.FC<ContactUsProviderProps> = ({ children }) => {
  const [contactusform, setContactusform] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Record<string, unknown>>({});

  const toggleContactUs = () => {
    setContactusform((prev) => !prev);
    setFormErrors({});
  };

  return (
    <ContactUsContext.Provider
      value={{ contactusform, toggleContactUs, formErrors, setFormErrors }}
    >
      {children}
    </ContactUsContext.Provider>
  );
};

// Custom hook to use the context
export const useContactUs = (): ContactUsContextType => {
  const context = useContext(ContactUsContext);
  if (context === undefined) {
    throw new Error("useContactUs must be used within a ContactUsProvider");
  }
  return context;
};
