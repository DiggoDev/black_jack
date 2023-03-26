import { Dealer } from '../model/dealer';
import { Deck } from '../model/deck';
import { Player } from '../model/player';
import { BlackjackScene } from './../view/black_jack_scene';

export class BlackJackSceneController {
	public scene: BlackjackScene;
	private deck: Deck;
	private player: Player;
	private dealer: Dealer;
	constructor() {
		this.deck = new Deck();
		this.player = new Player(100);
		this.dealer = new Dealer();
		this.scene = new BlackjackScene(this.deck, this.player, this.dealer);

		// Initialize input handling
		this.scene.inputEventEmitter.on('hit', () => {
			if (this.player.isBusted || this.player.haveStopped) return;

			console.log('hit');
			this.player.hit(this.deck.deal());
			const playerScore = this.player.calculateScore();
			if (playerScore > 21) {
				this.player.bust();
			}
			// Finish if the player can continue to draw cards
			if (!this.player.isBusted && !this.player.haveStopped) return;
			console.log('player done');
			this.hitDealer();
		});
		this.scene.inputEventEmitter.on('stand', () => {
			this.player.stand();
			this.hitDealer();
		});
		// this.initInputHandling();
	}
	public startNewGame() {
		this.deck.shuffle();
		// Deal 2 cards to player
		this.player.hit(this.deck.deal());
		this.player.hit(this.deck.deal());
		// Deal 2 cards to dealer
		this.dealer.hit(this.deck.deal());
		this.dealer.hit(this.deck.deal());
	}
	private hitDealer() {
		// If it is the dealer´s turn
		while (!this.dealer.isBusted && !this.dealer.haveStopped && this.dealer.shouldHit()) {
			console.log(`hit dealer. isBusted: ${this.dealer.isBusted}, haveStopped: ${this.dealer.haveStopped}, shouldHit: ${this.dealer.shouldHit()}`);
			this.dealer.hit(this.deck.deal());
		}
	}
}
