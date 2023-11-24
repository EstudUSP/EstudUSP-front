import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { SubjectLastQuestions, SubjectPreviewContainer, SubjectPreviewContent } from './styles';
import { Subtitle } from '../../../../styles/global';
import { Link } from 'react-router-dom';
import { Subject } from '../../../../contexts/SubjectsContext';

interface SubjectProps {
  discipline: Subject;
}

export function SubjectPreview({ discipline }: SubjectProps) {  return (    
    <SubjectPreviewContainer>
      <Link to={`/forum/${discipline.id}`}>
        <SubjectPreviewContent>
          <div className="disciplineImg">
            <img src={discipline.previewImg} alt="" />
          </div>
          <div className='disciplineInfo'>
            <h6>{discipline.title}</h6>
            <Subtitle>Semestre {discipline.semester}</Subtitle>
          </div>
        </SubjectPreviewContent>

        {discipline.lastQuestions.length > 0 && 
          <SubjectLastQuestions>
            <table>
              <tbody>
                <tr>
                  <td><Subtitle>Últimas dúvidas</Subtitle></td>
                  <td></td>
                </tr>
                {discipline.lastQuestions.map(post => {
                  return (
                    <tr key={post.id}>
                      {/* <td><p>{post.title}</p></td> */}
                      <td><p>{
                        post.title == 'P1 - 2022 - OAC - II (prof. Gisele) questão 1' ? 'Comparação entre computadores' :
                        post.title == 'P1 - 2022 - OAC - II (prof. Gisele) questão 2' ? 'Pipeline' :
                        post.title == 'P1 - 2022 - OAC - II (prof. Gisele) questão 3' ? 'Máquina superescalar' :
                        post.title == 'P1 - 2022 - OAC - II (prof. Gisele) questão 4 (Parte 1 de 2)' ? 'Linguagem de montagem / RISC (Parte 1 de 2)' :
                        post.title == 'P1 - 2022 - OAC - II (prof. Gisele) questão 4 (Parte 2 de 2)' ? 'Linguagem de montagem / RISC (Parte 2 de 2)' :
                        post.title == 'P1 - 2022 - OAC - II (prof. Gisele) questão 5' ? 'Arquitetura RISC' :
                        post.title
                      }</p></td>
                      <td><span>{formatDistanceToNow(new Date(post.publishedAt), {locale: ptBr})}</span></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </SubjectLastQuestions>
        }
      </Link>
    </SubjectPreviewContainer>
  );
}