import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, SALT);
}

export function comparePassword(passwordFromInput: string, existingPassword: string){
return bcrypt.compareSync(passwordFromInput, existingPassword)
}
