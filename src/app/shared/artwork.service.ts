import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArtworkService {
  private readonly url = 'assets/artwork-manifest.json';

  // cache the manifest so multiple components don’t refetch
  private readonly artworkManifest$: Observable<string[]> = this.http.get<string[]>(this.url).pipe(
    map(list => Array.isArray(list) ? list : []),
    catchError(() => of([])),
    shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  getAll(): Observable<string[]> {
    return this.artworkManifest$;
  }

  getLatest(n = 1): Observable<string[]> {
    return this.artworkManifest$.pipe(map(arr => arr.slice(0, n)));
  }

  getLatestOne(): Observable<string | null> {
    return this.artworkManifest$.pipe(map(arr => arr[0] ?? null));
  }
}
