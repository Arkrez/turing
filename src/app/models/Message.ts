export class Message {
  constructor(id: number, content: string, timestamp?: Date) {
    this.id = id;
    this.content = content;

    if (!timestamp) {
      this.timestamp = new Date();
      this.timestamp.getDate();
    } else {
      this.timestamp = timestamp;
    }
  }
  id: number | undefined;
  content: string | undefined;
  timestamp: Date | undefined;
}