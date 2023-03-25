import _ from 'lodash';
import { Types } from 'phaser';

import { Assets } from '../model/assets';
import { GameScene, GameSceneOptions } from './scene/game_scene';

export type BlackJackViewConfig = Types.Core.GameConfig;

export type SceneOptions = {assets: Assets};

export class BlackJackView {
	private game: Phaser.Game;
	constructor(options: GameSceneOptions) {
		const { config, player, assets } = options;
		const baseConfig: BlackJackViewConfig = {
			scene: [ new GameScene(options) ],
		};
		this.game = new Phaser.Game(_.extend({}, baseConfig, config));
	}
}