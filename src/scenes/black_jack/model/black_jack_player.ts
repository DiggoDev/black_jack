import { Card } from './card';

export class BlackJackPlayer {
	public isBusted = false;
	public haveStopped = false;
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
		this.hand.push(card);
	}

	public stand(): void {
		// TODO this
		console.log('stand');
		this.haveStopped = true;
		// do nothing
	}
	public bust(): void {
		// TODO this
		console.log('bust');
		this.isBusted = true;
		// do nothing
	}

	public clearHand(): void {
		this.hand = [];
		this.haveStopped = false;
		this.isBusted = false;
	}
	public calculateScore(): number {
		let score = 0;
		let hasAce = false;

		this.hand.forEach((card: Card) => {
			score += card.value;

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