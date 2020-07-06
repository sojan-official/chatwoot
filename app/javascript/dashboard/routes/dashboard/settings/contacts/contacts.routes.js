import Index from './Index';
import SettingsContent from '../Wrapper';
import { frontendURL } from '../../../../helper/URLHelper';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/contacts'),
      component: SettingsContent,
      props: {
        headerTitle: 'REPORT.HEADER',
        headerButtonText: 'REPORT.HEADER_BTN_TXT',
        icon: 'ion-arrow-graph-up-right',
      },
      children: [
        {
          path: '',
          name: 'settings_account_contacts',
          roles: ['administrator', 'agent'],
          component: Index,
        },
      ],
    },
  ],
};
