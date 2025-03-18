import crypto from 'crypto';

export interface Transaction {
    sender: string | null;
    receiver: string;
    amount: number;
}

class Block {
    timestamp: string;
    transactions: Transaction[];
    previousHash: string;
    hash: string;
    nonce: number;

    constructor(
        timestamp: string,
        transactions: Transaction[],
        previousHash = ''
    ) {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(): string {
        return crypto
            .createHash('sha256')
            .update(
                this.timestamp +
                JSON.stringify(this.transactions) +
                this.previousHash +
                this.nonce
            )
            .digest('hex');
    }

    mineBlock(difficulty: number): void {
        while (!this.hash.startsWith(Array(difficulty + 1).join('0'))) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log(`Block mined: ${this.hash}`);
    }
}

class Blockchain {
    chain: Block[];
    difficulty: number;
    pendingTransactions: Transaction[];
    miningReward: number;

    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 50;
    }

    createGenesisBlock(): Block {
        return new Block(new Date().toISOString(), [], '0');
    }

    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(minerAddress: string): void {
        const block = new Block(
            new Date().toISOString(),
            this.pendingTransactions,
            this.getLatestBlock().hash
        );
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined!');
        this.chain.push(block);

        this.pendingTransactions = [
            {
                sender: null,
                receiver: minerAddress,
                amount: this.miningReward,
            },
        ];
    }

    addTransaction(transaction: Transaction): void {
        if (transaction.sender === null && transaction.amount > 0) {
            this.pendingTransactions.push(transaction);
            return;
        }

        if (!transaction.sender || !transaction.receiver) {
            throw new Error('Transaction must include sender and receiver.');
        }
        if (transaction.amount <= 0) {
            throw new Error('Transaction amount must be greater than zero.');
        }

        this.pendingTransactions.push(transaction);
    }

    isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

export { Blockchain };
