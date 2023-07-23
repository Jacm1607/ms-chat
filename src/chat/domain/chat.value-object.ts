import { v4 as uuid } from 'uuid';
import { ChatEntity } from './chat.entity';

export class ChatValueObject implements ChatEntity {
  uuid: string;
  guestId: number;
  hostId: number;
  name: string;
  timestamp: Date;

  constructor({
    guestId,
    hostId,
    name,
  }: {
    guestId: number;
    hostId: number;
    name: string;
  }) {
    this.uuid = uuid();
    this.guestId = guestId;
    this.hostId = hostId;
    this.name = name;
    this.timestamp = new Date();
  }
}
