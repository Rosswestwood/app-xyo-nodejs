/* eslint-disable @typescript-eslint/no-explicit-any */
import { prompt } from 'enquirer'

export class Wizard {
  protected prompt = prompt

  public async start(): Promise<any> {
    return {
      name: 'Unknown'
    }
  }
}
