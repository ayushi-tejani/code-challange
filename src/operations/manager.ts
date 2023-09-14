import customers from '../data/customer.json'
const totalBalance = () => {
    return customers.reduce((total, { balance }) => total + balance, 0);
}

export default { totalBalance };