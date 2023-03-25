import { CardRank } from './card_rank';
import { Suite } from './suite';

export class Card {
	private readonly suite: Suite;
	private readonly rank: CardRank;
	private readonly value: number;
	constructor(suite: Suite, rank: CardRank, value?: number) {
		this.suite = suite;
		this.rank = rank;
		this.value = value ?? rank.valueOf();
	}
	public getSuite() {
		return this.suite;
	}
	public getRank() {
		return this.rank;
	}
	public getValue() {
		return this.value;
	}
}