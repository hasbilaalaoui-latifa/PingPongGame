game.ia = {
  player: null,
  ball: null,

  setPlayerAndBall: function (player, ball) {
    this.player = player;
    this.ball = game.getBall();
  },

  move: function () {
    if (this.ball.directionX == 1) {
      if (this.player.originalPosition == 2) {
        // follow
        this.followBall();
      }
      if (this.player.originalPosition == 1) {
        // center
        this.goCenter();
      }
    } else {
      if (this.player.originalPosition == 2) {
        // center
        this.goCenter();
      }
      if (this.player.originalPosition == 1) {
        // follow
        this.followBall();
      }
    }
  },

  followBall: function () {

    // simple AI & Decison Tree

    this.player.posY += ((this.ball.posY - (this.player.posY + this.player.height/2)))*0.1;

  if (this.ball.posY < this.player.posY + this.player.height / 2) {
    // la position de la balle est sur l'écran, au dessus de celle de la raquette
    this.ball.velocityY = +this.ball.velocityY;
    this.player.posY = this.player.posY - this.ball.getSpeed() + 1;
  } else if (this.ball.posY > this.player.posY + this.player.height / 2) {
    // la position de la balle est sur l'écran, en dessous de celle de la raquette
    this.player.posY = this.player.posY + this.ball.getSpeed() - 1;
    this.ball.velocityY = -this.ball.velocityY;

  }

/*
    if (this.ball.posY < this.player.posY + this.player.height / 2) {
      // la position de la balle est sur l'écran, au dessus de celle de la raquette
      this.player.posY = this.player.posY - this.ball.getSpeed() + 1;
    } else if (this.ball.posY > this.player.posY + this.player.height / 2) {
      // la position de la balle est sur l'écran, en dessous de celle de la raquette
      this.player.posY = this.player.posY + this.ball.getSpeed() - 1;
    }*/

  },

  goCenter: function () {
    if (this.player.posY + this.player.height / 2 > game.groundHeight / 2) {
      this.player.posY = this.player.posY - this.ball.getSpeed() + 1;
    } else if (this.player.posY + this.player.height / 2 < game.groundHeight / 2) {
      this.player.posY = this.player.posY + this.ball.getSpeed() - 1;
    }
  }
}

