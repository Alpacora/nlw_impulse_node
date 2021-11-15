import { Request, Response } from 'express';
import { ReturnMessagesService } from '../services/ReturnMessagesService';

class ReturnMessagesController {
  async handle(Request: Request, response: Response) {
    const { user_id } = Request.params;

    const service = new ReturnMessagesService();

    const result = await service.execute(user_id);

    response.json(result);
  }
}

export { ReturnMessagesController }
