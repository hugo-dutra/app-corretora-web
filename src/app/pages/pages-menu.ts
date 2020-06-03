import { NbMenuItem } from '@nebular/theme';

const CADASTRO_CHILDREN: NbMenuItem[] = [
  {
    title: 'Tipo de pagamento',
    link: '/pages/tipo-pagamento',
  },
  {
    title: 'Usuario',
    link: '/pages/usuario',
  },
  {
    title: 'Administradora',
    link: '/pages/administradora',
  },
  {
    title: 'Classe de contrato',
    link: '/pages/classe-contrato',
  },
  {
    title: 'Corretora',
    link: '/pages/corretora',
  },
  {
    title: 'Modalidade de plano',
    link: '/pages/modalidade-plano',
  },
  {
    title: 'Operadora',
    link: '/pages/operadora',
  },
  {
    title: 'Tipo de comissao',
    link: '/pages/tipo-comissao',
  },
  {
    title: 'Tipo de contrato',
    link: '/pages/tipo-contrato',
  },
]

const RELATORIO_CHILDREN: NbMenuItem[] = [
  {
    title: 'Administradora',
    link: '/pages/administradora',
  },
  {
    title: 'Corretora',
    link: '/pages/corretora',
  },
  {
    title: 'Operadora',
    link: '/pages/operadora',
  },
  {
    title: 'Usuario',
    link: '/pages/usuario',
  },
];

const AJUDA_CHILDREN: NbMenuItem[] = [
  {
    title: 'Stepper',
    link: '/pages/layout/stepper',
  },
  {
    title: 'List',
    link: '/pages/layout/list',
  },
  {
    title: 'Infinite List',
    link: '/pages/layout/infinite-list',
  },
  {
    title: 'Accordion',
    link: '/pages/layout/accordion',
  },
  {
    title: 'Tabs',
    pathMatch: 'prefix',
    link: '/pages/layout/tabs',
  },
]

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'CADASTROS',
    icon: 'edit',
    children: CADASTRO_CHILDREN.sort((a, b) => { return a.title > b.title ? 1 : -1 })
  },

  {
    title: 'RELATÓRIOS',
    icon: 'pie-chart',
    children: RELATORIO_CHILDREN.sort((a, b) => { return a.title > b.title ? 1 : -1 }),
  },
  {
    title: 'AJUDA',
    icon: 'question-mark-circle',
    children: AJUDA_CHILDREN.sort((a, b) => { return a.title > b.title ? 1 : -1 }),
  },

]
