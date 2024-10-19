'use client';

import CryptoJS from 'crypto-js';

const secretKey = 'fjaiklgygcjofrvw';

export function encryptData(data: string) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

export function decryptData(encryptedData: string) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
