import { CardRank } from './deck/card_rank';
import { Suite } from './deck/suite';

export const CardAssetName = {
	clubs: {
		a: 'card_clubs_a',
	},
};

export class Assets {
	private basePath: string;
	private cardBasePath: string;
	private cardAssetsFileType = 'png';
	constructor(basePath: string, cardBasePath: string) {
		this.basePath = basePath;
		this.cardBasePath = this.joinPath(basePath, cardBasePath);
	}
	public getCardAssetPath(suite: Suite, rank: CardRank) {
		let suiteAssetName = '';
		let rankAssetName = '';
		switch(suite) {
		case Suite.Clubs: {
			suiteAssetName = 'clubs';
			break;
		}
		}
		switch(rank) {
		case CardRank.Ace: {
			rankAssetName = 'a';
			break;
		}
		}
		const cardAssetPath = this.joinPath(this.cardBasePath, suiteAssetName, `card_${suiteAssetName}_${rankAssetName}.${this.cardAssetsFileType}`);
		return cardAssetPath;
	}
	private joinPath (...args: string[]) {
		let p = '';
		for (let i = 0; i < args.length; i++) {
			p += args[i] + ((i !== (args.length - 1)) ? '/' : '');
		}
		return p;
	}
}