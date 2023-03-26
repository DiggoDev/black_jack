import { BlackJackPlayer } from './black_jack_player';

export class Player extends BlackJackPlayer {
	private money: number;

	constructor(money: number) {
		super('Player');
		this.money = money;
	}
	

	public getMoney(): number {
		return this.money;
	}

	public addMoney(amount: number): void {
		this.money += amount;
	}

	public placeBet(amount: number): void {
		if (amount > this.money) {
			throw new Error('Insufficient funds');
		}
		this.money -= amount;
	}
}