

export class ScoreText {
	public textGameObject: Phaser.GameObjects.Text;
	private playerName: string;
	constructor(addFunc: Phaser.GameObjects.GameObjectFactory, x: number, y: number, playerName: string, score: number) {
		this.playerName = playerName;
		const text = this.getScoreText(score);
		this.textGameObject = addFunc.text(x, y, text, { fontSize: '24px', color: '#ffffff' });
	}
	public updateScore(score: number) {
		const text = this.getScoreText(score);
		this.textGameObject.setText(text);
	}
	private getScoreText(score: number) {
		return `${this.playerName}: ${score}`;
	}
}