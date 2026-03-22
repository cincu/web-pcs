import mongoose from "mongoose";

const ipLogSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  lastAccess: { type: Date, required: true },
  count: { type: Number, default: 1 },
});

export default mongoose.models.IpLog || mongoose.model("IpLog", ipLogSchema);
