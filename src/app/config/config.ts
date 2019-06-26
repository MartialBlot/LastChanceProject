import { SingleObstacles } from './../interfaces/single-obstacle';

export const playGroundHeight = window.innerHeight;
export const playGroundWidth = 500;
export const frameNumber = 0;
export const spaceshipPath = '../assets/images/widowMaker.png';
export const ennemyPath = '../assets/images/vaisseauennemi.png';
export const asteroidPath = '../assets/images/asteroids.png';
export const playerCarSpeed = 5;
export const playerCar = {
	sX: 1540,  // spaceship
	sY: 0,
	sWidth: 790,
	sHeight: 970,
	width: 60,
	height: 120,
};
export const vehicles: SingleObstacles[] = [
	{
		sX: 2340, // ennemy
		sY: 4290,
		sWidth: 845,
		sHeight: 995,
		width: 60,
		height: 120,
	}
];
