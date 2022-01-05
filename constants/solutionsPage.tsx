import React, { ReactNode } from 'react'

import { ConnectorsCard } from '../components/ConnectorsCard'
import * as S from '../styles/solutions'

export interface ISolutionPage {
  seo: {
    metaTitle: string
  }
  title: {
    text: string
    width?: string
  }
  subtitle: string
  contentTitle: ReactNode
  contentText: ReactNode
  component: ReactNode
  integrationCard?: IIntegrationCard[]
  textJoinNow?: ReactNode
}

interface IIntegrationCard {
  imageLeft: string
  imageRight: string
}

export const solutionsPage = {
  gestao: {
    seo: {
      metaTitle: 'DevApi | Soluções em Gestão',
    },
    title: {
      text: 'Cada empresa enfrenta diferentes <b>desafios de gestão. Supere os seus!</b>',
    },
    subtitle:
      'Sistemas ERP desempenham um papel central na gestão. Integre seu ERP aos demais sistemas e fontes de dados que a empresa utiliza.',
    contentTitle: (
      <h2>
        Visão centralizada <b>do seu negócio!</b>
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
            { url: '/images/connectors/magento.png', name: 'Magento' },
            { url: '/images/connectors/sankhya.png', name: 'Sankhya' },
          ]}
          text="Gestão de pedidos e estoque de lojas franqueadas."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/sap-one.png', name: 'SAP' },
            { url: '/images/connectors/picpay.png', name: 'PicPay' },
            { url: '/images/connectors/gmail.png', name: 'Gmail' },
          ]}
          text="Busque os pedidos faturados e registre os boletos no gateway de pagamento e envie para o cliente."
        />
      </>
    ),
    integrationCard: [
      {
        imageLeft: '/images/connectors/totvs-white.png',
        imageRight: '/images/connectors/salesforce.png',
      },
      {
        imageLeft: '/images/connectors/oracle.png',
        imageRight: '/images/connectors/movidesk.png',
      },
      {
        imageLeft: '/images/connectors/sap.png',
        imageRight: '/images/connectors/power-bi.png',
      },
      {
        imageLeft: '/images/connectors/sankhya.png',
        imageRight: '/images/connectors/magento.png',
      },
      {
        imageLeft: '/images/connectors/whatdoyouwant.png',
        imageRight: '/images/connectors/whatdoyouwant.png',
      },
    ],
    textJoinNow: (
      <h2>
        Confira algumas das integrações de ERP e Gestão
        <b> que realizamos para os nossos clientes</b>
      </h2>
    ),
  },
  marketing: {
    seo: {
      metaTitle: 'DevApi | Soluções em Marketing',
    },
    title: {
      text: '<b>Marketing integrado impulsionando</b> a sua empresa no mercado',
      width: '60%',
    },
    subtitle:
      'A nova era do marketing integrado espera por você. Elimine tarefas manuais, acelere a conversão em vendas e encante os seus clientes!',
    contentTitle: (
      <h2>
        Crie uma estrutura Omnichannel com{' '}
        <b>estratégias de marketing integrado</b>
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
            { url: '/images/connectors/ads.png', name: 'Google Ads' },
            { url: '/images/connectors/instagram.png', name: 'Instagram' },
            {
              url: '/images/connectors/facebook-ads.png',
              name: 'Facebook Ads',
            },
          ]}
          text="Busque performance de campanhas e conversões e envie para seu B.I."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/facebook.png', name: 'Facebook' },
            { url: '/images/connectors/instagram.png', name: 'Instagram' },
            { url: '/images/connectors/rd-station.png', name: 'RD Station' },
          ]}
          text="Capture novos leads nos canais de marketing e crie um novo lead no RD Station Marketing."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/shopify.png', name: 'Shopify' },
            { url: '/images/connectors/rd-station.png', name: 'RD Station' },
          ]}
          text="A cada pedido criado no Shopify, crie um lead no RD Station Marketing."
        />
      </>
    ),
    integrationCard: [
      {
        imageLeft: '/images/connectors/hubspot.png',
        imageRight: '/images/connectors/takeblip.png',
      },
      {
        imageLeft: '/images/connectors/moskit.png',
        imageRight: '/images/connectors/oracle.png',
      },
      {
        imageLeft: '/images/connectors/marketo.png',
        imageRight: '/images/connectors/bling.png',
      },
      {
        imageLeft: '/images/connectors/rd-station.png',
        imageRight: '/images/connectors/vtex.png',
      },
      {
        imageLeft: '/images/connectors/whatdoyouwant.png',
        imageRight: '/images/connectors/whatdoyouwant.png',
      },
    ],
    textJoinNow: (
      <h2>
        Confira algumas das integrações de Marketing
        <b> que realizamos para os nossos clientes</b>
      </h2>
    ),
  },
  comercial: {
    seo: {
      metaTitle: 'DevApi | Soluções comerciais',
    },
    title: {
      text: '<b>Impulsione as vendas da sua empresa </b> integrando os sistemas',
    },
    subtitle:
      'Automatize a operação comercial e aumente o tempo da equipe para se dedicar ao que realmente importa: suas vendas!',
    contentTitle: (
      <h2>
        Processo comercial com <b>agilidade e inteligência</b>
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
            { url: '/images/connectors/ads.png', name: 'Google Ads' },
            { url: '/images/connectors/pipedrive.png', name: 'Pipedrive' },
            { url: '/images/connectors/clicksign.png', name: 'ClickSign' },
          ]}
          text="Capture leads ganhos e envie o contrato para assinatura eletrônica."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/rd-station.png', name: 'RD Station' },
            { url: '/images/connectors/salesforce.png', name: 'Salesforce' },
          ]}
          text="Busque os novos leads no RD Station Marketing e crie o lead no CRM."
        />
      </>
    ),
    integrationCard: [
      {
        imageLeft: '/images/connectors/salesforce.png',
        imageRight: '/images/connectors/docusign.png',
      },
      {
        imageLeft: '/images/connectors/pipefy.png',
        imageRight: '/images/connectors/phonetrack.png',
      },
      {
        imageLeft: '/images/connectors/hubspot.png',
        imageRight: '/images/connectors/sankhya.png',
      },
      {
        imageLeft: '/images/connectors/oracle.png',
        imageRight: '/images/connectors/pfy.png',
      },
      {
        imageLeft: '/images/connectors/whatdoyouwant.png',
        imageRight: '/images/connectors/whatdoyouwant.png',
      },
    ],
    textJoinNow: (
      <h2>
        Confira algumas das integrações de vendas
        <b> que realizamos para os nossos clientes</b>
      </h2>
    ),
  },
  rh: {
    seo: {
      metaTitle: 'DevApi | Soluções em RH',
    },
    title: {
      text: 'RH 4.0: Sua empresa está preparada para os <b>novos desafios na gestão de pessoas?</b>',
      width: '65%',
    },
    subtitle:
      'Employer Branding, People Analytics, Gestão de Dados e Business Intelligence junto com a agilidade nos processos internos do Departamento Pessoal.',
    contentTitle: (
      <h2>
        Recursos Humanos mais <b>estratégico e eficiente</b>
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
            { url: '/images/connectors/gupy.png', name: 'Gupy' },
            { url: '/images/connectors/senior.png', name: 'Senior' },
            { url: '/images/connectors/vr.png', name: 'VR' },
          ]}
          text="Busque os colaboradores contratados na Gupy e as envie para o setor de RH na Senior e solicite a criação do vale alimentação na VR."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/solides.png', name: 'Sólides' },
            { url: '/images/connectors/linkedin.png', name: 'Linkedin' },
          ]}
          text="Capture vagas no HR e crie anúncios no Linkedin."
        />
      </>
    ),
    integrationCard: [
      {
        imageLeft: '/images/connectors/ahgora.png',
        imageRight: '/images/connectors/sap.png',
      },
      {
        imageLeft: '/images/connectors/alelo.png',
        imageRight: '/images/connectors/senior.png',
      },
      {
        imageLeft: '/images/connectors/kenoby.png',
        imageRight: '/images/connectors/soma-pay.png',
      },
      {
        imageLeft: '/images/connectors/solides.png',
        imageRight: '/images/connectors/linkedin.png',
      },
      {
        imageLeft: '/images/connectors/whatdoyouwant.png',
        imageRight: '/images/connectors/whatdoyouwant.png',
      },
    ],
    textJoinNow: (
      <h2>
        Confira algumas das integrações do Setor de Recursos Humanos
        <b> que realizamos para os nossos clientes</b>
      </h2>
    ),
  },
  'e-commerce': {
    seo: {
      metaTitle: 'DevApi | Soluções em e-commerce',
    },
    title: {
      text: '<b>Venda 24h por dia, 7 dias por semana</b> com seu e-commerce automatizado',
    },
    subtitle:
      'Integre seu e-commerce aos Marketplaces e às suas ferramentas de marketing, CRM e atendimento, ERP, financeiro, logística e muito mais!',
    contentTitle: (
      <h2>
        Automatizar e escalar. <b>Ou desaparecer!</b>
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
            { url: '/images/connectors/totvs.png', name: 'Totvs' },
            { url: '/images/connectors/vtex.png', name: 'Vtex' },
          ]}
          text="Capture os produtos, estoque e preço e atualize no seu e-Commerce."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/sap-one.png', name: 'SAP' },
            { url: '/images/connectors/magalu.png', name: 'Magalu' },
            { url: '/images/connectors/b2w.png', name: 'B2W' },
          ]}
          text="Envio de produtos do ERP aos Marketplaces."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/magento.png', name: 'Magento' },
            { url: '/images/connectors/hubspot.png', name: 'Hubspot' },
          ]}
          text="Envio de clientes do e-Commerce ao CRM."
        />
      </>
    ),
    integrationCard: [
      {
        imageLeft: '/images/connectors/vtex.png',
        imageRight: '/images/connectors/sankhya.png',
      },
      {
        imageLeft: '/images/connectors/magento.png',
        imageRight: '/images/connectors/shipay.png',
      },
      {
        imageLeft: '/images/connectors/mercadolivre2x.png',
        imageRight: '/images/connectors/frete.png',
      },
      {
        imageLeft: '/images/connectors/anymarket.png',
        imageRight: '/images/connectors/oracle.png',
      },
      {
        imageLeft: '/images/connectors/whatdoyouwant.png',
        imageRight: '/images/connectors/whatdoyouwant.png',
      },
    ],
    textJoinNow: (
      <h2>
        Confira algumas das integrações de e-Commerce & MarketPlace
        <b> que realizamos para os nossos clientes</b>
      </h2>
    ),
  },
  'empresas-360': {
    seo: {
      metaTitle: 'DevApi | Soluções para Empresas',
    },
    title: {
      text: 'A qualquer momento, em qualquer lugar: <b>tudo integrado!</b>',
      width: '55%',
    },
    subtitle:
      'Uma empresa 360° representa uma organização que possui integração total entre sistemas, dados, processos, projetos e pessoas.',
    contentTitle: (
      <h2>
        Defina o cenário ideal <b>para a sua empresa!</b>
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
    seo: {
      metaTitle: 'DevApi | Soluções Financeiras',
    },
    title: {
      text: '<b>Gestão financeira de alta performance</b> para sua empresa',
    },
    subtitle:
      'Integre soluções financeiras e APIs open banking, automatize a contabilidade, relatórios e DREs de forma ágil e segura.',
    contentTitle: (
      <h2>
        O processo de digitalização da <b>economia não para!</b>
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
            { url: '/images/connectors/omie.png', name: 'Omie' },
            { url: '/images/connectors/superlogica.png', name: 'Superlógica' },
          ]}
          text="Registro de recebimento e contas a receber."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/senior.png', name: 'Senior' },
            { url: '/images/connectors/zenvia.png', name: 'Zenvia' },
          ]}
          text="Envio de SMS para clientes inadimplentes."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/sap-one.png', name: 'SAP' },
            { url: '/images/connectors/picpay.png', name: 'PicPay' },
            { url: '/images/connectors/gmail.png', name: 'Gmail' },
          ]}
          text="Busque os pedidos faturados e registre os boletos no gateway de pagamento e envie para o cliente."
        />
      </>
    ),
    integrationCard: [
      {
        imageLeft: '/images/connectors/asaas.png',
        imageRight: '/images/connectors/sap.png',
      },
      {
        imageLeft: '/images/connectors/cielo.png',
        imageRight: '/images/connectors/ca.png',
      },
      {
        imageLeft: '/images/connectors/picpay.png',
        imageRight: '/images/connectors/vhsys.png',
      },
      {
        imageLeft: '/images/connectors/superlogica.png',
        imageRight: '/images/connectors/clicksign.png',
      },
      {
        imageLeft: '/images/connectors/whatdoyouwant.png',
        imageRight: '/images/connectors/whatdoyouwant.png',
      },
    ],
    textJoinNow: (
      <h2>
        Confira algumas das integrações para o setor Financeiro
        <b> que realizamos para os nossos clientes</b>
      </h2>
    ),
  },
  'seu-produto': {
    seo: {
      metaTitle: 'DevApi | Soluções para seu produto',
    },
    title: {
      text: 'Torne o seu produto <b>líder de mercado</b>',
      width: '30%',
    },
    subtitle:
      'Escale as integrações do seu produto, conecte-o aos sistemas do mercado e não perca mais nenhuma venda!',
    contentTitle: (
      <h2>
        Conecte o seu produto <b>com o mundo</b>
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
    seo: {
      metaTitle: 'DevApi | Soluções em Logística',
    },
    title: {
      text: 'Logística 4.0: Sua empresa está preparada <b>para essa transformação?</b>',
    },
    subtitle:
      'Integre a operação de logística, supply e delivery ao ecossistema da sua empresa e de seus clientes e parceiros.',
    contentTitle: (
      <h2>
        Logística integrada, <b> visão 360 graus</b>
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
            { url: '/images/connectors/totvs.png', name: 'Totvs' },
            { url: '/images/connectors/shopify.png', name: 'Shopify' },
            { url: '/images/connectors/frete.png', name: 'Frete Rápido' },
          ]}
          text="Busque todas as DANFEs no seu ERP e atualize o status do pedido para faturado no seu e-commerce e as envie para o setor de logística."
        />
        <ConnectorsCard
          connectors={[
            { url: '/images/connectors/correios.png', name: 'Correios' },
            { url: '/images/connectors/magento.png', name: 'Magento' },
          ]}
          text="Atualização de tracking code."
        />
      </>
    ),
    integrationCard: [
      {
        imageLeft: '/images/connectors/bsoftblue.png',
        imageRight: '/images/connectors/alelo.png',
      },
      {
        imageLeft: '/images/connectors/cobli.png',
        imageRight: '/images/connectors/flexy.png',
      },
      {
        imageLeft: '/images/connectors/fedexpurple.png',
        imageRight: '/images/connectors/magento.png',
      },
      {
        imageLeft: '/images/connectors/frete.png',
        imageRight: '/images/connectors/anymarket.png',
      },
      {
        imageLeft: '/images/connectors/whatdoyouwant.png',
        imageRight: '/images/connectors/whatdoyouwant.png',
      },
    ],
    textJoinNow: (
      <h2>
        Confira algumas das integrações de Logísticas
        <b> que realizamos para os nossos clientes</b>
      </h2>
    ),
  },
}
