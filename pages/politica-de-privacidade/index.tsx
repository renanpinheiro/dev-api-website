import React from 'react'

import Head from 'next/head'

import { Hero } from '../../components/Hero'

import * as S from '../../styles/privacyPolicy'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>DevApi | Política de privacidade</title>
        <meta
          property="og:url"
          content="https://www.devapi.com.br/politica-de-privacidade"
        />
        <meta property="description" content="Política de privacidade" />
      </Head>

      <S.Container>
        <Hero minHeight={40} maxHeight={65}>
          <S.HeroContent>
            <S.Pipe />
            <h1>
              Política de <b>privacidade</b>
            </h1>
          </S.HeroContent>
        </Hero>

        <S.Content>
          <strong>1. OBJETIVO DA POLÍTICA DE PRIVACIDADE</strong>
          <p>
            Nós somos a DevApi Tecnonologia. Somos uma solução completa de
            integração de Sistemas e API's. A DevApi (ou “nós”), estamos
            comprometidos em resguardar sua privacidade. O intuito deste
            documento é esclarecer de que forma os dados pessoais tratados por
            nós são utilizados.
          </p>
          <p>
            Para oferecer nossos serviços, a DevApi coleta alguns dados e
            informações, visando, sobretudo, prestar o melhor serviço para você.
            A DevApi reconhece que a sua privacidade é muito importante,
            portanto, tomamos todas as medidas possíveis para protegê-la. Nesse
            sentido, a presente Política de Privacidade (“Política”) visa lhe
            informar como as suas informações e dados serão coletados, usados,
            compartilhados e armazenados.
          </p>
          <p>
            Este documento foi redigido de forma simples e acessível, justamente
            para que você possa ler e entender a forma como utilizamos os seus
            dados para lhe oferecer uma experiência segura e confortável no uso
            dos serviços que oferecemos a você.
          </p>
          <p>
            No decorrer da sua atividade, a DevApi coleta e trata dados pessoais
            de vários titulares, estes advindos nomeadamente de clientes,
            fornecedores, colaboradores, candidatos a colaboradores, entre
            outros (“titulares dos dados” ou “titulares”).
          </p>
          <p>
            A presente Política de Privacidade descreve as orientações e
            princípios adotados pela DevApi para assegurar a proteção dos
            titulares dos dados, estabelecendo os procedimentos e regras
            relativas aos direitos dos titulares e ao tratamento e circulação
            dos dados pessoais.
          </p>
          <p>
            Este documento apresenta as regras a cumprir de forma a agir em
            conformidade com os requisitos legais no âmbito da privacidade dos
            dados, especificamente a Lei 13.709 de 2018 (Lei Geral de Proteção
            de Dados) devendo ser respeitado por todos os colaboradores da
            DevApi. Assim, todos os colaboradores da DevApi deverão ter
            conhecimento desta Política de Privacidade e diligenciar pela devida
            compreensão.
          </p>
          <p>
            Adicionalmente, a DevApi preocupa-se em facultar aos seus
            colaboradores formação no âmbito da privacidade adequada às suas
            funções, tendo estabelecido um plano de formação que contempla a
            temática da privacidade e especificamente a proteção de dados
            pessoais.
          </p>

          <br />
          <br />
          <strong>2. DEFINIÇÕES</strong>
          <p>
            Quando da leitura do presente instrumento, os termos abaixo
            elencados devem ser interpretados conforme definição que os
            acompanham:
          </p>
          <p>
            <b>Anonimização:</b> utilização de meios técnicos razoáveis e
            disponíveis no momento do tratamento, por meio dos quais um dado
            perde a possibilidade de associação, direta ou indireta, a um
            indivíduo;
          </p>
          <p>
            <b>Candidatos:</b> pessoas físicas que se candidatem a vaga de
            emprego na DevApi por qualquer forma;
          </p>
          <p>
            <b>Clientes:</b> Qualquer pessoa física ou jurídica que contrate a
            DevApi enquanto prestadora de serviços;
          </p>
          <p>
            <b>Consentimento:</b> manifestação livre, informada e inequívoca
            pela qual o titular concorda com o tratamento de seus dados pessoais
            para uma finalidade determinada.
          </p>
          <p>
            <b>Controlador:</b> pessoa natural ou jurídica, de direito público
            ou privado, a quem competem as decisões referentes ao tratamento de
            dados pessoais, o qual pode ser a DevApi ou terceiro;
          </p>
          <p>
            <b>Cookies:</b> Como é prática comum em quase todos os sites
            profissionais, este site usa cookies, que são pequenos arquivos
            baixados no seu computador, para melhorar sua experiência. Esta
            página descreve quais informações eles coletam, como as usamos e por
            que às vezes precisamos armazenar esses cookies. Também
            compartilharemos como você pode impedir que esses cookies sejam
            armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar'
            certos elementos da funcionalidade do site.
          </p>
          <p>
            <b>Dados pessoais:</b> informação relacionada a pessoa natural
            identificada ou identificável;
          </p>
          <p>
            <b>Dados pessoais sensíveis:</b> dado pessoal sobre origem racial ou
            étnica, convicção religiosa, opinião política, filiação a sindicato
            ou a organização de caráter religioso, filosófico ou político, dado
            referente à saúde ou à vida sexual, dado genético ou biométrico,
            quando vinculado a uma pessoa natural;
          </p>
          <p>
            <b>Definição de perfis:</b> qualquer forma de tratamento
            automatizado de dados pessoais que consista em utilizar esses dados
            pessoais para avaliar certos aspetos pessoais de uma pessoa física,
            nomeadamente para analisar ou prever aspetos relacionados com o seu
            desempenho profissional, a sua situação económica, saúde,
            preferências pessoais, interesses, fiabilidade, comportamento,
            localização ou deslocações;
          </p>
          <p>
            <b>Fornecedor:</b> Qualquer pessoa física ou jurídica contratada
            pela DevApi enquanto prestadora de serviços ou fornecedora de
            produtos;
          </p>
          <p>
            <b>Incidente ou violação:</b> uma violação da segurança que
            provoque, de modo acidental ou ilícito, a destruição, a perda, a
            alteração, a divulgação ou o acesso, não autorizados, a dados
            pessoais transmitidos, conservados ou sujeitos a qualquer outro tipo
            de tratamento;
          </p>
          <p>
            <b>LGPD:</b> Lei n° 13.709, de 14 de agosto de 2018 (Lei Geral de
            Proteção de Dados Pessoais), que dispõe sobre o tratamento de dados
            pessoais, inclusive nos meios digitais, por pessoa natural ou por
            pessoa jurídica de direito público ou privado, com o objetivo de
            proteger os direitos fundamentais de liberdade e de privacidade e o
            livre desenvolvimento da personalidade da pessoa natural;
          </p>
          <p>
            <b>Operador:</b> pessoa natural ou jurídica, de direito público ou
            privado, que realiza o tratamento de dados pessoais em nome do
            controlador, o qual pode ser a DevApi ou terceiro;
          </p>
          <p>
            <b>Prospect:</b> Qualquer pessoa física ou jurídica que tenha, ou
            poderá vir a ter, interesse em adquirir produtos ou contratar
            serviços da DevApi;
          </p>
          <p>
            <b>Titular:</b> pessoa natural a quem se referem os dados pessoais
            que são objeto de tratamento;
          </p>
          <p>
            <b>Transmissão de dados:</b> Para efeitos desta Política, e quando
            não resulte do contexto deste documento que transmissão de dados
            deva assumir outro sentido, configura transmissão de dados pessoais
            uma operação de tratamento que envolva transmissão, por qualquer
            modo, dos referidos dados pessoais para uma entidade jurídica
            distinta da DevApi;
          </p>
          <p>
            <b>Tratamento:</b> toda operação realizada com dados pessoais, como
            as que se referem a coleta, produção, recepção, classificação,
            utilização, acesso, reprodução, transmissão, distribuição,
            processamento, arquivamento, armazenamento, eliminação, avaliação ou
            controle da informação, modificação, comunicação, transferência,
            difusão ou extração.
          </p>

          <br />
          <br />
          <strong>3. ÂMBITO</strong>
          <p>
            A Política de Privacidade abrange todo e qualquer tratamento de
            dados pessoais realizado pela DevApi. As regras e procedimentos
            definidos na presente política podem ser concretizadas noutras
            políticas e procedimentos, devidamente mapeados. A presente política
            não substitui, nem se sobrepõe, a eventuais Acordos de Tratamento de
            Dados celebrados no caso concreto.
          </p>

          <br />
          <br />
          <strong>
            4. PRINCÍPIOS APLICÁVEIS AO PROCESSAMENTO DE DADOS PESSOAIS
          </strong>
          <p>
            <b>a) Lícito, leal e transparente</b>
            <br /> Os dados pessoais são recolhidos e tratados de forma lícita,
            leal e transparente, nomeadamente dando garantia, aos titulares, de
            informações claras, precisas e facilmente acessíveis de quais os
            dados tratados, respetivos agentes, as finalidades do tratamento, e
            o seu prazo de conservação.
          </p>
          <p>
            <b>b) Finalidades determinadas, explícitas e legítimas</b>
            <br />
            Os dados pessoais são coletados e tratados para finalidades
            determinadas, legítimas, específicas, explícitas e informadas, não
            podendo ser tratados posteriormente de uma forma incompatível com
            essas finalidades.
          </p>
          <p>
            <b>c) Minimização de dados</b>
            <br />
            As operações de coleta de dados são alvo de análise prévia
            garantindo que apenas são recolhidos os dados pessoais adequados,
            pertinentes e necessários tendo em conta a finalidade, adequação e
            necessidade do respectivo tratamento, que deverá ser o mínimo
            necessário.
          </p>
          <p>
            <b>d) Exatidão e atualização dos dados</b>
            <br />
            A exatidão e atualização dos dados é garantida através da
            disponibilização de canais específicos que permitem ao titular dos
            dados comunicar eventuais atualizações, bem como medidas de revisão
            e análise da qualidade dos dados, garantindo que os dados inexatos
            sejam apagados ou retificados.
            <br />
            Os dados são conservados apenas durante o período necessário para os
            fins a que se destinam (salvo hipótese de cumprimento de normas
            legais). Neste âmbito, os dados pessoais deverão ser conservados
            durante um período de tempo pré-definido ou definível, tendo em
            consideração as finalidades do tratamento, devendo ser eliminados ou
            perfeitamente anonimizados após o decurso do período de conservação.
          </p>
          <p>
            <b>e) Integridade e confidencialidade dos dados</b>
            <br />A DevApi procura garantir a segurança dos dados pessoais
            através da adoção de medidas técnicas e organizativas que permitem a
            proteção contra o tratamento não autorizado ou ilícito dos dados,
            bem como contra a sua perda, destruição ou danificação acidental.
            <br />A DevApi possui uma gama de controles de segurança de dados,
            definida de acordo com as necessidades do negócio e nas políticas de
            segurança em vigor, conforme informação disponibilizada na respetiva
            política de segurança da Informação.
          </p>
          <p>
            <b>f) Responsabilidade pelos dados</b>
            <br />A DevApi tem a responsabilidade de observar os princípios
            acima referidos, devendo comprovar os mesmos. Para tanto, promoverá
            a adoção de mecanismos contratuais que garantam o controle das
            políticas, procedimentos e mecanismos de controle e de atualização
            de dados pessoais utilizados pelos seus Operadores. a DevApi
            diligencia por prever contratualmente mecanismos de controle do
            cumprimento, por parte dos Operadores, das obrigações e limitações
            estabelecidas em matéria de proteção de dados.
          </p>

          <br />
          <br />
          <strong>5. ACESSO AOS DADOS PESSOAIS</strong>
          <p>
            Todos os seus dados são confidenciais e qualquer usos destes estará
            de acordo com a presente Política. A DevApi empreenderá todos os
            esforços razoáveis de mercado para garantir a segurança dos nossos
            sistemas e dos seus dados. Apenas os colaboradores da DevApu e
            fornecedores vinculados a estes termos terão acesso aos dados
            pessoais, e dentre estes, somente as pessoas com as devidas
            autorizações.
          </p>
          <p>
            Nos termos desta Política, você poderá, a qualquer momento
            requisitar cópia dos seus dados armazenados em nossos sistemas.
            Manteremos os dados e informações somente até quando estas forem
            necessárias ou relevantes para as finalidades descritas nesta
            Política, em caso de períodos pré-determinados por lei, ou até
            quando estas forem necessárias para a manutenção de interesses
            legítimos da DevApi.
          </p>

          <br />
          <br />
          <strong>6. COLETA DE DADOS</strong>
          <p>
            <b>a) Como coletamos os dados que tratamos?</b>
            <br />
            No exercício de suas atividades, a DevApi trata dados pessoais
            obtidos de diversas formas, elenca-se, de forma não exaustiva, as
            formas de coleta de dados pessoais:
            <ol>
              <li>
                I. Clientes, fornecedores, prospects ou integrantes da equipe de
                prospects.
              </li>
              <li>
                II. Representantes legais e sócios de pessoas jurídicas que
                possuem relações jurídicas com a DevApi;
              </li>
              <li>
                III. Dados de pessoas físicas tratados nas operações financeiras
                executadas para clientes da DevApi (Controladores);
              </li>
              <li>
                IV. Dados de colaboradores, celetistas, terceirizados,
                voluntários e prestadores de serviço, e candidatos a vagas de
                emprego;
              </li>
              <li>
                V. Pessoas físicas inscritas em ações, cursos e newsletters da
                DevApi e que visitaram as sedes das empresas do grupo.
              </li>
            </ol>
            Os dados das categorias i), ii), iv) e v) supra identificadas são
            fornecidos, em geral, pelos respetivos titulares, ou pessoa jurídica
            da qual façam parte, em impresso ou através dos canais digitais que
            a DevApi disponibiliza (incluindo email). Ressalvando-se que estes
            poderão ser obtidos através da consulta de bases públicas, a exemplo
            de redes sociais, nos termos do artigo 7º § 4º da LGPD.
            <br />
            <br />
            Os dados da categoria iii) são fornecidos a DevApi enquanto
            prestador de serviços, vinculados a operações financeiras pelos
            clientes (Controladores).
          </p>
          <p>
            <b>b) Finalidades</b>
            <br />
            DevApi coleta e processa dados pessoais para diversas finalidades,
            nomeadamente para efeitos de diligências pré-contratuais, celebração
            e execução de contratos de prestação de serviços de pagamento, de
            execução das operações de pagamento decorrentes, realização de
            transações ocasionais de pagamento, contratação e pagamento de
            serviços, controles de acesso/segurança, verificação de satisfação,
            marketing, eventos corporativos e prospecção de clientes.
            <br />
            <br />
            Todos os dados e informações sobre você somente serão utilizadas
            para os fins aqui descritos, para cumprimento de obrigações legais e
            regulatórias e/ou autorizados por você. Além das hipóteses acima
            descritas, utilizaremos seus dados para as seguintes finalidades:
            <br />
            <br />
            <ul>
              <li>
                Seu e-mail também pode ser usado para envio de Newsletters,
                sempre relacionadas ao mercado e subsistemas em que a DevApi
                atua ou faz parte. O e-mail será utilizado ainda para comunicar
                o lançamento de novos materiais gratuitos ou de novos produtos
                da DevApi e parceiros. No entanto, o cliente pode cancelar a
                assinatura a qualquer momento;
              </li>
              <li>
                Enviar a você mensagens a respeito de suporte ou serviço, como
                alertas, notificações e atualizações;
              </li>
              <li>
                Nos comunicar com você sobre produtos, serviços, promoções,
                notícias, atualizações, eventos e outros assuntos que você possa
                ter interesse;
              </li>
              <li>
                Realizar publicidade direcionada conforme seus gostos,
                interesses e outras informações coletadas;
              </li>
              <li>
                Personalizar o serviço para este adequar cada vez mais aos seus
                gostos e interesses;
              </li>
              <li>
                Para qualquer fim que você autorizar no momento da coleta de
                dados.
              </li>
            </ul>
          </p>

          <br />
          <br />
          <strong>7. DIREITOS DOS TITULARES DOS DADOS PESSOAIS</strong>
          <p>
            Nas secções seguintes são enunciados nomeadamente os direitos de
            comunicação transparente, acesso, correção, eliminação, oposição,
            revogação do consentimento, exclusão, portabilidade de dados
            pessoais dos titulares, notificação em caso de violação, solicitação
            de informação por parte de Controlador, assim como apresentados os
            meios disponibilizados pela DevApi para que os titulares os possam
            invocar, sem prejuízo de outros direitos que possam estar legalmente
            previstos.
            <br />
            <br />
            <b>a) Direito a uma comunicação transparente</b>
            <br />
            DevApi informa o titular dos dados, nos termos legais, de forma
            clara e transparente, sobre o tratamento dos seus dados pessoais,
            comunicando-lhe, quando solicitado, as seguintes informações:
            <br />
            <br />
            <ul>
              <li>
                Os dados pessoais tratados, resguardados os segredos comerciais
                e industriais;
              </li>
              <li>Origem dos dados;</li>
              <li>A identidade do Controlador, se houver;</li>
              <li>Os critérios utilizados para o tratamento;</li>
              <li>
                As finalidades do tratamento a que os dados pessoais se
                destinam, bem como o fundamento jurídico para o tratamento;
              </li>
              <li>
                Prazo de conservação dos dados pessoais ou, se não for possível,
                os critérios usados para definir esse prazo;
              </li>
              <li>Os contatos do encarregado da proteção de dados (DPO);</li>
            </ul>
            <br />
            A existência de decisões automatizadas, incluindo a definição de
            perfis, e, pelo menos nesses casos, informações úteis relativas à
            lógica subjacente, bem como a importância e as consequências
            previstas de tal tratamento para o titular dos dados.
            <br />
            <br />
            <b>
              b) Direito de acesso e confirmação da existência de tratamento
            </b>
            <br />
            DevApi assegura a existência de meios que permitam ao titular dos
            dados ter acesso à informação quanto ao tratamento dos seus dados
            pessoais, nos termos previstos na LGPD. Eventuais solicitações de
            inventário de dados deverão ser encaminhadas mediante o
            preenchimento do formulário de solicitação, mediante a devida
            comprovação de identidade do titular.
            <br />
            <br />A DevApi processará a requisição de inventário de dados
            pessoais tratados pelo a DevApi, encaminhando o relatório dentro do
            prazo de 15 (quinze) dias, nos termos do artigo 19, parágrafo 2º da
            LGPD. O relatório será encaminhado preferencialmente de forma
            eletrônica, o qual não acarretará custos ao titular, no entanto
            também poderá ser encaminhado por meio físico, mediante o pagamento
            de taxa razoável por este, tendo em conta os custos administrativos
            da operação.
            <br />
            <br />
            <b>c) Direito de correção</b>
            <br />A DevApi assegura que o titular dos dados possa retificar os
            seus dados pessoais, nomeadamente, quando estes estejam incorretos,
            inexatos ou desatualizados ou completá-los, caso se encontrem
            incompletos.
            <br />
            <br />
            A solicitação de retificação deverá ser encaminhada mediante o
            preenchimento do formulário de solicitação, a qual será direcionada
            ao Encarregado (DPO), o qual analisará a possibilidade de
            retificação dos dados pessoais, considerando obrigações legais,
            contratuais e regulatórias da DevApi, retornando em um prazo
            razoável a solicitação do titular.
            <br />
            <br />É garantido ao titular dos dados, em caso de indeferimento
            sobre a retificação de suas informações, uma resposta detalhada e
            coerente sobre o motivo pelo qual o Encarregado (DPO) tomou tal
            decisão.
            <br />
            <br />
            <b>d) Direito à eliminação</b>
            <br />
            Todos os dados coletados serão excluídos de nossos servidores quando
            você assim requisitar ou quando estes não forem mais necessários ou
            relevantes para a prestação dos serviços contratados, salvo se
            houver qualquer outra razão para a sua manutenção, como eventual
            obrigação legal de retenção de dados ou necessidade de preservação
            destes para resguardo de direitos da DevApi.
            <br />
            <br />
            Os titulares que possuem interesse em eliminar os seus dados
            pessoais tratados pela DevApi deverão encaminhar a solicitação
            através do formulário de solicitação. Os pedidos de eliminação serão
            recepcionados pelo Encarregado (DPO), os quais serão analisados e,
            sendo considerados válidos à luz das normas legais aplicáveis, a
            DevApi processará o pedido.
            <br />
            <br />
            Caso os pedidos realizados não forem considerados válidos, tendo em
            vista a existência de obrigações legais e regulatórias da DevApi ou
            do Controlador manterem os dados, a DevApi não processará a exclusão
            dos dados e comunicará ao titular os motivos associados a essa
            decisão.
            <br />
            <br />A comunicação da exclusão ou fundamentando o indeferimento do
            pedido deverão ser encaminhadas pela DevApi ao titular no prazo
            máximo de 30 (trinta) dias após a recepção do pedido.
            <br />
            <br />
            <b>e) Direito à oposição</b>
            <br />
            A DevApi assegura os meios necessários para que o titular dos dados
            possa opor-se ao tratamento dos seus dados pessoais (com fundamento
            em uma das hipóteses de dispensa de consentimento).
            <br />
            <br />A DevApi analisará o pedido e, sendo considerado válido à luz
            das normas legais aplicáveis, cessará o tratamento em causa. Se os
            pedidos realizados não forem considerados válidos, a DevApi não os
            processará e comunicará ao titular dos dados os motivos associados a
            essa decisão no prazo máximo de 30 (trinta) dias após a recepção do
            pedido.
            <br />
            <br />
            <b>f) Revogação de consentimento</b>
            <br />
            A DevApi quando na posição de Controladora, recolherá o
            consentimento do titular para coletar e tratar os seus dados para as
            diversas finalidades, ressalvadas as hipóteses que exonerem a
            obrigatoriedade de recolha deste consentimento.
            <br />
            <br />A DevApi recolherá e conservará o consentimento de forma que
            permita a prova quanto à recolha do mesmo e suas circunstâncias,
            durante todo o tempo em que o consentimento se mantiver válido e
            durante todo o prazo subsequente necessário e lícito, nos termos das
            normas legais e regulamentares aplicáveis.
            <br />
            <br />A DevApi garante ao titular dos dados o direito de retirar
            consentimento em qualquer altura, mediante comunicação ao
            Encarregado (DPO) através do e-mail{' '}
            <a
              rel="noopener"
              href="mailto:contato@devapi.com.br?subject=Solicitação de remoção dos dados&body=Desejo solicitar a remoção dos meu dados."
            >
              contato@devapi.com.br
            </a>
            , sendo assegurado que a retirada do consentimento será tão fácil
            quanto a sua atribuição, sem comprometer a licitude do tratamento
            efetuado com base no consentimento previamente dado.
            <br />
            <br />
            <b>g) Direito de portabilidade dos dados</b>
            <br />
            A DevApi assegura os meios necessários para que o titular dos dados
            possa receber os dados pessoais que lhe digam respeito e que tenha
            fornecido a DevApi em um formato estruturado, de uso corrente e de
            leitura automática.
            <br />
            <br />
            O direito à portabilidade não inclui, contudo, os dados que já
            tenham sido anonimizados.
            <br />
            <br />
            A DevApi assegura ainda os meios necessários para que o titular
            exerça o direito de transmitir os dados acima referidos a outro
            responsável pelo tratamento, devendo assegurar a possibilidade de
            transmissão direta dos dados pela DevApi ao responsável pelo
            tratamento que lhe seja indicado pelo titular dos dados, sempre que
            tal seja tecnicamente possível.
            <br />
            <br />
            A DevApi recusará os pedidos de portabilidade sempre que estes
            prejudiquem os direitos e as liberdades de terceiros, ou se aplique
            outra limitação estabelecida em normas legais ou regulamentares
            aplicáveis.
            <br />
            <br />
            Mediante a solicitação de portabilidade pelo titular, a DevApi terá
            o prazo de 30 (trinta) dias para disponibilizar o arquivo em que os
            dados, viabilizando a realização da portabilidade.
            <br />
            <br />
            <b>h) Direito de Notificação em caso de violação</b>
            <br />
            Nas hipóteses em que a DevApi for Controlador dos dados, os
            titulares serão notificados, em período razoável, caso ocorra um
            incidente ou potencial incidente que provoque, de modo acidental ou
            ilícito, a destruição, a perda, a alteração, a divulgação ou o
            acesso, não autorizados, a dados pessoais transmitidos, conservados
            ou sujeitos a qualquer outro tipo de tratamento.
            <br />
            <br />
            <b>i) Meios de comunicação para invocação de direitos</b>
            <br />
            Os titulares dos dados, sejam estes clientes, fornecedores,
            candidatos, terceiros e demais stakeholders, poderão invocar os seus
            direitos através do formulário de solicitação, pelo e-mail
            <a rel="noopener" href="mailto:contato@devapi.com.br">
              contato@devapi.com.br
            </a>{' '}
            e/ ou através dos contatos divulgados e consultáveis através da
            página de internet da DevApi.
            <br />
            <br />
            A DevApi reserva-se o direito de não responder aos pedidos de
            invocação de direitos se verificar que não é possível identificar de
            forma segura o titular dos dados, comunicando esta situação à pessoa
            que tenha invocado o direito, e sempre que disponha de meios seguros
            comunicar ao titular dos dados envolvidos no pedido.
            <br />
            <br />
            A DevApi procura responder a todos os pedidos, avaliando se a sua
            satisfação se encontra em conformidade com os requisitos legais e
            regulamentares aplicáveis. A DevApi reserva o direito de não acatar
            ao pedido sempre que entenda existir um enquadramento legal e que
            impeça o titular dos dados de exercer um direito que tenha invocado,
            observando os prazos acima estipulados.
            <br />
            <br />
            Quando os pedidos apresentados são manifestamente infundados ou
            excessivos, a DevApi reserva ainda o direito de exigir o pagamento
            de uma taxa razoável tendo em conta os custos administrativos do
            fornecimento das informações ou de tomada das medidas solicitadas.
          </p>

          <br />
          <br />
          <strong>9. RESPONSABILIDADES</strong>
          <p>
            <b>9.1 DO USUÁRIO</b>
            <ol>
              <li>
                1. O Usuário se responsabiliza pela precisão e veracidade dos
                dados informados no cadastro e reconhece que a inconsistência
                destes poderá implicar a impossibilidade de utilizar serviços
                públicos da DevApi
              </li>
              <li>
                2. O login e senha só poderão ser utilizados pelo(s) usuário(s)
                cadastrado. Este deve manter o sigilo da senha, que é pessoal e
                intransferível, não sendo possível, em qualquer hipótese, a
                alegação de uso indevido, após o ato de compartilhamento.
              </li>
              <li>
                3. O usuário da Plataforma é responsável pela atualização das
                suas informações pessoais e consequências na omissão ou erros
                nas informações pessoais cadastradas.
              </li>
              <li>
                4. O Usuário é responsável pela reparação de todos e quaisquer
                danos, diretos ou indiretos (inclusive decorrentes de violação
                de quaisquer direitos de outros usuários, de terceiros,
                inclusive direitos de propriedade intelectual, de sigilo e de
                personalidade), que sejam causados a DevApi, a qualquer outro
                Usuário, ou, ainda, a qualquer terceiro, inclusive em virtude do
                descumprimento do disposto nestes Termos de Uso e Política de
                Privacidade ou de qualquer ato praticado a partir de seu acesso
                à Internet, ao sítio e/ou Aplicativo.
              </li>
              <li>
                5. A DevApi não poderá ser responsabilizado pelos seguintes
                fatos
                <ul>
                  <li>1. Equipamento infectado ou invadido por atacantes;</li>
                  <li>
                    2. Equipamento avariado no momento do consumo de serviços;
                    Proteção do computador;
                  </li>
                  <li>
                    3. Proteção das informações baseadas nos computadores dos
                    usuários;
                  </li>
                  <li>4. Abuso de uso dos computadores dos usuários;</li>
                  <li>
                    5. Monitoração clandestina do computador dos usuários;
                  </li>
                  <li>
                    6. Vulnerabilidades ou instabilidades existentes nos
                    sistemas dos usuários;
                  </li>
                  <li>7. Perímetro inseguro;</li>
                </ul>
              </li>
            </ol>

            <b>9.2 DA DEVAPI</b>
            <ol>
              <li>
                1. A DevApi, no papel de custodiante das informações pessoais
                dos Usuários, deve cumprir todas as legislações inerentes ao uso
                correto dos dados pessoais do cidadão de forma a preservar a
                privacidade dos dados utilizados na plataforma.
              </li>
              <li>
                Publicar e informar ao Usuário as futuras alterações a estes
                Termos de Uso e Política de Privacidade por meio do sítio (
                <a
                  rel="noopener"
                  href="https://www.devapi.com.br"
                  title="DevApi"
                >
                  https://www.devapi.com.br
                </a>
                ).
              </li>
              <li>
                3. Em nenhuma hipótese, a DevApi será responsável pela
                instalação no equipamento do Usuário ou de terceiros, de códigos
                maliciosos (vírus, trojans, malware, worm, bot, backdoor,
                spyware, rootkit, ou de quaisquer outros que venham a ser
                criados), em decorrência da navegação na Internet pelo Usuário.
              </li>
            </ol>
          </p>

          <br />
          <br />
          <strong>10. LINKS EXTERNOS</strong>
          <p>
            você a outro domínio. Esses sites externos não operarão sob esta
            Política de Privacidade, devendo ler as declarações de privacidade
            dos referidos sites.
            <br />
            <br />
            A DevApi não controla, avalia ou endossa modificações subsequentes
            feitas nos sites dos quais eventualmente tenha links.
            <br />
            <br />
            A DevApi reserva-se o direito de remover um link, a qualquer
            momento, caso tenha razões para acreditar que o conteúdo do site em
            questão possa ser ilegal ou que infrinja de alguma forma os direitos
            de terceiros ou no caso solicitação da autoridade judicial ou
            administrativa competente.
            <br />
            <br />A DevApi não possui qualquer responsabilidade derivada das
            atividades de processamento de dados e pelo conteúdo dos sites
            especificados acima, com os quais eventualmente possua links.
          </p>

          <br />
          <br />
          <strong>11. DO USO DE COOKIES</strong>
          <p>
            Utilizamos cookies por vários motivos, detalhados abaixo.
            Infelizmente, na maioria dos casos, não existem opções padrão do
            setor para desativar os cookies sem desativar completamente a
            funcionalidade e os recursos que eles adicionam a este site. É
            recomendável que você deixe todos os cookies se não tiver certeza se
            precisa ou não deles, caso sejam usados ​​para fornecer um serviço
            que você usa.Você pode impedir a configuração de cookies ajustando
            as configurações do seu navegador (consulte a Ajuda do navegador
            para saber como fazer isso). Esteja ciente de que a desativação de
            cookies afetará a funcionalidade deste e de muitos outros sites que
            você visita. A desativação de cookies geralmente resultará na
            desativação de determinadas funcionalidades e recursos deste site.
            Portanto, é recomendável que você não desative os cookies.
            <br />
            <br />
            Cookies que definimos:
            <br />
            <br />
            <ul>
              <li>Cookies relacionados à conta;</li>
              <li>Cookies relacionados ao login;</li>
              <li>Cookies relacionados a boletins por e-mail;</li>
              <li>Pedidos processando cookies relacionados;</li>
              <li>Cookies relacionados a pesquisas;</li>
              <li>Cookies relacionados a formulários;</li>
              <li>Cookies de preferências do site;</li>
            </ul>
          </p>

          <br />
          <br />
          <strong>12. PARTILHA DE DADOS</strong>
          <p>
            A DevApi poderá operar em conjunto com outras empresas na ampla gama
            de atividades de que participa, assim como poderá estar adstrita a
            obrigações legais perante Autoridades e Órgãos públicos. Desta
            forma, poderão ser partilhados dados pessoais com os seguintes
            destinatários:
            <ol>
              <li>
                I. Administração Pública, Autoridades e Organismos Públicos,
                incluindo órgãos Reguladores, juízos e tribunais, quando isso
                for exigido pelas normas legais ou regulamentares aplicáveis;
              </li>
              <li>
                II. Fornecedores de confiança da DevApi, com o objetivo de
                realizar a nossa atividade. Estes fornecedores, enquanto
                operadores subcontratantes da DevApi, só poderão tratar os
                dados, para as finalidades indicadas pela DevApi, conforme o
                Acordo de Proteção de Dados devidamente celebrado. Estes
                fornecedores estarão sujeitos às obrigações de confidencialidade
                e segurança da informação.
              </li>
            </ol>
          </p>

          <br />
          <br />
          <strong>13. MUDANÇAS NA POLÍTICA DE PRIVACIDADE</strong>
          <p>
            Esta Política de Privacidade poderá ser revista e alterada a
            qualquer momento, passando as modificações a vigorar imediatamente
            após disponibilização em site oficial da DevApi.
            <br />
            <br />
            Em caso de alteração da Política, os colaboradores e os clientes
            serão informados através dos canais apropriados.
            <br />
            <br />A DevApi recomenda a verificação frequente da Política de
            Privacidade, consultado a versão mais atual disponibilizada por meio
            do sítio (
            <a rel="noopener" href="https://www.devapi.com.br" title="DevApi">
              https://www.devapi.com.br
            </a>
            ).
          </p>

          <br />
          <br />
          <strong>14. LEGISLAÇÃO APLICÁVEL</strong>
          <p>
            Este documento é regido e deve ser interpretado de acordo com as
            leis da República Federativa do Brasil, em especial atenção à Lei nº
            13.709/2019 - Lei Geral de Proteção de Dados.
          </p>

          <br />
          <br />
          <strong>15. CONTATOS</strong>
          <p>
            Qualquer dúvida em relação à nossa política de privacidade pode ser
            esclarecida entrando em contato conosco.
            <br />
            <br />
            Envie um e-mail para{' '}
            <a rel="noopener" href="malito:contato@devapi.com.br">
              contato@devapi.com.br
            </a>
            .
            <br />
            <br />
            Estamos localizados no Ed. Atrium Torre Norte - Av. Pedro Taques, n.
            294 - 13° Andar - Sala 1307 - Zona 03, CEP: 87030-008, Maringá-PR,
            Brasil, Telefone: +55 (44) 3354-7410.
          </p>

          <br />
          <br />
          <strong>16. DIREITOS AUTORAIS</strong>
          <p>
            A DevApi é proprietário de todos os direitos autorais, marcas,
            domínios, logotipos, aparência do produto, segredos de empresa,
            patentes e outros direitos de propriedade intelectual, associados ao
            produto Login no sistema e tecnologias associadas. É proibido o uso
            desses direitos autorais, marcas, domínios, logotipos, aparência do
            produto, segredos de empresa, patentes e outros direitos de
            propriedade intelectual sem autorização expressa da DevApi por meio
            do seu legítimo representante legal.
          </p>

          <br />
          <br />
          <strong>
            17. DAS ALTERAÇÕES E ATUALIZAÇÃO DESTA POLÍTICA DE PRIVACIDADE
          </strong>
          <p>
            Esta política tem validade indeterminada, podendo ser alterada em
            seus termos, a qualquer tempo, e a versão deste termo de uso será
            vinculada no ato da aceitação do usuário. Desta forma, recomendamos
            visitar periodicamente esta página para que você tenha conhecimento
            sobre as referidas modificações.
            <br />
            <br />
            Qualquer alteração e/ou atualização destes Termos de Uso e Política
            de Privacidade passará a vigorar a partir da data de sua publicação
            no sítio e deverá ser integralmente observada pelos Usuários.
            <br />
            <br />
            As alterações a este termo serão publicadas e informadas ao Usuário
            por meio desta página.
          </p>

          <br />
          <br />
          <strong>18. RELACIONAMENTO COM TERCEIROS</strong>
          <p>
            A DevApi não comercializa em qualquer hipótese, dados ou informações
            dos usuários com terceiros, respeitados os limites e diretrizes da
            LGPD.
          </p>

          <br />
          <br />
          <strong>19. ACEITAÇÃO DO TERMO E CONDIÇÕES DE USO</strong>
          <p>
            O Usuário declara ter lido, entendido todas as regras, condições e
            obrigações estabelecidas no presente termo.
            <br />
            <br />
            <u>
              O Usuário está ciente e concorda com a coleta, armazenamento,
              tratamento, processamento e uso das Informações enviadas e/ou
              transmitidas pelo sistema da DevApi, nos termos estabelecidos
              nestes Termos de Uso e Política de Privacidade.
            </u>
            <br />
            <br />
            <u>
              Ao utilizar o aplicativo ou a Plataforma da DevApi, o usuário
              concorda e aceita integralmente as disposições destes Termos de
              Uso e Política de Privacidade.
            </u>
          </p>
        </S.Content>
      </S.Container>
    </>
  )
}

export default PrivacyPolicy
