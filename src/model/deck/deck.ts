import { Card } from './card';
import { CardValues } from './card_values';
import { Suite } from './suite';

export class Deck {
	private cards: Card[];
	constructor(cardValues: CardValues) {
		this.cards = [];
		this.createCards(cardValues);
	}
	public shuffle() {
		// TODO
	}
	public drawCard(): Card {
		const c = this.cards.pop();
		if (!c) {
			this.shuffle();
			return this.cards.pop() as Card;
		}
		return c;
	}
	private createCards(cardValues: CardValues) {
		this.cards = [];
		for (const suite in Suite) {
			const s = Suite[suite];
			console.log(`suite: ${suite}`);
			console.log(`s: ${s}`);
		}
	}
}