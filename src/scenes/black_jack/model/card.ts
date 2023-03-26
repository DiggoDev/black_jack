import { Rank } from './rank';
import { Suit } from './suite';

export class Card {
	public suit: Suit;
	public rank: Rank;
	public value: number;
	public image: string;

	constructor(suit: Suit, rank: Rank, value: number, image: string) {
		this.suit = suit;
		this.rank = rank;
		this.value = value;
		this.image = image;
	}
}