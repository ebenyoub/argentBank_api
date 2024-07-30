import { connect } from 'mongoose';

const databaseUrl = "mongodb+srv://ebenyoub:5Scbdpfttpmlr@mondodb.k3b5i0c.mongodb.net/argentBankDB?retryWrites=true&w=majority";

export default async () => {
  try {
    await connect(databaseUrl);
    console.log('Database successfully connected');
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
}
