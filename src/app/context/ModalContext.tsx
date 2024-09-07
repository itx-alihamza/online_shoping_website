import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context value
interface ModalContextType {
  modalType: string | null;
  isOpen: boolean;
  showModal: (type: string) => void;
  closeModal: () => void;
}

// Create the context with a default value of undefined
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Custom hook to use the Modal Context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

// Define the type for the provider props
interface ModalProviderProps {
  children: ReactNode;
}

// Modal Provider component
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalType, setModalType] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (type: string) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setModalType(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalType, isOpen, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
