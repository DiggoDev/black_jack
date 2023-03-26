import { Rank } from './rank';
import { Suit } from './suite';

export class CardImages {
	private cardDir: string;
	private fileType: string;
	constructor(cardDir: string, fileType: string) {
		this.cardDir = cardDir;
		this.fileType = fileType;
	}
	public getImagePath(suit: Suit, rank: Rank): string {
		return this.cardDir + 'card' + suit + rank + '.' + this.fileType;
	}
	public getImageKey(suit: Suit, rank: Rank): string {
		return `${suit}${rank}`;
	}
}