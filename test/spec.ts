// テストスクリプト
import { getDayFormat } from './util';
jest.unmock('./util');

describe('util', () => {
  describe('getDayFormat()', () => {
    it('no parameter', () => {
      const now = new Date();
      const expected = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
      expect(getDayFormat()).toBe(expected);
    });
    it('with date parameter', () => {
      const date = new Date(2021, 1, 1);
      expect(getDayFormat(date)).toBe('2021-2-1');
    });
  });
});

