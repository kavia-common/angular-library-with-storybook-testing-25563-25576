import { Component } from '@angular/core';
import { AppShellComponent } from '../../../projects/figma86-ui/src/lib/app-shell/app-shell.component';
import { NavListComponent, F86NavItem } from '../../../projects/figma86-ui/src/lib/nav-list/nav-list.component';
import { NavGroupComponent } from '../../../projects/figma86-ui/src/lib/nav-group/nav-group.component';
import { SearchFieldComponent } from '../../../projects/figma86-ui/src/lib/search-field/search-field.component';
import { FilterSelectComponent, F86Option } from '../../../projects/figma86-ui/src/lib/filter-select/filter-select.component';
import { TabsComponent, F86Tab } from '../../../projects/figma86-ui/src/lib/tabs/tabs.component';
import { TableHeaderComponent, F86HeaderColumn } from '../../../projects/figma86-ui/src/lib/table-header/table-header.component';
import { CtaButtonComponent } from '../../../projects/figma86-ui/src/lib/cta-button/cta-button.component';
import { EmptyStateComponent } from '../../../projects/figma86-ui/src/lib/empty-state/empty-state.component';


@Component({
  selector: 'app-demo-harness',
  standalone: true,
  imports: [
    AppShellComponent,
    NavListComponent,
    NavGroupComponent,
    SearchFieldComponent,
    FilterSelectComponent,
    TabsComponent,
    TableHeaderComponent,
    CtaButtonComponent,
    EmptyStateComponent
  ],
  template: `
    <f86-app-shell [title]="'Config Server'"
      [user]="{ name: 'John.doe', role: 'Super user' }">
      <div sidenav>
        <f86-nav-list
          [items]="navItems"
          (itemSelected)="onNav($event)"></f86-nav-list>
        <f86-nav-group label="Config Server" [items]="groupItems"></f86-nav-group>
      </div>

      <div toolbar-left>
        <f86-filter-select
          [options]="partnerOptions"
          placeholder="All Partners"></f86-filter-select>
        <f86-filter-select
          [options]="propertyOptions"
          placeholder="All Properties"></f86-filter-select>
      </div>

      <div>
        <div style="display:flex; gap:16px; align-items:center; margin: 16px 0;">
          <f86-tabs [tabs]="tabs" [activeIndex]="activeIndex" (selectedIndexChange)="activeIndex=$event"></f86-tabs>
          <div style="flex:1"></div>
          <div style="width: 360px;">
            <f86-search-field placeholder="Search for" [(value)]="query"></f86-search-field>
          </div>
          <f86-cta-button label="Add Rule" [disabled]="true" variant="filled"></f86-cta-button>
        </div>

        <f86-table-header
          [columns]="columns"
          (sortChange)="onSort($event)"
          (filterClick)="onFilter($event)">
        </f86-table-header>

        <div style="margin-top: 16px;">
          <f86-empty-state message="Add Profile to add rules" icon="person"></f86-empty-state>
        </div>
      </div>
    </f86-app-shell>
  `,
  styles: [`
    :host { display:block; height:100vh; }
  `]
})
export class DemoHarnessComponent {
  navItems: F86NavItem[] = [
    { key: 'dashboard', icon: 'dashboard', label: 'Dashboard', active: true },
    { key: 'devices', icon: 'sports_esports', label: 'Devices' },
    { key: 'analytics', icon: 'insert_chart_outlined', label: 'Analytics' },
    { key: 'firmware', icon: 'code', label: 'Firmware and Apps' },
    { key: 'users', icon: 'group', label: 'Users' },
    { key: 'more', icon: 'more_horiz', label: 'More', badgeCount: 4 }
  ];
  groupItems: F86NavItem[] = [];
  partnerOptions: F86Option[] = [{ label: 'All Partners', value: null }];
  propertyOptions: F86Option[] = [{ label: 'All Properties', value: null }];

  tabs: F86Tab[] = [{ label: 'Profile', icon: 'account_circle' }, { label: 'Rules', icon: 'description' }];
  activeIndex = 0;
  query = '';
  columns: F86HeaderColumn[] = [
    { key: 'name', label: 'Profile Name' },
    { key: 'repo', label: 'Enter repository URL' },
    { key: 'desc', label: 'Description' },
    { key: 'created', label: 'Created Date', filterable: true, sortable: true },
    { key: 'modified', label: 'Modified Date', filterable: true, sortable: true },
    { key: 'actions', label: 'Actions' }
  ];

  onNav(_: any) {}
  onSort(_: string) {}
  onFilter(_: string) {}
}
