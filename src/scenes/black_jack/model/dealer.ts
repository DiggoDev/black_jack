import { BlackJackPlayer } from './black_jack_player';

export class Dealer extends BlackJackPlayer {

	private hitLimit = 16;

	constructor() {
		super('Dealer');
	}
	public shouldHit() {
		const score = this.calculateScore();
		return !(score >= this.hitLimit);
	}
}