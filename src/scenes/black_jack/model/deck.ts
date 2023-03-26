import { Card } from './card';
import { Rank } from './rank';
import { Suit } from './suite';

export class Deck {
	public readonly suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
	public readonly ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	private cards: Card[] = [];

	constructor() {

		for (const suit of this.suits) {
			for (const rank of this.ranks) {
				let value = parseInt(rank);
				if (isNaN(value)) {
					if (rank === 'A') {
						value = 11;
					} else {
						value = 10;
					}
				}
				// cardClubs2
				const image = `card${suit}${rank}`;
				// const image = `${rank}_of_${suit}.png`;
				const card = new Card(suit, rank, value, image);
				this.cards.push(card);
			}
		}
	}

	public shuffle(): void {
		Phaser.Utils.Array.Shuffle(this.cards);
	}

	public deal(): Card | undefined {
		return this.cards.pop();
	}
	public getAllCards(): Card[] {
		return this.cards;
	}
}
