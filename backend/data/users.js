import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'mohamadanas0501@gmail.com',
        password: bcrypt.hashSync('12345678',10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('12345678',10),
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('12345678',10),
        isAdmin: false,
    }
];


export default users;