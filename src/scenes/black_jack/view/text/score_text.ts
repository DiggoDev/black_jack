

export class ScoreText {
	public textGameObject: Phaser.GameObjects.Text;
	constructor(addFunc: Phaser.GameObjects.GameObjectFactory, x: number, y: number, playerName: string, score: number) {
		this.textGameObject = addFunc.text(x, y, `${playerName}: ${score}`, { fontSize: '24px', color: '#ffffff' });
	}
}