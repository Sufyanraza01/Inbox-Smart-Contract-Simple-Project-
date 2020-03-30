const Inbox = artifacts.require("Inbox");
const Web3 = require('web3')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Inbox', (accounts) => {
  let inbox, account

  before(async () => {
    inbox = await Inbox.new()
    account = await web3.eth.getAccounts()

  })

  describe('Inbox deployment', async () => {
    it('contract has a message', async () => {
      const message = await inbox.message()
      assert.equal(message, 'Inbox')
    })

    it('fetched accounts', async () => {
      console.log(account)
      assert.notEqual(account, 0x0)
    })

    it('Should return Inbox', async () => {
      const result1 = await inbox.getMessage()
      assert.equal(result1, 'Inbox')
    })

    it('Should set the value', async () => {
      await inbox.setMessage('Hello World')
      const result2 = await inbox.getMessage()
      assert.equal(result2, 'Hello World')
    })
  })
})
