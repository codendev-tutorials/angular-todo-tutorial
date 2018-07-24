import { Router } from '@angular/router';
import { VipComponent } from './components/vip/vip.component';
import { TodayComponent } from './components/today/today.component';
import { MainComponent } from './components/main/main.component';

export const ROUTES = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'today',
    component: TodayComponent
  },
  {
    path: 'vip',
    component: VipComponent
  }
]