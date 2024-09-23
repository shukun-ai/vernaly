import { getEntityId } from './entity-id';

describe('getEntityId', () => {
  it('should generate a unique entity ID of length 21', () => {
    const id = getEntityId();
    expect(id).toHaveLength(21);
  });

  it('should generate different IDs on subsequent calls', () => {
    const id1 = getEntityId();
    const id2 = getEntityId();
    expect(id1).not.toBe(id2);
  });

  it('should generate IDs containing only alphanumeric characters', () => {
    const id = getEntityId();
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    expect(id).toMatch(alphanumericRegex);
  });
});
