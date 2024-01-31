import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

/*Mongoose.Promise: propiedad que te permite especificar qué implementación de promesas 
utilizará Mongoose para realizar operaciones asincrónicas. Cuando asignas
mongoose.Promise = global.Promise, estás configurando Mongoose para que utilice
la implementación de promesas nativa de Node.js para sus operaciones asincrónicas. */

mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    Status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
