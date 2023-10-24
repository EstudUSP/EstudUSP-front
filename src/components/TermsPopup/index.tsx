import { useState } from "react";
import { Button } from "../Button/styles";
import { TermsPopupButtons, TermsPopupContainer, TermsPopupContent } from "./styles";

interface TermsPopupProps {
  setOpen: (open: boolean) => void;
}

export function TermsPopup({ setOpen }: TermsPopupProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleConfirmTermsPopup() {
    localStorage.setItem('termsPopupState', 'closed');
    setOpen(false);
  }

  return (
    <TermsPopupContainer>
      <TermsPopupContent>
        <h4>Termos e condições</h4>
        <div>
          <p>
            Bem-vindo à plataforma colaborativa de aprendizagem desenvolvida por estudantes de graduação do curso de 
            Sistemas de Informação da Escola de Artes Ciências e Humanidades da Universidade de São Paulo (EACH-USP). 
            Ao acessar e utilizar esta plataforma, você concorda em cumprir e estar vinculado aos seguintes termos e 
            condições:
          </p>

          <br />

          <b>1. Uso da Plataforma</b>
          <p>
            Você concorda em utilizar a plataforma de acordo com as leis e regulamentos aplicáveis, bem como com estes 
            Termos e Condições. Você reconhece que o uso da plataforma é por sua conta e risco.
          </p>
          
          <br />

          <b>2. Conteúdo da Plataforma</b>
          <p>
            A plataforma é uma ferramenta colaborativa para auxílio à aprendizagem dos estudantes. O conteúdo gerado 
            pelos usuários é de responsabilidade exclusiva de seus respectivos autores. Não há previsão de moderação do 
            conteúdo durante a fase inicial, portanto, os usuários são responsáveis por avaliar a precisão e pertinência das 
            informações compartilhadas.
          </p>
          
          <br />

          <b>3. Propriedade Intelectual</b>
          <p>
            Os desenvolvedores da presente plataforma detêm os direitos de propriedade intelectual sobre ela e seu conteúdo, 
            a menos que especificado de outra forma. Você concorda em respeitar todos os direitos autorais e outros direitos 
            de propriedade intelectual relacionados à plataforma. Os desenvolvedores não serão responsabilizados por quaisquer 
            publicações inadequadas realizadas pelos usuários, e se reservam o direito de remover qualquer conteúdo que 
            viole os termos e condições da plataforma.
          </p>
          
          <br />

          <b>4. Conduta do Usuário</b>
          <p>
            Ao usar a plataforma, você concorda em não:
            <ul>
              <li>publicar qualquer conteúdo que viole os direitos de terceiros, incluindo direitos autorais, marcas 
                registradas, privacidade ou outros direitos pessoais ou de propriedade;</li>
              <li>utilizar a plataforma para qualquer finalidade ilegal ou não autorizada;</li>
              <li>interferir ou interromper a segurança da plataforma ou qualquer serviço relacionado.</li>
            </ul>
          </p>

          <br />
          
          <p>
            O respeito com os outros membros deve ser a guia principal da plataforma. Portanto, é estritamente proibido o 
            discurso de ódio, linguagem ofensiva ou qualquer tipo de preconceito,  assim como outros comportamentos 
            inadequados que violem as diretrizes da nossa comunidade. Se você se deparar com qualquer postagem ou conteúdo 
            inadequado, por favor, denuncie para nossa equipe por e-mail através de
            <a href="mailto:atendimento@estudusp.com.br"> atendimento@estudusp.com.br</a>.
          </p>
          <br />
          
          <p>
            Todas as denúncias enviadas para o e-mail serão avaliadas pela equipe responsável pela plataforma, que tomará as 
            medidas cabíveis no menor tempo possível. Isso pode incluir a remoção imediata do conteúdo denunciado e, se
            necessário, a suspensão da funcionalidade relacionada ao conteúdo em questão.
          </p>
          
          <br />

          <b>5. Limitação de Responsabilidade</b>
          <p>
            Os autores da plataforma não são responsáveis por quaisquer danos diretos, indiretos, incidentais, 
            consequenciais ou punitivos decorrentes do uso ou incapacidade de utilizar a plataforma.
          </p>
          
          <br />

          <b>6. Alterações nos Termos e Condições</b>
          <p>
            Estes Termos e Condições podem ser atualizados ocasionalmente. É responsabilidade do usuário revisar 
            regularmente os termos para estar ciente de quaisquer mudanças. O uso continuado da plataforma após tais 
            alterações constitui aceitação dos termos revisados.
          </p>
          
          <br />

          <b>7. Contato</b>
          <p>
            Se tiver dúvidas sobre estes Termos e Condições, entre em contato conosco através do e-mail: 
            <a href="mailto:atendimento@estudusp.com.br"> atendimento@estudusp.com.br</a>.
          </p>
          
          <br />

          <p>
            Ao acessar ou usar esta plataforma, você concorda em cumprir estes Termos e Condições. 
            Se você não concorda com algum destes termos, por favor, não use a plataforma.
          </p>
          
          <br />

          <p>Última atualização: 23 de outubro de 2023.</p>





        </div>
      </TermsPopupContent>
      <TermsPopupButtons>
        <div>
          <div className="checkbox">
            <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
          </div>
          <p>Li e concordo</p>
        </div>
        <Button onClick={handleConfirmTermsPopup} disabled={!isChecked}>
          Confirmar
        </Button>
      </TermsPopupButtons>
    </TermsPopupContainer>
  )
}