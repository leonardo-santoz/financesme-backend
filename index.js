const { prisma } = require('./generated/prisma-client')

async function main() {
    await prisma.createUser({
        name: 'Leonardo Santos',
        email: 'leonardo@gmail.com',
        password: '123456'
    })

    const users = await prisma.users()

    console.log('users', users)
}

main().catch(e => console.error(e))