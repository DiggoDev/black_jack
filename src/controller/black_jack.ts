
import { Player } from '../model/player';
import { Vector2D } from './../model/data_types/vector2d';

import { Assets } from '../model/assets';
import { CardRank } from '../model/deck/card_rank';
import { CardValues } from '../model/deck/card_values';
import { Deck } from '../model/deck/deck';
import { Suite } from '../model/deck/suite';
import { BlackJackView, BlackJackViewConfig } from '../view/black_jack_view';


export class BlackJack {
	private config: BlackJackViewConfig;
	private player: Player;
	private deck: Deck;
	constructor() {
		const cardValues: CardValues = {};
		for (const suite of [Suite.Clubs]) {
			cardValues[suite] = {};
			cardValues[suite][CardRank.Ace] = 	[1, 11];
			cardValues[suite][CardRank.Two] = 	[2];
			cardValues[suite][CardRank.Three] = [3];
			cardValues[suite][CardRank.Four] = 	[4];
			cardValues[suite][CardRank.Five] = 	[5];
			cardValues[suite][CardRank.Six] = 	[6];
			cardValues[suite][CardRank.Seven] = [7];
			cardValues[suite][CardRank.Eight] = [8];
			cardValues[suite][CardRank.Nine] = 	[9];
			cardValues[suite][CardRank.Ten] = 	[10];
			cardValues[suite][CardRank.Jack] = 	[10];
			cardValues[suite][CardRank.Queen] = [10];
			cardValues[suite][CardRank.King] = 	[10];
		}
		this.deck = new Deck(cardValues);
		this.player = new Player();
		this.player.addCard(this.deck.drawCard());
		const screenSize: Vector2D = { x: 800, y: 600 };
		const assets = new Assets('assets', 'deck/card');

		this.config = {
			type: Phaser.AUTO,
			width: screenSize.x,
			height: screenSize.y,
		};

		const view = new BlackJackView({ config: this.config, player: this.player, assets: assets});
	}
	public startNewGame() {
		this.player = new Player();
		this.player.addCard(this.deck.drawCard());
	}
}