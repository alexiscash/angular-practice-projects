import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'books';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    const booksObservable = this.bookService.getBooks();
    booksObservable.subscribe((booksData: Book[]) => {
      this.books = booksData;
    });
  }
}
