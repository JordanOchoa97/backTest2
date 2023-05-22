const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        avatar: {
            type: String,
            default: 'http://image.com'
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String
        },
        token: {
            type: String,
            unique: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export default model('user', UserScheme)