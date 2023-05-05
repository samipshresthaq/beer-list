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
  set<T>(key, value): void {
    const currentValue: Array<T> = this.get(key) || [];
    const uodatedValue = [...currentValue, value];
    this.storage.setItem(key, JSON.stringify(uodatedValue));
  }

  setBulk<T>(key, bulkItem): void {
    this.storage.setItem(key, JSON.stringify(bulkItem));
  }
  remove(key): void {
    this.storage.removeItem(key);
  }
  clear(): void {
    this.storage.clear();
  }
}
