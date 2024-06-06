export class Message {
  id: number | undefined;
  content: string | undefined;
  timestamp: Date | undefined;

  constructor(builder: MessageBuilder) {
    this.id = builder.Id;
    this.content = builder.Content;
    this.timestamp = builder.Timestamp;
  }
}

export class MessageBuilder {
  Id: number | undefined;
  Content: string | undefined;
  Timestamp: Date | undefined;

  setId(id: number): MessageBuilder {
    this.Id = id;
    return this;
  }

  setContent(content: string): MessageBuilder {
    this.Content = content;
    return this;
  }

  setTimestamp(timestamp: Date = new Date()): MessageBuilder {
    this.Timestamp = timestamp;
    return this;
  }

  build(): Message {
    return new Message(this);
  }
}