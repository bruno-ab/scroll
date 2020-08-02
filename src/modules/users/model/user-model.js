import { Schema } from 'mongoose'

export default {
//   challenge: {
//     type: Schema.Types.ObjectId,
//     ref: 'challenges',
//     required: true,
//     index: true
//   },
  name: {
    type: String,
    required: true
  },
  fullName: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
  },
  password: { type: String, minlength: [6, 'A senha deve conter no mínimo 6 digitos'] },
  isActive: { type: Boolean, default: true },
  phone: { type: String, unique: true, required: true, index: true, set: unFormat },
}
