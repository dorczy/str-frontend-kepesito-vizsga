import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: any;

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    this.movies = this.httpService.getMovieList();
  }

  deleteMovie(id: number): any {
    this.httpService.deleteMovie(id).subscribe(
      () => this.getMovies()
    );
  }

}
