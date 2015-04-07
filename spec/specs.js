describe('pigLatin', function() {
  it('is false for words that start with a vowel', function() {
    expect(pigLatin('hello')).to.equal(false);
  });
});
