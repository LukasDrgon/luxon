import { LocalZone } from './zones/localZone';
import { Util } from './impl/util';

let now = () => new Date().valueOf(),
  defaultZone = null, // not setting this directly to LocalZone.instance bc loading order issues
  throwOnInvalid = false,
  defaultLocale = 'en-US';

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
export class Settings {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }

  /**
   * Set the callback for returning the current timestamp.
   * @type {function}
   */
  static set now(n) {
    now = n;
  }

  /**
   * Set the default time zone to create DateTimes in.
   * @type {string}
   */
  static get defaultZoneName() {
    return (defaultZone || LocalZone.instance).name;
  }

  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * @type {string}
   */
  static set defaultZoneName(z) {
    defaultZone = Util.normalizeZone(z);
  }

  /**
   * Get the default time zone object to create DateTimes in. Does not affect existing instances.
   * @type {Zone}
   */
  static get defaultZone() {
    return defaultZone || LocalZone.instance;
  }

  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {Zone}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {Zone}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }
}
