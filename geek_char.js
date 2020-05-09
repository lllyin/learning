const GEEK_WORD_MAP = {
  Infinity: `1 / 0 + ''`,
  NaN: `'' + '' / 0`,
  '[object Object]': `''+{}`,
  constructor: `toGeekString('constructor')`,
  'function String() { [native code] }': `[''][0]['constructor']+[]`,
  toString: `toGeekString('toString')`,
};

const GEEK_CHAR_MAP = {
  a: `('' + 0 / [])[1]`,
  c: `(1 + {})[(([1][0]+[1][0])**([1][0]+[1][0])+1+1)]`,
  b: `(1 + {})[([1][0]+[1][0])**([1][0]+[1][0])-1]`,
  d: `('' + {}[0])[1+1]`,
  e: `(1 + {})[([1][0]+[1][0])**([1][0]+[1][0])+1]`,
  f: `('' + {}[0])[([1][0]+[1][0])**([1][0]+[1][0])]`,
  g: `([''][0]['constructor']+[])[14]`,
  h: `[17][0]['toString'](32)`,
  i: `('' + {}[0])[5]`,
  j: `(1 + {})[4]`,
  k: `[20][0]['toString'](32)`,
  l: `('' + (0 == 1))[2]`,
  m: `[([1][0]+[1][0])**([1][0]+[1][0])**([1][0]+[1][0])+([1][0]+[1][0])**([1][0]+[1][0])+[1][0]+[1][0]][0]['toString'](32)`,
  n: `('' + {}[0])[([1][0]+[1][0])**([1][0]+[1][0])+1+1]`,
  o: `(1 + {})[([1][0]+[1][0])]`,
  p: `[25][0]['toString'](32)`,
  q: `[26][0]['toString'](32)`,
  r: `('' + (0 == 0))[1]`,
  s: `('' + (0 == 1))[3]`,
  S: `([''][0]['constructor']+[])[9]`,
  t: `(1 + {})[7]`,
  u: `('' + {}[0])[0]`,
  v: `([''][0]['constructor']+[])[25]`,
  w: `[32][0]['toString'](36)`,
  x: `[33][0]['toString'](36)`,
  y: `('' + 1 / 0)[7]`,
  z: `[35][0]['toString'](36)`,
  0: 0,
  1: 1,
  '2': `([1][0]+[1][0])`,
  '3': `([1][0]+[1][0]+[1][0])`,
  '4': `([1][0]+[1][0]+[1][0]+[1][0])`,
  '5': `([1][0]+[1][0]+[1][0]+[1][0]+[1][0])`,
  '6': `([1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0])`,
  '7': `([1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0])`,
  '8': `([1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0])`,
  '9': `([1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0]+[1][0])`,
};

/**
 * 生成字符串伪码
 *
 * @param {String} text
 * @returns
 */
function toGeekString(text) {
  const schar = String(text).split('');

  return schar
    .reduce((sum, char) => {
      let geekStr = GEEK_CHAR_MAP[char];

      if (geekStr) {
        Object.keys(GEEK_WORD_MAP).forEach((geekWord) => {
          if (geekStr.indexOf(geekWord) > -1) {
            geekStr = geekStr.replace(`'${geekWord}'`, toGeekString(geekWord));
          }
        });

        sum += `+${geekStr}`;
      } else {
        sum += `+'${char}'`;
        // console.log(`尚无法转换${char}\n`);
      }

      return sum;
    }, '')
    .substr(1);
}

// console.log(toGeekString('h k p q w x z'));
// console.log(toGeekString('hello world'))

// console.log(toGeekString('author: liaolunling at 2020.05.08'));
// const article = `long long ago, there live a little prince.`;

const alphabet = `abcdefghijklmnopqrstuvwxyz`;

console.log(toGeekString(alphabet));
