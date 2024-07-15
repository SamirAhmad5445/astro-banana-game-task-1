import { atom } from "nanostores";

export class Group {
  id: number;
  count: number;
  members: string[];
  readonly #MAX_COUNT: number = 3;

  constructor(id: number) {
    this.id = id;
    this.count = 0;
    this.members = [];
  }

  isFull(): boolean {
    return this.members.length === this.#MAX_COUNT;
  }

  add(member: string): boolean {
    if (this.isFull()) {
      return false;
    }

    this.members.push(member);
    return true;
  }

  increment(): number {
    this.count += 1;
    return this.count;
  }
}

export const $groups = atom<Group[]>([new Group(1)]);
