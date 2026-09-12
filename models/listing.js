const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");
const { required } = require("joi");
const { coordinates } = require("@maptiler/client");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        url: String,
        filename: String,
    },
    category: {
        type: String,
        enum: ["Trending","Rooms" ,"Iconic Cities" ,"Mountains" ,"Castles" ,"Amazing Pools" ,"Camping" ,"Farms" ,"Arctic" ,"Domes" ,"Boats" ,"Beaches","Others"],
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required:true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
});

listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;