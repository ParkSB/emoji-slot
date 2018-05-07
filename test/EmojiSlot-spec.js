import EmojiSlot from '../src/EmojiSlot';

describe('EmojiSlot', () => {
  describe('setHtmlElements', () => {
    it('should returns string', () => {
      const emojislot = new EmojiSlot('container');
      expect(typeof emojislot.setHtmlElements()).toBe('string');
    });
  });
});