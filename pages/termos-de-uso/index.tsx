import React from 'react'

import Head from 'next/head'

import { Hero } from '../../components/Hero'
import * as S from '../../styles/termsOfUse'
import { Hero } from '../../components/Hero'

const UseTerm = () => {
  return (
    <>
      <Head>
        <title>Termos de Uso | DevApi</title>
      </Head>

      <S.Container>
        <Hero>
          <S.HeroContent>
            <S.Pipe />
            <h1>
              <span>Termos de</span> uso
            </h1>
          </S.HeroContent>
        </Hero>

        <S.Content>
          <strong>1. Termos</strong>
          <p>
            Ao acessar ao site DevApi, concorda em cumprir estes termos de
            serviço, todas as leis e regulamentos aplicáveis e concorda que é
            responsável pelo cumprimento de todas as leis locais aplicáveis. Se
            você não concordar com algum desses termos, está proibido de usar ou
            acessar este site. Os materiais contidos neste site são protegidos
            pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>

          <br />
          <br />
          <strong>2. Uso de Licença</strong>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site DevApi , apenas para
            visualização transitória pessoal e não comercial. Esta é a concessão
            de uma licença, não uma transferência de título e, sob esta licença,
            você não pode:
            <ul>
              <li>Modificar ou copiar os materiais;</li>
              <li>
                Usar os materiais para qualquer finalidade comercial ou para
                exibição pública (comercial ou não comercial);
              </li>
              <li>
                Tentar descompilar ou fazer engenharia reversa de qualquer
                software contido no site DevApi;
              </li>
              <li>
                Remover quaisquer direitos autorais ou outras notações de
                propriedade dos materiais;
              </li>
              <li>
                Transferir os materiais para outra pessoa ou 'espelhe' os
                materiais em qualquer outro servidor.
              </li>
            </ul>
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por DevApi a qualquer
            momento. Ao encerrar a visualização desses materiais ou após o
            término desta licença, você deve apagar todos os materiais baixados
            em sua posse, seja em formato eletrónico ou impresso.
          </p>

          <br />
          <br />
          <strong>3. Isenção de responsabilidade</strong>
          <p>
            Os materiais no site da DevApi são fornecidos 'como estão'. DevApi
            não oferece garantias, expressas ou implícitas, e, por este meio,
            isenta e nega todas as outras garantias, incluindo, sem limitação,
            garantias implícitas ou condições de comercialização, adequação a um
            fim específico ou não violação de propriedade intelectual ou outra
            violação de direitos.
            <br />
            <br />
            Além disso, o DevApi não garante ou faz qualquer representação
            relativa à precisão, aos resultados prováveis ou à confiabilidade do
            uso dos materiais em seu site ou de outra forma relacionado a esses
            materiais ou em sites vinculados a este site.
          </p>

          <br />
          <br />
          <strong>4. Limitações</strong>
          <p>
            Em nenhum caso o DevApi ou seus fornecedores serão responsáveis por
            quaisquer danos (incluindo, sem limitação, danos por perda de dados
            ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou
            da incapacidade de usar os materiais em DevApi, mesmo que DevApi ou
            um representante autorizado da DevApi tenha sido notificado
            oralmente ou por escrito da possibilidade de tais danos. Como
            algumas jurisdições não permitem limitações em garantias implícitas,
            ou limitações de responsabilidade por danos conseqüentes ou
            incidentais, essas limitações podem não se aplicar a você.
          </p>

          <br />
          <br />
          <strong>5. Precisão dos materiais</strong>
          <p>
            Os materiais exibidos no site da DevApi podem incluir erros
            técnicos, tipográficos ou fotográficos. DevApi não garante que
            qualquer material em seu site seja preciso, completo ou atual.
            DevApi pode fazer alterações nos materiais contidos em seu site a
            qualquer momento, sem aviso prévio. No entanto, DevApi não se
            compromete a atualizar os materiais.
          </p>

          <br />
          <br />
          <strong>6. Links</strong>
          <p>
            O DevApi não analisou todos os sites vinculados ao seu site e não é
            responsável pelo conteúdo de nenhum site vinculado. A inclusão de
            qualquer link não implica endosso por DevApi do site. O uso de
            qualquer site vinculado é por conta e risco do usuário.
          </p>

          <br />
          <br />
          <strong>7. Modificações</strong>
          <p>
            O DevApi pode revisar estes termos de serviço do site a qualquer
            momento, sem aviso prévio. Ao usar este site, você concorda em ficar
            vinculado à versão atual destes termos de serviço.
          </p>

          <br />
          <br />
          <strong>8. Lei aplicável</strong>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do DevApi e você se submete irrevogavelmente à jurisdição
            exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </S.Content>
      </S.Container>
    </>
  )
}

export default UseTerm
