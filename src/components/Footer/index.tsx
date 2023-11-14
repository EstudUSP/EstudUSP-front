import { FooterContainer } from './styles'
import { Code, Coffee } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { CreatorsPopup } from '../CreatorsPopup';
import { useState } from 'react';

export function Footer() {
  const [isCreatorsPopupOpen, setIsCreatorsPopupOpen] = useState(false);

  function handleOpenCreatorsPopup() {
    setIsCreatorsPopupOpen(true);
  }

  return (
    <FooterContainer>
      
      <Dialog.Root open={isCreatorsPopupOpen} onOpenChange={setIsCreatorsPopupOpen}>
        <Dialog.Trigger asChild>
          <div>
            <p>Feito com </p>
            <Code size={20} weight="bold" />
            <p>e </p>
            <Coffee size={20} weight="bold" />
            <p>por </p>
            <span onClick={handleOpenCreatorsPopup}>essas pessoas</span>
            <p>.</p>
          </div>
        </Dialog.Trigger>
        <CreatorsPopup />
      </Dialog.Root>
    </FooterContainer>
  )
}