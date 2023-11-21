import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, CreatorCardContainer, CreatorsPopupContainer, CreatorsPopupContent, Overlay } from "./styles";
import { X } from "phosphor-react";
import creators from '../../../data/creators';


export function CreatorsPopup() {

  return (
    <Dialog.Portal>
      <Overlay />
      
      <Content>

        <CloseButton>
          <X size={24} weight='bold' />
        </CloseButton>

        <CreatorsPopupContainer>
          <CreatorsPopupContent>
            {creators.map((creator, id) => (
              <CreatorCardContainer key={id}>
                <img src={creator.image} alt={`Foto ${creator.name}`} />
                <div className="creator-info">
                  <p className="h7">{creator.name}</p>
                  <span>{creator.activity}</span>
                  <p>{creator.phrase}</p>
                </div>
              </CreatorCardContainer>
            ))}
          </CreatorsPopupContent>
        </CreatorsPopupContainer>
        
      </Content>
    </Dialog.Portal>
  )
}