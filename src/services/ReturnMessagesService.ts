import prismaClient from "../prisma";

class ReturnMessagesService {
  async execute(user_id: string) {

    const messages = await prismaClient.message.findMany({
      where: {
        user_id: user_id,
      },
      take: 10,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        user: true,
      }
    });

    return messages;
  }
}

export { ReturnMessagesService }
