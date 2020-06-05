import provinces from '.';

describe('provinces array', () => {
  it('contain all CA provinces', () => {
    expect(provinces.length).toBe(13);
  });
});
