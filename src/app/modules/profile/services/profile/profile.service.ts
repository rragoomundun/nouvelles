import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userId: number;
  articlesNbPages: number;
  discussionsNbPages: number;
  messagesNbPages: number;

  constructor() {}
}
