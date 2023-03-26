import Phaser from 'phaser';
import { CardImages } from '../model/card_images';
import { Dealer } from '../model/dealer';
import { Deck } from '../model/deck';
import { Player } from '../model/player';
import { BlackJackPlayer } from './../model/black_jack_player';
import { ScoreText } from './text/score_text';

export class BlackjackScene extends Phaser.Scene {
	private cardAssetsDir = 'assets/images/deck/card/';
	private cardAssetsFileType = 'png';
	private deck: Deck;
	private player: Player;
	private dealer: Dealer;
	private cardImages: CardImages;
	// private deck: Phaser.GameObjects.Group;
	private playerHand: Phaser.GameObjects.Group;
	private dealerHand: Phaser.GameObjects.Group;

	private playerScoreText: Phaser.GameObjects.Text;
	private dealerScoreText: Phaser.GameObjects.Text;
	private messageText: Phaser.GameObjects.Text;

	private playerScore: number;
	private dealerScore: number;

	constructor(deck: Deck, player: Player, dealer: Dealer) {
		super({ key: 'BlackjackScene' });
		this.deck = deck;
		this.player = player;
		this.dealer = dealer;
		this.cardImages = new CardImages(this.cardAssetsDir, this.cardAssetsFileType);
	}

	preload() {
		// Load assets here
		this.loadCards();
	}

	public create() {
		// Set the background color to green
		this.cameras.main.setBackgroundColor('#00ff00');
		
		new ScoreText(this.add, 10, 10, this.player.getName(), this.player.calculateScore());
		new ScoreText(this.add, 10, 50, this.dealer.getName(), this.dealer.calculateScore());

		const oneFourthHeight = this.cameras.main.height / 4;
		this.createPlayerHand(this.player, this.cameras.main.centerX, oneFourthHeight * 3);
		this.createPlayerHand(this.dealer, this.cameras.main.centerX, oneFourthHeight);
	}

	private createPlayerHand(player: BlackJackPlayer, baseX: number, baseY: number): Phaser.GameObjects.Group {
		const handGroup = this.add.group();
		const playerHand = player.getHand();
		for (let i = 0; i < playerHand.length; i++) {
			const card = playerHand[i];
			const cardImage = this.add.image(baseX + (i * 50), baseY, this.cardImages.getImageKey(card.suit, card.rank));
			cardImage.setScale(0.5);
			// cardImage.setAngle(45);
			cardImage.setOrigin(0.5, 1);
			handGroup.add(cardImage);
		}
		return handGroup;
	}
	private loadCards() {
		for (const suit of this.deck.suits) {
			for (const rank of this.deck.ranks) {
				this.load.image(this.cardImages.getImageKey(suit, rank), this.cardImages.getImagePath(suit, rank));
			}
		}
	}

	// create() {
	// 	// Create game objects here
	// 	this.playerHand = this.add.group();
	// 	this.dealerHand = this.add.group();

	// 	// Shuffle the deck
	// 	// Phaser.Utils.Array.Shuffle(this.deck.getChildren());

	// 	// Deal the cards
	// 	this.playerHand.add(this.drawCard());
	// 	this.dealerHand.add(this.drawCard());
	// 	this.playerHand.add(this.drawCard());
	// 	this.dealerHand.add(this.drawCard());

	// 	// Calculate the initial scores
	// 	this.playerScore = this.calculateScore(this.playerHand);
	// 	this.dealerScore = this.calculateScore(this.dealerHand);

	// 	// Create the score and message texts
	// 	this.playerScoreText = this.add.text(10, 10, `Player: ${this.playerScore}`, { fontSize: '24px', color: '#ffffff' });
	// 	this.dealerScoreText = this.add.text(10, 50, `Dealer: ${this.dealerScore}`, { fontSize: '24px', color: '#ffffff' });
	// 	this.messageText = this.add.text(10, 90, '', { fontSize: '24px', color: '#ffffff' });

	// 	// Set up input handlers
	// 	this.input.on('pointerdown', () => this.hit());
	// }

	// private drawCard(): Phaser.GameObjects.Image {
	// 	const card = this.deck.getFirst(true) as Phaser.GameObjects.Image;
	// 	card.setScale(0.5);
	// 	card.setAngle(Phaser.Math.Between(-10, 10));
	// 	return card;
	// }

	// private hit() {
	// 	if (this.playerScore < 21) {
	// 		const card = this.drawCard();
	// 		this.playerHand.add(card);
	// 		this.playerScore = this.calculateScore(this.playerHand);
	// 		this.playerScoreText.setText('text');
	// 	}
	// }
}