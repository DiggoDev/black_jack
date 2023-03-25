import path from 'path';
import { Scene } from 'phaser';
import { Assets } from '../../model/assets';
import { CardRank } from '../../model/deck/card_rank';
import { Suite } from '../../model/deck/suite';
import { BlackJackViewConfig, SceneOptions } from '../black_jack_view';

import type { Vector2D } from './../../model/data_types/vector2d';
import { Player } from './../../model/player';

export type GameSceneOptions = SceneOptions & { config: BlackJackViewConfig, player: Player }

export class GameScene extends Scene {
	private readonly screenSize: Vector2D;
	private readonly player: Player;
	private readonly assets: Assets;
	private baseCardAssetsPath = 'assets/deck/card';
	private clubsAssetsDirectory = 'clubs';
	private cardAssetsFileType = 'png';
	private cardAssetsPaths = {
		cardClubsA: path.join(this.baseCardAssetsPath, this.clubsAssetsDirectory, 'card_clubs_a', `.${this.cardAssetsFileType}`),
	};
	// Light green
	private backgroundColor = Phaser.Display.Color.GetColor(52, 235, 85);
	constructor(options: GameSceneOptions) {
		const { config, player, assets } = options;
		super(config);
		this.screenSize = {x: Number(config.width), y: Number(config.width) };
		this.player = player;
		this.assets = assets;
	}
	public preload() {
		for (const suite of [Suite.Clubs]) {
			for (const rank of [CardRank.Ace]) {
				this.load.image(`card_${suite}_${rank}`, this.assets.getCardAssetPath(suite, rank));
			}
		}
	}
	create() {
		console.log(this.screenSize);
		// var rect = scene.add.rectangle(x, y, width, height, fillColor);
		const bg = this.add.rectangle(this.screenSize.x / 2, this.screenSize.y / 2, this.screenSize.x, this.screenSize.y, this.backgroundColor);
	}
	update(time: number, delta: number): void {
		const playerCards = this.player.getCards();
		for (let i = 0; i < playerCards.length; i++) {
			this.add.image(400, 400, `card_${playerCards[i].getSuite()}_${playerCards[i].getRank()}`);
		}
	}
}