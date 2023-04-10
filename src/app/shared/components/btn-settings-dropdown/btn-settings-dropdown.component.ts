import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Setting } from "./settings.model";

@Component({
  selector: "app-btn-settings-dropdown",
  templateUrl: "./btn-settings-dropdown.component.html",
  styleUrls: ["./btn-settings-dropdown.component.scss"],
})
export class BtnSettingsDropdownComponent implements OnInit {
  @Input() customHeight: boolean = false;
  @Input() customBorder: boolean = false;
  @Input() settings!: Setting[];
  @Input() buttonLabel: string = "Actions";

  @Output() onSelect = new EventEmitter();
  isExpanded = false;

  constructor() {}

  ngOnInit(): void {}

  onSettingsSelected(settings: Setting) {
    this.isExpanded = false;
    this.onSelect.emit(settings);
  }
}
