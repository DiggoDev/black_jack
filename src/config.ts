
export const padding = 20;

export function getConfig(scene: Phaser.Scene | Phaser.Scene[]): Phaser.Types.Core.GameConfig {
	return {
		type: Phaser.AUTO,
		width: window.innerWidth - padding,
		height: window.innerHeight - padding,
		scene,
		backgroundColor: '#00ff00',
	};
}