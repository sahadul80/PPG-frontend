import React, { useState } from 'react';

const BlockchainPage: React.FC = () => {
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState<number | string>('');
    const [message, setMessage] = useState('');
    const [blockchain, setBlockchain] = useState(null);

    const handleTransaction = async () => {
        try {
            const response = await fetch('/api/blockchain', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sender, receiver, amount: Number(amount) }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Transaction added successfully!');
                setBlockchain(data.blockchain);
            } else {
                setMessage(data.error || 'Error occurred.');
            }
        } catch (error) {
            setMessage('An error occurred while adding the transaction.');
        }
    };

    const fetchBlockchain = async () => {
        try {
            const response = await fetch('/api/blockchain');
            const data = await response.json();
            setBlockchain(data.blockchain);
        } catch (error) {
            console.error('Error fetching blockchain:', error);
        }
    };

    return (
        <div>
            <h1>Blockchain Payment Demo</h1>
            <div>
                <input
                    type="text"
                    placeholder="Sender"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Receiver"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={handleTransaction}>Add Transaction</button>
            </div>
            <button onClick={fetchBlockchain}>Fetch Blockchain</button>
            <p>{message}</p>
            <pre>{JSON.stringify(blockchain, null, 2)}</pre>
        </div>
    );
};

export default BlockchainPage;
