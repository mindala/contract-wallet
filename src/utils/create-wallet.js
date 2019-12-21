const bcoin = require('bcoin').set('regtest')

const WalletDB = bcoin.WalletDB;
const WalletKey = bcoin.wallet.WalletKey;

const KeyRing = bcoin.KeyRing;
const Mnemonic = bcoin.hd.Mnemonic;
const HD = bcoin.hd;

async function walletExample() {
  // for demonstration purposes, we'll be creating a temporary wallet in memory
  const wdb = new WalletDB({ db: 'memory' });
  await wdb.open();
  const wallet = await wdb.create();
}
walletExample().catch(console.error.bind(console));
