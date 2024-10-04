export class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  preload() {}

  create() {
    this.add
      .text(225, 100, 'Login to Start', {
        font: '32px Arial',
        fill: '#ffffff',
      })
      .setOrigin(0.5);

    const usernameInput = this.add.dom(225, 250).createFromHTML(`
        <input type="text" id="username" name="username" placeholder="Username" style="width: 200px; padding: 10px;">
      `);

    const passwordInput = this.add.dom(225, 300).createFromHTML(`
        <input type="password" id="password" name="password" placeholder="Password" style="width: 200px; padding: 10px;">
      `);

    const loginButton = this.add.dom(225, 370).createFromHTML(`
        <button id="loginBtn" style="padding: 10px 20px; font-size: 18px;">Login</button>
      `);

    loginButton.addListener('click');
    loginButton.on('click', () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username && password) {
        console.log('Username:', username);
        console.log('Password:', password);

        // Switch to the VideoScene after login
        this.scene.start('VideoScene');
      } else {
        alert('Please enter both username and password');
      }
    });
  }
}
