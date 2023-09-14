import managerOperations from '../operations/manager';

test('Should return total balance', () => {
    expect(managerOperations.totalBalance()).toBe(80000);
});