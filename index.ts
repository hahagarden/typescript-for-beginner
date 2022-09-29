//Local Storage..
type SStorage<T> = {
  [key: string]: T;
};

abstract class LocalStorage<T> {
  public storage: SStorage<T>;
  constructor() {
    this.storage = {};
  }

  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class MyLocalStorage<T> extends LocalStorage<T> {
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string) {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new MyLocalStorage<string>();

stringStorage.setItem("hello", "world");
console.log(stringStorage.getItem("hello"));
stringStorage.clearItem("hello");
stringStorage.clear();
console.log(stringStorage);

//Geolocation..
interface Iposition {
  coords: { latitude: number; longitude: number };
  timestamp: number;
}

class Position implements Iposition {
  public coords: { latitude: number; longitude: number };
  public timestamp: number;
  constructor(lat: number, long: number, stamp: number) {
    (this.coords = { latitude: lat, longitude: long }),
      (this.timestamp = stamp);
  }
}

class MyGeolocation {
  public position: Iposition;
  public errors: { code: number; message: string };
  constructor(lat: number, long: number, stamp: number) {
    this.position = new Position(lat, long, stamp);
    this.errors = { code: 1, message: "User denied Geolocation" };
  }

  getCurrentPosition(
    successFn: (arg: {}) => void,
    errorFn?: (arg: {}) => void,
    optionObj?: {
      maximumAge?: number;
      timeout?: number;
      enableHighAccuracy?: boolean;
    }
  ) {
    let answer = prompt(
      "getCurrentPosition: type y for successFn, n for errorFn."
    );
    if (answer === "y") successFn(this.position);
    if (answer === "n" && errorFn !== undefined) errorFn(this.errors);
  }
  watchPosition(
    success: (arg: {}) => void,
    error?: (arg: {}) => void,
    options?: {}
  ): number {
    let answer = prompt("you moved? type y for success, n for error.");
    let watchId = 3;
    if (answer === "y") success(this.position);
    if (answer === "n" && error !== undefined) error(this.errors);
    return watchId;
  }
  clearWatch(id: number) {
    console.log(id, "is cleared.");
  }
}

const temp = new MyGeolocation(1, 1, 0);
temp.getCurrentPosition(
  (x) => console.log(x),
  (x) => console.log(x)
);
const id = temp.watchPosition(
  (x) => console.log(x),
  (x) => console.log(x)
);

console.log(id);
temp.clearWatch(id);

/* 
// Nico's solution
// LocalStorage Interface
abstract class LocalStorage<T> {
  protected items: Items<T>;
  constructor() {
    this.items = {};
  }
  abstract length(): number;
  abstract key(index: number): T;
  abstract getItem(key: string): T;
  abstract setItem(key: string, value: T): void;
  abstract removeItem(key: string): void;
  abstract clear(): void;
}
interface Items<T> {
  [key: string]: T;
}
class SuperStorage extends LocalStorage<string> {
  constructor() {
    super();
  }
  public key(index: number) {
    return Object.keys(this.items)[index];
  }
  public length() {
    return Object.keys(this.items).length;
  }
  public getItem(key: string) {
    return this.items[key];
  }
  public setItem(key: string, value: string) {
    this.items[key] = value;
  }
  public removeItem(key: string) {
    delete this.items[key];
  }
  public clear() {
    this.items = {};
  }
}

const mystorage=new SuperStorage()

mystorage.setItem("hello","world")
console.log(mystorage.length())
console.log(mystorage.key(0))
console.log(mystorage.getItem("hello"))
console.log(mystorage.removeItem('hello'))
console.log(mystorage);



// Geolocation Interface
type GeolocationCoords = {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
};
type Position = {
  coords: GeolocationCoords;
};
type GeoError = {
  code: number;
  message: string;
};
type SuccessFunction = (position: Position) => void;
type ErrorFunction = (error: GeoError) => void;
type GeoOptions = {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
};

type GetCurrentPosition = {
  (success: SuccessFunction): void;
  (success: SuccessFunction, error: ErrorFunction): void;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): void;
};

type WatchCurrentPosition = {
  (success: SuccessFunction): number;
  (success: SuccessFunction, error: ErrorFunction): number;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): number;
};

interface GeolocationAPI {
  getCurrentPosition: GetCurrentPosition;
  watchPosition: WatchCurrentPosition;
  clearWatch: (id: number) => void;
}

class Geolocator implements GeolocationAPI {
  getCurrentPosition: GetCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return; // Implementation goes here :)
  };
  watchPosition: WatchCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return 1; // Implementation goes here :)
  };
  clearWatch = (id: number) => {};
}
 */
