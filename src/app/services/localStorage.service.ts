import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  get<T>(key): Array<T> {
    return JSON.parse(this.storage.getItem(key)) as Array<T>;
  }
  set<T>(key, value) {
    const currentValue: Array<T> = this.get(key) || [];
    const uodatedValue = [...currentValue, value];
    this.storage.setItem(key, JSON.stringify(uodatedValue));
  }
  remove(key) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}
