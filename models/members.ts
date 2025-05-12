import mongoose from "mongoose"

// Subitem schema definition
const MemberSchema = new mongoose.Schema(
  {
    networkId : {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "subitem"
    },
    id: {
      type: String,
      required: true,
    //   ref: String,
    },
    name: {
      type: String,
      required: true,
    },
    // label: String,
    // href: String,
    // slug: String,
    role: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      description: String,
    },
    department: {
      title: String,
      description: String,
    },
    location:{
        type: String,
        description: String,
    },
    skills:{
        type: String,
        description: String,
    },
    connection:{
        type: mongoose.Schema.Types.ObjectId,
        description: Array,
    },
    contributionScore:{
        type:  Number,
        description: Number,
    },
    joinedAt:{
        type: String,
        discription: Date,
    },
    status:{
        type: String,
        enum: ["active", "inactive", "pending"],
        default: "active",
    },
    bio: {
        type: String,
        description: String,
    },
    email: {
        type: String,
        description: String,
    },
    phone: {
        type: Number,
        description: Number,
    },
    socialLinks: {
        linkedin: {
            type: String,
            description: String,
        },
        twitter: {
            type: String,
            description: String,
        },
        github: {
            type: String,
            description: String,
        },
        website: {
            type: String,
            description: String,
        },
    },
    },
  { timestamps: true },
)

// Create the members model
const memberschema = mongoose.models.Member || mongoose.model("Member", MemberSchema)

// Export as both default and named export
export { memberschema }
export default memberschema
