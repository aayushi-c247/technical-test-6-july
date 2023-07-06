type Romans = {
  [key: string]: number;
};

const toRoman = (arabicNumber: number) => {
  let romanNumber = "";
  for (const key in romanToArab) {
    if (arabicNumber === 0) {
      return romanNumber;
    }
    while (arabicNumber >= romanToArab[key]) {
      romanNumber += key;
      arabicNumber -= romanToArab[key];
    }
  }
  return romanNumber;
};

export const romanToArab: Romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
} as const;

export function memoize<R, T extends (...args: any[]) => R>(f: T): T {
  const memory = new Map<string, R>();

  const memoizedFunc = (...args: any[]) => {
    if (!memory.get(args.join())) {
      memory.set(args.join(), f(...args));
    }

    return memory.get(args.join());
  };

  return memoizedFunc as T;
}
