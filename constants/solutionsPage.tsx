import React, { ReactNode } from 'react'
import { ConnectorsCard } from '../components/ConnectorsCard'
import * as S from '../styles/solutions'

export interface ISolutionPage {
  metaTitle: string
  title: ReactNode
  titleWidth?: string
  subTitle: ReactNode
  contentTitle: ReactNode
  contentText: ReactNode
  component: ReactNode
}

export const solutionsPage = {
  gestao: {
    metaTitle: 'Soluções em Gestão | DevApi',
    title: (
      <h1>
        Cada empresa enfrenta diferentes{' '}
        <b>desafios de gestão. Supere os seus!</b>
      </h1>
    ),
    subTitle: (
      <p>
        Sistemas ERP desempenham um papel central na gestão. Integre seu ERP aos
        demais sistemas e fontes de dados que a empresa utiliza.
      </p>
    ),
    contentTitle: (
      <h2>
        Visão centralizada <span>do seu negócio!</span>
      </h2>
    ),
    contentText: (
      <p>
        Integrar ERP aos demais sistemas da empresa possibilita a centralização
        de todas as informações e a automação de todos os processos e dados do
        negócio. As possibilidades são ilimitadas! Através da integração do seu
        ERP, os ativos da empresa ficam disponíveis em uma única fonte,
        proporcionando a tomada de decisões estratégicas baseadas em dados
        íntegros.
        <br />
        <br />
        Cada empresa é única e enfrenta desafios diferentes. Mas todas se
        beneficiariam de reduzir custos, aprimorar a colaboração entre times,
        melhorar as análises, otimizar a produtividade, ter clientes mais
        felizes, maior compliance e gerenciamento de riscos, monitoramento de
        estoque mais certeiro, melhor planejamento e gerenciamento de recursos.
        <br />
        <br />
        Administrar a operação com métodos manuais ou desatualizados só fará com
        que sua empresa fique para trás. O que seu negócio precisa integrar hoje
        para sair na frente da concorrência?
        <br />
        <br />
        Confira algumas das integrações de ERP e Gestão que realizamos para os
        nossos clientes:
      </p>
    ),
    component: (
      <>
        <ConnectorsCard
          connectors={[
            { url: '/connectors/magento.png', name: 'Magento' },
            { url: '/connectors/sankhya.png', name: 'Sankhya' },
          ]}
          text="Gestão de pedidos e estoque de lojas franqueadas."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/sap-one.png', name: 'SAP' },
            { url: '/connectors/picpay.png', name: 'PicPay' },
            { url: '/connectors/gmail.png', name: 'Gmail' },
          ]}
          text="Busque os pedidos faturados e registre os boletos no gateway de pagamento e envie para o cliente."
        />
      </>
    ),
  },
  marketing: {
    metaTitle: 'Soluções em Marketing | DevApi',
    title: (
      <h1>
        <b>Marketing integrado impulsionando</b> a sua empresa no mercado
      </h1>
    ),
    titleWidth: '60%',
    subTitle: (
      <p>
        A nova era do marketing integrado espera por você. Elimine tarefas
        manuais, acelere a conversão em vendas e encante os seus clientes!
      </p>
    ),
    contentTitle: (
      <h2>
        Crie uma estrutura Omnichannel com
        <span>estratégias de marketing integrado</span>
      </h2>
    ),
    contentText: (
      <p>
        Cada vez mais os clientes demandam consistência em todos os pontos de
        contato com as empresas, sejam online ou físicos, promocionais ou de
        atendimento e suporte. Este novo cenário exige que as empresas conectem
        não só suas ferramentas de marketing, mas também os demais sistemas da
        empresa, de forma a manter uma comunicação integrada e coesa.
        <br />
        <br />
        Acabe de vez com o trabalho manual! Integre todas as ferramentas,
        automatize os dados e a jornada dos leads de ponta a ponta, sem
        planilhas para copiar e colar nem ações manuais. Obtenha dados
        confiáveis para análise e eleve sua operação de marketing a outro
        patamar!
        <br />
        <br />
        Confira algumas das integrações de marketing que realizamos para os
        nossos clientes:
      </p>
    ),
    component: (
      <>
        <ConnectorsCard
          connectors={[
            { url: '/connectors/ads.png', name: 'Google Ads' },
            { url: '/connectors/instagram.png', name: 'Instagram' },
            { url: '/connectors/facebook-ads.png', name: 'Facebook Ads' },
          ]}
          text="Busque performance de campanhas e conversões e envie para seu B.I."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/facebook.png', name: 'Facebook' },
            { url: '/connectors/instagram.png', name: 'Instagram' },
            { url: '/connectors/rd-station.png', name: 'RD Station' },
          ]}
          text="Capture novos leads nos canais de marketing e crie um novo lead no RD Station Marketing."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/shopify.png', name: 'Shopify' },
            { url: '/connectors/rd-station.png', name: 'RD Station' },
          ]}
          text="A cada pedido criado no Shopify, crie um lead no RD Station Marketing."
        />
      </>
    ),
  },
  comercial: {
    metaTitle: 'Soluções comerciais | DevApi',
    title: (
      <h1>
        <b>Impulsione as vendas da sua empresa </b>
        integrando os sistemas
      </h1>
    ),
    subTitle: (
      <p>
        Automatize a operação comercial e aumente o tempo da equipe para se
        dedicar ao que realmente importa: suas vendas!
      </p>
    ),
    contentTitle: (
      <h2>
        Processo comercial com <span>agilidade e inteligência</span>
      </h2>
    ),
    contentText: (
      <p>
        Processos comerciais ágeis e eficientes necessitam etapas inteligentes e
        acesso a informações ricas de prospects e leads. As possibilidades são
        infinitas! Integre o CRM aos sistemas de marketing, de chat e
        mensageria, ferramentas de gestão, sistemas administrativos, financeiros
        e logísticos, e proporcione ao setor comercial uma vantagem competitiva
        diante da concorrência.
        <br />
        <br />
        Foco nas vendas: elimine o trabalho manual! Integre todos os sistemas e
        automatize os dados do seu processo comercial. Acabe com as planilhas de
        copiar e colar, dados perdidos no CRM, follows não realizados,
        relatórios trabalhosos e pouco confiáveis. Transforme seu time comercial
        em uma verdadeira máquina de vendas!
        <br />
        <br />
        Confira algumas das integrações de vendas que realizamos para os nossos
        clientes:
      </p>
    ),
    component: (
      <>
        <ConnectorsCard
          connectors={[
            { url: '/connectors/ads.png', name: 'Google Ads' },
            { url: '/connectors/pipedrive.png', name: 'Pipedrive' },
            { url: '/connectors/clicksign.png', name: 'ClickSign' },
          ]}
          text="Capture leads ganhos e envie o contrato para assinatura eletrônica."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/rd-station.png', name: 'RD Station' },
            { url: '/connectors/salesforce.png', name: 'Salesforce' },
          ]}
          text="Busque os novos leads no RD Station Marketing e crie o lead no CRM."
        />
      </>
    ),
  },
  rh: {
    metaTitle: 'Soluções em RH | DevApi',
    title: (
      <h1>
        RH 4.0: Sua empresa está preparada para os{' '}
        <b>novos desafios na gestão de pessoas?</b>
      </h1>
    ),
    titleWidth: '65%',
    subTitle: (
      <p>
        Employer Branding, People Analytics, Gestão de Dados e Business
        Intelligence junto com a agilidade nos processos internos do
        Departamento Pessoal.
      </p>
    ),
    contentTitle: (
      <h2>
        Recursos Humanos mais <span>estratégico e eficiente</span>
      </h2>
    ),
    contentText: (
      <p>
        A área de Recursos Humanos vive em constante evolução. Existe um grande
        abismo que separa as práticas antigas dos novos desafios na gestão de
        pessoas. E isso vai muito além do próprio setor. Devido ao grande volume
        de dados gerados pelos diversos departamentos da empresa surge o desafio
        de organizá-los sistematicamente, criando parâmetros para cada
        colaborador e área.
        <br />
        <br />
        Inserido na era digital, o RH 4.0 faz uso de ferramentas tecnológicas
        como People Analytics, Gestão de Dados e Business Intelligence, o que
        vem facilitando a tomada de decisão e a otimização das diretrizes
        estratégicas para a organização.
        <br />
        <br />
        Confira algumas das integrações do setor de Recursos Humanos que
        realizamos para os nossos clientes:
      </p>
    ),
    component: (
      <>
        <ConnectorsCard
          connectors={[
            { url: '/connectors/gupy.png', name: 'Gupy' },
            { url: '/connectors/senior.png', name: 'Senior' },
            { url: '/connectors/vr.png', name: 'VR' },
          ]}
          text="Busque os colaboradores contratados na Gupy e as envie para o setor de RH na Senior e solicite a criação do vale alimentação na VR."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/solides.png', name: 'Sólides' },
            { url: '/connectors/linkedin.png', name: 'Linkedin' },
          ]}
          text="Capture vagas no HR e crie anúncios no Linkedin."
        />
      </>
    ),
  },
  'e-commerce': {
    metaTitle: 'Soluções em e-Commerce | DevApi',
    title: (
      <h1>
        <b>Venda 24h por dia, 7 dias por semana</b> com seu e-Commerce
        automatizado
      </h1>
    ),
    subTitle: (
      <p>
        Integre seu e-Commerce aos Marketplaces e às suas ferramentas de
        marketing, CRM e atendimento, ERP, financeiro, logística e muito mais!
      </p>
    ),
    contentTitle: (
      <h2>
        Automatizar e escalar. <span>Ou desaparecer!</span>
      </h2>
    ),
    contentText: (
      <p>
        O comércio eletrônico cresce ano após ano e dá sinais de que este
        crescimento não vai parar tão cedo. Empresas tradicionais estão migrando
        e novos empreendedores estão abrindo suas lojas virtuais e ampliando o
        ecossistema digital, a par da consolidação de grandes players e uma
        disputa cada vez mais feroz pela visibilidade nos Marketplaces.
        <br />
        <br />
        Gerenciar múltiplos canais de vendas e de comunicação, atualizar
        informações de produtos, estoques e consolidar pedidos de um sistema
        para outro pode gerar caos e prejudicar a imagem da sua loja ou marca.
        <br />
        <br />
        Com a DevApi você pode conectar os mais diversos gateways de pagamento,
        logística, atendimento, marketing, comercial, gestão, marketplaces e
        muito mais, tudo à medida da sua operação. Automatize e escale o seu
        negócio com rapidez e facilidade, aumente suas vendas e fidelize os seus
        clientes!
        <br />
        <br />
        Confira algumas das integrações de e-Commerce & Marketplaces que
        realizamos para os nossos clientes:
      </p>
    ),
    component: (
      <>
        <ConnectorsCard
          connectors={[
            { url: '/connectors/totvs.png', name: 'Totvs' },
            { url: '/connectors/vtex.png', name: 'Vtex' },
          ]}
          text="Capture os produtos, estoque e preço e atualize no seu e-Commerce."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/sap-one.png', name: 'SAP' },
            { url: '/connectors/magalu.png', name: 'Magalu' },
            { url: '/connectors/b2w.png', name: 'B2W' },
          ]}
          text="Envio de produtos do ERP aos Marketplaces."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/magento.png', name: 'Magento' },
            { url: '/connectors/hubspot.png', name: 'Hubspot' },
          ]}
          text="Envio de clientes do e-Commerce ao CRM."
        />
      </>
    ),
  },
  'empresas-360': {
    metaTitle: 'Soluções para Empresas | DevApi',
    title: (
      <h1>
        A qualquer momento, em qualquer lugar: <b>tudo integrado!</b>
      </h1>
    ),
    titleWidth: '55%',
    subTitle: (
      <p>
        Uma empresa 360° representa uma organização que possui integração total
        entre sistemas, dados, processos, projetos e pessoas.
      </p>
    ),
    contentTitle: (
      <h2>
        Defina o cenário ideal
        <span> para a sua empresa!</span>
      </h2>
    ),
    contentText: (
      <p>
        Se sua empresa pode ser o estado da arte no segmento em que atua, por
        que não buscar esse diferencial competitivo? Sonhe sem limites, a DevApi
        torna realidade! Qual é o seu sonho grande? Conte para a gente e conte
        com a gente, somos o seu parceiro estratégico.
        <br />
        <br />
        Integre todos os sistemas, dados e processos de marketing, vendas,
        gestão, atendimento, logística, recursos humanos, administrativo e
        financeiro… não há limites!
      </p>
    ),
    component: (
      <S.ImageContainer>
        <img src="/logo/business.png" alt="Empresa 360" />
      </S.ImageContainer>
    ),
  },
  financeiro: {
    metaTitle: 'Soluções Financeiras | DevApi',
    title: (
      <h1>
        <b>Gestão financeira de alta performance</b>
        <br /> para sua empresa
      </h1>
    ),
    subTitle: (
      <p>
        Integre soluções financeiras e APIs open banking, automatize a
        contabilidade, relatórios e DREs de forma ágil e segura.
      </p>
    ),
    contentTitle: (
      <h2>
        O processo de digitalização da
        <span> economia não para!</span>
      </h2>
    ),
    contentText: (
      <p>
        Otimize o departamento financeiro, crie integrações robustas e seguras,
        centralizando os dados e automatizando processos morosos, evitando
        intervenções manuais, erros e retrabalho.
        <br />
        <br />
        A digitalização da economia necessita de um tráfego de dados
        transparente, seguro e ágil. APIS Open Banking e diversas soluções
        financeiras permitem inovar sem barreiras! Mas tal só é possível através
        da adoção de uma plataforma de integração capaz de conectar os diversos
        sistemas utilizados. Somos os parceiros estratégicos da inovação na sua
        empresa!
        <br />
        <br />
        Confira algumas das integrações para o setor financeiro que realizamos
        para os nossos clientes:
      </p>
    ),
    component: (
      <>
        <ConnectorsCard
          connectors={[
            { url: '/connectors/omie.png', name: 'Omie' },
            { url: '/connectors/superlogica.png', name: 'Superlógica' },
          ]}
          text="Registro de recebimento e contas a receber."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/senior.png', name: 'Senior' },
            { url: '/connectors/zenvia.png', name: 'Zenvia' },
          ]}
          text="Envio de SMS para clientes inadimplentes."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/sap-one.png', name: 'SAP' },
            { url: '/connectors/picpay.png', name: 'PicPay' },
            { url: '/connectors/gmail.png', name: 'Gmail' },
          ]}
          text="Busque os pedidos faturados e registre os boletos no gateway de pagamento e envie para o cliente."
        />
      </>
    ),
  },
  'seu-produto': {
    metaTitle: 'Soluções para seu produto | DevApi',
    title: (
      <h1>
        Torne o seu produto <b>líder de mercado</b>
      </h1>
    ),
    titleWidth: '30%',
    subTitle: (
      <p>
        Escale as integrações do seu produto, conecte-o aos sistemas do mercado
        e não perca mais nenhuma venda!
      </p>
    ),
    contentTitle: (
      <h2>
        Conecte o seu produto
        <span> com o mundo</span>
      </h2>
    ),
    contentText: (
      <p>
        Elimine o backlog de integrações do seu produto sem desviar a equipe de
        desenvolvimento do core business da empresa. Incremente o portfólio de
        integrações nativas com facilidade, possibilitando a integração do seu
        produto aos sistemas de mercado, de seus clientes e parceiros. Nunca
        mais perca negócios por falta de integrações!
        <br />
        <br />
        Incorpore a DevApi ao seu produto. É simples, rápido e seguro. Depois
        disso, venda sem limites impostos pela ausência de integrações. Você
        acredita na solução que sua empresa está desenvolvendo? Então converse
        com a gente, vamos ajudar você a desbloquear todo o potencial do seu
        produto. Prepare-se para escalar!
      </p>
    ),
    component: (
      <S.ImageContainer>
        <img src="/logo/product.png" alt="Empresa 360" />
      </S.ImageContainer>
    ),
  },
  logistica: {
    metaTitle: 'Soluções em Logística | DevApi',
    title: (
      <h1>
        Logística 4.0: Sua empresa está preparada{' '}
        <b>para essa transformação?</b>
      </h1>
    ),
    subTitle: (
      <p>
        Integre a operação de logística, supply e delivery ao ecossistema da sua
        empresa e de seus clientes e parceiros.
      </p>
    ),
    contentTitle: (
      <h2>
        Logística integrada,
        <span> visão 360 graus</span>
      </h2>
    ),
    contentText: (
      <p>
        A logística 4.0 vem alterar os processos logísticos, que agora começam a
        ser altamente influenciados pela digitalização e pela automação, com
        coordenação multifuncional e supraempresarial em toda a cadeia de
        fornecimento. Conexões inteligentes otimizando os requisitos de
        velocidade, ganho de eficiência, redução de custos e ampla disposição de
        dados em tempo real.
        <br />
        <br />
        A integração é a palavra-chave para adotar as práticas logísticas mais
        modernas, proporcionando a conectividade que otimiza a gestão, o ganho
        de escala e que permite o controle total sobre todos os processos.
        Analise dados para criar estratégias mais eficientes, diminua o lead
        time e melhore a comunicação entre equipes, clientes, fornecedores e
        parceiros. Integre-se à logística 4.0!
        <br />
        <br />
        Confira algumas das integrações de Logística que realizamos para os
        nossos clientes:
      </p>
    ),
    component: (
      <>
        <ConnectorsCard
          connectors={[
            { url: '/connectors/totvs.png', name: 'Totvs' },
            { url: '/connectors/shopify.png', name: 'Shopify' },
            { url: '/connectors/frete.png', name: 'Frete Rápido' },
          ]}
          text="Busque todas as DANFEs no seu ERP e atualize o status do pedido para faturado no seu e-commerce e as envie para o setor de logística."
        />
        <ConnectorsCard
          connectors={[
            { url: '/connectors/correios.png', name: 'Correios' },
            { url: '/connectors/magento.png', name: 'Magento' },
          ]}
          text="Atualização de tracking code."
        />
      </>
    ),
  },
}
