export class MessageDetails {
  constructor(
    public msg: string,
    public from: string,
    public to: string,
    public imageUrl: string,
  ) {}
}

export interface IMessage {
  details: MessageDetails;
}
