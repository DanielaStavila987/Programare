export const testUsers = [
    { username: 'user1', password: 'password123', email: 'valid.email@example.com' }, // valid
    { username: 'user2', password: 'password456', email: 'invalid-123' }, // invalid
    { username: 'user3', password: 'password789', email: 'user3@example.com' } // valid
  ];
  
  // Funcție de validare email
  export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  