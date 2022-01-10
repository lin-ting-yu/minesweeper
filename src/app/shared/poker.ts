enum CardSuits {
  Spade = 'spade', // 黑桃
  Heart = 'heart', // 紅心
  Diamond = 'diamond', // 方塊
  Club = 'club', // 梅花,
  Joker = 'joker', // 小丑
}

export class Poker {
  constructor(joker: number = 2) {

  }
  private cardList: Card[] = [];

  merge(card: Card[]): Card[] {}

  get(index: number): Card {}


}

export class Card {
  constructor(suit: CardSuits, num: number) {
    this.suit = suit;
    this.num = num;
    this.isFaceCard = num === 11 || num === 12 || num === 13;
  }

  readonly suit: CardSuits;
  readonly num: number;
  readonly isFaceCard: boolean;

  static numPower: { [card: number | string]: number; } = {
    1: 130,
    2: 10,
    3: 20,
    4: 30,
    5: 40,
    6: 50,
    7: 60,
    8: 70,
    9: 80,
    10: 90,
    11: 100,
    12: 110,
    13: 120,
  }

  static max(...cardList: Card[]): Card {

  }
  static min(...cardList: Card[]): Card {

  }

  eq(card: Card): boolean {

  }
}
