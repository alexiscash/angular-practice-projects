import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      name: 'The House of Morgan: An American Banking Dynasty and the Rise of Modern Finance',
      isbn: '978-0802144652',
      author: 'Ron Chernow',
      copyright: 2010,
    },
    {
      id: 2,
      name: 'The Greatest-Ever Bank Robbery: The Collapse of the Savings and Loan Industry',
      isbn: '978-0684191522',
      author: 'Martin Mayer',
      copyright: 1990,
    },
    {
      id: 3,
      name: 'The End of Banking: Money, Credit, and the Digital Revolution',
      isbn: '978-3952438510',
      author: 'Jonathan McMillan',
      copyright: 2010,
    },
    {
      id: 4,
      name: 'McColl: The Man with Americas Money',
      isbn: '978-1563525391',
      author: 'Ross Yockey',
      copyright: 1999,
    },
  ];

  constructor() {}

  public getBooks(): any {
    const booksObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.books);
      }, 10000);
    });

    return booksObservable;
  }
}
