// src/api/email.js
import { post } from './apiClient';

export function sendEmail(payload) {
    return post('send-email', payload);
}