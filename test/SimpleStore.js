const SimpleStore = artifacts.require('SimpleStore');

contract('SimpleStore', (accounts) => {
  let simpleStore

  beforeEach(async () => {
    simpleStore = await SimpleStore.new()
  })

  it('Should have an address for SimpleStore', async () => {
    assert(simpleStore.address)
  });

  it('Should set a value', async () => {
    const newValue = ' fuck '
    const tx = await simpleStore.set(newValue, {from: accounts[0]})
 
  })
})
