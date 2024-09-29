import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
     
    },

    TourName:{
     type:String,
     required:true
    },
    Fullname: {
      type: String,
      required: true,
    },
    Guestsize:{
        type:Number,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Bookat:{
        type:Date,
        required:true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);