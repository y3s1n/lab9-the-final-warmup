/**
 * StorageService - Handles localStorage operations for the TODO app
 */
export class StorageService {
    /**
   * @param {string} storageKey - Prefix used for all keys this service manages.
   * @param {Storage|null} [storageImpl] - Optional storage implementation
   */
  constructor(storageKey = 'todos', storageImpl = null) {
    this.storageKey = storageKey;
    
    const defaultStorage = typeof localStorage !== 'undefined' ? localStorage : null;

    this.storage = storageImpl ?? defaultStorage;
  }

    /**
   * Build a fully-qualified key with the service prefix.
   * @param {string} key
   * @returns {string}
   * @private
   */
  _fullKey(key) {
    return `${this.storageKey}_${key}`;
  }

  /**
   * Save data under a specific key.
   * @param {string} key
   * @param {any} data
   */
  save(key, data) {
    if(!this.storage) return;
    try {
      const fullKey = this._fullKey(key);
      const serialized = JSON.stringify(data);
      this.storage.setItem(fullKey, serialized);
    } catch (error) {
      console.error('Failed to save to storage:', error);
    }
  }


  /**
   * Load data for a specific key.
   * @param {string} key
   * @param {any} [defaultValue=null]
   * @returns {any}
   */
  load(key, defaultValue = null) {
    if (!this.storage) return defaultValue;

    try {
      const fullKey = this._fullKey(key);
      const stored = this.storage.getItem(fullKey);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.error('Failed to load from storage:', error);
      return defaultValue;
    }
  }

  /**
   * Remove data for a specific key.
   * @param {string} key
   */
  remove(key) {
    if (!this.storage) return;
    try {
      const fullKey = this._fullKey(key);
      this.storage.removeItem(fullKey);
    } catch (error) {
      console.error('Failed to remove from localStorage:', e);
    }
  }

  /**
   * Clear all data for this app
   */
  clear() {
    if(!this.storage) return;
    try {
      const keysToRemove = [];

      for (let i = 0; i < storage.length; i++) {
        const key = this.storage.key(i);
        if (key && key.startsWith(this.storageKey + '_')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => this.storage.removeItem(key));
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  }
}
