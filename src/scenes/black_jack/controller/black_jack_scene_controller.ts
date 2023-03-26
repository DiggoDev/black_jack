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
}