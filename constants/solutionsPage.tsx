import React, { ReactNode } from 'react'

import { ConnectorsCard } from '../components/ConnectorsCard'
import * as S from '../styles/solutions'

export interface ISolutionPage {
  seo: {
    metaTitle: string
  }
  title: {
    text: string
    pageName: string
    width?: string
  }
  subtitle: string
  listItems: []
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
      pageName: 'Gestão',
      text: '<b>Solucione os desafios da gestão da sua empresa!</b>',
    },
    subtitle:
      'Integre ERP aos demais sistemas e fontes de dados. Tenha a gestão central do seu negócio.',
    contentTitle: (
      <h2>
        <b>O que seu negócio precisa para sair na frente da concorrência?</b>
      </h2>
    ),
    contentText: (
      <p>
        Com a plataforma DevApi tenha os ativos da sua empresa disponíveis em
        uma única fonte. Tome decisões estratégicas baseadas em dados efetivos.
        E mais:
      </p>
    ),
    listItems: [
      {
        text: 'Visão centralizada da gestão do seu negócio;',
      },
      {
        text: 'Integre dados e informações no mesmo canal;',
      },
      {
        text: 'Automatize processos para eliminar erros retrabalhos de tarefas manuais;',
      },
      {
        text: 'Gestão mais ágil e com segurança;',
      },
      {
        text: 'Integre ERPs a fonte de dados e demais sistemas que a sua empresa utiliza;',
      },
      {
        text: 'Otimize tempo e investimento financeiro;',
      },
      {
        text: 'Aprimore a colaboração entre as equipes;',
      },
      {
        text: 'Gerencie riscos com eficiência;',
      },
      {
        text: 'Integre governança de dados e compliance, mantendo os sistemas atualizados;',
      },
      {
        text: 'Monitore estoque com assertividade;',
      },
      {
        text: 'Melhore o planejamento e o gerenciamento de recursos;',
      },
      {
        text: 'Acelere a transformação digital da sua empresa.',
      },
    ],
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

    textJoinNow: (
      <h2>
        Confira algumas das integrações de <b>ERP e gestão</b> que realizamos
      </h2>
    ),
  },
  marketing: {
    seo: {
      metaTitle: 'DevApi | Soluções em Marketing',
    },
    title: {
      pageName: 'Marketing',
      text: '<b>Impulsione a sua empresa no mercado com um Marketing integrado</b>',
      width: '60%',
    },
    subtitle:
      'Elimine tarefas manuais, acelere a conversão em vendas e encante os seus clientes.',
    contentTitle: (
      <h2>
        <b>
          O que sua empresa precisa integrar para ter um Marketing integrado,
          coeso e efetivo?
        </b>
      </h2>
    ),
    contentText: (
      <p>
        Com a plataforma DevApi, crie uma estrutura Omnichannel com estratégias
        de marketing totalmente integrado. E mais:
      </p>
    ),
    listItems: [
      {
        text: 'Conecte as ferramentas de marketing e os demais sistemas da sua empresa;',
      },
      {
        text: 'Mantenha uma comunicação integrada, coesa e efetiva;',
      },
      {
        text: 'Elimine ou minimize o trabalho manual;',
      },
      {
        text: 'Automatize os dados e a jornada dos leads de ponta a ponta, sem planilhas para copiar e colar;',
      },
      {
        text: 'Tenha consistência em todos os pontos de contato, sejam online ou físico, promocionais ou de atendimento e suporte;',
      },
      {
        text: 'Eleve sua operação de marketing a outro patamar.',
      },
    ],
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
            { url: '/images/connectors/shopify.png', name: 'Shopify' },
            { url: '/images/connectors/rd-station.png', name: 'RD Station' },
          ]}
          text="A cada pedido criado no Shopify, crie um lead no RD Station Marketing."
        />
      </>
    ),
    textJoinNow: (
      <h2>
        Confira algumas das integrações de <b>marketing</b> que realizamos
      </h2>
    ),
  },
  comercial: {
    seo: {
      metaTitle: 'DevApi | Soluções comerciais',
    },
    title: {
      pageName: 'Comercial',
      text: '<b>Venda mais e escale o seu negócio integrando os sistemas da sua empresa</b>',
    },
    subtitle:
      'Automatize a operação comercial, integre CRM às demais ferramentas, e tenha uma equipe dedicada às vendas.',
    contentTitle: (
      <h2>
        <b>
          O que seu negócio precisa integrar para escalar e vender ainda mais?
        </b>
      </h2>
    ),
    listItems: [
      {
        text: 'Integre o CRM aos sistemas de marketing, chat e demais mensagens;',
      },
      {
        text: 'Conecte ferramentas de gestão, sistemas administrativos, financeiros e logísticos;',
      },
      {
        text: 'Tenha as informações “conversando” entre si;',
      },
      {
        text: 'Elimine ou minimize o trabalho manual;',
      },
      {
        text: 'Automatize os dados do processo comercial e não dependa mais de planilhas de copiar e colar;',
      },
      {
        text: 'Organize e não tenha mais dados perdidos no CRM;',
      },
      {
        text: 'Gerencie e tenha o máximo de aproveitamento dos follows realizados;',
      },
      {
        text: 'Tenha relatórios confiáveis e organize as informações de maneira simples e rápida;',
      },
      {
        text: 'Proporcione ao setor comercial vantagem competitiva diante da concorrência.',
      },
    ],
    contentText: (
      <p>
        Com a plataforma DevApi, tenha processos comerciais ágeis e efetivos e
        acesse rapidamente informações organizadas de prospects e leads. E mais:
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
    textJoinNow: (
      <h2>
        Confira algumas das integrações de <b>vendas</b> que realizamos
      </h2>
    ),
  },
  rh: {
    seo: {
      metaTitle: 'DevApi | Soluções em RH',
    },
    title: {
      pageName: 'RH 4.0',
      text: '<b>Esteja preparado para os novos desafios na gestão de pessoas com um RH 4.0</b>',
      width: '65%',
    },
    subtitle:
      'Employer Branding, People Analytics, Gestão de Dados e Business Intelligence junto com a agilidade nos processos internos do Departamento Pessoal.',
    contentTitle: (
      <h2>
        <b>
          O que sua empresa precisa integrar para ter um RH mais estratégico e
          eficiente?
        </b>
      </h2>
    ),
    contentText: (
      <p>
        Com a plataforma DevApi, tenha um RH preparado para os atuais desafios
        na gestão de pessoas. E mais:
      </p>
    ),
    listItems: [
      {
        text: 'Organize sistematicamente o volume de dados gerados pelos diversos departamentos da empresa;',
      },
      {
        text: 'Crie parâmetros para cada colaborador e área;',
      },
      {
        text: 'Tenha consistência para a tomada de decisões com rapidez;',
      },
      {
        text: 'Utilize com segurança e efetividade ferramentas tecnológicas como People Analytics, Gestão de Dados e Business Intelligence;',
      },
      {
        text: 'Otimize as diretrizes estratégicas para a sua empresa.',
      },
    ],
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
      pageName: 'e-commerce',
      text: '<b>Venda 24h por dia, 7 dias por semana com seu e-commerce automatizado</b>',
    },
    subtitle:
      'Integre seu e-commerce aos marketplaces e às suas ferramentas de marketing, CRM e atendimento, ERP, financeiro, logística e muito mais!',
    contentTitle: (
      <h2>
        <b>
          O que seu e-commerce precisa integrar para escalar, estar nos maiores
          marketplaces e vender ainda mais?
        </b>
      </h2>
    ),
    listItems: [
      {
        text: 'Gerencie múltiplos canais de vendas e de comunicação;',
      },
      {
        text: 'Atualize informações de produtos, estoque e entrega;',
      },
      {
        text: 'Consolide pedidos de um sistema para outro;',
      },
      {
        text: 'Conecte os mais diversos gateways de pagamento, logística, atendimento, marketing, comercial, gestão, marketplaces e muito mais;',
      },
      {
        text: 'Integre os sistemas de maneira personalizada, conforme a necessidade da operação;',
      },
      {
        text: 'Automatize e escale com rapidez e facilidade;',
      },
      {
        text: 'Aumente as vendas;',
      },
      {
        text: 'Fidelize os seus clientes.',
      },
    ],
    contentText: (
      <p>
        Com a plataforma DevApi, amplie o ecossistema digital, consolide seu
        e-commerce, e ganhe visibilidade nos marketplaces. E mais:
      </p>
    ),
    component: (
      <>
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
    textJoinNow: (
      <h2>
        Confira algumas das integrações de <b>e-commerce & marketplace</b> que
        realizamos
      </h2>
    ),
  },
  'empresas-360': {
    seo: {
      metaTitle: 'DevApi | Soluções para Empresas',
    },
    title: {
      pageName: 'Empresas 360',
      text: '<b>Integração total, a qualquer momento e em qualquer lugar.</b>',
      width: '55%',
    },
    subtitle:
      'Empresa 360° representa uma organização com sistemas, dados, processos, projetos e pessoas totalmente integrados.',
    contentTitle: (
      <h2>
        <b>O que sua empresa precisa integrar para ter uma gestão 360º?</b>
      </h2>
    ),
    contentText: (
      <p>
        Com a plataforma DevApi, defina o cenário ideal e tenha uma gestão
        integrada para a sua empresa. E mais:
      </p>
    ),
    listItems: [
      {
        text: 'Tenha diferencial competitivo;',
      },
      {
        text: 'Planeje sem barreiras;',
      },
      {
        text: 'Faça com que os dados e processos de marketing “conversem entre si”;',
      },
      {
        text: 'Integre todos os sistemas;',
      },
      {
        text: 'Conecte vendas, gestão, atendimento, logística, recursos humanos, administrativo e financeiro.',
      },
    ],
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
      pageName: 'Financeiro',
      text: '<b>Gestão financeira de alta performance para sua empresa</b>',
      width: '65%',
    },
    subtitle:
      'Integre soluções financeiras e APIs open banking, automatize a contabilidade, relatórios e DREs de forma ágil e segura.',
    contentTitle: (
      <h2>
        <b>
          O que sua empresa precisa integrar para implementar a transformação
          digital e estar dentro da digitalização da economia?
        </b>
      </h2>
    ),
    contentText: (
      <p>
        Com a plataforma DevApi, sua empresa conta com o parceiro estratégico
        para inovar sem barreiras e com segurança diante do processo de
        digitalização da economia, que não para. E mais:
      </p>
    ),
    listItems: [
      {
        text: 'Otimize o departamento financeiro;',
      },
      {
        text: 'Crie integrações robustas e seguras;',
      },
      {
        text: 'Tenha transparência, segurança e agilidade no tráfego de dados;',
      },
      {
        text: 'Inove sem barreiras com APIs Open Banking e as diversas soluções financeiras disponíveis;',
      },
      {
        text: 'Evitando intervenções manuais, erros e retrabalho;',
      },
      {
        text: 'Centralize os dados em uma única plataforma;',
      },
      {
        text: 'Automatize processos morosos;',
      },
      {
        text: 'Conte com uma plataforma de integração capaz de conectar os diversos sistemas utilizados em sua empresa.',
      },
    ],
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
      </>
    ),

    textJoinNow: (
      <h2>
        Confira algumas das integrações para o setor <b>financeiro</b> que
        realizamos
      </h2>
    ),
  },
  'seu-produto': {
    seo: {
      metaTitle: 'DevApi | Soluções para seu produto',
    },
    title: {
      pageName: 'Seu produto',
      text: '<b>Torne o seu produto líder de mercado</b>',
      width: '30%',
    },
    subtitle:
      'Escale as integrações do seu produto, conecte-o aos sistemas do mercado e não perca mais nenhuma venda.',
    contentTitle: (
      <h2>
        <b>
          O que sua empresa precisa integrar para tornar o seu produto líder de
          mercado?
        </b>
      </h2>
    ),
    contentText: (
      <p>Com a plataforma DevApi, conecte o seu produto com o mundo. E mais:</p>
    ),
    listItems: [
      {
        text: 'Elimine o backlog de integrações do seu produto;',
      },
      {
        text: 'Foque a equipe de desenvolvimento no core business da empresa;',
      },
      {
        text: 'Incremente o portfólio de integrações nativas com facilidade;',
      },
      {
        text: 'Venda sem barreiras;',
      },
      {
        text: 'Gere mais oportunidades de negócios e não perca mais nenhuma possibilidade por falta de integrações;',
      },
      {
        text: 'Possibilite a integração do seu produto aos sistemas de mercado, de seus clientes e parceiros;',
      },
      {
        text: 'Escale com efetividade e consistência.',
      },
    ],
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
      pageName: 'Logística 4.0',
      text: '<b>Tenha uma Logística 4.0 e insira a sua empresa na transformação digital</b>',
    },
    subtitle:
      'Integre a operação de logística, supply e delivery ao ecossistema da sua empresa e de seus clientes e parceiros.',
    contentTitle: (
      <h2>
        <b>
          O que sua empresa precisa integrar para ter uma logística integrada e
          com visão 360º?
        </b>
      </h2>
    ),
    contentText: (
      <p>
        Com a plataforma DevApi, tenha uma logística 4.0, digitalizada e
        automatizada, com coordenação multifuncional e supraempresarial em toda
        a cadeia de fornecimento. E mais:
      </p>
    ),
    listItems: [
      {
        text: 'Analise dados para criar estratégias mais eficientes;',
      },
      {
        text: 'Tenha conexões inteligentes;',
      },
      {
        text: 'Adote práticas logísticas mais modernas;',
      },
      {
        text: 'Invista em conectividade e otimize a gestão e o ganho de escala;',
      },
      {
        text: 'Tenha controle total sobre todos os processos;',
      },
      {
        text: 'Otimize os requisitos de velocidade, ganho de eficiência, redução de custos e ampla disposição, tudo em tempo real;',
      },
      {
        text: 'Diminua o lead time e melhore a comunicação entre equipes, clientes, fornecedores e parceiros.',
      },
    ],
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

    textJoinNow: (
      <h2>
        Confira algumas das integrações de <b>logística</b> que realizamos
      </h2>
    ),
  },
}
