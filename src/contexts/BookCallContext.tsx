'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import BookCallModal from '@/components/ui/BookCallModal';

interface BookCallContextType {
  openBookCall: () => void;
}

const BookCallContext = createContext<BookCallContextType>({
  openBookCall: () => {},
});

export const useBookCall = () => useContext(BookCallContext);

export const BookCallProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookCallContext.Provider value={{ openBookCall: () => setIsOpen(true) }}>
      {children}
      <BookCallModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookCallContext.Provider>
  );
};