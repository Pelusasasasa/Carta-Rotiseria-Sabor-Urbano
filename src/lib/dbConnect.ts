import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://agustinlorenzatto:Pelusa3345@pelusadev-cluster-chico.afmscn8.mongodb.net/Carta-Sabor-Urbano';

export const dbConnect = async() => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("✅ Se conecto a la base de datos de Rotiseria")
    } catch (error) {
        console.error('❌ Error conectado MongoDb: ', error);
        process.exit(1); // Termina el proceso con un error
    }

};