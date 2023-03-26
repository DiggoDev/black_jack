export class GameInputHandler extends Phaser.Events.EventEmitter {
	constructor(private scene: Phaser.Scene) {
		super();
	}

	public init(): void {
		this.scene.input.keyboard.on('keydown', (event: KeyboardEvent) => {
			switch (event.code) {
			case 'KeyH':
				this.emit('hit');
				break;
			case 'KeyS':
				this.emit('stand');
				break;
			default:
				break;
			}
		});
	}
}