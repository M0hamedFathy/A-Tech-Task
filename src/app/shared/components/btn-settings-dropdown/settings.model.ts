export class Setting {
  display!: string;
  id!: string;

  constructor(init: Setting) {
    Object.assign(this, init);
  }
}
