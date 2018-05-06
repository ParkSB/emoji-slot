class EmojiSlot {
  constructor(el) {
    this.el = el;
    this.s1 = 0; // Slot 1
    this.s2 = 0; // Slot 2
    this.s3 = 0; // Slot 3

    this.render();
    this.updateMachine(100, 3);
  }

  setHtmlElements() {
    const items = ['🍇', '🍓', '🍒', '🍐', '🍎', '🍋', '🍍', '💎'];

    this.s1 = Math.floor(Math.random() * items.length);
    this.s2 = Math.floor(Math.random() * items.length);
    this.s3 = Math.floor(Math.random() * items.length);

    return (`
      <span>${items[this.s1]}</span>
      <span>${items[this.s2]}</span>
      <span>${items[this.s3]}</span>
    `);
  }

  updateMachine(interval, maxTick) {
    const maxInterval = 2000;
    const vInterval = 100;

    let tick = 0;
    let timer = null;

    if (interval > maxInterval) {
      return 0;
    }

    timer = setInterval(() => {
      this.render();
      tick += 1;
      if (tick > maxTick) {
        clearInterval(timer);
      }
    }, interval);

    this.updateMachine(interval + vInterval, maxTick);
  }

  render() {
    document.getElementById(this.el).innerHTML = this.setHtmlElements();
  }
}

export default EmojiSlot;
