import { atom } from 'nanostores';

class Group {
  id;
  count;
  members;
  #MAX_COUNT = 3;
  constructor(id) {
    this.id = id;
    this.count = 0;
    this.members = [];
  }
  isFull() {
    return this.members.length === this.#MAX_COUNT;
  }
  add(member) {
    if (this.isFull()) {
      return false;
    }
    this.members.push(member);
    return true;
  }
  increment() {
    this.count += 1;
    return this.count;
  }
}
const $groups = atom([new Group(1)]);

export { $groups as $, Group as G };
