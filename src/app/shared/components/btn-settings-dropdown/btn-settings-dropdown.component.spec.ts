import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSettingsDropdownComponent } from './btn-settings-dropdown.component';

describe('BtnSettingsDropdownComponent', () => {
  let component: BtnSettingsDropdownComponent;
  let fixture: ComponentFixture<BtnSettingsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSettingsDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSettingsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
