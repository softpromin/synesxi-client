'use client';

const About = () => {
    return (
        <div className="bg-card-body p-8 rounded-lg text-white space-y-6">
            <h2 className="text-2xl font-semibold">About Token</h2>
            <div>
                Bitcoin (BTC) is the first cryptocurrency built on blockchain technology, also known as a decentralized
                digital currency that is based on cryptography. Unlike government-issued or fiat currencies such as US Dollars
                or Euro which are controlled by central banks, Bitcoin can operate without the need of a central authority like
                a central bank or a company. The decentralized nature allows it to operate on a peer-to-peer network whereby
                users are able to send funds to each other without going through intermediaries.
            </div>

            <div>
                <div>Who created Bitcoin?</div>

                The creator is an unknown individual or group that goes by the name Satoshi Nakamoto with the idea of an
                electronic peer-to-peer cash system as it is written in a whitepaper. Until today, the true identity of
                Satoshi Nakamoto has not been verified though there has been speculation and rumor as to who Satoshi might
                be. What we do know is that officially, the first genesis block of BTC was mined on 9th January 2009, defining
                the start of cryptocurrencies.
            </div>

            <div>
                <div>How does Bitcoin work?</div>

                <div>
                    While the general public perceives Bitcoin as a physical looking coin, it is actually far from that. Under the
                    hood, it is a distributed accounting ledger that is stored as a chain of blocks - hence the name blockchain.
                </div>

                <div>
                    Let&apos;s compare how Bitcoin is different from a commercial bank, which operates as a centralized system. Given a
                    situation where Alice wants to transact with Bob, the bank is the only entity that holds the ledger that
                    describes how much balance Alice and Bob has. As the bank maintains the ledger, they will do the verification
                    as to whether Alice has enough funds to send to Bob. Finally when the transaction successfully takes place, the
                    Bank will deduct Alice&apos;s account and credit Bob&apos;s account with the latest amount.
                </div>
            </div>

            <div>
                <div>
                    Bitcoin conversely works in a decentralized manner. Since there is no central figure like a bank to verify the
                    transactions and maintain the ledger, a copy of the ledger is distributed across Bitcoin nodes. A node is a
                    piece of software that anybody can download and run to participate in the network. With that, everybody has a
                    copy of how much balance Alice and Bob has, and there will be no dispute of fund balance.
                </div>

                <div>
                    Now, if Alice were to transact with Bob using bitcoin. Alice will have to broadcast her transaction to the network
                    that she intends to send $1 to Bob in equivalent amount of bitcoin. So how does the system determine if Alice has
                    enough bitcoin to execute the transaction? This is where mining takes place.
                </div>
            </div>
        </div>
    );
}

export default About;