import DSObject from "./dsobject";

export default class Component implements DSObject {
  data: {};
  id: string;
  constructor(id: string) {
    this.data = {};
    this.id = id;
  }
}
