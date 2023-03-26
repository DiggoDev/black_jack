import 'phaser';
import { getConfig } from './config';

import { BlackJackSceneController } from './scenes/black_jack/controller/black_jack_scene_controller';

const blackJackSceneController = new BlackJackSceneController();

const game = new Phaser.Game(getConfig(blackJackSceneController.scene));

blackJackSceneController.startNewGame();