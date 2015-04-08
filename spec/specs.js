describe('word', function() {
  it('is true for words that start with a vowel', function() {
    expect(word('a', 'e', 'i', 'o', 'u')).to.equal(true);
  });

  // it('add "ay" to the end', function() {
  //   expect(word('a')).to.equal('aay');
  // });

});
