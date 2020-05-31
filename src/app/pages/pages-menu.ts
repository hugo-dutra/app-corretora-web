import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'CADASTROS',
    icon: 'edit',
    children: [
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
    ],
  },

  {
    title: 'RELATÓRIOS',
    icon: 'pie-chart',
    children: [
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
    ],
  },
  {
    title: 'AJUDA',
    icon: 'question-mark-circle',
    children: [
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
    ],
  },





];
