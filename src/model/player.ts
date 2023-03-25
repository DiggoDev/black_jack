import { Card } from './deck/card';

export class Player {
	private cards: Card[];
	constructor() {
		this.cards = [];
	}
	public addCard(card: Card) {
		this.cards.push(card);
	}
	public getCards() {
		return this.cards;
	}
}