//* Symmetric Encryption

const { randomBytes, createDecipheriv, createCipheriv } = require("crypto");

/// Cipher

const message = "i like turtles";
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key, iv);

/// Encrypt

const encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");

console.log(encryptedMessage);

/// Decrypt

const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf-8");

console.log(decryptedMessage);
