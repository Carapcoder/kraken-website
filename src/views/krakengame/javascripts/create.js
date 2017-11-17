function create () {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Inicializa o Barco
  player = game.add.sprite(initialPlayerPosition, 540, 'ship');
  player.anchor.setTo(0.5, 0.5);
  game.physics.enable(player, Phaser.Physics.ARCADE);

  player.body.bounce.x = 0.5;
  player.body.collideWorldBounds = true;

  // Inicializa a munição do barco
  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;
  bullets.createMultiple(5, 'bullet');
  bullets.setAll('anchor.x', 0.5);
  bullets.setAll('anchor.y', 1);
  bullets.setAll('checkWorldBounds', true);
  bullets.setAll('outOfBoundsKill', true);

  // Inicializa os Invaders
  createAliens();
  animateAliens();

  // Inicializa as bombas
  bombs = game.add.group();
  bombs.enableBody = true;
  bombs.physicsBodyType = Phaser.Physics.ARCADE;
  bombs.createMultiple(10, 'bomb');
  bombs.setAll('anchor.x', 0.5);
  bombs.setAll('anchor.y', 0.5);
  bombs.setAll('checkWorldBounds', true);
  bombs.setAll('outOfBoundsKill', true);

  // Inicializa as explosões
  explosions = game.add.group();
  explosions.createMultiple(10, 'explosion');
  explosions.setAll('anchor.x', 0.5);
  explosions.setAll('anchor.y', 0.5);
  explosions.forEach(setupExplosion, this);

  // Bit dos textos
  livesText = game.add.text(game.world.bounds.width - 16, 16, "LIVES: " + lives, style);
  livesText.anchor.set(1, 0);

  scoreText = game.add.text(game.world.centerX, 16, '', style);
  scoreText.anchor.set(0.5, 0);

  highScoreText = game.add.text(16, 16, '', style);
  highScoreText.anchor.set(0, 0);

  getHighScore();

  updateScore();

  // Inicializa os sons
  backtrackSound = game.add.audio('backtrack',1,true);
  shootSound = game.add.audio('shoot', 1, false);
  explodeSound = game.add.audio('explode', 1, false);
  bombSound = game.add.audio('bomb', 1, false);

  backtrackSound.play();

  // Setup dos controles
  cursors = game.input.keyboard.createCursorKeys();
  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  restartButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
}
