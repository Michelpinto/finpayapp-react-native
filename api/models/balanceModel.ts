import mongoose from 'mongoose';

const balanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Balance ||
  mongoose.model('Balance', balanceSchema);
