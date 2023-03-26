import { Card } from './card';

export class BlackJackPlayer {
	public testCard = 'cardDiamonds9';
	public testCards: string[] = [];
	protected hand: Card[] = [];
	protected name: string;

	constructor(name: string) {
		this.hand = [];
		this.name = name;
	}
	public getName(): string {
		return this.name;
	}
	public getHand(): Card[] {
		return this.hand;
	}

	public hit(card: Card): void {
		card.image = 'card';
		console.log(this.name + ' hit ' + card.image);
		this.testCards.push(card.image);
		this.hand.push(card);
	}

	public stand(): void {
		// do nothing
	}

	public clearHand(): void {
		this.hand = [];
	}
	public calculateScore(): number {
		let score = 0;
		let hasAce = false;

		this.hand.forEach((card: Card) => {
			score =+ card.value;

			if (card.rank === 'A') {
				hasAce = true;
			}
		});

		if (score > 21 && hasAce) {
			score -= 10;
		}

		return score;
	}
}