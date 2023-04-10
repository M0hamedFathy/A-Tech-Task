import { Component, OnInit } from '@angular/core';
import { Setting } from '../btn-settings-dropdown/settings.model';
import { DealsService } from 'src/app/module/deals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  settings!: Setting[];
  dealsNumber: number = 0;
  constructor(dealsService: DealsService) {
    this._setSettings();
    dealsService.dealsNumber.subscribe(
      (dealsNumber) => (this.dealsNumber = dealsNumber)
    );
  }

  ngOnInit(): void {}

  private _setSettings() {
    this.settings = [];

    const settings = [
      new Setting({
        display: 'Settings',
        id: 'settings',
      }),

      new Setting({ display: 'My Team', id: 'myTeam' }),

      new Setting({
        display: 'Logout',
        id: 'logout',
      }),
    ];

    this.settings.push(...settings);
  }

  onSettingSelected(setting: Setting) {
    switch (setting.id) {
    }
  }
}
